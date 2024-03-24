import { useLoaderData } from "react-router-dom";

import img from '../../../../public/404.jpg'
const Content = () => {
    const blog = useLoaderData();
    console.log(blog)
    return (
        <div>           
                 {
                    <div
                     className="mx-auto group hover:no-underline focus:no-underline mt-8"
                   >
                     <img
                       role="presentation"
                       className="object-cover w-full rounded h-44 "
                       src={blog.cover_image || img}
                     />
                    <div className="mt-8">
                    {
                        blog.tags.map(tag => <a key={tag}
                            rel="noopener noreferrer"
                            href="#"
                            className="px-3 py-1 rounded-sm hover:underline  dark:text-gray-900"
                          >
                            #MambaUI
                          </a>)
                     }
                    </div>
                     <div className="p-6 space-y-2">
                       <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                        {blog.title}
                       </h3>
                       <span className="text-xs ">
                       {new Date(blog.published_timestamp).toDateString()}
                       </span>
                       <p>
                        {blog.description}
                       </p>
                     </div>
                   </div>
               }
            
        </div>
    );
};

export default Content;