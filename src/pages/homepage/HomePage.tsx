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
                <HeaderContent title={opening && opening.title}
                    height={'80vh'}
                    desc={opening.min_title}
                    mainPage={true}
                    image={opening.image}
                />
            </>) : null}
            <Featured />
            <Customers />
            <Postcard />
            <Priors />
        </>
    )
}