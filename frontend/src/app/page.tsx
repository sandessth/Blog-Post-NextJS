"use client";
import React from "react";
// import Image from "next/image";
import Motto from "./components/layout/motto";
import Display from "./components/layout/display-blog";
import Display1 from "./components/layout/display-from-CMS";
// import SideNav from "./components/layout/sidenav";

function Home() {
  return (
    <div>
      <Motto />
      <Display />
      <Display1 />
    </div>
  );
}

export default Home;
