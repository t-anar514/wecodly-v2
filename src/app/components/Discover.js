import React from "react";
import Logo from "./Logo";

export default function Discover() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#1a1a1a] text-white">
      <div className="w-[90%] h-[90%] flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-start p-6 md:p-10 gap-6">
          <h1 className="text-3xl md:text-4xl font-bold text-justify">
            Бид юу хийдэг вэ?
          </h1>
          <p className="text-md md:text-lg font-light text-justify">
            Энэхүү байгууллага нь Монголын бүх сурагчдад ижил боломжийг бүрдүүлэх, технологийн салбарт амжилт гаргах шаардлагатай мэдээлэл, нөөцөөр хангах зорилготой.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 text-sm text-justify">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#8855f8"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="h-20 gap-2 flex justify-center items-center">
                <strong className="text-lg">Сургах </strong>- Суралцахыг хүссэн үедээ
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm text-justify">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#8855f8"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="h-20 gap-2 flex justify-center items-center">
                <strong className="text-lg">Хөгжүүлэх </strong>- Холбогдохыг хүссэн үедээ
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm text-justify">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#8855f8"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="h-20 gap-2 flex justify-center items-center">
                <strong className="text-lg">Сүлжээнд холбох </strong>- Холбоо барих шаардлагатай үедээ
              </span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-full flex justify-center items-center p-10">
          <div
            className="w-full h-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://mir-s3-cdn-cf.behance.net/project_modules/fs/12026d121887171.60cf00c969d9b.gif')",
            }}
            aria-label="Сүхбаатарын талбай, Улаанбаатар, Монгол"
          />
        </div>
      </div>
    </div>
  );
}
