import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="flex space-x-4">
      <Link
        to="about"
        smooth={true}
        duration={500}
        className="cursor-pointer text-white"
      >
        About
      </Link>
      <Link
        to="work"
        smooth={true}
        offset={-50}
        duration={500}
        className="cursor-pointer text-white"
      >
        Work
      </Link>

      <Link
        to="contact"
        smooth={true}
        duration={500}
        className="cursor-pointer text-white"
      >
        Contact
      </Link>
    </nav>
  );
}
