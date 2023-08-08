// import { BlogContext } from "@/context/context";
// import React, { useContext } from "react";

// function SearchBlog() {
//   const blogContext = useContext(BlogContext);

//   return (
//     <div>
//       {blogContext.items?.map((item: any) => {
//         const blogImage = blogContext.includes.Asset.filter(
//           (img: any) => img.sys.id === item.fields.image.sys.id
//         );
//         const blogAuthor = blogContext.includes.Entry.find(
//           (author: any) => author.sys.id === item.fields.blogauthor.sys.id
//         );
//         const imageURL = blogImage.fields.file.url;
//         const author = blogAuthor.fields.name;
//         return (
//           <div
//             key={blogContext.sys.id}
//             className="bg-gray-200 p-5 border-2 border-black/20 border-solid rounded m-5 drop-shadow-xl"
//           >
//             <h1 className="text-xl font-bold m-5 text-blue-800">
//               {item.fields.title}
//             </h1>
//             <div className="flex items-center mr-5 mt-5 flex-row-reverse">
//               <p className="text-xs text-blue-700 hover:text-blue-400">
//                 {author}
//               </p>
//               <img
//                 className=" mr-5 h-10 w-10 rounded-full border-2 border-black/10 border-solid hover:border-blue-500/50 "
//                 src={imageURL}
//               />
//             </div>
//             <p className="m-3 text-sm">
//               {documentToReactComponents(item.fields.body)}
//             </p>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default SearchBlog;
