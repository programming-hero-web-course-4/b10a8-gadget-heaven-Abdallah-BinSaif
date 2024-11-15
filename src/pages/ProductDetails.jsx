import React, {useEffect, useState} from 'react';
import Heading from "../components/Heading.jsx";
import {useLoaderData, useParams} from "react-router-dom";
import {FaRegHeart, FaRegStar, FaStar} from "react-icons/fa";
import {IoCartOutline} from "react-icons/io5";

const ProductDetails = () => {
    const [product, setProduct] = useState({})
    const fetchData = useLoaderData();
    const {id} = useParams();

    useEffect(() => {
        const singleProduct = fetchData.find(item => item.product_id === parseInt(id))
        setProduct(singleProduct)
    }, [fetchData, id]);
    console.log(id)
    const {
        product_title:name,
        product_image:image,
        price, availability,
        description,
        Specification,
        rating
    } =product

    return (
        <div>
            <div className={"bg-primary text-white pt-20 pb-64"}>
                <Heading
                    subtitle={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}
                    title={"Product Details"}
                ></Heading>
            </div>

            {/*details*/}
            <div className="hero container mx-auto rounded-3xl relative -top-40 p-8 bg-white">
                <div className="hero-content flex-col lg:flex-row gap-16">
                    <img
                        src={image}
                        className="w-1/3 rounded-lg shadow-2xl"/>
                    <div className={"flex-1 space-y-3"}>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <h1 className="text-3xl font-semibold">Price: $ {price}</h1>
                        <button className={availability? "py-2 px-4 text-green-600 border-2 border-green-600 rounded-full " : "py-2 px-4 text-orange-600 border-2 border-orange-600 rounded-full "}>{availability?"In Stock": "Not In Stock"}</button>
                        <p>{description}</p>
                        <div>
                            <p className={"font-bold"}>Specification</p>
                            <ul>
                                {
                                    Specification?.map((item, index)=> <li className={"list-decimal ml-8"} key={index}>{item}</li>)
                                }
                            </ul>
                        </div>
                        <div>
                            <p>Rating</p>
                            <div className={"flex gap-1"}>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaRegStar></FaRegStar>
                                <small className={"font-semibold ml-3"}>{rating}</small>
                            </div>
                        </div>

                        <div className={"flex"}>
                            <div className="cursor-pointer rounded-full bg-primary text-white px-4 py-2 flex justify-center items-center gap-4">Add To Card<IoCartOutline size={26}></IoCartOutline></div>
                            <div className="cursor-pointer p-2 text-xl border-4 rounded-full flex justify-center items-center ml-2"><FaRegHeart></FaRegHeart></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;