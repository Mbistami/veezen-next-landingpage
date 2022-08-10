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
} from "@mui/icons-material";
import { Footer } from "../components/Footer.tsx";
import "swiper/css";

export default function Service() {
  return (
    <div className="h-full bg-white  overflow-x-hidden relative">
      <Head>
        <title>Veezen - Sphères & Services</title>
      </Head>
      <Navbar />
      <div className="relative">
        <LandingSection
          title1="Sphères &"
          title2="Services"
          smallText="Rencontrez votre mentor personnel à votre rythme ou accéder à nos boîtes à outils qui vous  sont exclusivement dédiées."
        />
      </div>
      <div className="w-full text-center lg:text-left lg:h-screen text-black flex flex-col justify-center items-center gap-16 pb-10">
        <div className="w-3/4  flex flex-col lg:flex-row py-20 px-10">
          <div className="lg:w-1/2 font-nunito flex flex-col gap-10">
            <p className="tracking-widest text-sm text-[#1dc5d3]">SERVICES</p>
            <p className="font-bold text-3xl lg:text-5xl leading-normal">
              Nous œvrons pour l&apos;épanouissement de vos collaborateurs.
            </p>
          </div>
          <div className="lg:w-1/2 pt-16">
            <p className="lg:w-3/4 text-lg text-center lg:text-justify leading-loose">
              Un épanouissement au coeur de la réussite de votre entreprise. La
              recherche d’une Work-Life Harmony s’est accentuée dans l’ère
              post-covid. Les collaborateurs remettent en cause différentes
              sphères de leur vie et souhaitent être accompagnés pour faire face
              aux challenges auxquels ils font face au quotidien. Nous proposons
              quatre services.
            </p>
          </div>
        </div>
        <div className="w-5/6 flex flex-col lg:flex-row justify-center items-center gap-2">
          <div className="w-full md:w-1/2 lg:w-1/4 border border-gray-200 px-6 py-4 gap-2 flex flex-col min-h-[250px] justify-center items-center md:items-start md:justify-between h-full font-nunito">
            <div className="h-1/4 flex flex-row justify-left items-center text-[#32bfc1]">
              <Handshake className="w-8 h-8" />
            </div>
            <div className="h-3/4 flex flex-col gap-4">
              <h1 className="font-bold text-2xl">VeeMeet</h1>
              <p className="leading-relaxed">
                Un réseau de mentors international au service de vos
                collaborateurs. - Confidentialité assurée -
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 border border-gray-200 px-6 py-4 gap-2 flex flex-col min-h-[250px] justify-center items-center md:items-start md:justify-between h-full font-nunito">
            <div className="h-1/4 flex flex-row justify-left items-center text-[#32bfc1]">
              <FormatListBulleted className="w-8 h-8" />
            </div>
            <div className="h-3/4 flex flex-col gap-4">
              <h1 className="font-bold text-2xl">VeeBox</h1>
              <p className="leading-relaxed">
                Des boites à outils prêtes à l&apos;emploi.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 border border-gray-200 px-6 py-4 gap-2 flex flex-col min-h-[250px] justify-center items-center md:items-start md:justify-between h-full font-nunito">
            <div className="h-1/4 flex flex-row justify-left items-center text-[#32bfc1]">
              <Chat className="w-8 h-8" />
            </div>
            <div className="h-3/4 flex flex-col gap-4">
              <h1 className="font-bold text-2xl">VeeSurvey</h1>
              <p className="leading-relaxed">
                Des enquêtes collaborateurs pour établir votre Baromètre
                Entreprise : - Baromètre WorkLife Harmony -
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 border border-gray-200 px-6 py-4 gap-2 flex flex-col min-h-[250px] justify-center items-center md:items-start md:justify-between h-full font-nunito">
            <div className="h-1/4 flex flex-row justify-left items-center text-[#32bfc1]">
              <Headphones className="w-8 h-8" />
            </div>
            <div className="h-3/4 flex flex-col gap-4">
              <h1 className="font-bold text-2xl">VeeAssistant</h1>
              <p className="leading-relaxed">
                Un assistant virtuel disponible à tout moment pour vos
                collaborateurs.
              </p>
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
}
