// UTILS
import axios from "@/utils/axios";
// HOOKS
import useLocalStorage from "./useLocalStorage";

export interface UserClaims {
  user_id: string;
  user_level_id: string;
  email: string;
}

export interface TokenClaims {
  expired: number;
  token: string;
}

export const useAuth = () => {
  const { setItem, getItem, removeItem } = useLocalStorage();

  const setLogin = (token: TokenClaims) => {
    setItem("token", JSON.stringify(token));
  };

  const setLogout = () => {
    removeItem("token");
  };

  const getUser = async (): Promise<UserClaims | null> => {
    const dataToken = getItem("token");
    const dataTokenJson = dataToken
      ? (JSON.parse(dataToken ?? "") as TokenClaims)
      : null;

    if (dataTokenJson == null) {
      delete axios.defaults.headers.common.Authorization;
      return null;
    } else {
      if (Math.floor(Date.now() / 1000) > dataTokenJson.expired) {
        delete axios.defaults.headers.common.Authorization;
        return null;
      } else {
        axios.defaults.headers.common.Authorization = `Bearer ${dataTokenJson.token}`;

        const response = await axios.get("/user/profile", {
          headers: {
            "Content-Type": "application/json",
          },
        });

        return response.data.data as UserClaims;
      }
    }
  };

  return { getUser, setLogin, setLogout };
};
