import axiosInstance from "../../AxiosInstance";

export const useLogin = () => {
    const useLoginUser = async (payload: Object) => {
        await axiosInstance.post("/login", { user: payload })
            .then((res) => {
                try {
                    localStorage.setItem("token", JSON.stringify(res.data.token))
                    window.location.href = '/'
                }
                catch (err) {
                    throw err
                }
            })
    }
    return { useLoginUser }
}