import axios from "axios";

const useAxiosSecure = () => {

    const axiosSecure = axios.create({
        baseURL: import.meta.env.VITE_API_URL,
        withCredentials: true
    })
    return (
        <div>
            
        </div>
    );
};

export default useAxiosSecure;