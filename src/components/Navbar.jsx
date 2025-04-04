import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } fixed top-0 z-20 flex w-full items-center py-5 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => window.scrollTo(0, 0)}
        >
          <img src="/assets/logo.png" alt="logo" className="h-9 w-9 object-contain" />
          <p className="flex cursor-pointer text-[18px] font-bold text-white ">
            Ritesh Pathak&nbsp;
            {/* <span className="hidden sm:block"> | MERN Stack Developer</span> */}
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;