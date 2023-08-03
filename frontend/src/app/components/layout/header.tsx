import Link from "next/link";
import React from "react";
import { FaSignInAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
function Header() {
  return (
    <div className="sticky top-0 z-50 bg-gradient-to-b from-blue-200 to-blue-100/50 backdrop-blur-sm p-3 ">
      <nav className="  p-2 px-5 text-lg">
        <div className="flex justify-between">
          <div>
            <Link
              href="/"
              className="text-slate-900/80 hover:text-blue-500 hover:backdrop-lg text-3xl font-bold"
            >
              VividVerse
            </Link>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center font-bold gap-6">
              <Link
                href="/blog"
                className="text-slate-900/80 hover:text-blue-500 hover:backdrop-lg group relative"
              >
                About
              </Link>

              <Link
                href="/blog"
                className="text-slate-900/80 hover:text-blue-500 hover:backdrop-lg group relative"
              >
                Newsletter
              </Link>

              <Link
                href="/blog"
                className="text-slate-900/80 hover:text-blue-500 hover:backdrop-lg group relative"
              >
                Contact
              </Link>
            </div>
            <Link
              href="/blog"
              className="text-slate-900/80 hover:text-blue-500 hover:backdrop-lg group relative pl-16"
            >
              <FaSearch />
              <div className="hidden text-sm text-white group-hover:block absolute top-8 right-0 bg-gray-500/80">
                Search
              </div>
            </Link>
            <p className="text-slate-900/80  hover:backdrop-lg px-3">|</p>
            <Link
              href="/signin"
              className="text-slate-900/80 text-xl hover:text-blue-500 hover:backdrop-lg group relative"
            >
              <FaSignInAlt />
              <div className="hidden text-sm  text-white group-hover:block absolute top-8 right-0 bg-gray-500/80">
                SignIn
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
