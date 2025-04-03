"use client";
import React from "react";

export default function Courses() {
  return (
    <div className="w-full h-40 bg-[#5E3CAC] flex justify-around items-center">
      <div className="flex flex-col justify-center items-start gap-4">
        <h1 className="text-6xl font-bold">Програмчлалыг эхнээс нь</h1>
        <p className="text-md font-md">
          Компьютерийн хэрэглээг эхнээс нь дуустал
        </p>
      </div>
      <img
        // src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/96cbe843380921.57ecdf7877c3e.gif"
        className="h-4/5 w-auto"
      ></img>
    </div>
  );
}
