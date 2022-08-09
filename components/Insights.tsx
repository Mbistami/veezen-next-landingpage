import React from "react";
import Image from "next/image";
import CountUp from "react-countup";

export const Insights = () => {
  return (
    <div className="md:h-screen relative text-black flex flex-col md:flex-row justify-center pb-10">
      <div className="md:w-3/4 flex flex-col md:flex-row md:py-52 px-10 md:px-32 font-nunito relative pb-10">
        <div className="absolute w-fit h-fit left-22 top-10">
          <Image
            src="https://res.cloudinary.com/dmntdw6z3/image/upload/v1658412790/Group_xxfqxh.png"
            width={200}
            height={200}
            alt="square dots"
          />
        </div>
        <div className="md:w-1/4 text-[#1dcddd] text-sm tracking-widest text-center">
          <p>APERCU</p>
        </div>
        <div className="md:w-3/4 text-center font-nunito">
          <p className="font-bold text-2xl text-center pb-10">
            Le monde du travail moderne pose de nombreux défis aux employés.
            Alors que certaines carrières permettent une interaction détendue
            entre le travail et la vie privée, de nombreuses autres professions
            exigent des sacrifices importants en ce qui concerne la vie
            familiale et les loisirs.
          </p>
          <div className="flex flex-col md:flex-row text-justify gap-10">
            <div className="md:w-1/2">
              <p>
                Selon une étude réalisée en 2015 par l’institut Coe-Rexecode,
                les français sont ceux qui travaillent le moins d’heures en
                Europe. Si cette donnée est à relativiser compte-tenu du nombre
                important d’emplois à mi-temps, il n’en reste pas moins que les
                gens sont de plus en plus en recherche d’un meilleur équilibre
                entre vie professionnelle et vie privée.
              </p>
            </div>
            <div className="md:w-1/2">
              <p>
                Selon une étude réalisée en 2015 par l’institut Coe-Rexecode,
                les français sont ceux qui travaillent le moins d’heures en
                Europe. Si cette donnée est à relativiser compte-tenu du nombre
                important d’emplois à mi-temps, il n’en reste pas moins que les
                gens sont de plus en plus en recherche d’un meilleur équilibre
                entre vie professionnelle et vie privée.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:absolute md:h-36 bottom-0 w-full  flex flex-row justify-end">
        <div className="w-full md:w-3/4 bg-[#effafa] flex flex-col md:flex-row items-center justify-evenly px-0 pt-10 md:pt-0 pb-10 md:pb-0">
          <div className="w-full  md:w-3/4 flex flex-col md:flex-row gap-28">
            <div className="text-6xl text-center font-bold text-[#3a3a3a]">
              <CountUp end={320} duration={3} />
              <p className="text-sm text-center pt-2 text-[#61bfc1] font-nunito font-bold">
                COLLABORATEURS
              </p>
            </div>
            <div className="text-6xl text-center font-bold text-[#3a3a3a]">
              <CountUp end={128} duration={3} />
              <p className="text-sm text-center pt-2 text-[#61bfc1] font-nunito font-bold">
                VEEXPERTS
              </p>
            </div>
            <div className="text-6xl text-center font-bold text-[#3a3a3a]">
              <CountUp end={24} duration={3} />
              <p className="text-sm text-center pt-2 text-[#61bfc1] font-nunito font-bold">
                ENTREPRISES
              </p>
            </div>
            <div className="text-6xl text-center font-bold text-[#3a3a3a]">
              <CountUp end={12} duration={3} />
              <p className="text-sm text-center pt-2 text-[#61bfc1] font-nunito font-bold">
                PAYS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
