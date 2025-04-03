import Link from "next/link";
import Button from "./Button";
import Image from "next/image";

export default function About() {
    return (
      <div className="min-h-screen bg-[#202020] text-white px-6 py-12">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-[#8857F6] mb-4">Бидний тухай</h1>
          <p className="text-lg text-gray-300">
            WeCodly бол технологийг хүн бүрт хүртээмжтэй болгох, мэдээллийн технологийн боловсролыг сурталчлах зорилготой ашгийн бус байгууллага юм.
          </p>
        </div>
  
        {/* Mission and Vision */}
        <div className="mt-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-[#2A2A2A] p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-[#8857F6] mb-4">Эрхэм зорилго</h2>
            <p className="text-gray-300">
              Манай эрхэм зорилго бол хүн бүрт мэдээллийн технологийн боловсрол олгох, хөгжүүлэлтийн мэдлэгийг хязгааргүй боломжууд болгон хувиргах явдал юм.
            </p>
          </div>
          <div className="bg-[#2A2A2A] p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-[#8857F6] mb-4">Алсын хараа</h2>
            <p className="text-gray-300">
              Бидний алсын хараа бол технологийн салбарын оролцоог нэмэгдүүлж, бүх нийтийн оролцоог хангасан илүү шударга, хүлээн зөвшөөрөгдсөн дэлхий бүтээхэд хувь нэмрээ оруулах явдал юм.
            </p>
          </div>
        </div>
  
        {/* Key Values Section */}
        <div className="mt-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#8857F6] mb-6">Үнэт зүйлс</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#2A2A2A] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-2">Инноваци</h3>
              <p className="text-gray-300">
                Бид технологийн салбарт шинэ санаа, шийдлүүдийг эрэлхийлдэг.
              </p>
            </div>
            <div className="bg-[#2A2A2A] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-2">Тэгш байдал</h3>
              <p className="text-gray-300">
                Хүн бүрт тэгш боломж олгож, хөгжлийн хурдаа нэмэгдүүлнэ.
              </p>
            </div>
            <div className="bg-[#2A2A2A] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-2">Хамтын ажиллагаа</h3>
              <p className="text-gray-300">
                Бид хамтдаа өсөж хөгжихөд үнэнч сэтгэлээр ажилладаг.
              </p>
            </div>
          </div>
        </div>
  
        {/* Team Section */}
        <div className="mt-16 text-center max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#8857F6] mb-6">Манай баг</h2>
          <p className="text-lg text-gray-300 mb-8">
            Манай багийн гишүүд өөрсдийн хүсэл тэмүүлэл, мэргэжлийн ур чадвараар ирээдүйд эерэг нөлөө үзүүлэхийг зорьдог.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href='https://anar.vercel.app/'>
            <div className="bg-[#2A2A2A] rounded-lg p-6 shadow-lg ">
              {/* <div className="w-24 h-24 mx-auto bg-[#8857F6] "></div> */}
              <div className="w-full flex justify-center"> <Image width={200} height={200} src="/profile/Anar.jpg"
               className="rounded-lg mb-4 object-cover w-[200px] h-[200px]"
               /></div>
            
              <h3 className="text-xl font-semibold text-white mb-2">Анар</h3>
              <p className="text-gray-300">Үүсгэн байгуулагч, багш, вэб хөгжүүлэгч</p>
            </div></Link>
            {/* <div className="bg-[#2A2A2A] p-6 rounded-lg shadow-lg">
              <div className="w-24 h-24 mx-auto bg-[#8857F6] rounded-full mb-4"></div>
              <h3 className="text-xl font-semibold text-white mb-2">Наба</h3>
              <p classNa
              me="text-gray-300">Үүрэг</p>
            </div> */}
            <Link href='https://www.instagram.com/ankh_uchrl/'>
            <div className="bg-[#2A2A2A] p-6 rounded-lg shadow-lg">
            <div className="w-full flex justify-center"> <Image width={200} height={200} src="/profile/ANkh.png"
            className="rounded-lg mb-4 object-cover w-[200px] h-[200px]"
             /></div>
            
              <h3 className="text-xl font-semibold text-white mb-2">Анх-Учрал</h3>
              <p className="text-gray-300">Үүсгэн байгуулагч,Маркетингийн менежер</p>
            </div></Link>
            <Link href='oxterhal.vercel.app'>
            <div className="bg-[#2A2A2A] p-6 rounded-lg shadow-lg">
            <div className="w-full flex justify-center"> <Image width={200} height={100} src="/profile/PO.png" 
           className="rounded-lg mb-4 object-cover w-[200px] h-[200px]"
            /></div>
              <h3 className="text-xl font-semibold text-white mb-2">Баттөгс</h3>
              <p className="text-gray-300">Үүсгэн байгуулагч, багш, вэб хөгжүүлэгч</p>
            </div></Link>
          </div>
        </div>
        <div className=" w-full  flex justify-evenly mt-12">
       
          {/* <Button text="Бүрэн гишүүний танилцуулга"></Button> */}
          <Button href="/get-involved" text="Манай багд нэгдэх"></Button>
       
      </div> 
      </div>
    );
  }
  