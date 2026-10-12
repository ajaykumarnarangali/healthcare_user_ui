import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

// api.interceptors.request.use(
//     (config) => {
//         if (config.requiresAuth !== false) {
//             const token = store.getState().auth.accessToken;

//             if (token) {
//                 config.headers.Authorization = `Bearer ${token}`;
//             }
//         }

//         return config;
//     },
//     (error) => Promise.reject(error)
// );