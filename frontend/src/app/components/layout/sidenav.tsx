import React from "react";
import { useState } from "react";
import { FaGreaterThan } from "react-icons/fa";

function SideNav() {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div
        className={`${open ? "w-72" : "w-16"} h-screen bg-white/30 relative`}
      >
        <div className="absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-black p-2 pr-5 bg-gray-400">
          <FaGreaterThan />
        </div>
      </div>
    </>
  );
}

export default SideNav;
