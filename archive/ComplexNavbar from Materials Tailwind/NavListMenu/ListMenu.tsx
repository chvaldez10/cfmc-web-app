// components/MenuContent.tsx
import React from "react";
import { MenuList, Card } from "@material-tailwind/react";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import NavList from "./NavList";

const ListMenu: React.FC = () => (
  <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
    <Card
      color="blue"
      shadow={false}
      variant="gradient"
      className="col-span-3 grid h-full w-full place-items-center rounded-md"
    >
      <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
    </Card>
    <NavList />
  </MenuList>
);

export default ListMenu;
