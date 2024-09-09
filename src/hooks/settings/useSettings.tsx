import axiosInstance from "../../AxiosInstance"

export const useSettings = () => {
    const updateSetting = async (payload: any) => {
        try {

            await axiosInstance.patch('/settings/update_settings', {settings: payload})
                .then(() => {
                    console.log("patch!")
                })
        }
        catch (err) {
            throw err
        }
    }
    return { updateSetting }
}