import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "../pages/homepage/HomePage.js";
import {Navigation} from "../components/Navigation.tsx";
import {Footer} from "../components/Footer.tsx";

export const CustomRouter = () => {
    return (
        <>
            <Navigation/>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </>
    )
}