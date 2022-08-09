import Head from "next/head";
import Image from "next/image";
import { OurMission } from "../components/OurMission.tsx";
import LandingSection from "../components/LandingSection.tsx";
import { Insights } from "../components/Insights.tsx";
import { FormatQuote } from "@mui/icons-material";
import Navbar from "../components/Navbar.tsx";
import { Facebook, LinkedIn, Twitter, Instagram } from "@mui/icons-material";
import { Footer } from "../components/Footer.tsx";
import "swiper/css";

export default function Home() {
  const Fields = [
    {
      title: "VEEPRO",
      cards: [
        {
          title: "Carrière",
          text: "Nous accompagnons vos collaborateurs pour une gestion de carrière anticipative et proactive à la mesure de leurs ambitions.",
        },
        {
          title: "Compétences",
          text: "Vos collaborateurs évoluent, leurs compétences aussi. Nous améliorons leurs compétences professionnelles pour une meilleure évolution au sein de leur entreprise.",
        },
        {
          title: "Women & Charge Mentale",
          text: "Nous offrons une aide ciblée aux femmes pour les aider à réduire leur charge mentale, de façon générale et pendant les périodes pré et post- maternité.",
        },
      ],
    },
    {
      title: "VEEPERSO",
      cards: [
        {
          title: "Couple",
          text: "Le couple est au coeur de la vie d’un individu et fait partieintégrante de son WorkLife Harmony. L’objectif de Veezen est de vous permettre de vivre une vie de couple plus épanouie.",
        },
        {
          title: "Famille",
          text: "L’harmonisation des deux grandes sphères de vies que sont le travail et la vie personnelle peut être source de conflits d’horaires et de rôles. Pourtant, il est essentiel de trouver l’équilibre entre les deux, sans quoi on risque d’y laisser une partie de sa santé physique et mentale.",
        },
        {
          title: "Sport & Nutrition",
          text: "Un accompagnement personnalisé pour éviter le burn-out et les maladies chroniques: un corps sain est à la base de notre approche.",
        },
      ],
    },
  ];
  return (
    <div className="h-full bg-white  overflow-x-hidden relative">
      <Head>
        <title>Veezen - Apercu</title>
      </Head>
      <Navbar />
      <div className="relative">
        <LandingSection
          title1="La Plateforme"
          title2="Veezen"
          smallText="Votre santé mentale est notre priorité. Nous nous engageons à assurer votre épanouissement ainsi que de vous accompagner pour mieux mener votre vie personnelle et professionnelle."
        />
      </div>
      <Insights />
      <div className="md:h-screen bg-[#effafa] pb-10 justify-center flex flex-row items-center">
        <div className="w-3/4 text-black h-full flex flex-col md:flex-row">
          <div className="md:w-1/2 flex flex-col md:flex-row">
            <div className="w-1/4 hidden md:block">
              <FormatQuote className="text-[#1dbfc1] rotate-180 w-36 h-36" />
            </div>
            <div className="md:w-3/4 flex flex-col gap-10 pt-10 font-nunito">
              <p className="text-[#45cfde] font-bold">NOTRE ENTREPRISE</p>
              <h1 className="text-2xl md:text-4xl font-bold ">
                Une Start-Up en pleine croissance
              </h1>
              <div className="font-thin">
                <p className="text-justify text-md leading-loose">
                  Le terme « Work-Life balance » appartient au vocabulaire de
                  base des RH depuis des années déjà. Ce mot à la mode est
                  utilisé consciemment par les recruteurs pour suggérer aux
                  collaborateurs potentiels un équilibre entre le travail et la
                  vie privée. Cependant, la séparation stricte entre le travail
                  et la vie privée est de plus en plus remise en question : les
                  frontières s’estompent, vie privée et vie professionnelle se
                  mélangent et un nouveau terme est en train de s’imposer.
                </p>
                <br />
                <p>Que se cache-t-il derrière ce nouveau concept ?</p>
              </div>
              <p className="font-bold">
                Tu ne peux pas avoir tout ce que tu veux, mais tu peux avoir les
                choses qui comptent vraiment pour toi.
              </p>
              <div className="text-sm">
                <p className="font-bold tracking-widest">MARISSA MAYER</p>
                <p className="font-thin tracking-widest">
                  Ancien président et PDG de Yahoo
                </p>
              </div>
            </div>
          </div>
          <div className="pt-20 hidden md:flex md:pt-0 md:w-1/2 flex-row px-10">
            <div className="md:pt-36">
              <Image
                src="https://res.cloudinary.com/dmntdw6z3/image/upload/v1660030525/famille2_rie4ij.jpg"
                width={612}
                height={408}
                alt="happy family"
              />
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className=" bg-[white] pt-10 justify-center flex flex-row items-center pb-20">
        <div className="w-4/5 text-black h-full flex flex-col md:flex-row">
          <div className="md:w-1/2 flex flex-col md:flex-row">
            <div className="md:w-full flex flex-col gap-10 pt-10 font-nunito">
              <p className="text-[#45cfde] font-bold">SPHÈRES DE VIE</p>
              <h1 className="text-2xl md:text-4xl font-bold ">
                VeePro & VeePrivée
              </h1>
              <p className="font-nunito font-bold">
                La pandémie brouille la frontière entre travail et vie privée.
              </p>
              <div className="font-thin">
                <p>Que se cache-t-il derrière ce nouveau concept ?</p>
                <br />
                <p className="text-justify text-md leading-loose">
                  La pandémie et ses cohortes de travailleurs à domicile ont
                  brouillé un peu plus la frontière entre les deux et méritent
                  que l’on y porte plus d’attention. L’irruption soudaine du
                  télétravail dans les foyers oblige à repenser l’équilibre vie
                  privée-vie professionnelle.
                </p>
                <br />
                <p className="text-justify text-md leading-loose">
                  Le travail à domicile va perdurer, ce qui signifie que les
                  employés auront besoin d’une meilleure protection et d’une
                  meilleure WorkLife Harmony.
                </p>
              </div>
            </div>
          </div>
          <div className="pt-20 hidden md:flex md:pt-0 md:w-1/2 flex-row px-10 h-fit">
            <div className="md:pt-36 h-fit">
              <Image
                src="https://res.cloudinary.com/dmntdw6z3/image/upload/v1660031005/d41586-018-05589-w_15891472-5_w223k4.jpg"
                width={800}
                height={602}
                alt="happy family"
              />
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <Footer />
      <div className="flex flex-col justify-center items-center sm:items-start sm:flex-row sm:justify-between text-black py-5 gap-5 sm:px-10 border-t border-gray-200">
        <div>Copyright © 2022 VEEZEN Powered by VEEZEN</div>
        <div className="flex flex-row gap-4">
          <div className="w-8 h-8  text-[#1dbfc1] justify-center flex flex-row items-center rounded-lg">
            <Facebook />
          </div>
          <div className="w-8 h-8  text-[#1dbfc1] justify-center flex flex-row items-center rounded-lg">
            <LinkedIn />
          </div>
          <div className="w-8 h-8  text-[#1dbfc1] justify-center flex flex-row items-center rounded-lg">
            <Twitter />
          </div>
          <div className="w-8 h-8  text-[#1dbfc1] justify-center flex flex-row items-center rounded-lg">
            <Instagram />
          </div>
        </div>
      </div>
    </div>
  );
}
