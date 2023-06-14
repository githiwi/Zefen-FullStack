import axios from "axios";

//retrieve an instance of axios
const axiosApiInstance = axios.create();

//defining our settings for axios instance
axiosApiInstance.defaults.baseURL = "http://localhost:4000"; //location of our backend server

axiosApiInstance.defaults.withCredentials = true;//to send cookies to backend server



export default axiosApiInstance;
