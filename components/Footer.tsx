import React from "react";

export const Footer = () => {
  return (
    <div className="w-full bg-white text-black border-t border-gray-200">
      <div className="flex flex-row justify-evenly px-10 py-10 font-nunito flex-wrap gap-10 text-center sm:text-left">
        <div>
          <p className="font-bold text-2xl pb-2">Veezen ADN</p>
          <ul className="text-lg font-normal gap-2 flex flex-col">
            <li>Apercu</li>
            <li>Sphères & Services</li>
            <li>Clients</li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-2xl pb-2">Sphères</p>
          <ul className="text-lg font-normal gap-2 flex flex-col">
            <li>Apercu</li>
            <li>Sphères & Services</li>
            <li>Clients</li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-2xl pb-2">Services</p>
          <ul className="text-lg font-normal gap-2 flex flex-col">
            <li>Apercu</li>
            <li>Sphères & Services</li>
            <li>Clients</li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-2xl pb-2">Contact</p>
          <ul className="text-lg font-normal gap-2 flex flex-col">
            <li>Apercu</li>
            <li>Sphères & Services</li>
            <li>Clients</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
