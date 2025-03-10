import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Root = () => {
    return (
        <div className="mx-5 my-3">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;