import React from 'react';
import { Link } from 'react-scroll';
import logo from "../assets/kevinRushLogo.png";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-8 text-xl">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-cyan-400"
        >
          Home
        </Link>
        <Link
          to="technologies"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-cyan-400"
        >
          Technologies
        </Link>
        <Link
          to="experience"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-cyan-400"
        >
          Experience
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-cyan-400"
        >
          Projects
        </Link>
        <Link
          to="aboutme"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-cyan-400"
        >
          About Me
        </Link>
        <Link
          to="contactme"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-cyan-400"
        >
          Contact Me
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
