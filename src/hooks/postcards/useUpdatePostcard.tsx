import axiosInstance from "../../AxiosInstance"

export const useUpdatePostcard = () => {
    const updatePostcard = async (payload : any) => {
        await axiosInstance.patch(`/postcards/${1}`,{postcard: payload})
            .then(() => {
                try {
                    console.log("updated")
                }
                catch (err) {
                    throw (err)
                }
            })
    }
    return { updatePostcard }
}