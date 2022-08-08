import React from "react";

export const OurFields = ({ title, cards }) => {
  return (
    <div className="pb-20">
      <p className="text-left text-[#0662A3] text-xl sm:text-2xl font-nunito pt-5 border-b border-[#0662A3] pb-3">
        {title}
      </p>
      <div className="flex flex-col sm:flex-row justify-start gap-16 pt-8">
        {cards.map((e: any, i: number) => {
          return (
            <div className="w-full sm:w-1/3 text-left" key={i}>
              <h1 className="font-nunito font-bold text-xl pb-3">{e?.title}</h1>
              <p className="font-nunito text-lg pr-2">{e?.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
