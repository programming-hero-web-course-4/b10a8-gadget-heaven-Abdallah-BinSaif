import React from 'react';
import Button from "../components/Button.jsx";
import BannerImage from "../components/BannerImage.jsx";
import {NavLink, Outlet, useLoaderData, useNavigate} from "react-router-dom";
import Products from "../components/productCategory/Products.jsx";

const Home = () => {
    const fetchData = useLoaderData();
    const navigate = useNavigate();
    const handleDash = () => {
        navigate("/dash")
    }
    return (

        <>
            <div className="container mx-auto hero bg-primary text-white pt-32 pb-64 rounded-3xl z-20 relative -top-36 md:-top-20">
                <div className="hero-content text-center">
                    <div>
                        <h1 className="text-5xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven
                            Accessories</h1>
                        <p className="py-6">
                            Explore the latest gadgets that will take your experience to the next level. From smart
                            devices to the coolest accessories, we have it all!
                        </p>
                        <Button onclick={handleDash}>Shop Now</Button>


                    </div>
                </div>
            </div>
            <BannerImage></BannerImage>
            <h3 className={"text-center text-4xl font-semibold py-8 mt-12"}>Explore Cutting-Edge Gadgets</h3>
            <div className={"flex flex-col md:flex-row py-12 container mx-auto"}>
                <div>
                    <div
                        className={"md:w-64 bg-white p-4 rounded-lg grid grid-cols-3 md:grid-cols-1 gap-4 overflow-hidden"}>
                        {
                            fetchData.map(item => <NavLink
                                key={item.id}
                                to={`/category/${item.category}`}
                                className={({isActive}) => isActive ? "bg-primary text-white p-4 rounded-full" : "bg-base-300 p-4 rounded-full"}>
                                {item.category}</NavLink>)
                        }
                    </div>
                </div>
                <div className={"flex-1 px-4"}>
                    {/*outlet*/}
                    <Outlet></Outlet>
                </div>
            </div>

        </>
    );
};

export default Home;