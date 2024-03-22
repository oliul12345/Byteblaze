const Banner = () => {
  return (
    <div className="text-center flex justify-center items-center min-h-[calc(100vh-64px)">
      <div className="hero  bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-lg h-full">
            <h1 className="text-5xl font-bold">Welcome to ByteBlaze</h1>
            <p className="py-6">
              ByteBlaze is the bridge between the complex world of <br />{" "}
              technology and the curious minds eager to understand it
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
