import React from "react";

import Head from "next/head";
import Image from "next/image";
import { OurClients } from "../components/OurClients.tsx";
import LandingSection from "../components/LandingSection.tsx";
import { Insights } from "../components/Insights.tsx";
import { FormatQuote } from "@mui/icons-material";
import Navbar from "../components/Navbar.tsx";
import {
  Headphones,
  Chat,
  Handshake,
  FormatListBulleted,
  LocationOn,
  Email,
} from "@mui/icons-material";
import { Footer } from "../components/Footer.tsx";
import "swiper/css";
import { TextField } from "@mui/material";
const ContactUs = () => {
  return (
    <div className="h-full bg-white  overflow-x-hidden relative">
      <Head>
        <title>Veezen - Contact Us</title>
      </Head>
      <Navbar />
      <div className="relative">
        <LandingSection
          title1="Contact Us"
          title2=" "
          smallText="Nos VeeXperts sont là pour vous et vous accompagnent dans vos challenges quotidiens de VeePro et VeePerso."
        />
      </div>
      <div className="w-full text-center lg:h-screen text-black flex flex-row justify-center items-center gap-16 pb-10 bg-[#effafa]">
        <div className="w-1/2 flex flex-row justify-end items-right">
          <div className="w-3/4 flex flex-col gap-16">
            <div className="justify-center items-center flex flex-col font-nunito">
              <LocationOn className="text-[#1dbfc1]" />
              <p className="text-xs font-bold tracking-widest mt-5 mb-2 ">
                Casablanca | Morocco
              </p>
              <p className="font-bold text-2xl">
                Casa Twin Towers I Twin Center 5th Floor, Tour Ouest Angle Bd
                Zarktouni-Al Massira Al Khadra-Casablanca, Maroc 20100.
              </p>
              <p className="text-2xl font-bold">+212 522 395 674</p>
            </div>
            <div className="justify-center items-center flex flex-col  font-nunito">
              <LocationOn className="text-[#1dbfc1]" />
              <p className="text-xs font-bold tracking-widest mt-5 mb-2 ">
                Paris | France
              </p>
              <p className="font-bold text-2xl">
                128, Rue la Boétie, Paris 75008
              </p>
              <p className="text-2xl font-bold">+33 187 651 112</p>
            </div>
            <div className="justify-center items-center flex flex-col  font-nunito">
              <LocationOn className="text-[#1dbfc1]" />
              <p className="text-xs font-bold tracking-widest mt-5 mb-2 ">
                New York | États-Unis
              </p>
              <p className="font-bold text-2xl">
                244, 5e Avenue Suite 1211, New York 10001
              </p>
              <p className="text-2xl font-bold">+1 (212) 852 0242</p>
            </div>
            <div className="justify-center items-center flex flex-col  font-nunito">
              <Email className="text-[#1dbfc1]" />
              <p className="text-xs font-bold tracking-widest mt-5 mb-2 ">
                EMAIL US
              </p>
              <p className="font-bold text-2xl">veezen@veezen.com</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex h-full flex-row justify-start items-center">
          <div className="w-3/4 bg-white flex flex-col text-left h-full items-center justify-center gap-4 px-8 py-5">
            <div className="w-full">
              <p className="">Nom*</p>
              <div className="flex flex-row w-full justify-between gap-5">
                <TextField
                  placeholder="First name"
                  className="w-1/2"
                  size="small"
                />
                <TextField
                  placeholder="Second name"
                  className="w-1/2"
                  size="small"
                />
              </div>
            </div>

            <div className="w-full">
              <p className="">Email*</p>
              <TextField size="small" placeholder="" className="w-full" />
            </div>
            <div className="w-full">
              <p className="">Sujet*</p>
              <TextField size="small" placeholder="" className="w-full" />
            </div>
            <div className="w-full">
              <p className="">Sujet*</p>
              <TextField
                size="small"
                multiline
                minRows={5}
                placeholder=""
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:h-screen bg-[#effafa] flex flex-row justify-center">
        <div className="w-1/2 flex flex-col font-nunito py-10 gap-5 text-center lg:text-left ">
          <p className="tracking-widest text-sm text-[#1dc5d3]">
            NOS SPHERES D&apos;INTERVENTION
          </p>
          <h1 className="text-4xl font-bold text-black">
            La frontière entre les sphères de VeePro et VeePrivée s&apos;estompe
          </h1>
          <div className="text-black flex flex-col lg:flex-row flex-wrap font-nunito gap-y-8 pt-10 lg:pt-28 text-center lg:text-left ">
            <div className="lg:w-1/3 flex flex-col gap-2">
              <p className=" text-[#1dc5d3] tracking-widest text-xs font-bold">
                01.
              </p>
              <p className="font-bold text-xl">Carrière</p>
              <p className="text-sm leading-relaxed">
                Nous accompagnons vos collaborateurs pour une gestion de
                carrière anticipative et proactive à la mesure de leurs
                ambitions.
              </p>
            </div>
            <div className="lg:w-1/3 flex flex-col gap-2">
              <p className=" text-[#1dc5d3] tracking-widest text-xs font-bold">
                02.
              </p>
              <p className="font-bold text-xl">Compétences</p>
              <p className="text-sm leading-relaxed">
                Vos collaborateurs évoluent, leurs compétences aussi. Nous
                améliorons leurs compétences professionnelles pour une meilleure
                évolution au sein de leurs entreprises.
              </p>
            </div>
            <div className="lg:w-1/3 flex flex-col gap-2">
              <p className=" text-[#1dc5d3] tracking-widest text-xs font-bold">
                03.
              </p>
              <p className="font-bold text-xl">Women & Charge Mentale</p>
              <p className="text-sm leading-relaxed">
                Nous offrons une aide ciblée aux femmes pour les aider à réduire
                leur charge mentale, de façon générale et pendant les périodes
                pré et post maternité.
              </p>
            </div>
            <div className="lg:w-1/3 flex flex-col gap-2">
              <p className=" text-[#1dc5d3] tracking-widest text-xs font-bold">
                04.
              </p>
              <p className="font-bold text-xl">Couple</p>
              <p className="text-sm leading-relaxed">
                Le couple est au cœur de la vie d’un individu et fait partie
                intégrante de son WorkLife Harmony. L’objectif de Veezen est de
                permettre à vos collaborateurs de vivre une vie de couple plus
                épanouie.
              </p>
            </div>
            <div className="lg:w-1/3 flex flex-col gap-2">
              <p className=" text-[#1dc5d3] tracking-widest text-xs font-bold">
                05.
              </p>
              <p className="font-bold text-xl">Famille</p>
              <p className="text-sm leading-relaxed">
                L’harmonisation des deux grandes sphères de vies que sont le
                travail et la vie personnelle peut être source de conflits
                d’horaires et de rôles. Pourtant, il est essentiel de trouver
                l’équilibre entre les deux, sans quoi on risque d’y laisser une
                partie de sa santé physique et mentale. Accompagner les
                collaborateurs dans leur rôle de parent est aussi fondamental.
              </p>
            </div>
            <div className="lg:w-1/3 flex flex-col gap-2">
              <p className=" text-[#1dc5d3] tracking-widest text-xs font-bold">
                06.
              </p>
              <p className="font-bold text-xl">Sport & Nutrition</p>
              <p className="text-sm leading-relaxed">
                Un accompagnement personnalisé pour éviter le burn-out et les
                maladies chroniques : un corps sain est à la base de notre
                approche.
              </p>
            </div>
          </div>
        </div>
      </div>
      <OurClients />
      <Footer />
    </div>
  );
};
export default ContactUs;
