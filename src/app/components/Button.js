import React from "react";

export default function Button({ text, href }) {
  return (
    <a className="" href={href}>
      <div>
        <div
          className="max-w-32 bg-transparent items-center justify-center flex border-2 border-[#8855F8] shadow-lg hover:bg-[#8855F8]
  text-[#8855F8] hover:text-white duration-300 cursor-pointer active:scale-[0.98]"
        >
          <button className="px-5 py-2 ">{text}</button>
        </div>
      </div>
    </a>
  );
}
