export const SITE = {
  name: "Special Events Channel",
  short: "SEC",
  tagline: "Where Experiences Become Influence",
  description:
    "Special Events Channel is a premium experiential media platform — covering conferences, hospitality, sponsorships, executive interviews, and luxury events.",
  emails: ["info@renaissanceevents.com", "info@specialeventschannel.com"],
} as const;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/contact", label: "Contact" },
] as const;
