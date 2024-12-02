import React from "react";
import PageDesign from "../assets/Components/pageDesign";
import { HiShoppingCart } from "react-icons/hi";
import Chart from "../assets/Components/ReChart";

const Expense = () => {
  return (
    <PageDesign className="grid grid-cols-3  ">
      <div className="pt-10 px-24  bg-white  rounded-l-3xl col-span-2">
        <div className="  flex justify-between">
          <div>
            <h1 className="font-semibold text-[40px] mb-2.5">Expenses</h1>
            <p>01 - 25 March, 2020</p>
          </div>
          <div>
            <img src="/public/Profile.png" alt="" />
          </div>
        </div>

        <div className="h-32 mt-4">
          <Chart />
        </div>

        <div className="mt-6 flex justify-between items-center border-b pb-2">
          <h4 className="font-semibold text-lg ">Today</h4>
          <div className="flex gap-2">
            <div className="w-1 h-1 bg-red-300 rounded-full"></div>
            <div className="w-1 h-1 bg-red-300 rounded-full"></div>
            <div className="w-1 h-1 bg-red-300 rounded-full"></div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-4">
            <div className="bg-[#32A7E2] w-8 h-8 rounded-full flex items-center justify-center ">
              <HiShoppingCart className="text-white" />
            </div>
            <div>
              <h5 className="font-semibold text-base">Grocery</h5>
              <p>5:12 pm • Belanja di pasar</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-base">-326.800</h3>
          </div>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-4">
            <div className="bg-[#32A7E2] w-8 h-8 rounded-full flex items-center justify-center ">
              <HiShoppingCart className="text-white" />
            </div>
            <div>
              <h5 className="font-semibold text-base">Grocery</h5>
              <p>5:12 pm • Belanja di pasar</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-base">-326.800</h3>
          </div>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-4">
            <div className="bg-[#32A7E2] w-8 h-8 rounded-full flex items-center justify-center ">
              <HiShoppingCart className="text-white" />
            </div>
            <div>
              <h5 className="font-semibold text-base">Grocery</h5>
              <p>5:12 pm • Belanja di pasar</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-base">-326.800</h3>
          </div>
        </div>

        <div className="mt-6 flex justify-between items-center border-b pb-2">
          <h4 className="font-semibold text-lg ">Monday, 23 March 2020</h4>
          <div className="flex gap-2">
            <div className="w-1 h-1 bg-red-300 rounded-full"></div>
            <div className="w-1 h-1 bg-red-300 rounded-full"></div>
            <div className="w-1 h-1 bg-red-300 rounded-full"></div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-4">
            <div className="bg-[#32A7E2] w-8 h-8 rounded-full flex items-center justify-center ">
              <HiShoppingCart className="text-white" />
            </div>
            <div>
              <h5 className="font-semibold text-base">Grocery</h5>
              <p>5:12 pm • Belanja di pasar</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-base">-326.800</h3>
          </div>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-4">
            <div className="bg-[#32A7E2] w-8 h-8 rounded-full flex items-center justify-center ">
              <HiShoppingCart className="text-white" />
            </div>
            <div>
              <h5 className="font-semibold text-base">Grocery</h5>
              <p>5:12 pm • Belanja di pasar</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-base">-326.800</h3>
          </div>
        </div>
      </div>

      <div className=" bg-[#F9FAFC] p-10 rounded-r-3xl col-span-1  ">
        <h3 className="font-semibold text-xl text-center">
          Where your money go?
        </h3>

        <div>
          <div className="flex justify-between mt-7 mb-2">
            <h4 className="font-semibold ">Food and Drinks</h4>
            <p className="text-[#273240]">872.400</p>
          </div>

          <div className="w-[250px] h-2.5 bg-[#ECEFF5]  rounded-full">
            <div className="bg-blue-400 h-2.5 rounded-full w-[45%]"></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mt-7 mb-2">
            <h4 className="font-semibold ">Food and Drinks</h4>
            <p className="text-[#273240]">872.400</p>
          </div>

          <div className="w-[250px] h-2.5 bg-[#ECEFF5]  rounded-full">
            <div className="bg-blue-400 h-2.5 rounded-full w-[45%]"></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mt-7 mb-2">
            <h4 className="font-semibold ">Food and Drinks</h4>
            <p className="text-[#273240]">872.400</p>
          </div>

          <div className="w-[250px] h-2.5 bg-[#ECEFF5]  rounded-full">
            <div className="bg-blue-400 h-2.5 rounded-full w-[45%]"></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mt-7 mb-2">
            <h4 className="font-semibold ">Food and Drinks</h4>
            <p className="text-[#273240]">872.400</p>
          </div>

          <div className="w-[250px] h-2.5 bg-[#ECEFF5]  rounded-full">
            <div className="bg-blue-400 h-2.5 rounded-full w-[45%]"></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mt-7 mb-2">
            <h4 className="font-semibold ">Food and Drinks</h4>
            <p className="text-[#273240]">872.400</p>
          </div>

          <div className="w-[250px] h-2.5 bg-slate-300   rounded-full">
            <div className="w-[25%] bg-red-400 rounded-full h-2.5 ">

            </div>
          </div>
        </div>
      </div>
    </PageDesign>
  );
};

export default Expense;
