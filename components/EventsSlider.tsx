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
          <InnerCard />
        </SwiperSlide>
        <SwiperSlide>
          <InnerCard />
        </SwiperSlide>
        <SwiperSlide>
          <InnerCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
