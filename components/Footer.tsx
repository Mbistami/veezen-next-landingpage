import React from "react";

export const Footer = () => {
  return (
    <div className="w-full bg-white text-black border-t border-gray-200">
      <div className="flex flex-row justify-evenly px-10 py-10 font-nunito flex-wrap gap-10 text-center sm:text-left">
        <div>
          <p className="font-bold text-xl pb-2">Veezen ADN</p>
          <ul className="text-md  font-normal gap-2 flex flex-col cursor-pointer ">
            <li
              className="hover:text-[#1dbfc1] transition-all"
              onClick={() => window.open("/apercu", "_self")}
            >
              Apercu
            </li>
            <li className="hover:text-[#1dbfc1] transition-all">
              Sphères & Services
            </li>
            <li className="hover:text-[#1dbfc1] transition-all">Clients</li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-xl pb-2">Sphères</p>
          <ul className="text-md  font-normal gap-2 flex flex-col cursor-pointer ">
            <li className="hover:text-[#1dbfc1] transition-all">
              <a href="#fields">Carrière</a>
            </li>
            <li className="hover:text-[#1dbfc1] transition-all">
              <a href="#fields">Couple</a>{" "}
            </li>
            <li className="hover:text-[#1dbfc1] transition-all">
              <a href="#fields">Famille</a>
            </li>
            <li className="hover:text-[#1dbfc1] transition-all">
              <a href="#fields">Compétences</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-xl pb-2">Services</p>
          <ul className="text-md  font-normal gap-2 flex flex-col cursor-pointer ">
            <li className="hover:text-[#1dbfc1] transition-all">
              <a href="#spheres">VeeMeet</a>
            </li>
            <li className="hover:text-[#1dbfc1] transition-all ">
              <a href="#spheres">VeeBox</a>
            </li>
            <li className="hover:text-[#1dbfc1] transition-all ">
              <a href="#spheres">VeeSurvey</a>
            </li>
            <li className="hover:text-[#1dbfc1] transition-all ">
              <a href="#spheres">VeeAssistant</a>
            </li>
          </ul>
        </div>
        <div className="w-1/4">
          <p className="font-bold text-xl pb-2">Contact</p>
          <ul className="text-md  font-normal gap-2 flex flex-col cursor-pointer ">
            <li className="hover:text-[#1dbfc1] transition-all">
              Casa Twin Towers I Twin Center 5th Floor, Tour Ouest Angle Bd
              Zarktouni-Al Massira Al Khadra-Casablanca, Maroc 20100. +212 522
              395 674
            </li>
            <li className="hover:text-[#1dbfc1] transition-all">
              128 Rue la Boétie, Paris 75008. France + 33 187 651 112
            </li>
            <li className="hover:text-[#1dbfc1] transition-all">
              244, 5th Avenue Suite 1211, New York 10001. United States. +1
              (212) 852-0242
            </li>
            <li className="hover:text-[#1dbfc1] transition-all">
              veezen@veezen.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
