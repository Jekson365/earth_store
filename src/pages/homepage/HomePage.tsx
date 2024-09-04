import { HeaderContent } from "./components/HeaderContent.tsx";
import '../../styles/homepage/homepage.scss'
import { Featured } from "./featured/Featured.tsx";
import { Customers } from "./customers/Customers.tsx";
import { Postcard } from "./postcard/Postcard.tsx";
import { Priors } from "./priors/Priors.tsx";
import { useOpening } from "../../hooks/openings/useOpening.tsx";
import { useEffect } from "react";

export const HomePage = () => {
    const { getOpenings, opening } = useOpening()
    useEffect(() => {
        getOpenings()
    }, [])
    return (
        <>
            {opening ? (<>
                <HeaderContent title={opening && opening.title || opening.title_ka}
                    height={'80vh'}
                    desc={opening.min_title || opening.min_title_ka}
                    mainPage={true}
                    opening_images={opening.opening_images}
                    slider={true} 
                />
            </>) : null}
            <Featured />
            <Customers />
            <Postcard />
            <Priors />
        </>
    )
}