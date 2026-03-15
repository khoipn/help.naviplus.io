// Navigation data - Edit here to update menu everywhere
const languageRoutes = [
  { code: "en", label: "🇬🇧 English", prefix: "" },
  { code: "vi", label: "🇻🇳 Vietnamese", prefix: "vi" },
  { code: "fr", label: "🇫🇷 French", prefix: "fr" },
  { code: "de", label: "🇩🇪 German", prefix: "de" },
  { code: "zh-CN", label: "🇨🇳 Chinese (Simplified)", prefix: "zh-cn" },
  { code: "ja", label: "🇯🇵 Japanese", prefix: "jp" },
  { code: "it", label: "🇮🇹 Italian", prefix: "it" },
  { code: "pt-BR", label: "🇧🇷 Portuguese (Brazil)", prefix: "pt-br" },
  { code: "es", label: "🇪🇸 Spanish", prefix: "es" }
];

const getCurrentLangPrefix = () => {
  if (typeof window === "undefined") return "";
  const pathname = window.location.pathname || "/";
  for (const lang of languageRoutes) {
    if (!lang.prefix) continue;
    if (pathname.startsWith(`/${lang.prefix}/`)) return lang.prefix;
  }
  return "";
};

const getCurrentLanguageLabel = () => {
  const prefix = getCurrentLangPrefix();
  const match = languageRoutes.find((lang) => lang.prefix === prefix) || languageRoutes[0];
  return match ? match.label : "🇬🇧 English";
};

const uiTranslations = {
  "": {
    backToHome: "← Back to home",
    demo: "Demo",
    pricing: "Pricing",
    userGuide: "User Guide",
    tools: "Tools",
    language: "Language",
    getStartedForFree: "Get started for free"
  },
  "vi": {
    backToHome: "← Về trang chủ",
    demo: "Demo",
    pricing: "Bảng giá",
    userGuide: "Hướng dẫn",
    tools: "Công cụ",
    language: "Ngôn ngữ",
    getStartedForFree: "Bắt đầu miễn phí"
  },
  "fr": {
    backToHome: "← Retour à l’accueil",
    demo: "Démo",
    pricing: "Tarifs",
    userGuide: "Guide",
    tools: "Outils",
    language: "Langue",
    getStartedForFree: "Commencer gratuitement"
  },
  "de": {
    backToHome: "← Zur Startseite",
    demo: "Demo",
    pricing: "Preise",
    userGuide: "Handbuch",
    tools: "Tools",
    language: "Sprache",
    getStartedForFree: "Kostenlos starten"
  },
  "zh-cn": {
    backToHome: "← 返回首页",
    demo: "演示",
    pricing: "价格",
    userGuide: "使用指南",
    tools: "工具",
    language: "语言",
    getStartedForFree: "免费开始"
  },
  "jp": {
    backToHome: "← ホームへ戻る",
    demo: "デモ",
    pricing: "料金",
    userGuide: "ガイド",
    tools: "ツール",
    language: "言語",
    getStartedForFree: "無料で始める"
  },
  "it": {
    backToHome: "← Torna alla home",
    demo: "Demo",
    pricing: "Prezzi",
    userGuide: "Guida",
    tools: "Strumenti",
    language: "Lingua",
    getStartedForFree: "Inizia gratis"
  },
  "pt-br": {
    backToHome: "← Voltar para a home",
    demo: "Demonstração",
    pricing: "Preços",
    userGuide: "Guia",
    tools: "Ferramentas",
    language: "Idioma",
    getStartedForFree: "Começar grátis"
  },
  "es": {
    backToHome: "← Volver al inicio",
    demo: "Demo",
    pricing: "Precios",
    userGuide: "Guía",
    tools: "Herramientas",
    language: "Idioma",
    getStartedForFree: "Empezar gratis"
  }
};

const t = (key) => {
  const prefix = getCurrentLangPrefix();
  const dict = uiTranslations[prefix] || uiTranslations[""];
  return dict[key] || uiTranslations[""][key] || key;
};

const ensureTrailingSlash = (path) => {
  if (!path) return "/";
  return path.endsWith("/") ? path : path + "/";
};

const getBasePathWithoutLangPrefix = (pathname) => {
  const clean = ensureTrailingSlash(pathname || "/");
  for (const lang of languageRoutes) {
    if (!lang.prefix) continue;
    const prefix = `/${lang.prefix}/`;
    if (clean.startsWith(prefix)) return "/" + clean.slice(prefix.length);
  }
  return clean;
};

const resolveLanguageUrl = (targetPrefix) => {
  if (typeof window === "undefined") return "/";

  const pathname = window.location.pathname || "/";
  let basePath = getBasePathWithoutLangPrefix(pathname);

  if (!basePath.includes("/docs/")) {
    basePath = "/docs/getting-started/";
  }

  basePath = ensureTrailingSlash(basePath);

  if (!targetPrefix) return basePath;
  return `/${targetPrefix}${basePath}`;
};

const languageDropdownChildren = (() => {
  const children = [];
  languageRoutes.forEach((lang, index) => {
    children.push({
      title: lang.label,
      url: resolveLanguageUrl(lang.prefix)
    });
    if (index === 0) children.push({ divider: true });
  });
  return children;
})();

const navbarLinks = (() => [
  {
    title: t("backToHome"),
    url: "https://naviplus.io/"
  },
  {
    title: t("demo"),
    dropdown: true,
    children: [
      {
        title: "Live demo (Navi+ 1Click)",
        url: "https://naviplus.io/demo/"
      },
      { divider: true },
      {
        title: "Case studies",
        url: "https://naviplus.io/demo/case-study"
      },
      {
        title: "Dawn demos",
        url: "https://naviplus.io/demo/dawn"
      },
      {
        title: "Other demos",
        url: "https://naviplus.io/demo/others"
      }
    ]
  },
  {
    title: t("pricing"),
    url: "https://naviplus.io/pricing"
  },
  {
    title: t("userGuide"),
    dropdown: true,
    activePage: "user-guide",
    children: [
      {
        title: "Home",
        url: "/",
        active: true
      },
      { divider: true },
      {
        title: "Getting Started",
        url: "/docs/getting-started/"
      },
      { divider: true },
      {
        title: "Explore common menus",
        url: "/docs/usage/explore-common-menus/"
      },
      {
        title: "Tabbar",
        url: "/docs/usage/tabbar-bottom-navigation/how-to-use/"
      },
      {
        title: "Mega Menu",
        url: "/docs/usage/mega-menu-desktop/how-to-use/"
      },
      {
        title: "Slide (Hamburger) Menu",
        url: "/docs/usage/slide-menu-hamburger-menu/how-to-use/"
      },
      {
        title: "FAB - Floating Menu",
        url: "/docs/usage/fab-floating-menu-quick-access/how-to-use/"
      },
      {
        title: "Grid Menu",
        url: "/docs/usage/grid-menu/how-to-use/"
      }
    ]
  },
  {
    title: t("tools"),
    url: "https://tools.naviplus.io/"
  },
  {
    title: `${t("language")}: ${getCurrentLanguageLabel()}`,
    dropdown: true,
    children: languageDropdownChildren
  }
])();

// CTA button configuration
const navbarCTA = {
  text: t("getStartedForFree"),
  url: "https://naviplus.io/#get-started-for-free",
  class: "btn btn-primary btn-sm"
};
