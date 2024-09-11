// Libraries
import { Outlet } from "react-router-dom";
import { Box, styled } from "@mui/material";
// Components - local
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
// Hooks
import useContextLayout from "@/hooks/useContextLayout";

const Container = styled(Box)(({}) => ({
  minHeight: "100vh",
  maxHeight: "100vh",
  minWidth: "100%",
  maxWidth: "100%",
  display: "flex",
}));

const Dashboard = () => {
  // hooks
  const { topBarHeight } = useContextLayout();

  return (
    <Container>
      <Sidebar />
      <Box
        sx={{
          width: "100%",
          maxWidth: "100%",
          paddingTop: `${topBarHeight - 4}px`,
        }}
      >
        <Topbar />
        <Outlet />
      </Box>
    </Container>
  );
};

export default Dashboard;
