// Libraries
import { ReactNode, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
// Hooks
import { useAuth, UserClaims } from "@/hooks/useAuth";
// Context
import { UserContext } from "@/context/UserContext";
// Component
import LoadingScreen from "@/components/LoadingScreen";

type AuthGuardProps = {
  children: ReactNode;
};

export default function AuthGuard({ children }: AuthGuardProps) {
  const { getUser } = useAuth();
  const [user, setUser] = useState<UserClaims | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const currentUser = await getUser();
      setUser(currentUser);
      setLoading(false);
    };

    fetchUser();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  if (user === null) {
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <UserContext.Provider value={{ user }}>
      <>{children}</>
    </UserContext.Provider>
  );
}
