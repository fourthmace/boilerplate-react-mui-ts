// Libraries
import { ReactNode, useState } from "react";
// Context
import { LayoutContext } from "@/context/LayoutContext";

export const LayoutProvider = ({ children }: { children: ReactNode }) => {
  // sidebar width
  const [sidebarWidth, setSidebarWidth] = useState(0);
  const updateSidebarWidth = (newWidth: number) => {
    setSidebarWidth(newWidth);
  };

  // open sidebar
  const [openSidebar, setOpenSidebar] = useState(false);
  const toggleOpenSidebar = () => {
    setOpenSidebar((prev) => !prev);
  };

  // topbar height
  const [topBarHeight, setTopBarHeight] = useState(0);
  const updateTopBarHeight = (newHeight: number) => {
    setTopBarHeight(newHeight);
  };

  // topbar title
  const [topBarTitle, setTopBarTitle] = useState("");
  const updateTopBarTitle = (newTitle: string) => {
    setTopBarTitle(newTitle);
  };

  return (
    <LayoutContext.Provider
      value={{
        sidebarWidth,
        updateSidebarWidth,
        openSidebar,
        toggleOpenSidebar,
        topBarHeight,
        updateTopBarHeight,
        topBarTitle,
        updateTopBarTitle,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};
