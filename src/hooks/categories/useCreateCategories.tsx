import axiosInstance from "../../AxiosInstance"

export const useCreateCategories = () => {
    const createCategory = async (payload: any) => {
        axiosInstance.post("/categories", { category: payload })
            .then(() => {
                try {
                    window.location.reload()
                    console.log('created')
                }
                catch (err) {
                    throw err
                }
            })
    }
    return { createCategory }
}