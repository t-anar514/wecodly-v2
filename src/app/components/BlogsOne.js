import React from "react";

export default function BlogsOne() {
  return (
    <div
      className="w-full h-96 bg-[#5E3CAC] bg-cover bg-center flex flex-col justify-center items-center gap-4 px-4"
      style={{
        backgroundImage: `url('https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5dc5fa119664681.60a2a57777d6a.gif')`,
      }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center w-full md:w-[75%] lg:w-[50%]">
        Компьютерийн ухааны мэдээ мэдээлэл
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-center">
        Мэдлэг олгох хэрэгтэй мэдээ, мэдээллийг та хүлээн авна уу
      </p>
    </div>
  );
}
