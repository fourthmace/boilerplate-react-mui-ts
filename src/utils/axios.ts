// LIBRARIES
import { default as defaultAxios } from "axios";
import { enqueueSnackbar } from "notistack";
// CONFIG
import { CONFIG } from "@/config";
// FUNCTION
import globalRouter from "./functions";

const axios = defaultAxios.create({
  baseURL:
    CONFIG.backend.fullUrl + CONFIG.backend.prefix + CONFIG.backend.version,
});

let cancelToken = defaultAxios.CancelToken.source();

axios.interceptors.request.use((config) => {
  config.cancelToken = cancelToken.token;
  return config;
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      const errorMessage = error.response.data?.message || "";

      if (errorMessage === "token expired") {
        enqueueSnackbar("login expired", { variant: "warning" });
      }

      localStorage.removeItem("token");
      globalRouter.navigate ? globalRouter.navigate("/login") : null;

      cancelToken.cancel("Token expired, cancelling all requests");
      cancelToken = defaultAxios.CancelToken.source();
    }

    return Promise.reject(error || "Something went wrong");
  }
);

export default axios;
