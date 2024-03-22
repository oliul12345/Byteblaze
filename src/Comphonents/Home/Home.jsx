import Banner from "../Banner/Banner";
import Img from '../../../public/wave.svg';

const Home = () => {
    return (
        <div className="flex flex-col justify-center my-auto items-center min-h-[calc(100vh-126px)]">            
            <Banner></Banner>
            <img className="h-[250px] w-full" src={Img} alt="" />
        </div>
    );
};

export default Home;