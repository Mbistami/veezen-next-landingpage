import React from "react";
import Image from "next/image";

export const OurClients = () => {
  return (
    <div className="w-full  bg-white">
      <p className="text-[#0662a3] font-bold text-2xl text-center pt-8">
        NOS CLIENTS
      </p>
      <div className="flex flex-row justify-evenly items-center py-6 px-4 gap-5 flex-wrap">
        <div>
          <Image
            src="https://res.cloudinary.com/dmntdw6z3/image/upload/v1658417662/Hyundai-Logo_1_xi9hrd.png"
            width={383}
            height={202}
            alt="Hyundai"
          />
        </div>
        <div>
          <Image
            src="https://res.cloudinary.com/dmntdw6z3/image/upload/v1658417665/1200px-General_Electric_logo_1_cbwd1q.png"
            width={150}
            height={150}
            alt="Hyundai"
          />
        </div>
        <div>
          <Image
            src="https://res.cloudinary.com/dmntdw6z3/image/upload/v1658417669/tata-communication-344x200-1_1_f7j3wy.png"
            width={344}
            height={200}
            alt="Hyundai"
          />
        </div>
        <div>
          <Image
            src="https://res.cloudinary.com/dmntdw6z3/image/upload/v1658417671/Akp_1_wp3g5f.png"
            width={234}
            height={235}
            alt="Hyundai"
          />
        </div>
        <div>
          <Image
            src="https://res.cloudinary.com/dmntdw6z3/image/upload/v1658864648/download_if4wjb.png"
            width={344}
            height={146}
            alt="Hyundai"
          />
        </div>
        <div className="pb-10">
          <Image
            src="https://res.cloudinary.com/dmntdw6z3/image/upload/v1658864632/Sodexo_2008__logo_.svg_lneffh.png"
            width={344}
            height={146}
            alt="Hyundai"
          />
        </div>
      </div>
    </div>
  );
};
