// LIBRARIES
import { ElementType, Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
// GUARDS
import AuthGuard from "@/guards/AuthGuard";
import GuestGuard from "@/guards/GuestGuard";

/**
 * Lazy Load
 * =====================
 */
import LoadingScreen from "@/components/LoadingScreen";
const Loadable = (Component: ElementType) => (props: any) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

/**
 * Components
 * =====================
 */
const Login = Loadable(lazy(() => import("@/pages/auth/login/Login")));
const Dashboard = Loadable(lazy(() => import("@/pages/dashboard/Dashboard")));
const DashboardMonitor = Loadable(
  lazy(() => import("@/pages/dashboard_monitor/DashboardMonitor"))
);
// -- users --
const DashboardUsers = Loadable(
  lazy(() => import("@/pages/dashboard_users/DashboardUsers"))
);
const DashboardUsersCrud = Loadable(
  lazy(() => import("@/pages/dashboard_users/DashboardUsersCrud"))
);
// -- profile --
const DashboardProfile = Loadable(
  lazy(() => import("@/pages/dashboard_profile/DashboardProfile"))
);
// -- error --
const Page404 = Loadable(lazy(() => import("@/pages/Page404")));

/**
 * Routes Definition
 * =====================
 */
export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Navigate to="/login" />,
    },
    {
      path: "/login",
      element: (
        <GuestGuard>
          <Login />
        </GuestGuard>
      ),
    },
    {
      path: "/dashboard",
      element: (
        <AuthGuard>
          <Dashboard />
        </AuthGuard>
      ),
      children: [
        { path: "", element: <DashboardMonitor /> },
        { path: "users", element: <DashboardUsers /> },
        { path: "users/form", element: <DashboardUsersCrud /> },
        { path: "users/form/:user_id", element: <DashboardUsersCrud /> },
        { path: "profile", element: <DashboardProfile /> },
      ],
    },
    {
      path: "*",
      children: [
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to={"/404"} replace={true} /> },
      ],
    },
  ]);
}
