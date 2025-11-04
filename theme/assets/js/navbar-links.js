const navbarLinks = [
  {
    title: "Home",
    url: "{{ site.baseurl | relative_url }}/",
    external: false
  },
  {
    title: "Live demo",
    url: "https://naviplus.io/demo",
    external: true,
    children: [
      {
        title: "Link 1",
        url: "#link1",
        external: false
      },
      {
        title: "Link 2",
        url: "#link2",
        external: false
      }
    ]
  },
  {
    title: "Pricing",
    url: "https://naviplus.io/pricing",
    external: true
  },
  {
    title: "Free install Navi+",
    url: "https://naviplus.io/install",
    external: true
  },
  {
    title: "Translate",
    url: "#",
    external: false,
    children: [      
      {
        title: "🇫🇷 Français",
        url: "https://translate.google.com/translate?sl=auto&tl=fr&u=" + encodeURIComponent(window.location.href),
        external: true
      },
      {
        title: "🇩🇪 Deutsch",
        url: "https://translate.google.com/translate?sl=auto&tl=de&u=" + encodeURIComponent(window.location.href),
        external: true
      },
      {
        title: "🇨🇳 中文 (简体)",
        url: "https://translate.google.com/translate?sl=auto&tl=zh-CN&u=" + encodeURIComponent(window.location.href),
        external: true
      },
      {
        title: "🇯🇵 日本語",
        url: "https://translate.google.com/translate?sl=auto&tl=ja&u=" + encodeURIComponent(window.location.href),
        external: true
      },
      {
        title: "🇮🇹 Italiano",
        url: "https://translate.google.com/translate?sl=auto&tl=it&u=" + encodeURIComponent(window.location.href),
        external: true
      },
      {
        title: "🇧🇷 Português (Brasil)",
        url: "https://translate.google.com/translate?sl=auto&tl=pt&u=" + encodeURIComponent(window.location.href),
        external: true
      },
      {
        title: "🇪🇸 Español",
        url: "https://translate.google.com/translate?sl=auto&tl=es&u=" + encodeURIComponent(window.location.href),
        external: true
      },
      {
        title: "🇻🇳 Tiếng Việt",
        url: "https://translate.google.com/translate?sl=auto&tl=vi&u=" + encodeURIComponent(window.location.href),
        external: true
      },
      {
        title: "More languages...",
        url: "https://translate.google.com/?sl=auto&u=" + encodeURIComponent(window.location.href),
        external: true
      }
    ]
  }
];
