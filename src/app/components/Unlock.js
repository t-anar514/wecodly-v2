import React from "react";
import Button from "./Button";

export default function Unlock() {
  return (
    <div className="w-screen h-[60vh] bg-gradient-to-r from-[#1a1a1a] to-[#333] text-white flex justify-center items-center">
      <div className="w-[90%] md:w-[60%] lg:w-[40%] h-full flex justify-center items-center flex-col gap-6 p-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight">
          Вэб хөгжүүлэлтийн чадвараа нээгээрэй
        </h1>
        <p className="text-center text-lg md:text-xl">
          Манай онлайн сургалтад нэгдэж, HTML, CSS, Wix-ийг өөрийн хурдаар сураарай.
        </p>
        <div className="flex justify-center gap-4 rounded-full">
          <Button text="Манай сувгийг дагаарай"></Button>
        </div>
      </div>
    </div>
  );
}
