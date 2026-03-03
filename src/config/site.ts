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
  // --- UI Labels ---
  // 這裡控制網站各個角落顯示的中文文字
  labels: {
    postsTitle: "技術筆記",
    postsDescription: "記錄開發過程中的踩坑經驗與生活點記",
    projectsTitle: "我的專案",
    projectsDescription: "將靈感轉化為代碼的實驗場。",
    friendsTitle: "技術夥伴",
    friendsDescription: "在網路世界中一起交流、學習的朋友們",
    toolsTitle: "工具箱",
    aboutTitle: "關於我",
    aboutDescription: "關於阿雪的開發故事與生活目標",
    backToPosts: "返回文章列表",
    goHome: "回到首頁",
    notFoundTitle: "哎呀！頁面迷路了",
    notFoundDescription:
      "您尋找的頁面可能已經移動或被刪除，請確認網址是否正確。",
    endOfPost: "— 完 —",
    tableOfContents: "文章目錄",
    searchPlaceholder: "搜尋文章、標籤或指令...",
    searchNavigate: "前往",
    commentSuccess: "留言已成功送出",
  },

  ogImage: "/og-image.png",
} as const;

export default site;
