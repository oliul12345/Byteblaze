import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {
    const detail = useLoaderData();
    console.log(detail)
    return (
        <div>
            <p>oli</p>
        </div>
    );
};

export default BlogDetails;