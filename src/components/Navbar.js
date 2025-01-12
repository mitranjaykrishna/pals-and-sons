import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { FaFacebook } from "react-icons/fa";
export default function Navbar() {
  return (
    <div className="fixed top-0 z-50 flex justify-between items-center w-full px-5 md:px-[209px] h-[118px]">
      <h1 className="text-4xl font-bold text-[#222222]">Pals&Sons</h1>
      <div className="flex justify-between items-center gap-5">
        <MenuIcon className="" />
        <FaFacebook />
      </div>
    </div>
  );
}
