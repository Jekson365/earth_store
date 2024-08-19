import axiosInstance from "../../AxiosInstance"

export const useUpdateOpening = () => {
    const updateOpening = async (payload: any) => {
        await axiosInstance.patch(`/openings/${1}`, { opening: payload }, { headers: { 'Content-Type': "multipart/form-data" } })
            .then(() => {
                try {
                    window.location.href = '/'
                }
                catch (err) {
                    throw err
                }
            })
    }
    return { updateOpening }
}