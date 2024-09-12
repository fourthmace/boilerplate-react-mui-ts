// LIBRARIES
import Monitor from "@mui/icons-material/Monitor";
import GroupIcon from "@mui/icons-material/Group";
// TYPES
import { SidebarMenuType } from "./Types";

export const sidebarWidth = 240;

export const GetSidebarMenu = (): SidebarMenuType[] => {
  return [
    {
      title: "Monitor",
      icon: Monitor,
      path: "/dashboard",
      userLevelId: ["1", "2", "3"],
    },
    {
      title: "Users",
      icon: GroupIcon,
      path: "/dashboard/users",
      userLevelId: ["1"],
    },
  ];
};
