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
import { Facebook, LinkedIn, Twitter, Instagram } from "@mui/icons-material";
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
    <div className="h-full bg-white">
      <Head>
        <title>Veezen - Acceuil</title>
      </Head>
      <Navbar />
      <LandingSection />
      <EventsSlider />
      <OurMission />
      <div
        id="fields"
        className=" text-black bg-white text-center relative flex flex-row pt-10 sm:pt-36 justify-center"
      >
        <div className="w-full px-10 sm:px-15 md:px-20 lg:px-40">
          <h1 className="font-nunito text-2xl font-bold sm:text-5xl">
            Nos sphères d&apos;intervention
          </h1>
          <div className="absolute w-fit h-fit left-0 top-1/2 -translate-y-1/2">
            <Image
              src="https://res.cloudinary.com/dmntdw6z3/image/upload/v1658412790/Group_xxfqxh.png"
              width={200}
              height={200}
              alt="square dots"
            />
          </div>
          {Fields.map((e, i) => (
            <OurFields title={e?.title} cards={e?.cards} key={i} />
          ))}
        </div>
      </div>
      <OurSpheres />
      <Explanation />
      <OurClients />
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
