import React from "react";
import { FaBlog } from "react-icons/fa6";
import NavBtn from "./NavBtn";
import Link from "next/link";

const Header: React.FC = async () => {
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 lg:px-8 glass fixed top-0 z-50 transition-all duration-300 animate-slide-down">
      <div className="flex flex-row items-center gap-3">
        <h1 className="text-5xl text-blue-400 dark:text-cyan-500 font-signature ml-2 transition-transform duration-300 hover:scale-110 hover:text-blue-500 dark:hover:text-cyan-400">
          <Link
            href="/"
          >
            {/* Logo */}
            <FaBlog />
          </Link>
        </h1>
      </div>
      <NavBtn />
    </div>
  );
};

export default Header;
