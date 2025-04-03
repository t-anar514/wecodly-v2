import React from "react";
import Logo from "./Logo";

export default function Advantage() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#1a1a1a] text-white">
      <div className="w-[90%] h-[90%] flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
        <div className="w-full md:w-1/2 h-full flex justify-center items-center p-10">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://i.pinimg.com/enabled_lo_mid/736x/62/13/e3/6213e3ecab746d531cb1276f2a1e5697.jpg')",
            }}
            aria-label="Сүхбаатарын талбай, Улаанбаатар, Монгол"
          />
        </div>
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center p-6 md:p-10 gap-10">
          <h1 className="text-3xl font-black">Бид хэрхэн ажилладаг вэ?</h1>
          <div className="h-36 p-10 w-full flex justify-center items-between flex-col gap-6 border-l-[1px] border-purple">
            <h1 className="text-xl md:text-2xl font-bold text-justify">
              Практик суралцахуй
            </h1>
            <p className="text-xs md:text-sm font-light text-justify">
              Манай код бичих сургалтууд зөвхөн суралцахаар хязгаарлагдахгүй. 
              Практик ажиллагаа бол манай хамтын ажиллагааны чухал хэсэг. 
              Сурагчид удирдамж бүхий менторын хөтөлбөрт хамрагдаж, олж авсан 
              мэдлэгээ ашиглан багийн төсөлд хамтран оролцдог.
            </p>
          </div>
          <div className="h-36 p-10 w-full flex justify-center items-between flex-col gap-6">
            <h1 className="text-xl md:text-2xl font-bold text-justify">
              Олон нийтийн оролцоо
            </h1>
            <p className="text-xs md:text-sm font-light text-justify">
              Манай нэрнээс ч харагдаж байгаачлан бид суралцаж, хөгжихөд бэлэн 
              технологид дурлагчдын хамт олон юм. Сурагчид сард нэг удаа 
              зохион байгуулагддаг олон нийтийн арга хэмжээнүүдэд, жишээлбэл, 
              хакатон, код бичих тэмцээн зэрэг арга хэмжээнүүдэд оролцож, 
              амжилт гаргах, шагнал авах боломжтой.
            </p>
          </div>{" "}
          <div className="h-36 p-10 w-full flex justify-center items-between flex-col gap-6">
            <h1 className="text-xl md:text-2xl font-bold text-justify mt-8">
              Зөвлөгөө & Холбоо
            </h1>
            <p className="text-xs md:text-sm font-light text-justify">
              Манай хамт олон гишүүдийг салбарын мэргэжилтнүүдтэй эвент, 
              сургалтуудаар дамжуулан холбодог. Ахисан шатны код бичигчид 
              дадлагын ажлууд олж авах боломжтой ба их сургуулийн мэдээллийн 
              уулзалтуудаар ахлах ангийн сурагчдад дэлхий даяарх шилдэг 
              технологийн бакалаврын хөтөлбөрүүдэд элсэхэд тусалдаг.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
