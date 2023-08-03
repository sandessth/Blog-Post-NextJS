import React from "react";

function Motto() {
  return (
    <div className="p-5 mb-72 h-screen">
      <div className="text-2xl pb-2 text-slate-900/80 flex justify-center mt-10">
        Paint Your Thoughts With Words
      </div>

      <div className="text-xl text-slate-900/80 flex justify-center">
        Reflect, Share, Connect
      </div>
      <div className="text-sm m-4 text-slate-900/80 flex justify-center">
        <button className="bg-yellow-400 p-2 rounded-md border-2 border-yellow-500 hover:bg-yellow-300 hover:border-yellow-400 back drop-shadow-xl">
          CREATE YOUR BLOG
        </button>
      </div>
    </div>
  );
}

export default Motto;
