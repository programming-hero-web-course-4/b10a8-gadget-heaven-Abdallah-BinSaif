import React, {useEffect, useState} from 'react';
import {useLoaderData, useLocation, useParams} from "react-router-dom";
import Button from "../Button.jsx";
import SingleProduct from "./SingleProduct.jsx";

const Products = () => {
    const [products, setProducts] = useState([])
    const fetchData = useLoaderData();
    const {category} = useParams();
    console.log(category)

    useEffect(() => {
        if(category === "All"){
            setProducts(fetchData)
        }else{
            const filteredProduct = fetchData.filter(product => product.category === category)
            setProducts(filteredProduct)
        }
    }, [category]);

    return (
        <>
        <div className={"grid grid-cols-1 md:grid-cols-3 gap-2"}>
            {
                products.map(item => <SingleProduct key={item.product_id} product={item}></SingleProduct>)
            }
        </div>
        </>
    );
};

export default Products;