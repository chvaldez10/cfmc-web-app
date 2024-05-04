import React from "react";
import { Navbar } from "@material-tailwind/react";
import NavbarBrand from "./NavbarBrand";
import NavList from "../NavList/NavList";
import NavToggle from "./NavToggle";
import LoginButton from "./LoginButton";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import { MobileNav } from "@material-tailwind/react";

export default function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setIsNavOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <NavbarBrand />
        <div className="hidden lg:block">
          <NavList />
        </div>
        <NavToggle toggle={toggleIsNavOpen} />
        <LoginButton />
        <ProfileMenu />
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar>
  );
}
