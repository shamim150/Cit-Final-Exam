import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="w-[360px] text-white h-full  pl-20 mt-20 ">
      <div className="">
        <div className="relative w-fit">
          <img className="size-[72px] " src="/Profile.png" alt="Profile" />
          <div className="h-7 w-7 bg-red-500 absolute -right-[10%] -top-[20%] overflow-visible rounded-full text-center">
            4
          </div>
        </div>

        <div className="mb-[117px]">
          <h3 className="font-semibold text-[30px] mt-5 mb-1">Samantha</h3>
          <a href="mailto:samantha@gmail.com">samantha@gmail.com</a>
        </div>

        <ul className="flex flex-col gap-y-7 font-bold text-white">
          <li>
            <NavLink to="/">DashBoard</NavLink>
          </li>

          <li>
            <NavLink to="expense">Expense</NavLink>
          </li>
          <li>
            <NavLink to="wallets">Wallets</NavLink>
          </li>
          <li>
            <NavLink to="summary">Summary</NavLink>
          </li>
          <li>
            <NavLink to="accounts">Accounts</NavLink>
          </li>
          <li>
            <NavLink to="settings">Settings</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
