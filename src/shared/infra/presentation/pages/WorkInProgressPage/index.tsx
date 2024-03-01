import { WORK_IN_PROGRESS_ICONS } from "@/shared/infra/utils/constants/work-in-progress-icons";
import Image from "next/image";
import React from "react";

import githubIcon from "@/shared/infra/presentation/assets/images/github_icon.svg";

const WorkInProgressPage = () => {
  return (
    <main>
      <h1 className="absolute flex justify-center">Estamos em construção</h1>
      <div>
        {WORK_IN_PROGRESS_ICONS.map((icon, idx) => {
          const { alt, img } = icon;
          const { height, src, width } = img;

          return (
            <Image
              key={`${icon.alt}-${idx}`}
              src={src}
              alt={alt}
              height={height}
              width={width}
            />
          );
        })}
      </div>
      <div>
        <span>
          <Image
            src={githubIcon}
            alt={githubIcon.alt}
            height={githubIcon.height}
            width={githubIcon.width}
          />
          <p>Acompanhe nosso projeto!</p>
        </span>
      </div>
    </main>
  );
};

export default WorkInProgressPage;
