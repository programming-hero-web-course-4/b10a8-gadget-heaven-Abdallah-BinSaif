import React from 'react';
import {TiDeleteOutline} from "react-icons/ti";
import {removeFromLocal} from "../../Utils/utilities.js";
import {useLocation} from "react-router-dom";

const DashboardItem = ({cart, handleDelete}) => {
    const {pathname} = useLocation();
    const path = pathname.split("/")[2];
    const {product_image:image, product_title:name, product_id:id, price, description} = cart


    
    return (
            <div className={"flex items-center p-8 bg-white rounded-2xl gap-8"}>
                <img
                    className={"w-40 h-24 object-cover rounded"}
                    src={image}

                />
                <div className={"flex-1 space-y-1"}>
                    <h3 className={"font-bold text-xl"}>{name}</h3>
                    <p className={"font-light"}>{description}</p>
                    <p className={"font-semibold"}>Price: ${price}</p>
                </div>
                <div onClick={()=>handleDelete(path,id)} className={"text-3xl text-red-500 cursor-pointer"}>
                    <TiDeleteOutline></TiDeleteOutline>
                </div>
            </div>
    );
};

export default DashboardItem;