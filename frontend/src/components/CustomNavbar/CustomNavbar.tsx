import NavLogo from "./NavLogo";

const CustomNavbar = () => {
  return (
    <nav className="bg-white-10 border-gray-200">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <NavLogo />
      </div>
    </nav>
  );
};

export default CustomNavbar;
