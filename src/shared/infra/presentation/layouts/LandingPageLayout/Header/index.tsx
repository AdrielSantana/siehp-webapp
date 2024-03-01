import Image from "next/image";
import completeSIEHPLogoImg from "@/shared/infra/presentation/assets/images/complete_siehp_logo.png";
import {
  LANDING_PAGE_NAVBAR_LINKS,
  PAGES,
} from "@/shared/infra/utils/constants";
import Link from "next/link";
import { PagesEnum } from "@/shared/infra/utils/types";

const Header = () => {
  const navbarLinkKeys = Object.keys(PAGES).filter((page) => {
    return LANDING_PAGE_NAVBAR_LINKS.includes(page as PagesEnum);
  }) as PagesEnum[];

  const navbarLinks = navbarLinkKeys.map((link) => {
    return PAGES[link];
  });

  return (
    <header>
      <Link href={PAGES.HOME_PAGE.link}>
        <Image
          src={completeSIEHPLogoImg.src}
          alt="SIEHP. Sistema Integrado de Ensino à Histologia e Patologia. Logo completo."
          height={completeSIEHPLogoImg.height}
          width={completeSIEHPLogoImg.width}
        />
      </Link>
      <nav>
        <ul>
          {navbarLinks.map((navbarLink, idx) => {
            const { label, link } = navbarLink;
            return (
              <li key={`${link}-${idx}`}>
                <Link href={link}>{label}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
