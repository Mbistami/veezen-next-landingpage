import React from "react";
import Image from "next/image";

export const InnerCard = () => {
  return (
    <div className="w-full  flex flex-row items-end justify-center">
      <div className=" text-white text-center absolute w-full bottom-1/3 translate-y-1/3">
        <div className="flex flex-col sm:mt-5 items-center">
          <h1 className="font-nunito text-5xl w-5/6 text-center mb-5 sm:mb-16 ">
            Vee-Breakfast
          </h1>
          <div className="flex flex-col-reverse sm:flex-row-reverse w-full items-center justify-center gap-4">
            <p className="m-0 w-full md:w-1/2 px-10 sm:px-3 text-justify font-nunito font-semibold text-xs sm:text-xl">
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression. Le Lorem Ipsum
              est le faux texte standard de l&apos;imprimerie depuis les années
              1500, quand un imprimeur anonyme assembla ensemble des morceaux de
              texte pour réaliser un livre spécimen de polices de texte. Il
              n&apos;a pas fait que survivre cinq siècles, mais s&apos;est aussi
              adapté à la bureautique informatique, sans que son contenu
              n&apos;en soit modifié. Il a été popularisé dans les années 1960
              grâce à la vente de feuilles Letraset contenant des passages du
              Lorem Ipsum, et, plus récemment, par son inclusion dans des
              applications de mise en page de texte, comme Aldus PageMaker.
            </p>
            <div className="w-64 sm:w-fit">
              <Image
                src="/screenshot_1.png"
                alt="veezen_interface"
                className="pt-10"
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
