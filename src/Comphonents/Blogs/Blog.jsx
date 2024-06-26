/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
import image from '../../../public/404.jpg'
const Blog = ({blog}) => {
    console.log(blog.id)
    return (
        <div className='border-2 border-purple-700 hover:border-red-500 transition hover:scale-105'>
             <Link
             to={`${blog.id}`}
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline "
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 "
                src={blog.cover_image || image}
              />
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
            </Link>
        </div>
    );
};

export default Blog;