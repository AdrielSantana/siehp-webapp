import { StaticImageData } from "next/image";

import smileIcon from "@/shared/infra/presentation/assets/images/smile_icon.svg";
import hourGlassIcon from "@/shared/infra/presentation/assets/images/hourglass_icon.svg";
import plugIcon from "@/shared/infra/presentation/assets/images/plug_icon.svg";
import alertIcon from "@/shared/infra/presentation/assets/images/alert_icon.svg";
import experimentIcon from "@/shared/infra/presentation/assets/images/experiment_icon.svg";

export const WORK_IN_PROGRESS_ICONS: {
  alt: string;
  img: StaticImageData;
}[] = [
  {
    alt: "Ícone de sorriso",
    img: smileIcon,
  },
  {
    alt: "Ícone de ampulheta",
    img: hourGlassIcon,
  },
  {
    alt: "Ícone de tomada",
    img: plugIcon,
  },
  {
    alt: "Ícone de aviso",
    img: alertIcon,
  },
  {
    alt: "Ícone de balão de ensaio",
    img: experimentIcon,
  },
];
