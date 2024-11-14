import React, {useEffect, useState} from 'react';
import {useLoaderData} from "react-router-dom";
import Button from "../Button.jsx";
import SingleProduct from "./SingleProduct.jsx";

const Products = () => {
    const [products, setProducts] = useState([])
    const fetchData = useLoaderData();

    useEffect(() => {

    }, []);

    return (
        <>
        <div className={"grid grid-cols-1 md:grid-cols-3 gap-2"}>
            {
                fetchData.map(item => <SingleProduct key={item.product_id} product={item}></SingleProduct>)
            }
        </div>
        </>
    );
};

export default Products;