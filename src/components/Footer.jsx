import React from 'react';
import Heading from "./Heading.jsx";

const Footer = () => {
    return (
        <div className={"bg-white py-20"}>

            <Heading
                title={"Gadget Heaven"}
                subtitle={"Leading the way in cutting-edge technology and innovation."}
            ></Heading>
            {/*<div className={"text-center"}>*/}
            {/*    <h3 className={"font-semibold text-3xl"}> Gadget Heaven</h3>*/}
            {/*    <p className={"font-light"}>Leading the way in cutting-edge technology and innovation.</p>*/}
            {/*</div>*/}
            <hr className={"my-4"}/>

            <footer className="container mx-auto footer footer-center grid-cols-3 text-base-content p-4">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie Policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;