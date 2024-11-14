import React from 'react';
import Button from "../Button.jsx";

const SingleProduct = ({product}) => {
    const {product_image:image, product_title:name, price, category } = product
    return (
        <div className="card card-compact shadow-xl p-2 bg-white">
            <figure>
                <img
                    className={"h-24"}
                    src={image}
                    alt={name}/>
            </figure>
            <div className="flex-grow">
                <h2 className="font-bold text-md mb-1">{name}</h2>
                <small>Price: ${price}</small>
                <Button>View Details</Button>
            </div>
        </div>
    );
};

export default SingleProduct;