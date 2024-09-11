// Libraries
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import {
  AppBar,
  Box,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { AccountCircle, Logout, Menu as MenuIcon } from "@mui/icons-material";
// Hooks
import useContextLayout from "@/hooks/useContextLayout";
import useContextAlertConfirm from "@/hooks/useContextAlertConfirm";
import { useAuth } from "@/hooks/useAuth";

const Topbar = () => {
  // refs
  const appBarRef = useRef<HTMLDivElement>(null);
  // use state
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  // hooks
  const { setLogout } = useAuth();
  const navigate = useNavigate();
  const { showAlert } = useContextAlertConfirm();
  const { sidebarWidth, topBarTitle, toggleOpenSidebar, updateTopBarHeight } =
    useContextLayout();

  // set topbar height
  useEffect(() => {
    if (appBarRef.current) {
      updateTopBarHeight(appBarRef.current.offsetHeight);
    }
  }, [appBarRef.current]);

  // open & close dropdown profile
  const openMenuProfile = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const closeMenuProfile = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    console.log("handleProfile");

    setAnchorEl(null);
    navigate("/dashboard/profile");
  };

  const handleLogout = () => {
    console.log("handleLogout");

    setAnchorEl(null);

    showAlert("Logout", "Anda yakin ingin keluar?", () => {
      setLogout();
      navigate("/login");
    });
  };

  return (
    <AppBar
      ref={appBarRef}
      sx={{
        width: { sm: `calc(100% - ${sidebarWidth}px)` },
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Hamburger & title */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            color="inherit"
            onClick={toggleOpenSidebar}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4">{topBarTitle}</Typography>
        </Box>

        {/* Dropdown profile */}
        <Box>
          <IconButton color="inherit" onClick={openMenuProfile}>
            <AccountCircle />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={closeMenuProfile}
          >
            <MenuItem>
              <ListItemIcon>
                <AccountCircle fontSize="small" />
              </ListItemIcon>
              <ListItemText onClick={handleProfile}>Profile</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              <ListItemText onClick={handleLogout}>Logout</ListItemText>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
