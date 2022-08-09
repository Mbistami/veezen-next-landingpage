import React from "react";
import Image from "next/image";

export const Explanation = () => {
  return (
    <div className="w-full sm:h-screen text-black flex flex-col sm:flex-row bg-gradient-to-b from-[#9fc4d3] to-[#dcdddf] pb-20 border-t border-[#c7d5db] relative">
      <div className="absolute w-fit h-fit left-0 -top-28">
        <Image
          src="https://res.cloudinary.com/dmntdw6z3/image/upload/v1658412790/Group_xxfqxh.png"
          width={200}
          height={200}
          alt="square dots"
        />
      </div>
      <div className="w-full sm:w-1/2 flex flex-col px-8 pb-10 sm:pl-14 sm:pt-44 gap-10">
        <p className="text-[#0662a3] font-bold text-xl">NOTRE MISSION</p>
        <p className="text-xl sm:text-5xl font-nunito font-bold leading-relaxed">
          Votre épanouissement pour un meilleur engagement en entreprise.
        </p>
      </div>
      <div className="w-full sm:w-1/2 flex flex-col  justify-center font-nunito font-bold">
        <div className="px-8 sm:px-28 text-justify">
          <p className="leading-loose pb-5">
            Les entreprises qui ont la réputation d’encourager l’équilibre entre
            vie professionnelle et vie privée sont devenues très attrayantes
            pour les talents et sont en mesure d’attirer plus de candidats pour
            de nouveaux postes. Ces entreprises connaissent aussi des taux de
            rétention des employés plus élevés, ce qui se traduit par une
            formation moins longue, une plus grande fidélité et un degré plus
            élevé d’expertise en interne.
          </p>
          <p className="font-normal leading-loose">
            Les entreprises qui ont la réputation d’encourager l’équilibre entre
            vie professionnelle et vie privée sont devenues très attrayantes
            pour les talents et sont en mesure d’attirer plus de candidats pour
            de nouveaux postes. Ces entreprises connaissent aussi des taux de
            rétention des employés plus élevés, ce qui se traduit par une
            formation moins longue, une plus grande fidélité et un degré plus
            élevé d’expertise en interne
          </p>
        </div>
      </div>
    </div>
  );
};
