import { Jura } from "@next/font/google";
import "./global.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const jura = Jura({
  weight: ["400", "500", "600", "700"], // Add the weights you want to use
  subsets: ["latin"], // Add other subsets if needed
});

export const metadata = {
  title: "We Codly",
  description: "Let Us Code Everything",
};

export default function RootLayout({ children }) {
  return (
    <html lang="mn">
      <body className="bg-[#202020] text-[#FFFFFF]">
        <Header />
        <div className="w-20 h-20"></div>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
