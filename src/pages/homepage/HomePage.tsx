import {HeaderContent} from "./components/HeaderContent.tsx";
import '../../styles/homepage/homepage.scss'
import {Navigation} from "../../components/Navigation.tsx";
import {Featured} from "./featured/Featured.tsx";
import {Customers} from "./customers/Customers.tsx";
import {Postcard} from "./postcard/Postcard.tsx";
import {Priors} from "./priors/Priors.tsx";

export const HomePage = () => {
    return (
        <>
            <HeaderContent/>
            <Featured/>
            <Customers/>
            <Postcard/>
            <Priors/>
        </>
    )
}