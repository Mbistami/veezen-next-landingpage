import React from "react";
import Image from "next/image";
import { Group, Shield, List, Face } from "@mui/icons-material";

export const OurSpheres = () => {
  return (
    <div className="bg-gradient-to-b from-[#2186ad] to-[#9ec3d2] relative pb-10 sm:h-screen">
      <p className="block pt-10 sm:pt-0 sm:absolute top-20 text-xl sm:left-1/2 sm:-translate-x-1/2 md:translate-x-0 font-nunito font-bold text-center">
        NOS SPHÈRES
      </p>
      <div className="absolute -top-20 right-0">
        <Image
          src="https://res.cloudinary.com/dmntdw6z3/image/upload/v1658373190/pharma-template-dot-bg_2_lv6vy3.png"
          width={200}
          height={200}
          alt="background dots"
        />
      </div>

      <div className="flex flex-row relative h-full ">
        <div className="w-1/2 flex-row items-center justify-center hidden md:flex">
          <Image
            src="https://res.cloudinary.com/dmntdw6z3/image/upload/v1658414099/photo-principale_1_ih1bq3.png"
            width={500}
            height={500}
            alt="women tree"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-row items-center justify-center text-black">
          <div className="flex w-3/4 flex-col items-center justify-center text-left gap-10">
            <h1 className="font-nunito text-center lg:text-left text-3xl lg:text-5xl font-bold">
              Engagés auprès de vous
            </h1>
            <div className="pr-4 text-center lg:text-left">
              <p className="font-nunito text-lg md:text-xl text-center lg:text-left font-semibold scroll-smoth">
                Nous vous proposons quatre services destinés à vous assurer une
                meilleure harmonie de vie.
              </p>
            </div>
            <div className="flex flex-col gap-12">
              <div className="flex flex-row gap-5 text-white font-nunito">
                <div>
                  <Group className="w-10 h-10" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">VeeMeet</h1>
                  <div className="text-black">
                    <p>
                      Un réseau international de mentors de renom à votre
                      service
                    </p>
                    <ul style={{ listStyleType: "-" }}>
                      <li>- Confidentialité</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-5 text-white font-nunito">
                <div>
                  <Shield className="w-10 h-10" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">VeeBox</h1>
                  <p className="text-black">
                    Des boites à outils prêtes à l&apos;emploi
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-5 text-white font-nunito">
                <div>
                  <Face className="w-10 h-10" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">VeeBox</h1>
                  <div className="text-black">
                    <p>
                      Des enquêtes collaborateurs pour établir votre Baromètre
                      Entreprise
                    </p>
                    <ul style={{ listStyleType: "-" }}>
                      <li>- Baromètre WorkLife Harmon</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-5 text-white font-nunito">
                <div>
                  <List className="w-10 h-10" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">VeeBox</h1>
                  <p className="text-black">
                    Des boites à outils prêtes à l&apos;emploi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
