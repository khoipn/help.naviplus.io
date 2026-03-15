(() => {
  const debounce = (fn, waitMs) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => fn(...args), waitMs);
    };
  };

  const normalizeText = (value) => {
    if (!value) return "";
    const lower = String(value).toLowerCase();
    try {
      return lower.normalize("NFD").replace(/\p{Diacritic}/gu, "");
    } catch {
      return lower;
    }
  };

  const countOccurrences = (haystack, needle) => {
    if (!needle) return 0;
    let count = 0;
    let startIndex = 0;
    while (true) {
      const index = haystack.indexOf(needle, startIndex);
      if (index === -1) return count;
      count += 1;
      startIndex = index + needle.length;
    }
  };

  const getElements = () => {
    const input = document.getElementById("siteSearchInput");
    const results = document.getElementById("siteSearchResults");
    const form = input ? input.closest("form[data-search-index-url]") : null;
    return { input, results, form };
  };

  const createResultItem = ({ title, url, description }) => {
    const a = document.createElement("a");
    a.className = "list-group-item list-group-item-action";
    a.href = url;

    const titleDiv = document.createElement("div");
    titleDiv.className = "navbar-search-result-title";
    titleDiv.textContent = title || url;

    a.appendChild(titleDiv);

    if (description) {
      const descDiv = document.createElement("div");
      descDiv.className = "navbar-search-result-desc";
      descDiv.textContent = description;
      a.appendChild(descDiv);
    }

    return a;
  };

  const renderResults = (resultsEl, matches) => {
    resultsEl.innerHTML = "";
    if (!matches.length) {
      resultsEl.classList.add("d-none");
      return;
    }

    const fragment = document.createDocumentFragment();
    matches.forEach((doc) => {
      fragment.appendChild(createResultItem(doc));
    });
    resultsEl.appendChild(fragment);
    resultsEl.classList.remove("d-none");
  };

  const hideResults = () => {
    const { results } = getElements();
    if (results) results.classList.add("d-none");
  };

  const loadIndexOnce = (() => {
    let loadingPromise = null;
    return (indexUrl) => {
      if (loadingPromise) return loadingPromise;
      loadingPromise = fetch(indexUrl, { credentials: "same-origin" })
        .then((res) => {
          if (!res.ok) throw new Error(`Failed to load search index: ${res.status}`);
          return res.json();
        })
        .then((items) => {
          if (!Array.isArray(items)) return [];
          return items
            .filter((item) => item && typeof item === "object")
            .map((item) => {
              const title = item.title || "";
              const url = item.url || "";
              const description = item.description || "";
              const content = item.content || "";
              const searchableTitle = normalizeText(title);
              const searchableContent = normalizeText(`${title} ${description} ${content}`);
              return {
                title,
                url,
                description,
                content,
                searchableTitle,
                searchableContent
              };
            })
            .filter((item) => item.url);
        })
        .catch(() => []);

      return loadingPromise;
    };
  })();

  const getCurrentLangPrefix = () => {
    const pathname = (typeof window !== "undefined" && window.location && window.location.pathname) || "/";
    const prefixes = ["vi", "jp", "fr", "de", "zh-cn", "it", "pt-br", "es"];
    for (const prefix of prefixes) {
      if (pathname.startsWith(`/${prefix}/`)) return prefix;
    }
    return "";
  };

  const filterDocsByLanguage = (docs) => {
    const prefix = getCurrentLangPrefix();
    if (!prefix) {
      const otherPrefixes = ["vi", "jp", "fr", "de", "zh-cn", "it", "pt-br", "es"];
      return docs.filter((doc) => {
        const url = doc.url || "";
        if (!url.startsWith("/docs/")) return false;
        for (const p of otherPrefixes) {
          if (url.startsWith(`/${p}/docs/`)) return false;
        }
        return true;
      });
    }

    return docs.filter((doc) => (doc.url || "").startsWith(`/${prefix}/docs/`));
  };

  const searchDocs = (docs, query) => {
    const normalized = normalizeText(query).trim();
    if (!normalized) return [];

    const tokens = normalized.split(/\s+/).filter(Boolean);
    const matches = [];

    const filteredDocs = filterDocsByLanguage(docs);

    for (const doc of filteredDocs) {
      const text = doc.searchableContent;
      let ok = true;
      let score = 0;

      for (const token of tokens) {
        if (!text.includes(token)) {
          ok = false;
          break;
        }
        score += countOccurrences(text, token);
        if (doc.searchableTitle.includes(token)) score += 20;
      }

      if (!ok) continue;

      if (doc.searchableTitle.includes(normalized)) score += 30;
      score += countOccurrences(doc.searchableTitle, normalized) * 20;
      matches.push({ doc, score });
    }

    matches.sort((a, b) => b.score - a.score);
    return matches.slice(0, 12).map((m) => ({
      title: m.doc.title,
      url: m.doc.url,
      description: m.doc.description
    }));
  };

  const setup = async () => {
    const { input, results, form } = getElements();
    if (!input || !results || !form) return;

    const indexUrl = form.getAttribute("data-search-index-url") || "/search.json";
    let docs = [];

    const ensureIndexLoaded = async () => {
      if (docs.length) return docs;
      docs = await loadIndexOnce(indexUrl);
      return docs;
    };

    const update = debounce(async () => {
      const value = input.value || "";
      const list = await ensureIndexLoaded();
      const matches = searchDocs(list, value);
      renderResults(results, matches);
    }, 120);

    input.addEventListener("input", update);
    input.addEventListener("focus", update);

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const first = results.querySelector("a[href]");
      if (first) window.location.href = first.getAttribute("href");
    });

    document.addEventListener("click", (e) => {
      if (form.contains(e.target)) return;
      hideResults();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") hideResults();
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setup);
  } else {
    setup();
  }
})();
