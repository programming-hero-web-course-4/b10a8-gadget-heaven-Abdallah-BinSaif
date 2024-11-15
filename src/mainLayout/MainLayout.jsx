import React from 'react';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import {Outlet} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
    return (
        <>
            <div>

                {/*NavBar*/}
                <Navbar></Navbar>
                {/*Home*/}
                <div className={"min-h-[calc(100vh-521px)]"}>
                    {/*dynamic*/}
                    <Outlet></Outlet>
                </div>

            </div>
            {/*Footer*/}
            <Footer></Footer>

            <ToastContainer></ToastContainer>
        </>

    );
};

export default MainLayout;