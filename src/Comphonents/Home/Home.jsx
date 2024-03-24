import Banner from "../Banner/Banner";
import Img from '../../../public/wave.svg';

const Home = () => {
    return (
      <div>
          <div className="flex flex-col justify-center my-auto items-center min-h-[calc(100vh-126px)]">            
            <Banner></Banner>
        </div>
            <img className="h-[250px] w-full rotate-180 absolute bottom-0" src={Img} alt="" />
      </div>
    );
};

export default Home;