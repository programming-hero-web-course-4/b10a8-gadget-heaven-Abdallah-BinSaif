import React, {useEffect, useState} from 'react';
import {getFromLocal, removeFromLocal} from "../../Utils/utilities.js";
import DashboardItem from "./DashboardItem.jsx";

const Carts = () => {
    const [cartItems, setCartItems] = useState([]);
    const [price, setPrice] = useState(null);
    const handleDelete = (place,id) => {
        removeFromLocal(place, id)
        const items = getFromLocal("cart");
        let newPrice = 0
        items.map(item => {
            newPrice += item.price
        })
        setPrice(newPrice)
        setCartItems(items)
    }

    useEffect(() => {
        const items = getFromLocal("cart");
        let newPrice = 0
        items.map(item => {
            newPrice += item.price
        })
        setPrice(newPrice)

        setCartItems(items)

    }, [setCartItems]);
    return (
        <div className={"container mx-auto my-4"}>
            <div className={"flex justify-between items-center py-4"}>
                <h4 className={"text-2xl font-semibold"}>Cart</h4>
                <div className={"flex gap-8 justify-center items-center"}>
                    <p className={"text-2xl font-semibold"}>Price: $ {price}</p>
                    <button className={"btn rounded-full border-2 px-8 border-primary text-primary"}>Sort by Price</button>
                    <button className={"btn rounded-full border-2 border-primary bg-primary px-8 text-white"}>Purchase</button>
                </div>
            </div>
            <div className={"space-y-4"}>
                {
                    cartItems.map(cart => <DashboardItem
                        key={cart.product_id}
                        handleDelete={handleDelete}
                        cart={cart}></DashboardItem>)
                }
            </div>
        </div>
    )
};

export default Carts;