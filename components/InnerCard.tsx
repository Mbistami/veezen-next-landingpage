import React from "react";
import Image from "next/image";
import { GpsFixed } from "@mui/icons-material";

export const InnerCard = ({ src, text, title, date }) => {
  return (
    <div className="w-full  flex flex-row items-end justify-center">
      <div className=" text-white text-center absolute w-full bottom-1/3 translate-y-1/3">
        <div className="flex flex-col sm:mt-5 items-center">
          <h1 className="font-nunito text-5xl w-5/6 text-center mb-5 sm:mb-16 ">
            {title}
          </h1>
          <div className="flex flex-col-reverse sm:flex-row-reverse w-full items-center justify-center gap-10">
            <div className="m-0 w-full md:w-1/2 px-10 sm:px-3 text-left">
              <p className="  font-nunito text-[10px] sm:text-xl text-left">
                {text}
              </p>
              <div className="flex flex-row justify-between items-center mt-16">
                <p className="text-xl font-bold text-[#0863a4]">{date}</p>
                <GpsFixed className="cursor-pointer" />
              </div>
            </div>
            <div className="w-64 sm:w-fit rounded-xl overflow-hidden relative">
              <Image
                src={src}
                alt="veezen_interface"
                className="pt-10 rounded-xl"
                width={350}
                height={350}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
