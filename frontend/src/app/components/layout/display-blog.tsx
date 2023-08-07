import { BlogContext } from "@/context/context";
// import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
// import { GiBarbedSun } from "react-icons/Gi";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function Display() {
  // const [blog, setBlog] = useState([]);
  const blogContext = useContext(BlogContext);
  console.log(blogContext);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:4000/blog")
  //     .then((response) => {
  //       console.log(response.data);
  //       setBlog(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error.response);
  //     });
  // }, []);
  return (
    <div className="flex justify-center">
      <div className="w-3/5 bg-slate-500/10 border-2 border-black/30 border-solid rounded p-10 m-10 ">
        <div className=" flex justify-center text-2xl hover:text-blue-500/80 mb-5">
          Featured Blogs:
        </div>
        <div>
          {blogContext.items?.map((item: any) => {
            const blogImage = blogContext.includes.Asset.find(
              (img: any) => img.sys.id === item.fields.image.sys.id
            );
            const blogAuthor = blogContext.includes.Entry.find(
              (author: any) => author.sys.id === item.fields.blogauthor.sys.id
            );
            const imageURL = blogImage.fields.file.url;
            const author = blogAuthor.fields.name;
            return (
              <div
                key={blogContext.sys.id}
                className="bg-gray-200 p-5 border-2 border-black/20 border-solid rounded m-5 drop-shadow-xl"
              >
                <h1 className="text-xl font-bold m-5 text-blue-800">
                  {item.fields.title}
                </h1>
                <div className="flex items-center mr-5 mt-5 flex-row-reverse">
                  <p className="text-xs text-blue-700 hover:text-blue-400">
                    {author}
                  </p>
                  <img
                    className=" mr-5 h-10 w-10 rounded-full border-2 border-black/10 border-solid hover:border-blue-500/50 "
                    src={imageURL}
                  />
                </div>
                <p className="m-3 text-sm">
                  {documentToReactComponents(item.fields.body)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    // <>
    //   <div className="flex justify-center">
    //     <div className="w-3/5 bg-slate-500/10 border-2 border-black/20 border-solid rounded p-10 m-10 ">
    //       <div className=" flex justify-center text-2xl text-blue-700/80 hover:text-blue-500/80 font-mono">
    //         <GiBarbedSun />
    //         .... Featured Blogs.... <GiBarbedSun />
    //       </div>
    //       {blog.map((blogs) => (
    //         <div
    //           key={blogs.id}
    //           className="bg-slate-500/10 border-2 border-black/20 border-solid rounded p-4 m-2"
    //         >
    //           <div className="text-lg text-blue-600 pb-2">{blogs.title}</div>
    //           <hr />
    //           <div className="text-sm text-blue-900 mt-2">{blogs.content}</div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </>
  );
}

export default Display;
