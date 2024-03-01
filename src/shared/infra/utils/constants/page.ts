import { PageInterface, PagesEnum } from "../types";

export const PAGES: {
  [key in PagesEnum]: PageInterface;
} = {
  HOME_PAGE: {
    label: "Home",
    link: "/",
  },
  HELP: {
    label: "Ajuda",
    link: "/help",
  },
};

export const LANDING_PAGE_NAVBAR_LINKS: (keyof typeof PagesEnum)[] = [];
