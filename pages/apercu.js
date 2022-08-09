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
      <Navbar />
      <LandingSection
        title1="La Plateforme"
        title2="Veezen"
        smallText="Votre santé mentale est notre priorité. Nous nous engageons à assurer votre épanouissement ainsi que de vous accompagner pour mieux mener votre vie personnelle et professionnelle."
      />
    </div>
  );
}
