import React from "react";
import "../styles/globals.css";
import Image from "next/image";
const Pages = () => {
  return (
    <div className="bg-slate-500 h-[100vh] flex flex-row justify-between pt-20 pl-10">
      <div className="Text text-white leading-10 ">
        <h1 className="text-4xl font-bold">Hi</h1>
        <h1 className="text-4xl font-bold pt-5">I'm Mohammad Parvez Musharaf</h1>
        <p className="pt-10">Frontend Developer</p>
      </div>
      <div>

      </div>
      <div className="image">
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
