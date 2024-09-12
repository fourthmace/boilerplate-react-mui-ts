// Libraries
import {
  Divider,
  Drawer,
  DrawerProps,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  useTheme,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
// Hooks
import useContextUser from "@/hooks/useContextUser";
import useContextLayout from "@/hooks/useContextLayout";
// Functions
import { GetSidebarMenu } from "../model/Functions";

const DrawerStyled = styled(Drawer)(({}) => ({
  width: 240,
  maxHeight: "100%",
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: 240,
    boxSizing: "border-box",
  },
}));

const DrawerHeaderStyled = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  ...theme.mixins.toolbar,
}));

const Sidebar = () => {
  // refs
  const sidebarRef = useRef<HTMLDivElement>(null);
  // hooks
  const theme = useTheme();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { user } = useContextUser();
  const { openSidebar, toggleOpenSidebar, updateSidebarWidth } =
    useContextLayout();

  // user state
  const [width, setWidth] = useState(window.innerWidth);
  const [drawerVariant, setDrawerVariant] =
    useState<DrawerProps["variant"]>("permanent");

  // set topbar height
  useEffect(() => {
    if (sidebarRef.current) {
      updateSidebarWidth(sidebarRef.current.offsetWidth);
    }
  }, [sidebarRef.current]);

  // watch windows width
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // watch width
  useEffect(() => {
    if (width <= theme.breakpoints.values.sm) {
      setDrawerVariant("temporary");
    } else {
      setDrawerVariant("permanent");
    }
  }, [width]);

  return (
    <DrawerStyled
      ref={sidebarRef}
      variant={drawerVariant}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      open={openSidebar}
      onClose={toggleOpenSidebar}
    >
      <DrawerHeaderStyled></DrawerHeaderStyled>
      <Divider />
      <List sx={{ maxHeight: "100%", overflow: "auto" }}>
        {GetSidebarMenu().map(
          (row, index) =>
            row.userLevelId.includes(String(user?.user_level_id)) && (
              <ListItem disablePadding key={index}>
                <ListItemButton
                  onClick={() => navigate(row.path)}
                  selected={pathname === row.path}
                >
                  <ListItemIcon>
                    <row.icon />
                  </ListItemIcon>
                  <ListItemText primary={row.title} />
                </ListItemButton>
              </ListItem>
            )
        )}
      </List>
      <Divider />
    </DrawerStyled>
  );
};

export default Sidebar;
