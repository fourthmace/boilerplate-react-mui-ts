// Libraries
import { ReactNode, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
// Hooks
import { useAuth, UserClaims } from "@/hooks/useAuth";
// Component
import LoadingScreen from "@/components/LoadingScreen";

type GuestGuardProps = {
  children: ReactNode;
};

export default function GuestGuard({ children }: GuestGuardProps) {
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

  if (user !== null) {
    return <Navigate to="/dashboard" replace={true} />;
  }

  return <>{children}</>;
}
