// import axios, {
//   AxiosInstance,
//   AxiosRequestConfig,
//   AxiosResponse,
//   AxiosError,
// } from 'axios';
// import Cookies from 'universal-cookie';
// // import Cookies from "js-cookie";

// // Define a type for the access token
// type AccessToken = string | undefined;

// // Create Axios instance
// const axiosInstance: AxiosInstance = axios.create({
//   baseURL: process.env.BASE_URL, // Replace with your API base URL
// });

// // Request interceptor
// axiosInstance.interceptors.request.use(
//   async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
//     // Modify the request config here (e.g., add headers, authentication tokens)
//     const accessToken: AccessToken = Cookies.get('token');
//     // const accessToken: AccessToken = localStorage.getItem("access_token");

//     // Initialize headers if not already present
//     if (!config.headers) {
//       config.headers = {};
//     }

//     // If token is present add it to request's Authorization Header
//     if (accessToken) {
//       config.headers['Authorization'] = `Bearer ${accessToken}`;
//     }
//     return config;
//   },
//   (error: AxiosError) => {
//     // Handle request errors here
//     return Promise.reject(error);
//   },
// );

// // Response interceptor
// axiosInstance.interceptors.response.use(
//   (response: AxiosResponse) => {
//     // Modify the response data here (e.g., parse, transform)
//     return response;
//   },
//   (error: AxiosError) => {
//     // Handle response errors here
//     return Promise.reject(error);
//   },
// );

// export default axiosInstance;
