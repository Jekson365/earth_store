import axiosInstance from "../../AxiosInstance"

export const createPrior = async (payload: any) => {
    await axiosInstance.post(`/priors`, { prior: payload })
        .then(() => {
            try {
                console.log("added!")
                window.location.reload()
            }
            catch(err) {
                throw err
            }
        })
}