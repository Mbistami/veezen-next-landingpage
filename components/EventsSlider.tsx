import React from "react";
import Head from "next/head";
import Image from "next/image";
//@ts-ignore
import { TripleWeaves } from "../components/TripleWeaves.tsx";
//@ts-ignore
import { InnerCard } from "../components/InnerCard.tsx";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { Swiper, SwiperSlide } from "swiper/react";

export const EventsSlider = () => {
  return (
    <div className="h-screen bg-gradient-to-b from-[#2d97b1] to-[#83dde3] relative pb-16 ">
      <div className="rotate-180 -mt-20 hidden sm:block">
        <TripleWeaves />
      </div>
      <div className="absolute top-10 sm:top-1/4 right-10 animate-bounce flex flex-col text-center items-end justify-end opacity-70">
        <DoubleArrowIcon />
        <p className="text-xs">Slide to view more events</p>
      </div>
      <Swiper className="mySwiper " style={{ height: "100%" }}>
        <SwiperSlide>
          <InnerCard
            title="Vee-Breakfast"
            text="Veezen organise toutes les deux semaines un #VeeBreakfast . Cette fois-ci, nous l'organiserons au café Dupont Vendredi 22/07 . L'événement réunit les #coachs veezen qui exposent les techniques de #coaching d'une façon ludique et passionante ils discutent des sujets qui touchent les problématiques des entreprises. Les invités de cet événement sont des responsables des ressources humaines ou des chefs d'entreprise qui assistent au intitulés déjeuner convivial et partent avec beaucoup de savoir sur ce qu'apporte le développement personnel, la connaissance de soi et les méthodes de management moderne ."
            src="https://res.cloudinary.com/dmntdw6z3/image/upload/v1658364100/Capture_q9bylh.png"
            date="22.07.2022."
          />
        </SwiperSlide>
        <SwiperSlide>
          <InnerCard
            title="Vee-Coaching"
            text="Veezen vous offre votre première séance de coaching individuel. Une chance unique de découvrir Veezen et ses Veexperts certifiés qui seront là pour vous aider et vous écouter."
            src="https://res.cloudinary.com/dmntdw6z3/image/upload/v1658364377/Capture_xuts3r.png"
            date="24.05.2022."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
