import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="text-center flex justify-center items-center">
      <div className="hero -mt-16">
        <div className="hero-content text-center">
          <div className="max-w-lg h-full">
            <h1 className="text-5xl font-bold">Welcome to ByteBlaze</h1>
            <p className="py-6">
              ByteBlaze is the bridge between the complex world of <br />{" "}
              technology and the curious minds eager to understand it
            </p>
      
            <div className="gap-6">
            <Link
              to={'/blogs'}
              className="relative inline-block px-4 py-2 font-medium group mr-6"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-secondary border-2 border-red-400 group-hover:bg-blue-400"></span>
              <span className="relative text-black group-hover:text-white">
              Read Blogs
              </span>
            </Link>
            <Link
              to={'/blogs'}
              className="relative inline-block px-4 py-2 font-medium group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
              <span className="relative text-black group-hover:text-white">
                Button Text
              </span>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
