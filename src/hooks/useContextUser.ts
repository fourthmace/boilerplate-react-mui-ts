// LIBRARIES
import { useContext } from "react";
// CONTEXT
import { UserContext } from "@/context/UserContext";

const useContextUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error(
      "useContextUser must be used within a UserContext.Provider"
    );
  }
  return context;
};

export default useContextUser;
