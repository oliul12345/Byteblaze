import { Link, useLoaderData } from "react-router-dom";
import Blog from "./Blog";

const Blogs = () => {
  const blogsData = useLoaderData();
  console.log(blogsData[0]);
  return (
    <div>
      <section className="">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <Link to={'/'}
            rel="noopener noreferrer"
            href="#"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 "
          >
            <img
              src={blogsData[0].cover_image}
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 "
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              {blogsData[0].title}
              </h3>
              <span className="text-xs ">
                {new Date(blogsData[0].edited_at).toDateString()}
              </span>
              <p>
              {blogsData[0].description}
              </p>
            </div>
          </Link>
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
           {
            blogsData.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
           }
          </div>
         
        </div>
      </section>
    </div>
  );
};

export default Blogs;
