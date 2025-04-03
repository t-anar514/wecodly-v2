import Image from 'next/image';
import Link from 'next/link';

export default function Partners() {
    return (
      <section className="py-16 bg-[#202020] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Бид шилдэг түншүүдтэй ажилладаг</h2>
            <p className="text-lg text-gray-400">
              Бид одоогоор дараах байгууллагуудтай хамтран ажиллаж байна. Тэдгээрийн тусламжтайгаар таны зорилгод
              хамгийн сайн тохирох шийдлүүдийг олох болно.
            </p>
          </div>
          <div className="flex  justify-center items-center gap-6 my-20">
            {/* Partner 1 */}
            <div className="flex items-center justify-center w-40 h-20">
                <Link href='https://cisv.org/'>
              <Image
                src="/logo/CISV.png" // Path relative to the public folder
                alt="Partner 1 Logo"
                width={160}              // Specify width
                height={80}              // Specify height
                className="object-contain"
              /></Link>
            </div>
        
            <div className="flex items-center justify-center w-40 h-20">
                <Link href='https://nhs.edu.mn/'>
              <Image
                 src="/logo/Nest.png" // Path relative to the public folder
                 alt="Partner 1 Logo"
                 width={160}              // Specify width
                 height={80}              // Specify height
                 className="object-contain"
              /></Link>
            </div>
          </div>
          <div className="text-center mt-10">
            <button className="px-6 py-3 border border-[#8857F6] text-[#8857F6] rounded-md hover:bg-[#8857F6] hover:text-white transition">
              Дэлгэрэнгүй унших
            </button>
          </div>
        </div>
      </section>
    );
  }
  