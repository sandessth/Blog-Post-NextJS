import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
const getBlogsData = async () => {
  try {
    const blogsData = await fetch(
      `https://cdn.contentful.com/spaces/1230rd9gaasm/entries?access_token=fE_PhTQQeBxvhq04c2wQXSoUgMWXuyAgNnvclCaoTOU&content_type=blog`
    );
    if (!blogsData.ok) {
      console.log("Failed to load data");
      throw new Error("Failed to load data");
    }

    return blogsData.json();
  } catch (err) {
    console.log(err);
  }
};

const Blogs = async () => {
  const blogsdata = await getBlogsData();
  console.log(blogsdata);
  return (
    <div>
      <div>
        {blogsdata.items.map((item: any) => {
          const blogImage = blogsdata.includes.Asset.find(
            (img: any) => img.sys.id === item.fields.image.sys.id
          );
          console.log(blogImage);
          return (
            <div
              key={blogsdata.sys.id}
              className="bg-gray-200 m-10 p-10 border border-2 border-black"
            >
              <h1 className="text-3xl mb-5">{item.fields.title}</h1>
              <p>{documentToReactComponents(item.fields.body)}</p>
              <img src={blogImage} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
