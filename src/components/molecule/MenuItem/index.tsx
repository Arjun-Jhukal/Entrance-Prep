import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";
import { LiaAngleDownSolid, LiaAngleUpSolid } from "react-icons/lia";

interface Props {
  open: boolean;
  icon: React.ReactElement;
  label: string;
  isSingle?: boolean;
  currentMenu?: boolean;
  setCurrentMenu?: (active: boolean) => void;
  dropdownMenuItems?: string[];
}

export default function MenuItem(props: Props) {
  const { open, icon, label, isSingle, currentMenu, setCurrentMenu, dropdownMenuItems } = props;

  const redirect = useRouter();
  return (
    <li className="w-full lg:pb-2">
      <Button
        className="flex justify-between items-center w-full hover:bg-gray-200"
        onClick={() => {
          if (!isSingle) {
            setCurrentMenu && setCurrentMenu(!currentMenu);
          } else {
            redirect.push(`${label.toLowerCase()}`);
          }
        }}
      >
        <div className="flex justify-start items-center">
          {icon}
          <span className={`capitalize text-md lg:text-xl ${open ? "block" : "hidden"}`}>{label}</span>
        </div>
        {!isSingle ? (
          currentMenu ? (
            <LiaAngleUpSolid className={`icon-height-width ${open ? "block" : "hidden"}`} />
          ) : (
            <LiaAngleDownSolid className={`icon-height-width ${open ? "block" : "hidden"}`} />
          )
        ) : (
          ""
        )}
      </Button>

      <ul
        className={`sub-menu pl-4 transition-opacity ease-in-out duration-300 ${
          currentMenu
            ? "max-h-[999px] opacity-100 transition-all duration-500 ease-in-out"
            : "max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-in-out"
        }`}
      >
        {dropdownMenuItems?.map((item, index) => (
          <li key={item + index.toString()}>
            <Button className="flex justify-between items-center w-full hover:bg-gray-200" onClick={() => {}}>
              <div className="flex justify-start items-center">
                {icon}
                <span className={`capitalize text-md lg:text-xl ${open ? "block" : "hidden"}`}>{item}</span>
              </div>
            </Button>
          </li>
        ))}
      </ul>
    </li>
  );
}
