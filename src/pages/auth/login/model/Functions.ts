// LIBRARIES
import { enqueueSnackbar } from "notistack";
// UTILS
import axios from "@/utils/axios";
// TYPES
import { TokenClaims } from "@/hooks/useAuth";
import { LoginReq } from "./Types";

export const Login = async (payload: LoginReq): Promise<TokenClaims | null> => {
  try {
    const response = await axios.post("/auth/login", payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    enqueueSnackbar("Login berhasil", { variant: "success" });
    return response.data.data as TokenClaims;
  } catch (error: any) {
    if (error.response && error.response.status <= 500) {
      enqueueSnackbar(error.response.data.message, { variant: "warning" });
    }
    return null;
  }
};
