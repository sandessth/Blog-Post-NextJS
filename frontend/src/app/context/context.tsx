"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const BlogContext = createContext([]);

function BlogProvider({ children }: { children: React.ReactNode }) {
  const [blog, setBlog] = useState<unknown[]>([]);

  console.log("context");
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
  return <BlogContext.Provider value={blog}>{children}</BlogContext.Provider>;
}

export default BlogProvider;
