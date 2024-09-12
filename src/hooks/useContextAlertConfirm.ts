// LIBRARIES
import { useContext } from "react";
// CONTEXT
import { AlertConfirmContext } from "@/context/AlertConfirmContext";

const useContextAlertConfirm = () => {
  const context = useContext(AlertConfirmContext);
  if (context === undefined) {
    throw new Error(
      "useContextAlertConfirm must be used within a AlertConfirmContext.Provider"
    );
  }
  return context;
};

export default useContextAlertConfirm;
