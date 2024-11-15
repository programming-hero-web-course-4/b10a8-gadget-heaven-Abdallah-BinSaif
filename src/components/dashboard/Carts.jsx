import React, {useEffect, useState} from 'react';
import {getFromLocal, removeFromLocal} from "../../Utils/utilities.js";
import DashboardItem from "./DashboardItem.jsx";
import success from "../../assets/Group.png"
import {useNavigate} from "react-router-dom";



const Carts = () => {

    const [disable, setDisable] = useState(true)
    const [cartItems, setCartItems] = useState([]);
    const [price, setPrice] = useState(null);

    const navigate = useNavigate();

    const cartItemsHandle = () => {
        const items = getFromLocal("cart");
        if(items.length){
            setDisable(false)
        }else{
            setDisable(true)
        }
        let newPrice = 0
        items.map(item => {
            newPrice += item.price
        })
        setPrice(newPrice)
        setCartItems(items)
    }
    const handleDelete = (place,id) => {
        removeFromLocal(place, id)
        cartItemsHandle();

    }
    const handleSortByPrice = () => {
        const items = getFromLocal("cart");
        const sortedItems = [...items].sort((a,b)=>b.price - a.price )
        setCartItems(sortedItems)
    }

    useEffect(() => {

        cartItemsHandle();

    }, [setCartItems]);

    const handlePayment = () => {
        localStorage.setItem("cart", "")
        navigate("/")

    }
    return (
        <div className={"container mx-auto my-4"}>
            <div className={"flex justify-between items-center py-4"}>
                <h4 className={"text-2xl font-semibold"}>Cart</h4>
                <div className={"flex gap-8 justify-center items-center"}>
                    <p className={"text-2xl font-semibold"}>Price: $ {price}</p>
                    <button onClick={handleSortByPrice} className={"btn rounded-full border-2 px-8 border-primary text-primary"}>Sort by Price</button>
                    <button
                        disabled={disable}
                        onClick={()=>document.getElementById('my_modal_5').showModal()}
                        className={"btn rounded-full border-2 border-primary bg-primary px-8 text-white"}
                    >Purchase</button>
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

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn hidden" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box flex flex-col items-center">
                    <img src={success}/>
                    <h3 className="font-bold text-lg">Payment Successful</h3>
                    <p className="py-4 font-light">Thanks for purchasing.</p>
                    <p className="py-4 font-light">Total: $ {price}</p>

                        <form className={"w-full"} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button onClick={handlePayment} className="btn w-full">Close</button>
                        </form>

                </div>
            </dialog>
        </div>
    )
};

export default Carts;