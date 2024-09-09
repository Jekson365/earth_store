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
import { Map } from "../components/Map.tsx";
import { Box } from "@mui/material";
import { SocialIcons } from "../components/SocialIcons.tsx";
import { Foo } from "../Foo.tsx";
import { useIndexSettings } from "../hooks/settings/useIndexSettings.tsx";

export const CartController = createContext<any>({})

export const CustomRouter = () => {
    const location = useLocation()
    const currentLocation = location.pathname
    const [cart, setCart] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setCart(false)
        })
    }, []);
    const { settings, fetchSettings } = useIndexSettings()

    useEffect(() => {
        fetchSettings()
    }, [])

    const isSettingEnabled = (paramName: string) => {
        const setting = settings.find((s: any) => s.param_name === paramName)
        return setting ? setting.status : false
    }
    return (
        <>
            <CartController.Provider value={{ cart, setCart }}>
                <Cart />
                <Navigation />
                <Routes>
                    <Route path={'/'} element={<HomePage />} />
                    <Route path={'/about'} element={<About />} />
                    <Route path={'/contact'} element={<Contact />} />
                    <Route path={'/shop'} element={<Shop />} />
                    <Route path={'/product/:id'} element={<ProductPage />} />
                    <Route path={'/register'} element={<Register />} />
                    <Route path={"/login"} element={<Login />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="foo" element={<Foo />} />
                </Routes>
                {currentLocation == '/register' || currentLocation == '/login' ? (<>
                </>) : <SocialIcons />}
                {isSettingEnabled('map') ? <>
                    <Box
                        height={'300px'}
                        overflow={'hidden'}
                    >
                        <Map />
                    </Box>
                </> : null}
                <Footer />
            </CartController.Provider>
        </>
    )
}