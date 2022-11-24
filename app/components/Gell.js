import React from "react";
import { ProductData } from "./data";
import Image from "next/image";
const Gell = () => {
  return (
    <div className="grid grid-cols-10 md:grid-cols-10 gap-2 mb-20 justify-center items-center ">
      <Image
        src="/imran-vai/1.jpg"
        width={250}
        height={250}
        className="col-span-10 md:col-span-4 h-[12rem] w-full  gap-2 "
      />
      <Image
        src="/imran-vai/2.jpg"
        width={250}
        height={250}
        className="col-span-5 md:col-span-2 h-[12rem]"
      />
      <Image
        src="/imran-vai/3.jpg"
        width={250}
        height={250}
        className="col-span-5 h-[12rem] md:col-span-2"
      />
      <Image
        src="/imran-vai/5.jpg"
        width={250}
        height={250}
        className="col-span-4 md:col-span-2 h-[12rem]"
      />
      <Image
        src="/imran-vai/about.jpg"
        width={250}
        height={250}
        className="col-span-6 md:col-span-2 h-[12rem]"
      />
    </div>
  );
};

export default Gell;
