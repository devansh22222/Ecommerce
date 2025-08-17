import React, { createContext, useState } from "react";
import { useEffect } from "react";


export const ShopContext = createContext(null);

const getDefaultCart  = ()=>{
        let cart = {};
        for(let index = 0; index < 300+1; index++){
            cart[index] = 0;
        }
        return cart;
    }

const ShopContextProvider = (props) =>{

    const [all_product,setAll_Product] = useState([])

    const [cartItems, setCartItems] = useState(getDefaultCart())


    // from here
    useEffect(()=>{
        fetch('http://localhost:3000/allproduct')
        .then((res)=>res.json())
        .then((data)=>setAll_Product(data))

        if(localStorage.getItem('token')){
            fetch('http://localhost:3000/getcart',{
                method:'POST',
                headers:{
                    Accept : 'application/json',
                    'token':`${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
                
            })
            .then((res)=>res.json())
            .then((data)=>{
                if(data.success){
                    setCartItems(data.cartData)
                }
            })
        }
    },[])

    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        if(localStorage.getItem('token')){
            fetch('http://localhost:3000/addtocart',{
                method:'POST',
                headers:{
                    Accept : 'application/json',
                    'token':`${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({itemId})
            })
            .then((res)=>res.json())
            .then((data)=>console.log(data))
        }
    }
    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
         if(localStorage.getItem('token')){
            fetch('http://localhost:3000/removefromcart',{
                method:'POST',
                headers:{
                    Accept : 'application/json',
                    'token':`${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({itemId})
            })
            .then((res)=>res.json())
            .then((data)=>console.log(data))
        }
    }

    // const getTotalCartAmount = () =>{
    //     let totalAmount = 0;
    //     for(let item in cartItems){
    //         if(cartItems[item]>0){
    //             let itemInfo = all_product.find((product)=>product.id === Number(item))
    //             totalAmount += itemInfo.new_price * cartItems[item];
    //         }
    //     }
    //     return totalAmount
    // }
    const getTotalCartAmount = () => {
    let total = 0;
    for (const itemId in cartItems) {
        if (cartItems[itemId] > 0) {
            // find product details
            const product = all_product.find(p => p.id === Number(itemId));
            if (product) {
                total += product.new_price * cartItems[itemId];
            }
        }
    }
    return total;
};


    const getTotalCartItems = ()=>{
        let totalItem = 0;
        for(let item in cartItems){
            if(cartItems[item]>0){
                totalItem += cartItems[item]
            }
        }
        return totalItem;
    }

    const contextValue = {all_product, cartItems,removeFromCart, addToCart,getTotalCartAmount,getTotalCartItems};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;