import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: ProcessingInstruction.env.REACT_APP_API_URL || "http://localhost:8000/api",
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' }
});

export default axiosInstance;