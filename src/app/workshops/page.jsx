// pages/workshops.js
import Image from 'next/image';
import UpcomingWorkshops from '../components/UpcomingWorkshops'

const workshops = () => {
  return (
    <div className="bg-[#202020] min-h-screen text-white">
      {/* Workshops Overview */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-[#8857F6] mb-4 mt-20">Сургалтууд</h1>
          <p className="text-lg">
            Бид  орон нутгийн сургуулиудад мэдээллийн технологийн дадлагажсан сургалтуудыг хүргэж, хүүхэд залуусыг технологийн салбарт дур сонирхолтой болгохыг зорьж байна.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#8857F6] mb-6">Зурагуудаас</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Replace with your own images */}
            <Image src="/workshopImages/Ankh.png" alt="Workshop 1" width={400} height={300} className="w-[400px] h-[600px] bg-contain rounded-lg shadow-md" />
            <Image src="/workshopImages/Ana.png" alt="Workshop 2" width={400} height={300} className="w-[400px] h-[600px] bg-contain rounded-lg shadow-md" />
            <Image src="/workshopImages/Anarr.jpg" alt="Workshop 3" width={400} height={300} className="w-[400px] h-[600px] bg-contain rounded-lg shadow-md" />
          </div>
        </div>
      </section>

   
   
{/* <UpcomingWorkshops/> */}

      {/* Testimonials */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#8857F6] mb-6">Хүмүүсийн сэтгэгдэл</h2>
          <div className="space-y-4">
            <div className="bg-[#2A2A2A] p-6 rounded-lg shadow-md">
              <p className="italic">
                "Энэхүү сургалтад хамрагдсанаар би мэдээллийн технологийн салбарт илүү гүнзгий ойлголт авч, зөв чиглэлээр ахиц дэвшил гаргах үнэтэй заавар, зөвлөгөөг авж чадсан." 
                <span className="block mt-2 text-sm text-gray-400">Оюуны нахиа сургуулийн сурагч</span>
              </p>
            </div>
            <div className="bg-[#2A2A2A] p-6 rounded-lg shadow-md">
              <p className="italic">
                "Манай сургуульд мэдээллийн технологийн боловсролыг хүргэж байгаад WeCodly багт талархал илэрхийлье." 
                <span className="block mt-2 text-sm text-gray-400">- Оюуны нахиа сургуулийн багш</span>
              </p>
            </div>
            {/* Add more testimonials here */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default workshops;
