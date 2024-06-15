"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { IoIosClose } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { LiaAngleRightSolid, LiaAngleLeftSolid } from "react-icons/lia";
import { IoHomeOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { PiUsersThreeThin } from "react-icons/pi";
import { CiPaperplane } from "react-icons/ci";
import React, { useContext } from "react";
import { RxCopy } from "react-icons/rx";
import MenuItem from "@/components/molecule/MenuItem";

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = React.useState(false);
  const [questions, setQuestions] = React.useState(false);
  const [result, setResult] = React.useState(false);

  const handleDrawerClose = () => {
    setOpen((prev) => !prev);
    setUser(false);
    setQuestions(false);
    setResult(false);
  };

  return (
    <header
      className={`pt-0 border-r-[1px] border-gray-200 border-solid min-h-screen transition-all duration-300 ease-in-out ${
        open ? "min-w-[170px] md:min-w-[250px]" : "w-auto"
      }`}
    >
      <div className={`logo flex items-center border-bottom justify-start ${open ? "justify-between  bg-purple-500" : ""}`}>
        <Button className={`logo flex justify-between items-center gap-1  ${open ? "text-white" : "hidden"}`}>
          <IoLogoCss3 className="icon-height-width" />
          <h3>E-Prep</h3>
        </Button>
        <Button onClick={handleDrawerClose}>
          {open ? <LiaAngleLeftSolid className="icon-height-width text-white" /> : <LiaAngleRightSolid className="icon-height-width" />}
        </Button>
      </div>
      <nav className="menu__items xl:pt-8">
        <ul className="flex flex-col items-start justify-start">
          <MenuItem open={open} icon={<IoHomeOutline className="mr-4 icon-height-width" />} label="dashboard" isSingle />
          <MenuItem
            open={open}
            currentMenu={user}
            setCurrentMenu={(active: boolean) => setUser(active)}
            icon={<PiUsersThreeThin className="mr-4 icon-height-width" />}
            label="Users"
            dropdownMenuItems={["All Users", "Students", "Teachers"]}
          />
          <MenuItem
            open={open}
            currentMenu={questions}
            setCurrentMenu={(active: boolean) => setQuestions(active)}
            icon={<CiPaperplane className="mr-4 icon-height-width" />}
            label="Questions"
            dropdownMenuItems={["Solve", "Add Questions", "All Questions"]}
          />
          <MenuItem
            open={open}
            currentMenu={result}
            setCurrentMenu={(active: boolean) => setResult(active)}
            icon={<RxCopy className="mr-4 icon-height-width" />}
            label="Result"
            dropdownMenuItems={["My Result", "Add Result", "All "]}
          />
          <MenuItem open={open} icon={<IoSettingsOutline className="mr-4 icon-height-width" />} label="Setting" isSingle />
        </ul>
      </nav>
    </header>
  );
}
