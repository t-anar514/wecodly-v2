import Link from "next/link";

export default function commingSoon() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#202020] text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-[#8857F6] mb-4">
          Cургалтууд
          </h1>
          <p className="text-xl text-gray-300 mb-8">
          Сургалтууд маань тун удахгүй гарах болно!
          </p>
          <div className="relative inline-block">
            <Link href='https://www.instagram.com/wecodly/'>
            <button
              className="bg-[#8857F6] text-white py-3 px-6 rounded-lg shadow-lg text-lg font-semibold hover:bg-[#6E44D9] transition-all"
            >
              Бидэнтэй холбогдоорой
            </button></Link>
            {/* <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-[#8857F6] animate-pulse opacity-30"></div> */}
          </div>
        </div>
      </div>
    );
  }
  