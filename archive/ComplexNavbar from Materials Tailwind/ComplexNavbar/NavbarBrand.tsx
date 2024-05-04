import { Typography } from "@material-tailwind/react";

const NavbarBrand: React.FC = () => {
  return (
    <Typography
      as="a"
      href="#"
      className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
    >
      CFMC
    </Typography>
  );
};

export default NavbarBrand;
