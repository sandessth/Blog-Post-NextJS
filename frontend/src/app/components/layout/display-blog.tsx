import axios from "axios";
import React, { useState, useEffect } from "react";

function Display() {
  const [blog, setBlog] = useState([]);
  console.log("body");
  useEffect(() => {
    axios
      .get("http://localhost:4000/blog")
      .then((response) => {
        console.log(response.data);
        setBlog(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);
  return (
    <div className="bg-slate-500/10 border-2 border-black/20 border-solid rounded p-10 m-10">
      <div className=" flex justify-center text-2xl text-blue-700/80 hover:text-blue-500/80">
        Featured Blogs:
      </div>
      {blog.map((blogs) => (
        <div
          key={blogs.id}
          className="bg-slate-500/10 border-2 border-black/20 border-solid rounded p-2 m-2"
        >
          <div>{blogs.title}</div>
          <div>{blogs.content}</div>
        </div>
      ))}
    </div>
  );
}

export default Display;
