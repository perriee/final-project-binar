import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Icons
import { BiSearchAlt } from "react-icons/bi";
import { IoIosNotificationsOutline, IoIosList } from "react-icons/io";
import { LuUser } from "react-icons/lu";

// Images
import BrandLogo from "../../img/brain.webp";

export const NavbarAkun = () => {
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

  return (
    <div className="fixed top-0 flex w-screen items-center justify-between gap-2 bg-primary px-2 py-4 lg:px-28">
      <div className="flex gap-10">
        <div
          className="hidden items-center justify-center gap-2 lg:flex cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={BrandLogo} alt="Brand Logo" className="w-[2.5rem]" />
          <div className="gap-4 text-3xl font-semibold text-white">Bingwa</div>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Cari kursus terbaik..."
            className="h-[3rem] w-[13rem] cursor-pointer rounded-xl bg-white px-3 py-2 lg:w-[30rem]"
            value={search}
            onChange={handleInputChange}
            onKeyDown={handleEnterKeyPress}
          />
          <BiSearchAlt
            size={30}
            className="absolute inset-y-2 right-4 cursor-pointer rounded bg-primary p-1 text-white"
          />
        </div>
      </div>

      <div className="flex cursor-pointer items-center gap-1 text-white lg:gap-6">
        <div className="flex space-x-1 lg:space-x-4">
          <IoIosList
            size={30}
            onClick={() => {
              navigate("/kelas-saya");
            }}
          />
          <IoIosNotificationsOutline
            size={30}
            onClick={() => {
              navigate("/notifikasi");
            }}
          />
        </div>
        <div className="flex rounded-xl bg-blue-400 px-2 py-1 font-bold lg:gap-2 lg:px-6">
          <LuUser size={28} />
          <div className="text-lg">Akun</div>
        </div>
      </div>
    </div>
  );
};
