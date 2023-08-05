"use client";
import React from "react";
// import Image from "next/image";
import Motto from "./components/layout/motto";
import Display from "./components/layout/display-blog";
// import SideNav from "./components/layout/sidenav";

function Home() {
  return (
    <div>
      <Motto />
      <Display />
    </div>
  );
}

export default Home;
