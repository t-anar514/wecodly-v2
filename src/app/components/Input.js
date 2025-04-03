import React from "react";

export default function Input({ text, type }) {
  return (
    <div className="flex items-center justify-center w-[80%]">
      <div className="relative w-full">
        <input
          id="username"
          name="username"
          type={type}
          className="w-full border-b border-gray-300 py-1 focus:border-b-2 focus:border-[#8855F8] transition-colors focus:outline-none peer bg-inherit"
        />
        <label
          htmlFor="username"
          className="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-[#8855F8]"
        >
          {text}
        </label>
      </div>
    </div>
  );
}
