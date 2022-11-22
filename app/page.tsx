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
      <div className="about-container text-center pt-16">
        <div className="py-10">
          <h1 className="about text-2xl font-bold">About me</h1>
          <p>who I am</p>
        </div>

        <div className="px-16">
          <div className="image-container flex justify-center mb-5">
            <Image
              className="rounded-lg"
              src="/../public/imran-vai/310309226_1344791275928131_78698796048686728_n.jpg"
              alt="BG"
              width={400}
              height={400}
              priority={true}
            />
          </div>
          <div className="text-container">
            <h1 className="text-xl font-bold pb-2">I am Mohammad Imran Hossain.</h1>
            <p>{" "}
              I am a Student of Daffodil International University. I am a
              Youtube Content Creator. My Home Town is Rangpur.
            </p>
            <button className="bg-red-500 text-white">
              Dowonload CV
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pages;
