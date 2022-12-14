import React from "react";
import Image from "next/image";
import { CheckBox } from "@mui/icons-material";
// @ts-ignore
import { TripleWeaves } from "./TripleWeaves.tsx";

const LandingSection = ({ title1, title2, smallText }) => {
  return (
    <>
      <div className="flex pt-20 flex-row h-screen items-start overflow-hidden bg-gradient-to-b from-[#0661a3] to-[#7fd9e1] section relative overflow-hidden">
        <div className="w-80 h-80 absolute -top-16 -left-16 border border-white rounded-full opacity-25" />

        <div
          className="absolute -top-56 -left-56 border border-white rounded-full opacity-25"
          style={{ width: "800px", height: "800px" }}
        />
        <div
          className="absolute bottom-16 -right-16 border border-white rounded-full opacity-25"
          style={{ width: "200px", height: "200px" }}
        />
        <div className="2xl:w-1/2 w-full text-white h-3/4 pl-8 md:pl-24 2xl:pl-32 items-left flex flex-col justify-center pr-2">
          <h1 className="text-4xl sm:text-5xl 2xl:text-7xl font-nunito font-bold">
            {title1 ? title1 : "Work-Life"}
          </h1>
          <h1 className="text-4xl sm:text-5xl 2xl:text-7xl whitespace-nowrap font-nunito font-bold">
            {title2 ? title2 : "Harmony matters"}
          </h1>
          <p
            className={`text-xs sm:text-xl md:text-xl lg:text-2xl pt-2 pr-2 font-nunito font-light ${
              smallText ? "w-3/4" : "whitespace-nowrap"
            }`}
          >
            {smallText
              ? smallText
              : "VEEZEN, POUR UN MEILLEUR ENGAGEMENT DANS VOTRE VIE."}
          </p>
          {!title1 && (
            <div className="flex flex-col pt-16 gap-5">
              <div className="flex flex-row gap-2 items-center">
                <CheckBox />
                <p className="font-nunito">Bien Être & Performance</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <CheckBox />
                <p className="font-nunito">
                  Expertise, Neutralité, Originalité
                </p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <CheckBox />
                <p className="font-nunito">Équipe VeeExpert dynamique</p>
              </div>
            </div>
          )}
        </div>
        {!title1 ? (
          <div className="2xl:w-1/2 w-0 hidden md:block  h-full overflow-hidden">
            <div className="items-center pt-14 h-full">
              <Image
                src="/screenshot_1.png"
                alt="veezen_interface"
                className="pt-10"
                width={1099}
                height={500}
                layout="responsive"
              />
            </div>
          </div>
        ) : (
          <div>
            <div className="w-3/4 rounded-full absolute bottom-1/2 -translate-y-1/2 -right-72 hidden 2xl:block -rotate-45 h-80 opacity-20  bg-white"></div>
          </div>
        )}
        <TripleWeaves />
      </div>
    </>
  );
};

export default LandingSection;
