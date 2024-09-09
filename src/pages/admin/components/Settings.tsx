import { useEffect, useState } from "react"
import { useSettings } from "../../../hooks/settings/useSettings"
import { Grid, Stack } from "@mui/material"
import { useIndexSettings } from "../../../hooks/settings/useIndexSettings"

const Settings = () => {
    const { updateSetting } = useSettings()
    const { settings, fetchSettings } = useIndexSettings()
    const [settingParams, setSettingParams] = useState<any>([])

    useEffect(() => {
        fetchSettings()
    }, [])

    useEffect(() => {
        setSettingParams(settings)
    }, [settings])

    const handleSettingParams = (event: any, item: any) => {
        const updatedSettings = settingParams.map((setting: any) => {
            if (setting.param_name === item.param_name) {
                return { ...setting, status: event.target.checked }
            }
            return setting
        })
        setSettingParams(updatedSettings)
    }

    const handleSave = () => {
        updateSetting(settingParams)
        window.location.reload()
    }

    return (
        <>
            <Grid container spacing={3}>
                {settings && settings.map((e: any) => {
                    return (
                        <Grid item xs={12} md={6} key={e.param_name}>
                            <Stack direction={'row'} alignItems={'center'} gap={'10px'}>
                                <input
                                    type="checkbox"
                                    checked={!!settingParams.find((p: any) => p.param_name === e.param_name)?.status}
                                    onChange={(event) => handleSettingParams(event, e)}
                                    className="custom-checkbox"
                                />
                                <h4>{e.name}</h4>
                            </Stack>
                        </Grid>
                    )
                })}
            </Grid>
            <button className="admin-button" onClick={handleSave}>
                შენახვა
            </button>
        </>
    )
}

export default Settings
