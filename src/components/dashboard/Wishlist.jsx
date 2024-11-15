import React, {useEffect, useState} from 'react';
import {getFromLocal, removeFromLocal} from "../../Utils/utilities.js";
import DashboardItem from "./DashboardItem.jsx";

const Wishlist = () => {
    const [wishItems, setWishItems] = useState([]);
    const handleDelete = (place,id) => {
        removeFromLocal(place, id)
        setWishItems(getFromLocal("wish"))
    }

    useEffect(() => {
        setWishItems(getFromLocal("wish"))

    }, [setWishItems]);
    return (
        <div className={"container mx-auto my-4"}>
            <h4 className={"text-2xl font-semibold py-4"}>Cart</h4>
            <div className={"space-y-4"}>
                {
                    wishItems.map(wish => <DashboardItem
                        key={wish.product_id}
                        handleDelete={handleDelete}
                        cart={wish}></DashboardItem>)
                }
            </div>
        </div>
    )
};

export default Wishlist;