import React from "react";
import Link from "next/link";

function Motto() {
  const token = localStorage.getItem("session-token");

  if (!token) {
    return (
      <div className="p-5 mb-72">
        <div className="text-2xl pb-2 text-slate-900/80 flex justify-center mt-10">
          Paint Your Thoughts With Words
        </div>

        <div className="text-xl text-slate-900/80 flex justify-center">
          Reflect, Share, Connect
        </div>
        <div className="text-sm m-4 text-slate-900/80 flex justify-center">
          <Link href="/blog">
            <button className="bg-yellow-400 p-2 rounded-md border-2 border-yellow-500 hover:bg-yellow-300 hover:border-yellow-400 back drop-shadow-xl">
              CREATE YOUR BLOG
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="p-5 mb-72">
      <div className="text-2xl pb-2 text-slate-900/80 flex justify-center mt-10">
        Paint Your Thoughts With Words
      </div>

      <div className="text-xl pb-2 text-slate-900/80 flex justify-center">
        Reflect, Share, Connect
      </div>
      <div className="flex justify-center mt-5">
        <div className="text-sm  pb-2 m-4 text-slate-900/80 ">
          <Link href="/blog">
            <button className="bg-yellow-400 p-2 rounded-md border-2 border-yellow-500 hover:bg-yellow-300 hover:border-yellow-400 back drop-shadow-xl">
              CREATE YOUR BLOG
            </button>
          </Link>
        </div>
        <div className="text-sm m-4 pb-2 mb-10 text-slate-900/80 flex justify-center">
          <Link href="/dashboard">
            <button className="bg-green-400 p-2 rounded-md border-2 border-green-500 hover:bg-green-300 hover:border-green-400 back drop-shadow-xl">
              GO TO DASHBOARD
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Motto;
