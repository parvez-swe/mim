import React from "react";
import "../styles/globals.css";
import css from "./home.module.css";
import BG from "/public/imran-vai/310309226_1344791275928131_78698796048686728_n.jpg";
import {
  BsYoutube,
  BsFacebook,
  BsFillTelephoneForwardFill,
} from "react-icons/bs";
import Image from "next/image";
const Pages = () => {
  return (
    <>
      <div
        className={`${css.bg} h-[70vh] text-white backdrop-blur-sm px-5 lg:px-16`}
      >
        <div className="pt-[30%] md:pt-[10%]">
          <h1 className="tex-xl font-bold lg:text-3xl  ">Hi, My Name is </h1>
          <h1 className="text-[3rem] lg:text-[4rem] font-bold leading-normal mb-5">
            Mohammad Imran Hossain
          </h1>
          <p className="text-xl lg:text-3xl ">
            I am student of Daffodil Internation al University.
          </p>
          <div className="text-3xl mt-5 md:mt-10 flex">
            <BsYoutube className="mx-2 hover:scale-110 transform duration-500 " />
            <BsFacebook className="mx-2 hover:scale-110 transform duration-500 " />
            <BsFillTelephoneForwardFill className="mx-2 hover:scale-110 transform duration-500 " />
          </div>
        </div>
      </div>
      <div className="about-container text-center pt-16 mb-10">
        <div className="py-10">
          <h1 className="about text-2xl font-bold">About me</h1>
          <p>who I am</p>
        </div>

        <div className="px-5 lg:px-16 grid grid-cols-1 md:grid-cols-2">
          <div className="image-container flex justify-center mb-5">
            <Image
              className="rounded-lg"
              src="/about.jpg"
              alt="BG"
              width={400}
              height={400}
              priority={true}
            />
          </div>
          <div className="text-container text-left flex items-center">
            <div>
              {" "}
              <h1 className="text-xl font-bold pb-2">
                I am Mohammad Imran Hossain.
              </h1>
              <p className="text-lg md:text-xl mb-4 ">
                {" "}
                I am a Student of Daffodil International University. I am a
                Youtube Content Creator. My Home Town is Rangpur.I have a
                passion for singing. A lot of honours and awards have been
                bagged by me in singing competitions. Also, I have a passion for
                painting and loves to play with colours using my imagination.
              </p>
              <button className="bg-red-500 text-white px-3 py-1 rounded-lg ">
                Dowonload CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pages;
