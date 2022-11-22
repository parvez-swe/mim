import React from "react";
import "../styles/globals.css";
import css from "./home.module.css";
import BG from "/public/imran-vai/310309226_1344791275928131_78698796048686728_n.jpg";
import Image from "next/image";
const Pages = () => {
  return (
    <>
      <div className={`${css.bg} text-white backdrop-blur-sm px-16`}>
        <div className="pt-[20%]">
          <h1 className="text-3xl  ">Hi, My Name is </h1>
          <h1 className="text-[4rem] font-bold leading-normal ">
            Imran Hossain
          </h1>
          <p className="text-3xl ">
            I am student of Daffodil Internation al University
          </p>
        </div>
      </div>
      <div className="about-container text-center">
        <div>
          <h1 className="about">About me</h1>
          <p>who I am</p>
        </div>
        <div>
          <div className="image-container text-center">
            <Image
              src={BG}
              alt="BG"
              width={200}
              height={200}
              priority={true}
            />

          </div>
          <div className="text-container">

          </div>
        </div>
      </div>
    </>
  );
};

export default Pages;
