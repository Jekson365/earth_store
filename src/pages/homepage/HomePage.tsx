import {HeaderContent} from "./components/HeaderContent.tsx";
import '../../styles/homepage/homepage.scss'
import {Navigation} from "../../components/Navigation.tsx";

export const HomePage = () => {
    return (
        <>
            <Navigation/>
            <HeaderContent/>
        </>
    )
}