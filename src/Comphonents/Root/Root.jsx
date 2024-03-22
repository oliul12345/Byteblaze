import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
    return (
        <div className="max-w-7xl mx-auto ">
            <Navbar></Navbar>
            <div className="h-14"></div>
            <div className="min-h-[calc(100vh-126px)] ">
            {/* flex flex-col justify-center items-center */}
               <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;