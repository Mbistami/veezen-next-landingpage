import React from "react";
import Image from "next/image";

export const OurMission = () => {
  return (
    <div className="bg-gradient-to-b from-[#83dde3] to-[#39aab7] rounded-bl-3xl border-t border-[#36a8b5] relative h-screen">
      <p className="absolute top-20 text-xl left-1/2 -translate-x-1/2 md:translate-x-0 font-nunito font-bold text-center">
        NOTRE ENTREPRISE
      </p>
      <div className="absolute -top-20 right-0">
        <Image
          src="https://res.cloudinary.com/dmntdw6z3/image/upload/v1658373190/pharma-template-dot-bg_2_lv6vy3.png"
          width={200}
          height={200}
          alt="background dots"
        />
      </div>

      <div className="flex flex-row relative h-full">
        <div className="w-1/2 flex-row items-end justify-center hidden md:flex">
          <Image
            src="https://res.cloudinary.com/dmntdw6z3/image/upload/v1658368768/silhouette-women-tree-3613840_1_d4hr0m.png"
            width={500}
            height={800}
            alt="women tree"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-row items-center justify-center text-black">
          <div className="flex w-3/4 flex-col items-center justify-center text-left gap-10">
            <h1 className="font-nunito text-center lg:text-left text-3xl lg:text-5xl font-bold">
              Une plateforme en pleine croissance
            </h1>
            <div className="pr-4 text-center lg:text-left">
              <p className="font-nunito text-lg md:text-xl font-semibold scroll-smoth">
                Parce que votre épanouissement est fondamental et votre vie
                perso et aussi importante que votre vie pro
              </p>
              <p className="font-nunito text-lg md:text-xl font-semibold ">
                Veezen, une solution de Work-Life Harmony, qui propose de vous
                accompagner dans votre bien-être physique et mental. La santé
                mentale demeure un enjeu majeur en entreprise particulièrement
                dans l’ère Post-Covid.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
