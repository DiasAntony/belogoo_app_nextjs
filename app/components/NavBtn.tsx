"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeButton from "./ThemeButton";

interface LinkItem {
  id: number;
  link: string;
}

const NavBtn = () => {
  const [nav, setNav] = useState<boolean>(false);

  const currentPath = usePathname();

  const links: LinkItem[] = [
    { id: 2, link: "home" },
    { id: 4, link: "post" },
    { id: 3, link: "profile" },
  ];

  return (
    <>
      <ul className="hidden md:flex items-center gap-6">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className={`nav-link text-lg capitalize ${
              currentPath === `/${link}`
                ? "text-blue-500 dark:text-cyan-400 font-semibold"
                : ""
            }`}
          >
            <Link href={"/" + link}>
              {link}
            </Link>
          </li>
        ))}
        <li className="ml-4 transition-transform duration-300 hover:scale-110">
          <ThemeButton />
        </li>
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-50 text-gray-500 md:hidden transition-transform duration-300 hover:scale-110 active:scale-95"
      >
        {nav ? <FaTimes size={30} className="animate-fade-in" /> : <FaBars size={30} className="animate-fade-in" />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white dark:bg-slate-900 text-gray-500 animate-slide-down z-40 backdrop-blur-lg bg-opacity-95 dark:bg-opacity-95">
          {links.map(({ id, link }, index) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Link onClick={() => setNav(!nav)} href={link} className="hover:text-blue-500 dark:hover:text-cyan-400 transition-colors duration-300">
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default NavBtn;
