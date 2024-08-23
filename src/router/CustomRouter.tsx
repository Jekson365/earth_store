import { Route, Routes, useLocation } from "react-router-dom";
import { HomePage } from "../pages/homepage/HomePage.js";
import { Navigation } from "../components/Navigation.tsx";
import { Footer } from "../components/Footer.tsx";
import { About } from "../pages/about/About.tsx";
import { Contact } from "../pages/contact/Contact.tsx";
import { Shop } from "../pages/shop/Shop.tsx";
import { ProductPage } from "../pages/product_page/ProductPage.tsx";
import { Cart } from "../components/Cart.tsx";
import { createContext, useEffect, useState } from "react";
import Register from "../pages/auth/Register.tsx";
import Login from '../pages/auth/Login.tsx'
import Admin from "../pages/admin/Admin.tsx";

export const CartController = createContext<any>({})

export const CustomRouter = () => {
    const location = useLocation()
    const currentLocation = location.pathname
    const [cart, setCart] = useState(false)
    const applyStyles = () => {
        // header items
        document.documentElement.style.setProperty('--nav-item-color', 'white')
        // opening headers title
        document.documentElement.style.setProperty('--main-title-color', 'yellow')
        // opning headers subtitle
        document.documentElement.style.setProperty('--main-subtitle-color', 'black')
        // all button and prior icons
        document.documentElement.style.setProperty('--main-button-color', 'rgba(50,50,100)')
        // postcards
        document.documentElement.style.setProperty('--postcard-title-color', 'green')
        document.documentElement.style.setProperty('--postcard-subtitle-color', 'green')
        // contact icon color
        document.documentElement.style.setProperty('--contact-icon-color', 'rgb(200,200,100)')
        // social icons
        document.documentElement.style.setProperty('--social-icon-color', 'rgb(200,200,100)')
        // titles in shop page
        document.documentElement.style.setProperty('--shop-titles-color', 'black')
        // admin 
        document.documentElement.style.setProperty('--admin-color', 'green')
    }
    useEffect(() => {
        applyStyles()
    }, [currentLocation])
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setCart(false)
        })
    }, []);
    return (
        <>
            <CartController.Provider value={{ cart, setCart }}>
                <Navigation />
                <Cart />
                <Routes>
                    <Route path={'/'} element={<HomePage />} />
                    <Route path={'/about'} element={<About />} />
                    <Route path={'/contact'} element={<Contact />} />
                    <Route path={'/shop'} element={<Shop />} />
                    <Route path={'/product/:id'} element={<ProductPage />} />
                    <Route path={'/register'} element={<Register />} />
                    <Route path={"/login"} element={<Login />} />
                    <Route path="/admin" element={<Admin />} />
                </Routes>
                {currentLocation != '/register' ? (<>
                </>) : null}
                <Footer />
            </CartController.Provider>
        </>
    )
}