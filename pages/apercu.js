import Head from "next/head";
import Image from "next/image";
import { OurMission } from "../components/OurMission.tsx";
import LandingSection from "../components/LandingSection.tsx";
import { EventsSlider } from "../components/EventsSlider.tsx";
import { OurFields } from "../components/OurFields.tsx";
import { OurSpheres } from "../components/OurSpheres.tsx";
import { Explanation } from "../components/Explanation.tsx";
import { Footer } from "../components/Footer.tsx";
import { OurClients } from "../components/OurClients.tsx";
import Navbar from "../components/Navbar.tsx";
import { Facebook, LinkedIn, Twitter } from "@mui/icons-material";
import CountUp from "react-countup";
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
    <div className="h-full bg-white overflow-x-hidden relative">
      <Navbar />
      <div className="relative">
        <LandingSection
          title1="La Plateforme"
          title2="Veezen"
          smallText="Votre santé mentale est notre priorité. Nous nous engageons à assurer votre épanouissement ainsi que de vous accompagner pour mieux mener votre vie personnelle et professionnelle."
        />
      </div>
      <div className="md:h-screen text-black flex flex-col md:flex-row justify-center pb-10">
        <div className="md:w-3/4 flex flex-col md:flex-row md:py-52 px-10 md:px-32 font-nunito relative">
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
              entre le travail et la vie privée, de nombreuses autres
              professions exigent des sacrifices importants en ce qui concerne
              la vie familiale et les loisirs.
            </p>
            <div className="flex flex-col md:flex-row text-justify gap-10">
              <div className="md:w-1/2">
                <p>
                  Selon une étude réalisée en 2015 par l’institut Coe-Rexecode,
                  les français sont ceux qui travaillent le moins d’heures en
                  Europe. Si cette donnée est à relativiser compte-tenu du
                  nombre important d’emplois à mi-temps, il n’en reste pas moins
                  que les gens sont de plus en plus en recherche d’un meilleur
                  équilibre entre vie professionnelle et vie privée.
                </p>
              </div>
              <div className="md:w-1/2">
                <p>
                  Selon une étude réalisée en 2015 par l’institut Coe-Rexecode,
                  les français sont ceux qui travaillent le moins d’heures en
                  Europe. Si cette donnée est à relativiser compte-tenu du
                  nombre important d’emplois à mi-temps, il n’en reste pas moins
                  que les gens sont de plus en plus en recherche d’un meilleur
                  équilibre entre vie professionnelle et vie privée.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-36 bottom-0 w-full  flex flex-row justify-end">
          <div className="w-3/4 bg-[#effafa] flex flex-row items-center justify-evenly px-0">
            <div className="w-3/4 flex flex-row gap-28">
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
    </div>
  );
}
