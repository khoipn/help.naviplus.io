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
  }
];
