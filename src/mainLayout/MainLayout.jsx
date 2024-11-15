import React from 'react';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import {Outlet} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {HelmetProvider} from "react-helmet-async";

const MainLayout = () => {
    return (
        <>
            <HelmetProvider>
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
            </HelmetProvider>


            <ToastContainer></ToastContainer>
        </>

    );
};

export default MainLayout;