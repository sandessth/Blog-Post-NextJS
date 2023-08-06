import axios from "axios";
import React, { useState, useEffect } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
function Display1() {
  const [blog, setBlog] = useState([]);

  console.log("body");
  const getBlogsData = async () => {
    try {
      const response = await axios.get(
        "https://cdn.contentful.com/spaces/1230rd9gaasm/entries?access_token=fE_PhTQQeBxvhq04c2wQXSoUgMWXuyAgNnvclCaoTOU&content_type=blog"
      );

      // Check if the response status is not in the 200-299 range (i.e., not OK)
      if (response.status < 200 || response.status >= 300) {
        console.log("Failed to load data");
        throw new Error("Failed to load data");
      }

      // Return the data from the response instead of using .json() method
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  const blogsdata = getBlogsData();
  return (
    <div className="flex justify-center">
      <div className="w-3/5 bg-slate-500/10 border-2 border-black/20 border-solid rounded p-10 m-10 ">
        <div className=" flex justify-center text-2xl text-blue-700/80 hover:text-blue-500/80">
          Featured Blogs:
        </div>
        <div>
          {blogsdata.items.map((item: any) => {
            const blogImage = blogsdata.includes.Asset.find(
              (img: any) => img.sys.id === item.fields.image.sys.id
            );
            const imageURL = blogImage.fields.file.url;
            return (
              <div
                key={blogsdata.sys.id}
                className="bg-gray-200 m-10 p-10 border border-2 border-black"
              >
                <h1 className="text-3xl mb-5">{item.fields.title}</h1>
                <p>{documentToReactComponents(item.fields.body)}</p>
                <img className="h-full" src={imageURL} />
              </div>
            );
          })}
        </div>
        {/* {blog.map((blogs) => (
          <div
            key={blogs.id}
            className="bg-slate-500/10 border-2 border-black/20 border-solid rounded p-2 m-2"
          >
            <div className="text-lg text-blue-600">{blogs.title}</div>
            <div className="text-sm text-blue-900">{blogs.content}</div>
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default Display1;
