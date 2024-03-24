import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Blogs from "../Blogs/Blogs";
import BookMarks from "../BookMarks/BookMarks";
import BlogDetails from "../BlogDetails/BlogDetails";
import Content from "../BlogDetails/BlogContent/Content";
import Author from "../BlogDetails/BlogAuthor/Author";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/blogs',
          element:<Blogs></Blogs>,
          loader:() => fetch('https://dev.to/api/articles')
        },
        {
          path:'/bookmarks',
          element:<BookMarks></BookMarks>,
          loader:() => fetch('https://dev.to/api/articles')
        },
        {
          path:'/blogs/:id',
          element:<BlogDetails></BlogDetails>,
          loader:({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
          children:[
            {
              index:true,
              element:<Content></Content>,
              loader:({params}) => fetch(`https://dev.to/api/articles/${params.id}`)
            },
            {
              path:'author',
              element:<Author></Author>,
              loader:({params}) => fetch(`https://dev.to/api/articles/${params.id}`)
            }
          ]
        }
      ]
    },
  ]);

  export default router