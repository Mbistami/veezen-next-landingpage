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
      <div className="w-full flex flex-col lg:flex-row min-h-[600px] relative items-center justify-center">
        <div className="w-1/2 max-h-[400px] max-w-[400px] items-center">
          <Image
            src="https://res.cloudinary.com/dmntdw6z3/image/upload/v1658414099/photo-principale_1_ih1bq3.png"
            width={600}
            height={600}
            alt="VEEZEN LOGO"
            layout="responsive"
          />
        </div>
        <div className="lg:w-1/2 flex flex-row justify-center pt-8 lg:pt-0">
          <div className="1/2">
            <FormatQuote className="text-[#1dbfc1] rotate-180 w-28 h-28" />
          </div>
          <div className="w-1/2 font-nunito text-black flex flex-col gap-10">
            <p className="text-[#4a4a4a] text-2xl font-bold">
              « Nous devons faire un meilleur travail pour nous mettre plus haut
              sur notre propre liste de choses à faire. »{" "}
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-black font-black text-xs font-nunito tracking-widest">
                MICHELLE OBAMA
              </p>
              <p className="text-xs ">Former First Lady</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-center lg:h-screen text-black flex flex-col lg:flex-row justify-center items-center gap-16 pb-10 pt-10 lg:pt-0 bg-[#effafa]">
        <div className="w-1/2 flex flex-row justify-end items-right">
          <div className="lg:w-3/4 flex flex-col gap-16">
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
        <div className="w-full lg:w-1/2 flex h-full flex-row justify-center lg:justify-start items-center px-5 lg:px-0">
          <div className="lg:w-3/4 bg-white flex flex-col text-left h-full items-center justify-center gap-4 px-8 py-5 font-nunito">
            <div className="w-full">
              <p className="">
                Nom<span className="text-red-600">*</span>
              </p>
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
              <p className="">
                Email<span className="text-red-600">*</span>
              </p>
              <TextField
                size="small"
                placeholder="example@veezen.com"
                className="w-full"
              />
            </div>
            <div className="w-full">
              <p className="">
                Sujet<span className="text-red-600">*</span>
              </p>
              <TextField size="small" placeholder="Title" className="w-full" />
            </div>
            <div className="w-full">
              <p className="">
                Message <span className="text-red-600">*</span>
              </p>
              <TextField
                size="small"
                multiline
                minRows={5}
                placeholder="Votre message..."
                className="w-full"
              />
            </div>
            <div className="px-4 py-2 font-nunito border border-[#1dbfc1] bg-white rounded-lg hover:bg-[#1dbfc1] hover:text-white transition-all cursor-pointer">
              <p>Send message</p>
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
