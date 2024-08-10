import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "../pages/homepage/HomePage.js";
import {Navigation} from "../components/Navigation.tsx";
import {Footer} from "../components/Footer.tsx";
import {About} from "../pages/about/About.tsx";
import {Contact} from "../pages/contact/Contact.tsx";
import {Shop} from "../pages/shop/Shop.tsx";
import {ProductPage} from "../pages/product_page/ProductPage.tsx";
import {Cart} from "../components/Cart.tsx";
import {createContext, useEffect, useState} from "react";

export const CartController = createContext<any>({})

export const CustomRouter = () => {
    const [cart, setCart] = useState(false)
    useEffect(()=> {
    },[cart])
    useEffect(() => {
        window.addEventListener('scroll',()=> {
            setCart(false)
        })
    }, []);
    return (
        <>
            <BrowserRouter>
                <CartController.Provider value={{cart, setCart}}>
                    <Cart/>
                    <Navigation/>
                    <Routes>
                        <Route path={'/'} element={<HomePage/>}/>
                        <Route path={'/about'} element={<About/>}/>
                        <Route path={'/contact'} element={<Contact/>}/>
                        <Route path={'/shop'} element={<Shop/>}/>
                        <Route path={'/product/:id'} element={<ProductPage/>}/>
                    </Routes>
                    <Footer/>
                </CartController.Provider>
            </BrowserRouter>
        </>
    )
}