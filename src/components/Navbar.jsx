import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="mb-20 flex items-center justify-between py-6 px-4 shadow-md">
      {/* Desktop Menu */}
      <div className="hidden m-6 md:flex items-center justify-center w-full">
        <div className="flex items-center justify-center gap-8 text-xl">
        {['Home', 'Technologies', 'Experience', 'Projects', 'About Me', 'Contact Me'].map((item) => (
          <Link
            key={item}
            to={item.toLowerCase().replace(' ', '')}
            smooth={true}
            duration={500}
            className="relative cursor-pointer group hover:text-purple-400"
          >
            {item}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex md:hidden w-full justify-end">
        <button onClick={toggleMenu} className="text-3xl focus:outline-none">
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>
        {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white text-black shadow-md md:hidden flex flex-col items-center gap-8 py-6">
          {['Home', 'Technologies', 'Experience', 'Projects', 'About Me', 'Contact Me'].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase().replace(' ', '')}
              smooth={true}
              duration={500}
              className="relative cursor-pointer group hover:text-purple-400"
              onClick={toggleMenu}
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
        )}
      {/* <div className="m-8 flex items-center justify-center gap-8 text-xl">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer underline hover:text-purple-400"
        >
          Home
        </Link>
        <Link
          to="technologies"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-purple-400"
        >
          Technologies
        </Link>
        <Link
          to="experience"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-purple-400"
        >
          Experience
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-purple-400"
        >
          Projects
        </Link>
        <Link
          to="aboutme"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-purple-400"
        >
          About Me
        </Link>
        <Link
          to="contactme"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-purple-400"
        >
          Contact Me
        </Link>
      </div> */}
    </nav>
  );
};

export default Navbar;
