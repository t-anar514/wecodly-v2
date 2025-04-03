import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[rgb(34 34 34)] text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold text-[#8857F6] mb-4">
            Бидний тухай
          </h3>
          <p className="text-sm">
            WeCodly бол мэдээллийн технологийн боловсролыг хүн бүрт хүртээмжтэй
            болгож, ирээдүйн хөгжлийн боломжийг нээх зорилготой байгууллага юм.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-xl font-bold text-[#8857F6] mb-4">Холбоосууд</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-[#8857F6] transition">
                Нүүр
              </Link>
            </li>

            <li>
              <Link href="/courses" className="hover:text-[#8857F6] transition">
                Сургалтууд
              </Link>
            </li>
            <li>
              <Link
                href="/podcasts"
                className="hover:text-[#8857F6] transition"
              >
                Подкастууд
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-bold text-[#8857F6] mb-4">
            Холбоо барих
          </h3>
          <ul className="space-y-2">
            <li>
              📧{" "}
              <a
                href="mailto:hello@wecodly.mn"
                className="hover:text-[#8857F6] transition"
              >
              wecodly@gmail.com
              </a>
            </li>
            <li>📍 Улаанбаатар, Монгол Улс</li>
          </ul>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.instagram.com/wecodly/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8857F6] transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.instagram.com/wecodly/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8857F6] transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.instagram.com/wecodly/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8857F6] transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://www.instagram.com/wecodly/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8857F6] transition"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center mt-8 text-sm text-gray-500">
        © {new Date().getFullYear()} WeCodly. Бүх эрх хуулиар хамгаалагдсан.
      </div>
    </footer>
  );
}
