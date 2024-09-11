import { createContext } from "react";

interface LayoutContextType {
  sidebarWidth: number;
  updateSidebarWidth: (newWidth: number) => void;
  openSidebar: boolean;
  toggleOpenSidebar: () => void;
  topBarHeight: number;
  updateTopBarHeight: (newHeight: number) => void;
  topBarTitle: string;
  updateTopBarTitle: (newTitle: string) => void;
}

export const LayoutContext = createContext<LayoutContextType | undefined>(
  undefined
);
