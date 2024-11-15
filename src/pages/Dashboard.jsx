import React from 'react';
import Heading from "../components/Heading.jsx";
import {NavLink, Outlet} from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <div className={"bg-primary text-white py-20 space-y-4"}>
                <Heading
                    title={"Dashboard"}
                    subtitle={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}></Heading>
                <div className={"container mx-auto flex justify-center gap-4"}>
                    <NavLink
                        to={"/dash/cart"}
                        className={({isActive})=>isActive? "btn bg-white rounded-full px-12 text-black": "btn bg-transparent rounded-full px-12 text-white hover:text-black/95"}
                    >Cart</NavLink>
                    <NavLink
                        to={"/dash/wish"}
                        className={({isActive})=>isActive? "btn bg-white rounded-full px-12 text-black": "btn bg-transparent rounded-full px-12 text-white hover:text-black/95"}
                    >Wishlist</NavLink>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;