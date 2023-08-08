"use client";
import React from "react";
import Motto from "./components/layout/motto";
import Display from "./components/layout/display-blog";
import Display1 from "./components/layout/display-from-CMS";
import Header from "./components/layout/header";

function Home() {
  return (
    <div>
      <Header />
      <Motto />
      <Display />
      <Display1 />
    </div>
  );
}

export default Home;
