import { createContext } from "react";
import { UserClaims } from "@/hooks/useAuth";

interface UserContextType {
  user: UserClaims | null;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);
