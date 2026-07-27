import Link from "next/link";
import React from "react";
import { FaBlog } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="glass relative overflow-hidden mt-20 border-t border-t-blue-500/20 shadow-[0_-10px_40px_rgba(59,130,246,0.05)] animate-fade-in-up">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="."
            className="flex text-blue-400 items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse dark:text-cyan-500 transition-transform duration-300 hover:scale-105"
          >
            <FaBlog className="text-5xl" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Belogoo
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 gap-6">
            <li>
              <Link href="/about" className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link
                href="privacyandpolicy"
                className="nav-link"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{" "}
          <a href="." className="nav-link">
            Belogoo™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
