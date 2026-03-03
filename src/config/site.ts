const site = {
  // --- Site Metadata ---
  meta: {
    title: "Brandon的開發日誌",
    description: "紀錄一些工作上或是下班後的Side Project分享心得。",
    author: "Brandon",
    logo: "/logo.svg",
    ogImage: "/og-image.png",
    // HTML lang attribute, affects page language and date formatting
    // Options: "zh-CN", "en", "ja", etc.
    lang: "zh-TW",
  },

  // --- Navigation ---
  // subtitle: decorative label shown below the name (uppercase, small text)
  navigation: [
    { name: "首頁", subtitle: "Index", href: "/" },
    { name: "技術筆記", subtitle: "Blog", href: "/posts" },
    { name: "我的專案", subtitle: "Works", href: "/projects" },
    // { name: "Friends", subtitle: "Links", href: "/friends" },
    { name: "關於我", subtitle: "Me", href: "/about" },
  ],

  // --- Social Links ---
  social: [
    { name: "GitHub", href: "https://github.com/stageget", icon: "mdi:github" },
    { name: "Email", href: "qwerty821225@gmail.com", icon: "mdi:email" },
  ],

  // --- Homepage Hero ---
  hero: {
    greeting: "👋 Hello, I'm Brandon",
    // Supports HTML. Use <span class="font-medium text-foreground underline decoration-primary/30"> to highlight keywords
    description:
      "我是一名軟體工程師。<br />" +
      '目前正在開發  <span class="font-medium text-foreground underline decoration-primary/30">衣起記 (ios App)</span>。<br /><br />' +
      "這裡是我記錄技術踩坑與生活的地方。",
    cards: [
      {
        icon: "mdi:explore",
        label: "Status",
        value: "正在開發”衣起記“ios App。",
      },
      { icon: "mdi:location", label: "Location", value: "Taiwan" },
    ],
  },

  // --- Footer ---
  footer: {
    copyright: "© 2026 Brandon",
    builtWith: "Built with Astro",
  },

  // --- Comments ---
  comments: {
    enabled: false,
    provider: "artalk" as const,
    artalk: {
      server: "https://your-artalk-server.com",
    },
  },

  // --- Feature Toggles ---
  features: {
    search: true,
    rss: true,
  },

  // --- Tools Page Data ---
  tools: [
    { name: "development", items: ["VS Code", "Terminal", "Chrome", "Git"] },
    { name: "design", items: ["Figma"] },
  ],

  // --- UI Labels ---
  // Customize these values to change the text displayed on pages
  labels: {
    postsTitle: "Writing",
    postsDescription: "Notes, thoughts, and technical musings",
    projectsTitle: "Projects",
    projectsDescription: "Small tools built for fun or to solve real problems.",
    friendsTitle: "Friends",
    friendsDescription: "Like-minded folks around the web.",
    toolsTitle: "Stack",
    aboutTitle: "About",
    aboutDescription: "About this site and its author",
    backToPosts: "Back to posts",
    goHome: "Go Home",
    notFoundTitle: "Page not found",
    notFoundDescription:
      "The page you're looking for may have been removed or the link is broken.",
    endOfPost: "End of Post",
    tableOfContents: "Table of Contents",
    searchPlaceholder: "Search posts, tags, or commands...",
    searchNavigate: "Navigate",
    commentSuccess: "Comment submitted",
  },

  ogImage: "/og-image.png",
} as const;

export default site;
