import axiosInstance from "../../AxiosInstance"

export const useUpdateContactInfo = () => {
    const updateContactInfo = async (payload : any) => {
        try {

            await axiosInstance.patch(`/contact_infos/1`,payload)
            window.location.reload()
        }
        catch (err) {
            throw err
        }
    }
    return {updateContactInfo}
}