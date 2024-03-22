import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Root = () => {
    return (
        <div className="max-w-7xl mx-auto ">
            <Navbar></Navbar>
            <div className="h-14"></div>
            <div className="min-h-[calc(100vh-64px)]">
               <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;