import { IoMdMenu, IoMdClose } from "react-icons/io";
import Logo from "../assets/logo.png";
import Button from "./Button";
import { useState } from "react";
interface ChildComponentProps {
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBar = ({ setMenu }: ChildComponentProps) => {
  const handler = () => {
    setMenu(false);
  };
  return (
    <div className="w-1/2 border-blue-100  min-h-screen fixed right-0 top-0 translate-x-1   bg-[#ffff] z-[10000]  duration-200">
      <div className="flex mt-10 flex-col text-center gap-8 text-nav-primary font-bold items-center justify-center ">
        <div className="lg:hidden sm:block" onClick={handler}>
          <IoMdClose size={40} />
        </div>
        <div>Crypto Taxes</div>
        <div>Free Tools</div>
        <div>Resource Center</div>
        <div className="flex justify-center items-center">
          <Button
            textColor={"#ffffff"}
            backgroundColor={"#2870EA"}
            content={"Get Started"}
          />
        </div>
      </div>
    </div>
  );
};
const Navbar = () => {
  const [showMenu, setMenu] = useState<boolean>(false);
  const toggleMenu = () => {
    setMenu(!showMenu);
  };
  return (
    <nav className="bg-[#ffff] p-2 shadow-sm relative">
      <div className="flex justify-between p-3 items-center">
        <div>
          <img src={Logo} alt="LogoKoinX" width={96} height={24} />
        </div>
        <div className="hidden lg:flex gap-8 lg:text-nav-primary lg:font-bold lg:items-center lg:justify-center">
          <div>Crypto Taxes</div>
          <div>Free Tools</div>
          <div>Resource Center</div>
          <div className="flex justify-center items-center">
            <Button
              textColor={"#ffffff"}
              backgroundColor={"#2870EA"}
              content={"Get Started"}
            />
          </div>
        </div>
        <div className="lg:hidden sm:block" onClick={toggleMenu}>
          <IoMdMenu size={40} />
        </div>
        {showMenu && <SideBar setMenu={setMenu} />}
      </div>
    </nav>
  );
};

export default Navbar;
