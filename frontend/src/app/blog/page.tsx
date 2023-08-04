"use client";
import React from "react";
import Create from "./components/new-blog";
import SideNav from "../components/layout/sidenav";
import Link from "next/link";

function Blog() {
  const token = localStorage.getItem("session-token");

  if (!token) {
    return (
      <>
        <div className="h-screen">
          <div className=" flex justify-center p-5 pt-16">
            <div className="w-1/2  items-center border-2 border-black border-solid rounded bg-black/10 p-5">
              <div className="flex justify-center mb-5">
                <p>Sorry! Please&nbsp;</p>
                <Link
                  href="/signin"
                  className="text-blue-600 hover:text-indigo-400"
                >
                  Sign In
                </Link>
                <p>&nbsp;to start painting your words.</p>
              </div>
              <div className="flex justify-center mt-5">
                <p>Or, you could create an account for free here&nbsp;</p>
                <Link
                  href="/signup"
                  className="text-blue-600 hover:text-indigo-400"
                >
                  Create Account
                </Link>
                <p>.</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div>
        <Create />
      </div>
    </>
  );
}

export default Blog;
