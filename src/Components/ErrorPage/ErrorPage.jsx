import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center ">
            <div className="mt-20">
                <h1 className="text-4xl text-red-600 font-bold play mb-16">404 Error! Page Not Found</h1>
                <div className="flex justify-center items-center">
                    <Link><button className="btn text-white font-medium bg-[#23BE0A] text-center">Go Back Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;