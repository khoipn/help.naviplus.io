// Navigation data - Edit here to update menu everywhere
const languageRoutes = [
  { code: "en", label: "🇬🇧 English", short: "EN", prefix: "" },
  { code: "vi", label: "🇻🇳 Tiếng Việt", short: "VI", prefix: "vi" },
  { code: "fr", label: "🇫🇷 Français", short: "FR", prefix: "fr" },
  { code: "de", label: "🇩🇪 Deutsch", short: "DE", prefix: "de" },
  { code: "zh-CN", label: "🇨🇳 中文", short: "ZH", prefix: "zh-cn" },
  { code: "ja", label: "🇯🇵 日本語", short: "JA", prefix: "jp" },
  { code: "it", label: "🇮🇹 Italiano", short: "IT", prefix: "it" },
  { code: "pt-BR", label: "🇧🇷 Português", short: "PT", prefix: "pt-br" },
  { code: "es", label: "🇪🇸 Español", short: "ES", prefix: "es" },
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
  const match =
    languageRoutes.find((lang) => lang.prefix === prefix) || languageRoutes[0];
  return match ? `🌐 ${match.short}` : "🌐 EN";
};

const uiTranslations = {
  "": {
    home: "Home",
    features: "Features",
    demo: "Demo",
    pricing: "Pricing",
    userGuide: "User Guide",
    tools: "Tools",
    language: "Language",
    getStartedForFree: "Get started",
    navTypes: "Navigation types",
    tabBar: "Tab Bar",        tabBarDesc: "Fixed bottom navigation for mobile, like a native app",
    megaMenu: "Mega Menu",    megaMenuDesc: "Rich dropdown with columns, images and links",
    slideMenu: "Slide Menu",  slideMenuDesc: "Smooth slide panel, multi-level navigation",
    stickyNavbar: "Sticky Navbar", stickyNavbarDesc: "Always visible when visitors scroll",
    fabMenu: "FAB / Floating Menu", fabMenuDesc: "Quick floating button for main actions",
    gridMenu: "Grid Menu",    gridMenuDesc: "Visual image grid for product categories",
    whyNavi: "Why Navi+?",
    commonQuestions: "First-time FAQs",
    howToInstall: "How to install Navi+",
  },
  vi: {
    home: "Trang chủ",
    features: "Tính năng",
    demo: "Demo",
    pricing: "Bảng giá",
    userGuide: "Hướng dẫn sử dụng",
    tools: "Công cụ",
    language: "Ngôn ngữ",
    getStartedForFree: "Bắt đầu miễn phí",
    navTypes: "Các loại điều hướng",
    tabBar: "Tab Bar",        tabBarDesc: "Thanh điều hướng dưới cùng cố định cho mobile, như một ứng dụng gốc",
    megaMenu: "Mega Menu",    megaMenuDesc: "Menu thả xuống phong phú với cột, hình ảnh và liên kết",
    slideMenu: "Slide Menu",  slideMenuDesc: "Bảng trượt mượt mà, điều hướng đa cấp",
    stickyNavbar: "Sticky Navbar", stickyNavbarDesc: "Luôn hiển thị khi khách truy cập cuộn trang",
    fabMenu: "FAB / Floating Menu", fabMenuDesc: "Nút nổi nhanh chóng để truy cập các hành động chính",
    gridMenu: "Grid Menu",    gridMenuDesc: "Lưới hình ảnh trực quan cho danh mục sản phẩm",
    whyNavi: "Tại sao Navi+?",
    commonQuestions: "Câu hỏi thường gặp lần đầu",
    howToInstall: "Cách cài đặt Navi+",
  },
  fr: {
    home: "Accueil",
    features: "Fonctionnalités",
    demo: "Démo",
    pricing: "Tarifs",
    userGuide: "Guide",
    tools: "Outils",
    language: "Langue",
    getStartedForFree: "Commencer gratuitement",
    navTypes: "Types de navigation",
    tabBar: "Tab Bar",        tabBarDesc: "Navigation bas de page fixe pour mobile",
    megaMenu: "Mega Menu",    megaMenuDesc: "Menu déroulant riche avec colonnes et images",
    slideMenu: "Slide Menu",  slideMenuDesc: "Panneau coulissant fluide, navigation multi-niveaux",
    stickyNavbar: "Sticky Navbar", stickyNavbarDesc: "Toujours visible lors du défilement",
    fabMenu: "FAB / Floating Menu", fabMenuDesc: "Bouton flottant rapide pour les actions principales",
    gridMenu: "Grid Menu",    gridMenuDesc: "Grille d’images pour les catégories de produits",
    whyNavi: "Pourquoi Navi+?",
    commonQuestions: "FAQ débutants",
    howToInstall: "Comment installer Navi+",
  },
  de: {
    home: "Startseite",
    features: "Funktionen",
    demo: "Demo",
    pricing: "Preise",
    userGuide: "Handbuch",
    tools: "Tools",
    language: "Sprache",
    getStartedForFree: "Kostenlos starten",
    navTypes: "Navigationstypen",
    tabBar: "Tab Bar",        tabBarDesc: "Feste untere Navigation für Mobilgeräte",
    megaMenu: "Mega Menu",    megaMenuDesc: "Reiches Dropdown mit Spalten und Bildern",
    slideMenu: "Slide Menu",  slideMenuDesc: "Glatter Schiebepanel, mehrstufige Navigation",
    stickyNavbar: "Sticky Navbar", stickyNavbarDesc: "Immer sichtbar beim Scrollen",
    fabMenu: "FAB / Floating Menu", fabMenuDesc: "Schnelle schwebende Schaltfläche",
    gridMenu: "Grid Menu",    gridMenuDesc: "Visuelles Bildraster für Produktkategorien",
    whyNavi: "Warum Navi+?",
    commonQuestions: "Häufige Fragen",
    howToInstall: "Navi+ installieren",
  },
  "zh-cn": {
    home: "首页",
    features: "功能",
    demo: "演示",
    pricing: "价格",
    userGuide: "使用指南",
    tools: "工具",
    language: "语言",
    getStartedForFree: "免费开始",
    navTypes: "导航类型",
    tabBar: "Tab Bar",        tabBarDesc: "固定底部导航，如原生应用",
    megaMenu: "Mega Menu",    megaMenuDesc: "带有列、图像和链接的丰富下拉菜单",
    slideMenu: "Slide Menu",  slideMenuDesc: "流畅滑动面板，多级导航",
    stickyNavbar: "Sticky Navbar", stickyNavbarDesc: "访客滚动时始终可见",
    fabMenu: "FAB / Floating Menu", fabMenuDesc: "快速浮动按钮用于主要操作",
    gridMenu: "Grid Menu",    gridMenuDesc: "产品分类的视觉图像网格",
    whyNavi: "为什么选择 Navi+？",
    commonQuestions: "常见问题",
    howToInstall: "如何安装 Navi+",
  },
  jp: {
    home: "ホーム",
    features: "機能",
    demo: "デモ",
    pricing: "料金",
    userGuide: "ガイド",
    tools: "ツール",
    language: "言語",
    getStartedForFree: "無料で始める",
    navTypes: "ナビゲーションタイプ",
    tabBar: "Tab Bar",        tabBarDesc: "モバイル向け固定ボトムナビゲーション",
    megaMenu: "Mega Menu",    megaMenuDesc: "カラムと画像付きの豊富なドロップダウン",
    slideMenu: "Slide Menu",  slideMenuDesc: "スムーズなスライドパネル、多段ナビ",
    stickyNavbar: "Sticky Navbar", stickyNavbarDesc: "スクロール中も常に表示",
    fabMenu: "FAB / Floating Menu", fabMenuDesc: "主要アクションへのクイックフローティングボタン",
    gridMenu: "Grid Menu",    gridMenuDesc: "製品カテゴリの視覚的な画像グリッド",
    whyNavi: "なぜ Navi+？",
    commonQuestions: "よくある質問",
    howToInstall: "Navi+ のインストール方法",
  },
  it: {
    home: "Home",
    features: "Funzionalità",
    demo: "Demo",
    pricing: "Prezzi",
    userGuide: "Guida",
    tools: "Strumenti",
    language: "Lingua",
    getStartedForFree: "Inizia gratis",
    navTypes: "Tipi di navigazione",
    tabBar: "Tab Bar",        tabBarDesc: "Navigazione inferiore fissa per mobile",
    megaMenu: "Mega Menu",    megaMenuDesc: "Dropdown ricco con colonne e immagini",
    slideMenu: "Slide Menu",  slideMenuDesc: "Pannello scorrevole fluido, navigazione multi-livello",
    stickyNavbar: "Sticky Navbar", stickyNavbarDesc: "Sempre visibile durante lo scorrimento",
    fabMenu: "FAB / Floating Menu", fabMenuDesc: "Pulsante flottante rapido per le azioni principali",
    gridMenu: "Grid Menu",    gridMenuDesc: "Griglia visiva per le categorie di prodotti",
    whyNavi: "Perché Navi+?",
    commonQuestions: "Domande frequenti",
    howToInstall: "Come installare Navi+",
  },
  "pt-br": {
    home: "Início",
    features: "Recursos",
    demo: "Demonstração",
    pricing: "Preços",
    userGuide: "Guia",
    tools: "Ferramentas",
    language: "Idioma",
    getStartedForFree: "Começar grátis",
    navTypes: "Tipos de navegação",
    tabBar: "Tab Bar",        tabBarDesc: "Navegação inferior fixa para mobile",
    megaMenu: "Mega Menu",    megaMenuDesc: "Dropdown rico com colunas e imagens",
    slideMenu: "Slide Menu",  slideMenuDesc: "Painel deslizante suave, navegação multinível",
    stickyNavbar: "Sticky Navbar", stickyNavbarDesc: "Sempre visível durante a rolagem",
    fabMenu: "FAB / Floating Menu", fabMenuDesc: "Botão flutuante rápido para ações principais",
    gridMenu: "Grid Menu",    gridMenuDesc: "Grade de imagens para categorias de produtos",
    whyNavi: "Por que Navi+?",
    commonQuestions: "Perguntas frequentes",
    howToInstall: "Como instalar o Navi+",
  },
  es: {
    home: "Inicio",
    features: "Características",
    demo: "Demo",
    pricing: "Precios",
    userGuide: "Guía",
    tools: "Herramientas",
    language: "Idioma",
    getStartedForFree: "Empezar gratis",
    navTypes: "Tipos de navegación",
    tabBar: "Tab Bar",        tabBarDesc: "Navegación inferior fija para móvil",
    megaMenu: "Mega Menu",    megaMenuDesc: "Desplegable rico con columnas e imágenes",
    slideMenu: "Slide Menu",  slideMenuDesc: "Panel deslizante fluido, navegación multinivel",
    stickyNavbar: "Sticky Navbar", stickyNavbarDesc: "Siempre visible al desplazarse",
    fabMenu: "FAB / Floating Menu", fabMenuDesc: "Botón flotante rápido para acciones principales",
    gridMenu: "Grid Menu",    gridMenuDesc: "Cuadrícula visual para categorías de productos",
    whyNavi: "¿Por qué Navi+?",
    commonQuestions: "Preguntas frecuentes",
    howToInstall: "Cómo instalar Navi+",
  },
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

  // If we're on a home page (no /docs/ in path), go to the lang home
  if (!basePath.includes("/docs/")) {
    if (!targetPrefix) return "/home/";
    return `/${targetPrefix}/home/`;
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
      url: resolveLanguageUrl(lang.prefix),
    });
    if (index === 0) children.push({ divider: true });
  });
  return children;
})();

