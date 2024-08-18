import axiosInstance from "../../AxiosInstance"

export const useRemoveCategory = () => {
    const removeCategory = async (id: Number) => {
        try {
            await axiosInstance.delete(`/categories/${id}`)
            window.location.reload()
        }
        catch(err : any) {
            console.log(err)
        }
    }
    return { removeCategory }
}