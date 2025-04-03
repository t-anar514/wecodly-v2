import React from "react";
import Button from "./Button";

export default function Course() {
  return (
    <div className="w-screen h-[80vh] flex justify-center items-center bg-[#1a1a1a] text-white">
      <div className="w-[90%] h-[80%] flex flex-col justify-center items-center">
        <div className="w-full h-1/3 flex flex-col md:flex-row justify-center items-center">
          <div className="w-full md:w-1/2 h-full flex justify-center items-start text-5xl font-bold md:text-5xl font-bold p-6 md:p-10 text-center md:text-left">
            <h1>Технологийн салбарын гүүр</h1>
          </div>
          <div className="w-full md:w-1/2 h-full flex flex-col justify-start items-start p-6 md:p-10 gap-4 text-center md:text-left">
            <p className="text-lg md:text-xl">
            Програмчлалын боловсролыг хүн бүрт хүртээмжтэй болгох
            </p>
          
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center p-10">
          <div className="w-full h-full object-cover  bg-[url('https://mir-s3-cdn-cf.behance.net/project_modules/fs/5405f5175069673.64b59470c5cb5.gif')] bg-cover bg-center bg-no-repeat" />
        </div>
      </div>
    </div>
  );
}
