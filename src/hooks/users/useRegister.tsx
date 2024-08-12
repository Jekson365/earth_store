import axiosInstance from '../../AxiosInstance.ts'

export const useRegister = () => {
    const useCreateUser = async (payload : Object) => {
        await axiosInstance.post("/create_user",{user: payload})
            .then(() => {
                try {
                    window.location.reload()
                }catch(err) {
                    throw err
                }
            })
    }
    return { useCreateUser }
}