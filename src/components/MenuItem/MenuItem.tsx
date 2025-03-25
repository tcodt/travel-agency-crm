import React from "react";
import { NavLink } from "react-router-dom";

interface MenuItemProps {
  label: string;
  to: string;
  icon: React.ReactNode;
  isOpen: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, to, icon, isOpen }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${isOpen ? "p-2 hover:bg-sky-500 hover:text-white rounded-md" : "p-0"} transition ease-linear ${isActive && "bg-sky-500 text-white rounded-md"} text-gray-800 flex items-center gap-2`
      }
    >
      {icon}{" "}
      <span
        className={`${isOpen ? "transform translate-x-0 transition-transform delay-300" : "translate-x-10"} text-sm`}
      >
        {isOpen && label}
      </span>
    </NavLink>
  );
};

export default MenuItem;
