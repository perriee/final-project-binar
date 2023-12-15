import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// Icons
import { BiSearchAlt } from "react-icons/bi";
import { IoIosNotificationsOutline, IoIosList } from "react-icons/io";
import { LuLogOut, LuUser } from "react-icons/lu";
import { FaUser } from "react-icons/fa";

// Images
import BrandLogo from "../../img/brain.webp";

// Redux
import { logoutUserAction } from "../../../redux/action/auth/logoutUserAction";

// Components Material Tailwind
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";

export const NavbarNotif = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // Fungsi untuk menangani perubahan pada input
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  // handle search dengan enter setelah input movie
  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter" && search.trim() !== "") {
      // navigate(`/Search?query=${search}`);
    }
  };

  // Handle Logout
  const handleLogout = () => {
    dispatch(logoutUserAction());
  };

  return (
    <div className="fixed top-0 flex w-screen items-center justify-between gap-2 bg-primary px-2 py-4 md:px-10 lg:px-28">
      <div className="flex gap-10">
        <div className="hidden items-center justify-center gap-2 md:flex lg:flex">
          <img src={BrandLogo} alt="Brand Logo" className="w-[2.5rem]" />
          <div className="gap-4 text-3xl font-semibold text-white">Bingwa</div>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Cari kursus terbaik..."
            className="h-[3rem] w-[12rem] cursor-pointer rounded-xl bg-white px-3 py-2 md:w-[20rem] lg:w-[30rem]"
            value={search}
            onChange={handleInputChange}
            onKeyDown={handleEnterKeyPress}
          />
          <BiSearchAlt
            size={30}
            className="absolute inset-y-2 right-4 hidden cursor-pointer rounded bg-primary p-1 text-white md:flex lg:flex"
          />
        </div>
      </div>

      <div className="flex cursor-pointer items-center gap-2 text-white md:gap-4 lg:gap-3">
        <IoIosList
          size={30}
          onClick={() => {
            navigate("/kelas-saya");
          }}
        />
        <div className="flex gap-2 rounded-xl bg-blue-400 px-2 py-2 font-bold lg:px-6 lg:py-1">
          <IoIosNotificationsOutline size={28} className="hidden lg:flex" />
          <div className="lg:text-lg">Notifikasi</div>
        </div>
        <Menu>
          <MenuHandler>
            <Button
              className="bg-primary p-0 shadow-none hover:shadow-none"
              ripple={false}
              size="sm"
            >
              <LuUser size={30} />
            </Button>
          </MenuHandler>
          <MenuList>
            <MenuItem
              onClick={() => {
                navigate("/akun-profile");
              }}
            >
              <div className="flex items-center gap-3">
                <FaUser size={17} />
                <span>Profile</span>
              </div>
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <div className="flex items-center gap-3">
                <LuLogOut size={17} />
                <span>Logout</span>
              </div>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};
