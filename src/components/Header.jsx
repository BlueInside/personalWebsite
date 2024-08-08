import Navbar from "./Navbar";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Header() {
  return (
    <header className="fixed z-20 w-full bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="hidden text-lg font-bold text-white sm:block">
          Karol Pulawski
        </div>
        <div className="flex gap-5 sm:gap-10">
          <a
            href={"https://github.com/BlueInside"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-600"
          >
            <FaGithub size={34} />
          </a>
          <a
            href={"https://www.linkedin.com/in/karol-pulawski-66712b1b6/"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-600"
          >
            <FaLinkedinIn size={34} />
          </a>
          <a
            href={"https://www.instagram.com/karolessence/"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-600"
          >
            <FaInstagram size={34} />
          </a>
        </div>

        <Navbar />
      </div>
    </header>
  );
}
