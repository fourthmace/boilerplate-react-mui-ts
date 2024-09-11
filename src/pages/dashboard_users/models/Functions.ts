// LIBRARIES
import { enqueueSnackbar } from "notistack";
// UTILS
import axios from "@/utils/axios";
// TYPES
import {
  PaginationUsersType,
  UserInput,
  UserLevelType,
  UserType,
} from "./Types";

export const GetUsers = async (
  page: number,
  limit: number,
  keyword: string
): Promise<PaginationUsersType> => {
  try {
    const response = await axios.get(
      `/user/all?page=${page}&limit=${limit}&keyword=${keyword}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.data as PaginationUsersType;
  } catch (error: any) {
    if (error.response && error.response.status <= 500) {
      enqueueSnackbar(error.response.data.message, { variant: "warning" });
    } else {
      enqueueSnackbar("Terjadi kesalahan pada server", { variant: "error" });
    }
    return {
      pages: 0,
      users: [],
    };
  }
};

export const GetUser = async (user_id: string): Promise<UserType | null> => {
  try {
    const response = await axios.get(`/user/all?user_id=${user_id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const dataPagination = response.data.data as PaginationUsersType;
    const users = dataPagination.users;

    return users.length > 0 ? users[0] : null;
  } catch (error: any) {
    if (error.response && error.response.status <= 500) {
      enqueueSnackbar(error.response.data.message, { variant: "warning" });
    } else {
      enqueueSnackbar("Terjadi kesalahan pada server", { variant: "error" });
    }
    return null;
  }
};

export const GetUserLevels = async (): Promise<UserLevelType[]> => {
  try {
    const response = await axios.get(`/user_level/all`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data.data as UserLevelType[];
  } catch (error: any) {
    if (error.response && error.response.status <= 500) {
      enqueueSnackbar(error.response.data.message, { variant: "warning" });
    } else {
      enqueueSnackbar("Terjadi kesalahan pada server", { variant: "error" });
    }
    return [];
  }
};

export const CrudUser = async (payload: UserInput): Promise<Boolean> => {
  try {
    if (!payload.user_id) {
      await axios.post("/user/create", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      await axios.put("/user/update", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    enqueueSnackbar(
      payload.user_id ? "User berhasil ditambah" : "User berhasil diupdate",
      { variant: "success" }
    );
    return true;
  } catch (error: any) {
    if (error.response && error.response.status <= 500) {
      enqueueSnackbar(error.response.data.message, { variant: "warning" });
    } else {
      enqueueSnackbar("Terjadi kesalahan pada server", { variant: "error" });
    }
    return false;
  }
};

export const DeleteUsers = async (userId: string): Promise<boolean> => {
  try {
    await axios.delete(`/user/delete/${userId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    enqueueSnackbar("User berhasil dihapus!", { variant: "success" });
    return true;
  } catch (error: any) {
    if (error.response && error.response.status <= 500) {
      enqueueSnackbar(error.response.data.message, { variant: "warning" });
    } else {
      enqueueSnackbar("Terjadi kesalahan pada server", { variant: "error" });
    }
    return false;
  }
};
