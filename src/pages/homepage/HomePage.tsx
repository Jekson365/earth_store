import { HeaderContent } from "./components/HeaderContent.tsx";
import '../../styles/homepage/homepage.scss'
import { Featured } from "./featured/Featured.tsx";
import { Customers } from "./customers/Customers.tsx";
import { Postcard } from "./postcard/Postcard.tsx";
import { Priors } from "./priors/Priors.tsx";
import { useOpening } from "../../hooks/openings/useOpening.tsx";
import { useEffect } from "react";
import Collection from "./collections/Collection.tsx";
import { useIndexSettings } from "../../hooks/settings/useIndexSettings.tsx";

export const HomePage = () => {
    const { getOpenings, opening } = useOpening()
    const { settings, fetchSettings } = useIndexSettings()

    useEffect(() => {
        getOpenings()
    }, [])

    useEffect(() => {
        fetchSettings()
    }, [])

    const isSettingEnabled = (paramName: string) => {
        const setting = settings.find((s: any) => s.param_name === paramName)
        return setting ? setting.status : false
    }
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
            {isSettingEnabled('featured') ? <Featured/> : null}
            {isSettingEnabled('customers') ? <Customers/> : null}
            {isSettingEnabled('postcard') ? <Postcard/> : null}
            {isSettingEnabled('categories') ? <Collection/> : null}
            {isSettingEnabled('priors') ? <Priors/> : null}
        </>
    )
}

