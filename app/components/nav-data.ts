export interface NavItem { label: string; href: string }

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "#contact" },
];

export function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

function isHomePage() {
  return window.location.pathname === "/";
}

export function handleHashNav(href: string) {
  if (isHomePage()) {
    scrollTo(href);
  } else {
    window.location.href = "/" + href;
  }
}
