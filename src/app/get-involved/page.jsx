// pages/get-involved.js
import Head from 'next/head';
import Partners from "../components/Partners"

export default function GetInvolved() {
  return (
    <>
      <Head>
        <title>Оролцох | WeCodly</title>
        <meta name="description" content="WeCodly-д IT боловсролыг түгээх үйлсэд нэгдэж, сайн дурын ажил хийх, хамтран ажиллах эсвэл хандив өргөхийг урьж байна." />
      </Head>
      <main className="bg-[#202020] min-h-screen">
        <section className="max-w-7xl mx-auto py-12 px-6">
          {/* Page Title */}
          <h1 className="text-4xl font-bold text-center text-[#8857F6] mb-8 mt-16">
            WeCodly-д нэгдэцгээе
          </h1>

          {/* Volunteer Opportunities */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#FFFFFF] mb-4">
              Сайн дурын ажил хийх боломжууд
            </h2>
            <p className="text-[#E0E0E0] mb-6">
              Та өөрийн цаг зав, ур чадвараа хуваалцан бидний үйл ажиллагаанд нэгдээрэй. Бид дараах чиглэлээр сайн дурын ажилтан хайж байна:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#E0E0E0]">
              <li><strong>Хичээлийн зохиогч:</strong> Анхан болон ахисан түвшний IT сургалтуудыг боловсруулж гаргах.</li>
              <li><strong>Сургалтын туслах:</strong> Орон нутгийн сургуулиудад зохион байгуулах практик сургалтуудад туслах.</li>
              <li><strong>Подкаст засварлагч:</strong> IT салбарын мэргэжилтнүүдтэй хийсэн подкастын дугааруудыг засварлах, бэлтгэх.</li>
            </ul>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf4nkxhOKQLNdBgIwwKXMDn7pY7LLUYwG_ERl9enPQq2PNEoA/viewform?usp=sharing"
              className="mt-4 inline-block bg-[#8857F6] text-[#FFFFFF] px-6 py-2 rounded-lg shadow hover:bg-[#6f47d6] transition"
            >
              Сайн дурын ажил хийх
            </a>
          </div>

          {/* Partner with Us */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#FFFFFF] mb-4">
              Хамтран ажиллах
            </h2>
            <p className="text-[#E0E0E0] mb-6">
              IT боловсролын төлөөх хүсэл зорилгыг маань дэмжиж буй сургууль, компани, хувь хүмүүстэй хамтран ажиллахад нээлттэй байна. Таны хамтын ажиллагаа бидэнд дараах боломжийг бүрдүүлнэ:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#E0E0E0]">
              <li>Орон нутгийн сургуулиудад илүү олон сургалт зохион байгуулах.</li>
              <li>Онлайн сургалтуудыг өргөжүүлэх.</li>
              <li>Оюутнуудыг IT мэргэжилтнүүдтэй холбох.</li>
            </ul>
            <a
              href="https://forms.gle/4Z46CmiH2y86PVqh7"
              className="mt-4 inline-block bg-[#FFFFFF] text-[#202020] px-6 py-2 rounded-lg shadow hover:bg-gray-200 transition"
            >
              Хамтран ажиллах
            </a>
          </div>
<Partners/>
          {/* Donate */}
          {/* <div>
            <h2 className="text-2xl font-semibold text-[#FFFFFF] mb-4">
              Хандив өргөх
            </h2>
            <p className="text-[#E0E0E0] mb-6">
              Монгол орны оюутнуудын IT боловсролыг үнэгүй хүргэх зорилгыг маань дэмжээрэй. Таны хандив бидэнд дараах ажлуудыг хийхэд тусална:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#E0E0E0]">
              <li>Чанартай онлайн сургалтуудыг боловсруулах.</li>
              <li>Орон нутгийн сургуулиудад сургалт зохион байгуулах.</li>
              <li>Сэдэл өгөх подкастын дугааруудыг гаргах.</li>
            </ul>
            <a
              href="/donate"
              className="mt-4 inline-block bg-[#8857F6] text-[#FFFFFF] px-6 py-2 rounded-lg shadow hover:bg-[#6f47d6] transition"
            >
              Хандив өгөх
            </a>
          </div> */}
        </section>
      </main>
    </>
  );
}
