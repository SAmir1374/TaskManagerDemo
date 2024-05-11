import axios from "axios";
import { setAccessToken, logout } from "../redux/slices/authSlice";
import store from "../redux/store";
import { AuthRefreshTokenRoute } from "../api/api.routes";

const AXIOS = axios.create({
  baseURL: "http://localhost:3000/api",
});

let accessToken = localStorage.getItem("accessToken");
let refreshToken = localStorage.getItem("refreshToken");
store.subscribe(() => {
  accessToken = store.getState().auth.accessToken;
  refreshToken = store.getState().auth.refreshToken;
});

AXIOS.interceptors.request.use(
  (config) => {
    // const accessToken = store.getState().auth.accessToken;
    if (accessToken) {
      config.headers["x-auth-token"] = `${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

AXIOS.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;
    console.log(error);

    if (
      (error.response.status === 401 || error.response.status === 403) &&
      !originalRequest._retry &&
      originalRequest.url !== AuthRefreshTokenRoute // API endpoint to refresh tokens
    ) {
      originalRequest._retry = true;
      return AXIOS.post(AuthRefreshTokenRoute, {
        refreshToken: refreshToken || "",
      })
        .then((res) => {
          if (res.status === 200) {
            const newAccessToken = res.data.data.accessToken;

            // const { accessToken, refreshToken } = res.data;
            store.dispatch(setAccessToken(newAccessToken));
            AXIOS.defaults.headers["x-auth-token"] = newAccessToken;
            originalRequest.headers["x-auth-token"] = newAccessToken;
            return AXIOS(originalRequest);
          }
        })
        .catch((error) => {
          store.dispatch(logout());
          return Promise.reject(error);
        });
    }
    return Promise.reject(error);
  }
);

export default AXIOS;
