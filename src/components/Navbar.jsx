import { Link } from 'react-scroll';

export default function Navbar() {
  return (
    <nav className="flex space-x-4">
      <Link
        to="home"
        smooth={true}
        duration={500}
        className="text-white cursor-pointer"
      >
        Home
      </Link>
      <Link
        to="work"
        smooth={true}
        duration={500}
        className="text-white cursor-pointer"
      >
        Work
      </Link>
      <Link
        to="about"
        smooth={true}
        duration={500}
        className="text-white cursor-pointer"
      >
        About
      </Link>
      <Link
        to="contact"
        smooth={true}
        duration={500}
        className="text-white cursor-pointer"
      >
        Contact
      </Link>
    </nav>
  );in app
}
