import axios from "axios";
import React, { useState, useEffect } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
function Display1() {
  const [blog, setBlog] = useState<unknown[]>([]);

  console.log("body");
  useEffect(() => {
    const getBlogsData = async () => {
      try {
        const response = await axios.get(
          "https://cdn.contentful.com/spaces/1230rd9gaasm/entries?access_token=fE_PhTQQeBxvhq04c2wQXSoUgMWXuyAgNnvclCaoTOU&content_type=blog"
        );
        if (response.status < 200 || response.status >= 300) {
          console.log("Failed to load data");
          throw new Error("Failed to load data");
        }
        console.log(response.data);

        setBlog(response.data);
        console.log(blog);
      } catch (err) {
        console.log(err);
      }
    };
    getBlogsData();
  }, []);
  return (
    <div className="flex justify-center">
      <div className="w-3/5 bg-slate-500/10 border-2 border-black/20 border-solid rounded p-10 m-10 ">
        <div className=" flex justify-center text-2xl text-blue-700/80 hover:text-blue-500/80">
          Featured Blogs:
        </div>
        <div>
          {blog.items?.map((item: any) => {
            const blogImage = blog.includes.Asset.find(
              (img: any) => img.sys.id === item.fields.image.sys.id
            );
            const imageURL = blogImage.fields.file.url;
            return (
              <div
                key={blog.sys.id}
                className="bg-gray-200 m-10 p-10 border border-2 border-black"
              >
                <h1 className="text-3xl mb-5">{item.fields.title}</h1>
                <p>{documentToReactComponents(item.fields.body)}</p>
                <img className="h-full" src={imageURL} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Display1;
