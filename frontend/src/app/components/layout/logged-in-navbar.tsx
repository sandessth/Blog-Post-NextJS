"use client";
import Link from "next/link";
import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import NavBar from "./logged-out-navbar";
import { useNavigate } from "react-router-dom";
import { useRouter } from "next/navigation";

function NavBarIn() {
  const router = useRouter();
  const HandleLogout = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    localStorage.removeItem("session-token");
    router.push("/signin");
  };
  return (
    <div className="sticky top-0 z-50 bg-gradient-to-b from-blue-200 to-blue-100/50 backdrop-blur-sm px-3 ">
      <nav className="  px-2 px-5 text-lg">
        <div className="flex justify-between">
          <div>
            <Link
              href="/"
              className="text-slate-900/80 hover:text-blue-500 hover:backdrop-lg text-lg font-bold"
            >
              <div className="flex">
                <div className="text-7xl">V</div>
                <div>
                  <div className="pt-2 pl-2">IVID</div>
                  <div>ERSE</div>
                </div>
              </div>
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
              onClick={HandleLogout}
            >
              <FaSignOutAlt />
              <div className="hidden text-sm  text-white group-hover:block absolute top-8 right-0 bg-gray-500/80">
                Sign Out
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBarIn;
