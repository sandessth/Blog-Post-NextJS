import Link from "next/link";
import React from "react";
import { FiLogIn } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
function Header() {
  return (
    <div className="sticky top-0 z-50 bg-gradient-to-b from-blue-200 to-blue-100/50 backdrop-blur-sm ">
      <nav className="  p-2 px-5 text-lg">
        <div className="flex justify-between">
          <div>
            <Link
              href="/"
              className="text-slate-900/80 hover:text-blue-500 hover:backdrop-lg text-3xl"
            >
              VividVerse
            </Link>
          </div>
          <div className="flex justify-between items-center">
            <Link
              href="/blog"
              className="text-slate-900/80 hover:text-blue-500 hover:backdrop-lg group relative"
            >
              <FiSearch />
              <div className="hidden text-sm text-white group-hover:block absolute top-8 right-0 bg-gray-500/80">
                Search
              </div>
            </Link>
            <p className="text-slate-900/80  hover:backdrop-lg px-3">|</p>
            <Link
              href="/signin"
              className="text-slate-900/80 text-xl hover:text-blue-500 hover:backdrop-lg group relative"
            >
              <FiLogIn />
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
