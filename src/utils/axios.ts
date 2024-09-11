// LIBRARIES
import { default as defaultAxios } from "axios";
import { enqueueSnackbar } from "notistack";
// CONFIG
import { CONFIG } from "@/config";

const axios = defaultAxios.create({
  baseURL:
    CONFIG.backend.fullUrl + CONFIG.backend.prefix + CONFIG.backend.version,
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      const errorMessage = error.response.data?.message || "";

      if (errorMessage === "token expired") {
        enqueueSnackbar("login expired", { variant: "warning" });
        localStorage.removeItem("token");

        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      }
    }

    return Promise.reject(error || "Something went wrong");
  }
);

export default axios;
