import { createContext } from "react";

interface AlertConfirmContextType {
  showAlert: (title: string, content: string, onConfirm?: () => void) => void;
}

export const AlertConfirmContext = createContext<
  AlertConfirmContextType | undefined
>(undefined);
