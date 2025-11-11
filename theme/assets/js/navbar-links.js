const navbarLinks = [
  {
    title: "Live demo",
    url: "https://naviplus.io/demo",
    external: true
  },
  {
    title: "Case studies",
    url: "#",
    external: false,
    children: [
      {
        title: "Dawn 4",
        url: "https://naviplus.io/case-studies/#dawn4",
        external: true
      },
      {
        title: "Others 6",
        url: "https://naviplus.io/case-studies/#others6",
        external: true
      }
    ]
  },
  {
    title: "User Guide",
    url: "/",
    external: false,
    active: true
  },
  {
    title: "Pricing",
    url: "https://naviplus.io/pricing",
    external: true
  },
  {
    title: "Install Navi+",
    url: "#",
    external: false,
    children: [
      {
        title: "Shopify App",
        url: "https://apps.shopify.com/pronavi-navigation-design",
        external: true
      },
      {
        title: "For all platforms",
        url: "https://dash.naviplus.app/naviplus/authen/authen.php?action=login",
        external: true
      }
    ]
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
