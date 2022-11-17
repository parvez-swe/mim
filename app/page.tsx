import React from "react";
import "../styles/globals.css";
import Image from "next/image";
const Pages = () => {
  return (
    <div className="bg-slate-600  flex flex-row justify-between pt-20 pl-10 relative w-[100%]">
      <div className="Text text-white leading-10 ">
        <h1 className="text-4xl font-bold">Hi</h1>
        <h1 className="text-4xl font-bold pt-5">
          I'm Mohammad Parvez Musharaf
        </h1>
        <p className="pt-10">Frontend Developer</p>
      </div>
      <div className="image hidden md:flex">
        <Image
          className="h-[40vh]"
          src="/../public/React-icon.svg.png"
          width="200"
          height="100"
          alt="image"
        />
      </div>
      <div className="image ">
        <Image
          className="h-[50vh]"
          src="/../public/profile-1.png"
          width="200"
          height="200"
          alt="image"
        />
      </div>
    </div>
  );
};

export default Pages;
