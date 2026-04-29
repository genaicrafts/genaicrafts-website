export const company = {
  legalName: "GEN AICRAFTS LLC",
  shortName: "GEN AICRAFTS",
  tagline: "We build mobile apps that turn studying into something you actually finish.",
  description:
    "GEN AICRAFTS LLC is an independent studio building education apps for high-stakes tests. Our flagship app, Permitly, is a DMV permit prep app for iOS and Android.",
  state: "Illinois",
  formedYear: 2026,
  ilFileNumber: "17972952",
  manager: "LI PEIQUAN",

  domain: "genaicrafts.com",
  websiteUrl: "https://www.genaicrafts.com",

  address: {
    line1: "119 S Western Ave Unit 1 # 661",
    cityStateZip: "Chicago, IL 60612",
    country: "USA",
    full: "119 S Western Ave Unit 1 # 661, Chicago, IL 60612",
  },

  phone: {
    display: "+1 (312) 883-2120",
    href: "+13128832120",
  },

  emails: {
    legal: "legal@genaicrafts.com",
    support: "support@genaicrafts.com",
    privacy: "privacy@genaicrafts.com",
    billing: "billing@genaicrafts.com",
    hello: "hello@genaicrafts.com",
  },

  effectiveDate: "2026-04-29",

  product: {
    name: "Permitly",
    blurb: "A DMV permit prep app that makes studying for the written test less painful.",
    status: "Coming Soon — 2026",
    productSiteText: "dmvpermitly.com",
  },
} as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/apps", label: "Apps" },
  { href: "/contact", label: "Contact" },
] as const;
