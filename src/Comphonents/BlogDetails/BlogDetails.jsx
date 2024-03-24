import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { FaBookmark } from "react-icons/fa";
import { saveBlogApplication } from "../Utlity/LocalStorage";
const BlogDetails = () => {
  const detail = useLoaderData();
  console.log(detail);
  const [tabActive,setTabActive] = useState(0)

const {id} = detail;
const idInt = parseInt(id)
  const handleBookmark = () => {
    const saveLs = saveBlogApplication(idInt);
    console.log(saveLs)
  }


  return (
    <div>
      <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
        <article className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
              {detail.title}
            </h1>
            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400">
              <div className="flex gap-6 items-center md:space-x-2">
                <p className="text-sm">
                  <span>{detail.reading_time_minutes}</span> min read •{" "}
                  <span>
                    {new Date(detail.published_timestamp).toLocaleDateString()}
                  </span>
                </p>
                <button onClick={handleBookmark}><FaBookmark className="text-red-500 text-2xl"/></button>
              </div>
              <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
                {detail.comments_count} comments •{" "}
                {detail.positive_reactions_count} views
              </p>
            </div>
          </div>
          <div className="">
            {/* ////  tabs are here  */}
            <div className="flex items-start -mx-4 ">
              <Link to={''}
              onClick={()=>setTabActive(0)}
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  ${tabActive === 0 ? 'border border-b-0 ' : 'rounded-t-lg '} border-b dark:border-gray-400`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
                <span>Content</span>
              </Link>
              <Link to={'author'}
              onClick={()=>setTabActive(1)}
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  ${tabActive === 1 ? 'border border-b-0 ' : 'rounded-t-lg '} border-b dark:border-gray-400`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
                <span>Author</span>
              </Link>
             
            </div>
            {/* tabs are end here  */}
            <Outlet></Outlet>
          </div>
          <p>{detail.body_html}</p>
        </article>
        <div>
   
  
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
