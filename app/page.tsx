import React from "react";
import "../styles/globals.css";
import css from "./home.module.css";
import BG from "../public/imran-vai/bg.jpg";
import Image from "next/image";
const Pages = () => {
  return (
    <div
      className={`${css.bg} text-white backdrop-blur-sm px-16 pt-10`}
    >
      
      <h1 className="text-3xl font-bold tracking-widest">Hi There!</h1>
      <h1 className="text-3xl font-bold ">I am Imran Hossain</h1>
      <p>I am student of Daffodil Internation al University</p>
    </div>
  );
};

export default Pages;
