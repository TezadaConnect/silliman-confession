import React from "react";
import imgLogo from "../assets/silliman-confe.png";
import { HiHome } from "react-icons/hi";
import { FaPenSquare } from "react-icons/fa";
import { BsFillChatDotsFill } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import AvatarComponent from "./avatar_component";

const NavbarComponent = ({ id }) => {
  const navigate = useNavigate();

  const gotoPageProfile = () => {
    navigate("/profile");
  };

  return (
    <div className="w-full bg-white shadow-sm fixed top-0">
      <div className="w-10/12 flex justify-between m-auto p-2 items-center">
        <div>
          <img src={imgLogo} className="w-44" alt="silliman-confe-brand" />
        </div>
        <div className="text-sm text-gray-400">Search field comming soon</div>
        <div className="flex gap-4 items-center cursor-default select-none">
          <div className="flex gap-3 items-center">
            <NavigationComponent id={id} />
          </div>
          <div className="border h-7 border-gray-500"></div>
          <div className="flex gap-2 items-center" onClick={gotoPageProfile}>
            <AvatarComponent />
            <div className="text-sm text-gray-600 font-bold">Tezada</div>
          </div>

          <div className="hover:text-red-700 text-red-900">
            <IoLogOut size={23} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;

const NavigationComponent = ({ id }) => {
  const navbarLinkData = [
    {
      id: 0,
      icon: <HiHome size={20} />,
      link: "/feed",
    },
    {
      id: 1,
      icon: <FaPenSquare size={20} />,
      link: "",
    },
    {
      id: 2,
      icon: <BsFillChatDotsFill size={18} />,
      link: "",
    },
    {
      id: 3,
      icon: <IoMdNotifications size={22} />,
      link: "",
    },
  ];
  const navigate = useNavigate();

  const navigateToPage = (link) => {
    navigate(link);
  };

  return (
    <React.Fragment>
      {navbarLinkData?.map((data, index) => {
        return (
          <div key={index} className="flex flex-col">
            <div
              className="hover:text-red-700 text-red-900"
              onClick={() => navigateToPage(data.link)}
            >
              {data.icon}
            </div>
            <div>
              <hr
                className={id === data.id ? "border-red-900" : "border-white"}
              />
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};
