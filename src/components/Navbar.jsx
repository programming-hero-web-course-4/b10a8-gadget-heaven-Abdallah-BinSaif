import React, {useEffect, useState} from 'react';
import {Link, NavLink, useLocation} from "react-router-dom";
import {IoCartOutline, IoHeartOutline} from "react-icons/io5";

const Navbar = () => {
    const [activate, setActivate] = useState(null);
    const {pathname} = useLocation();
    const path= pathname.split("/")[1]
    useEffect(() => {
        if(path=== "stat"){
            setActivate(true)
        }else if(path=== "dash"){
            setActivate(true)
        }else if(path=== "detail"){
            setActivate(true)
        }else{
            setActivate(false)
        }
    }, [pathname]);

    return (
        <nav className={`container mx-auto md:flex justify-around items-center relative ${activate ? "" : "text-white"} z-50 py-8`}>
            <div className={"font-semibold text-2xl"}>Gadget Heaven</div>
            <div>
                <ul className={"md:flex gap-8"}>
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"/stat"}>Statistics</NavLink></li>
                    <li><NavLink to={"/dash"}>Dashboard</NavLink></li>
                </ul>
            </div>
            <div className={"hidden md:flex gap-4 text-xl"}>
                <NavLink to={"/dash/cart"} className={({isActive})=> isActive? "bg-white rounded-full": ""}>
                    <div className={"p-2 rounded-full text-black"}><IoCartOutline></IoCartOutline></div>
                </NavLink>
                <NavLink to={"/dash/wish"} className={({isActive})=> isActive? "bg-white rounded-full": ""}>
                    <div className={"p-2 rounded-full text-black"}><IoHeartOutline></IoHeartOutline></div>
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;