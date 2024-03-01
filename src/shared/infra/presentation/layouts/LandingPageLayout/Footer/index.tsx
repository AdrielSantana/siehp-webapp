import { PAGES } from "@/shared/infra/utils/constants";
import Image from "next/image";
import Link from "next/link";
import completeSIEHPLogoImg from "@/shared/infra/presentation/assets/images/complete_siehp_logo.png";

const Footer = () => {
  return (
    <footer>
      <p>
        Sistema Integrado de Ensino à Histologia e Patologia 2024 © Todos os
        direitos reservados.
      </p>
      <Link href={PAGES.HOME_PAGE.link}>
        <Image
          src={completeSIEHPLogoImg.src}
          alt="SIEHP. Sistema Integrado de Ensino à Histologia e Patologia. Logo completo."
          height={completeSIEHPLogoImg.height}
          width={completeSIEHPLogoImg.width}
        />
      </Link>
    </footer>
  );
};

export default Footer;
