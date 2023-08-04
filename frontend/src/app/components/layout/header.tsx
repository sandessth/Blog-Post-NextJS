"use client";
// import Link from "next/link";
// import React, { useEffect } from "react";
// import { FaSignInAlt } from "react-icons/fa";
// import { FaSearch } from "react-icons/fa";
import NavBarIn from "./logged-in-navbar";
// import NavBarOut from "./logged-out-navbar";
function Header() {
  // const token = localStorage.getItem("session-token");

  // if (!token) {
  //   return <NavBarOut />;
  // } else {
  return <NavBarIn />;
  // }
}

export default Header;
