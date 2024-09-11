// LIBRARIES
import { enqueueSnackbar } from "notistack";
// UTILS
import axios from "@/utils/axios";
// TYPES
import { ProfileIForm } from "./Types";

export const UpdateProfile = async (
  payload: ProfileIForm
): Promise<Boolean> => {
  try {
    await axios.put("/user/profile/update", payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    enqueueSnackbar("Update profile berhasil", { variant: "success" });
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
