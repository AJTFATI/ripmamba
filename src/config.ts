
export const SITE = {
  website: process.env.SITE_URL ?? "https://ripmamba.pages.dev/",
  desc: "Everything, Everywhere, All at Once.",
  title: "Alexander J. Taylor",
  author: "Alexander J. Taylor",
  profile: "https://ripmamba.pages.dev/",
  ogImage: "ajt-headtest.svg",
  lightAndDarkMode: false,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/ajtfati/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "America/New_York", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
