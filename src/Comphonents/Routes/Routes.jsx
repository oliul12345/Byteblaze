import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Blogs from "../Blogs/Blogs";
import BookMarks from "../BookMarks/BookMarks";

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
          element:<BookMarks></BookMarks>
        },
      ]
    },
  ]);

  export default router