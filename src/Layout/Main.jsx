import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";


const Main = () => {
    return (
        <div>
        {/* navbar */}
        <Navbar></Navbar>
        {/* Outlet */}
        <div className='min-h-[calc(100vh-306px)]'>
        <Outlet></Outlet>
        </div>
        {/* Footer */}
        <Footer></Footer>
    </div>
    );
};

export default Main;