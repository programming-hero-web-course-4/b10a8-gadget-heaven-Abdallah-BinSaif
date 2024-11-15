import React from 'react';
import Button from "../Button.jsx";
import {useNavigate} from "react-router-dom";

const SingleProduct = ({product}) => {
    const navigate = useNavigate();
    const {product_id:id, product_image:image, product_title:name, price, category } = product
    const handleDetail = (id) =>{
        navigate(`/detail/${id}`)
    }
    return (
        <div className="card card-compact shadow-xl p-2 bg-white">
            <figure>
                <img
                    className={"sm:h-24 lg:h-52"}
                    src={image}
                    alt={name}/>
            </figure>
            <div className="flex-grow">
                <h2 className="font-bold text-md mb-1">{name}</h2>
                <small>Price: ${price}</small><br/>
                <button onClick={() => handleDetail(id)}
                        className={"btn rounded-full border-primary text-primary"}>View Details</button>
            </div>
        </div>
    );
};

export default SingleProduct;