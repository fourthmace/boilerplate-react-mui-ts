// LIBRARIES
import { useContext } from "react";
// CONTEXT
import { LayoutContext } from "@/context/LayoutContext";

const useContextLayout = () => {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error(
      "useContextLayout must be used within a LayoutContext.Provider"
    );
  }
  return context;
};

export default useContextLayout;