const resolveLangUrl = (path) => {
  const prefix = getCurrentLangPrefix();
  return prefix ? `/${prefix}${path}` : path;
};

const featureMegaItems = [
  { icon: "ri-layout-bottom-2-line", key: "tabBar",      path: "/features/tab-bar/" },
  { icon: "ri-layout-masonry-line",  key: "megaMenu",    path: "/features/mega-menu/" },
  { icon: "ri-side-bar-line",        key: "slideMenu",   path: "/features/slide-menu/" },
  { icon: "ri-layout-top-line",      key: "stickyNavbar",path: "/features/sticky-navbar/" },
  { icon: "ri-flashlight-line",      key: "fabMenu",     path: "/features/fab-menu/" },
  { icon: "ri-grid-line",            key: "gridMenu",    path: "/features/grid-menu/" },
];

const navbarLinks = (() => [
  {
    title: t("home"),
    url: "https://naviplus.io" + resolveLangUrl("/"),
  },
  {
    title: t("features"),
    mega: true,
    megaWidth: 560,
    megaHeader: t("navTypes"),
    children: featureMegaItems.map((item) => ({
      icon: item.icon,
      title: t(item.key),
      desc: t(item.key + "Desc"),
      url: "https://naviplus.io" + resolveLangUrl(item.path),
    })),
  },
  {
    title: t("pricing"),
    url: "https://naviplus.io" + resolveLangUrl("/pricing"),
  },
  {
    title: t("userGuide"),
    dropdown: true,
    children: [
      {
        icon: "ri-book-2-line",
        iconColor: "#377e62",
        title: t("whyNavi"),
        url: "https://help.naviplus.io" + resolveLangUrl("/"),
      },
      {
        icon: "ri-question-answer-line",
        title: t("commonQuestions"),
        url: "https://help.naviplus.io" + resolveLangUrl("/docs/resources/common-questions/"),
      },
      { divider: true },
      {
        icon: "ri-rocket-line",
        title: t("howToInstall"),
        url: "https://help.naviplus.io" + resolveLangUrl("/docs/getting-started/"),
      },
    ],
  },
  {
    title: t("tools"),
    url: "https://tools.naviplus.io/",
  },
])();

const navbarLanguage = {
  title: getCurrentLanguageLabel(),
  dropdown: true,
  children: languageDropdownChildren,
};

// CTA button configuration
const navbarCTA = {
  text: t("getStartedForFree"),
  url: "https://naviplus.io/#get-started-for-free",
};

const navbarCTADemo = {
  text: "See demo",
  url: "https://showcase.naviplus.io/",
};
