// Navigation data - Edit here to update menu everywhere
const navbarLinks = [
  {
    title: "← Back to home",
    url: "https://naviplus.io/",
    target: "_blank"
  },
  {
    title: "Demo",
    dropdown: true,
    children: [
      {
        title: "Live demo (Navi+ 1Click)",
        url: "https://naviplus.io/demo/",
        target: "_blank"
      },
      { divider: true },
      {
        title: "Case studies",
        url: "https://naviplus.io/demo/case-study",
        target: "_blank"
      },
      {
        title: "Dawn demos",
        url: "https://naviplus.io/demo/dawn",
        target: "_blank"
      },
      {
        title: "Other demos",
        url: "https://naviplus.io/demo/others",
        target: "_blank"
      }
    ]
  },
  {
    title: "Pricing",
    url: "https://naviplus.io/pricing",
    target: "_blank"
  },
  {
    title: "User Guide",
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
    title: "Language",
    dropdown: true,
    children: [
      {
        title: "🇬🇧 English",
        url: typeof window !== 'undefined' ? window.location.href : '/'
      },
      { divider: true },
      {
        title: "🇫🇷 French",
        url: "https://translate.google.com/translate?sl=en&tl=fr&u=" + (typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : ''),
        target: "_blank"
      },
      {
        title: "🇩🇪 German",
        url: "https://translate.google.com/translate?sl=en&tl=de&u=" + (typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : ''),
        target: "_blank"
      },
      {
        title: "🇨🇳 Chinese (Simplified)",
        url: "https://translate.google.com/translate?sl=en&tl=zh-CN&u=" + (typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : ''),
        target: "_blank"
      },
      {
        title: "🇯🇵 Japanese",
        url: "https://translate.google.com/translate?sl=en&tl=ja&u=" + (typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : ''),
        target: "_blank"
      },
      {
        title: "🇮🇹 Italian",
        url: "https://translate.google.com/translate?sl=en&tl=it&u=" + (typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : ''),
        target: "_blank"
      },
      {
        title: "🇧🇷 Portuguese (Brazil)",
        url: "https://translate.google.com/translate?sl=en&tl=pt&u=" + (typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : ''),
        target: "_blank"
      },
      {
        title: "🇪🇸 Spanish",
        url: "https://translate.google.com/translate?sl=en&tl=es&u=" + (typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : ''),
        target: "_blank"
      },
      { divider: true },
      {
        title: "🌐 More languages...",
        url: "https://translate.google.com/?sl=en&tl=auto&op=translate&u=" + (typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : ''),
        target: "_blank"
      }
    ]
  }
];

// CTA button configuration
const navbarCTA = {
  text: "Get started for free",
  url: "https://naviplus.io/#get-started-for-free",
  target: "_blank",
  class: "btn btn-primary btn-sm"
};
