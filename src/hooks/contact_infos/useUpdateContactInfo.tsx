import axiosInstance from "../../AxiosInstance"

export const useUpdateContactInfo = () => {
    const updateContactInfo = async (payload : any) => {
        try {

            await axiosInstance.patch(`/contact_infos/${payload.id}`,payload)
            window.location.reload()
        }
        catch (err) {
            throw err
        }
    }
    return {updateContactInfo}
}