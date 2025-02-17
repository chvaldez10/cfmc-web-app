"use client";

import { FC, createContext, useState, useContext, ReactNode } from "react";

interface NavbarContextType {
  isMenuBarOpen: boolean;
  toggleMenu: () => void;
}

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

export const NavbarProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isMenuBarOpen, setIsMenuBarOpen] = useState(false);
  const toggleMenu = () => setIsMenuBarOpen(!isMenuBarOpen);

  return (
    <NavbarContext.Provider value={{ isMenuBarOpen, toggleMenu }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (context === undefined) {
    throw new Error("useNavbar must be used within a NavbarProvider");
  }
  return context;
};
