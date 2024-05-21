"use client"

import Image from "next/image";
import completeSIEHPLogoImg from "@/shared/infra/presentation/assets/images/complete_siehp_logo.png";
import {
  LANDING_PAGE_NAVBAR_LINKS,
  PAGES,
} from "@/shared/infra/utils/constants";
import Link from "next/link";
import { PagesEnum } from "@/shared/infra/utils/types";
import { useState } from "react";

const Header = () => {
  const navbarLinkKeys = Object.keys(PAGES).filter((page) => {
    return LANDING_PAGE_NAVBAR_LINKS.includes(page as PagesEnum);
  }) as PagesEnum[];

  const navbarLinks = navbarLinkKeys.map((link) => {
    return PAGES[link];
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex flex-row items-center justify-between gap-3 bg-gray-700 px-2 py-1.5 md:px-4">
      <Link href={PAGES.HOME_PAGE.link}>
        <Image
          priority
          src={completeSIEHPLogoImg.src}
          alt="SIEHP. Sistema Integrado de Ensino à Histologia e Patologia. Logo completo."
          height={completeSIEHPLogoImg.height}
          width={completeSIEHPLogoImg.width}
        />
      </Link>
      {/* <nav className="hidden md:block">
        <ul className="flex flex-row gap-x-3 text-lg font-semi-bold text-gray-100">
          {navbarLinks.map((navbarLink, idx) => {
            const { label, link } = navbarLink;
            return (
              <li key={`${link}-${idx}`}>
                <Link href={link}>{label}</Link>
              </li>
            );
          })}
        </ul>
      </nav> */}
      <nav className="flex-grow md:flex md:items-center md:w-auto">
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:flex md:flex-row md:gap-3 text-lg font-semibold text-gray-100`}>
          {navbarLinks.map((navbarLink, idx) => {
            const { label, link } = navbarLink;
            return (
              <Link href={link} key={`${link}-${idx}`} className="block py-3 px-4 text-center hover:bg-gray-200 hover:text-black">
                {label}
              </Link>
            );
          })}
        </div>
        <button
          onClick={handleMenuToggle}
          className="md:hidden text-gray-200 hover:text-white focus:outline-none focus:text-white"
        >
          <i className="fa fa-bars text-2xl"></i>
        </button>
      </nav>
    </header>
  );
};

export default Header;
