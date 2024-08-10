import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "../pages/homepage/HomePage.js";
import {Navigation} from "../components/Navigation.tsx";
import {Footer} from "../components/Footer.tsx";
import {About} from "../pages/about/About.tsx";
import {Contact} from "../pages/contact/Contact.tsx";
import {Shop} from "../pages/shop/Shop.tsx";

export const CustomRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Navigation/>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/about'} element={<About/>}/>
                    <Route path={'/contact'} element={<Contact/>}/>
                    <Route path={'/shop'} element={<Shop/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    )
}