export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "NextUI",
  description: "Change the World with your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Stories",
      href: "/stories",
    },
    {
      label: "Gallery",
      href: "/gallery",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Privacy-Policy",
      href: "/privacy-policy",
    },
    {
      label: "Logout",
      href: "/logout",
    },
    {
      label: "Terms & Conditions",
      href: "/terms",
    },
  ],
  links: {
    twitter: "https://twitter.com/getnextui",
    facebook: "https://facebook.com",
    behance: "https://behance.com",
  },
};
