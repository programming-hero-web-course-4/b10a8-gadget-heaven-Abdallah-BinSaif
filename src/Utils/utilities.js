// get an item from localStorage
import {toast} from "react-toastify";

const getFromLocal = (place) => {
    const item = localStorage.getItem(place)
    const parsesItem = JSON.parse(item)
    if(item){
        return parsesItem;
    }else{
        return [];
    }
}


// add an item in the localStorage
const addToLocal = (place, item) => {
    if(place === "cart"){
        const cart = getFromLocal("cart")
        const isExist = cart.find(product => product.product_id === item.product_id)
        if(isExist){
            warn("Already exist in Cart")
        }else{
            cart.push(item)
            localStorage.setItem("cart",JSON.stringify(cart))
            success("Added to Cart")
        }
    }else if(place === "heart"){
        const heart = getFromLocal("heart")
        const isExist = heart.find(product => product.product_id === item.product_id)
        if(isExist){
            return ""
        }else{
            heart.push(item)
            localStorage.setItem("heart",JSON.stringify(heart))
            success("Added to Wish List ")
        }
    }

}


// remove from localStorage


// functions

function isExist(item){
    const cart = getFromLocal("cart")
    const isExist = cart.find(product => product.product_id === item.product_id);

    return !!isExist;
    // if(isExist){
    //     return true;
    // }else{
    //     return false;
    // }
}

function warn(text){
    toast.warn(text,{
        position: "top-center",
        autoClose: 2000,
        closeOnClick: true
    })
}
function success(text){
    toast.success(text,{
        position: "top-center",
        autoClose: 2000,
        closeOnClick: true
    })
}


export {addToLocal, getFromLocal};