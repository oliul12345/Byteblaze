import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBlogs } from "../Utlity/LocalStorage";
import image from '../../../public/404.jpg'

const BookMarks = () => {

    ////   put the data after filter by id in ls
    const [data,setData] = useState([])
    console.log(data);

    const getAllData = useLoaderData();
    useEffect(()=>{
        const getIdLs = getStoredBlogs();
        const filterById = getAllData.filter(blog => getIdLs.includes(blog.id))
        setData(filterById)
    },[])


    return (
        <div className="grid md:grid-cols-3 gap-5 mt-9">
           
      {
        data.map(d=> <div key={d.id} className='border-2 border-purple-700 hover:border-red-500 transition hover:scale-105'>
        <a
        
         rel="noopener noreferrer"
         href="#"
         className="max-w-sm mx-auto group hover:no-underline focus:no-underline "
       >
         <img
           role="presentation"
           className="object-cover w-full rounded h-44 "
           src={d.cover_image || image}
         />
         <div className="p-6 space-y-2">
           <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {d.title}
           </h3>
           <span className="text-xs ">
           {new Date(d.published_timestamp).toDateString()}
           </span>
           <p>
            {d.description}
           </p>
         </div>
       </a>
   </div>)
      }
        </div>
    );
};

export default BookMarks;