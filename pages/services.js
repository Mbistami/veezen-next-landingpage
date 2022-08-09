import Head from "next/head";
import Image from "next/image";
import { OurMission } from "../components/OurMission.tsx";
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
        <div className="w-3/4 flex flex-col lg:flex-row justify-center items-center ">
          <div className="w-full md:w-1/2 lg:w-1/4 border border-gray-200 px-6 py-4 gap-2 flex flex-col min-h-[250px] justify-evenly font-nunito">
            <div className=" text-[#32bfc1]">
              <Handshake className="w-8 h-8" />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-2xl">VeeMeet</h1>
              <p className="leading-relaxed">
                Un réseau de mentors international au service de vos
                collaborateurs. - Confidentialité assurée -
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 border border-gray-200 px-6 py-4 gap-2 flex flex-col min-h-[250px] justify-evenly font-nunito">
            <div className=" text-[#32bfc1]">
              <FormatListBulleted className="w-8 h-8" />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-2xl">VeeBox</h1>
              <p className="leading-relaxed">
                Des boites à outils prêtes à l&apos;emploi.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 border border-gray-200 px-6 py-4 gap-2 flex flex-col min-h-[250px] justify-evenly font-nunito">
            <div className=" text-[#32bfc1]">
              <Chat className="w-8 h-8" />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-2xl">VeeSurvey</h1>
              <p className="leading-relaxed">
                Des enquêtes collaborateurs pour établir votre Baromètre
                Entreprise : - Baromètre WorkLife Harmony -
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 border border-gray-200 px-6 py-4 gap-2 flex flex-col min-h-[250px] justify-evenly font-nunito">
            <div className=" text-[#32bfc1]">
              <Headphones className="w-8 h-8" />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-2xl">VeeAssistant</h1>
              <p className="leading-relaxed">
                Un assistant virtuel disponible à tout moment pour vos
                collaborateurs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
