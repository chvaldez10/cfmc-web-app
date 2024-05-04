import React, { useState } from "react";
import { Menu, MenuHandler, MenuList } from "@material-tailwind/react";
import AvatarButton from "./AvatarButton";
import MenuItemComponent from "./MenuItemComponent";
import profileMenuItems from "./profileMenuItem";

const ProfileMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <AvatarButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => (
          <MenuItemComponent
            key={label}
            label={label}
            icon={icon}
            closeMenu={closeMenu}
            isLastItem={key === profileMenuItems.length - 1}
          />
        ))}
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
