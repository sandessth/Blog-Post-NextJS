"use client";
import React from "react";
// import Image from "next/image";
import Motto from "./components/layout/motto";
import Display from "./components/layout/display-blog";
// import Display1 from "./components/layout/display-from-CMS";
import Header from "./components/layout/header";
// import Footer from "./components/layout/footer";
// import SideNav from "./components/layout/sidenav";

function Home() {
  return (
    <div>
      {/* <Header /> */}
      <Motto />
      <Display />
      {/* <Display1 /> */}
    </div>
  );
}

export default Home;
