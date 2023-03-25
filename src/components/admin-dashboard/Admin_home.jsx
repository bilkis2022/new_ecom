import React, { useState } from "react";
import Account from "./account/Account";
import Dashboard from "./Dashboard";
import pic from "../../images/me.jpg";

const Admin_home = () => {
  const [settingg, set_setting] = useState(false);
  const [show, setshow] = useState(false);

  const setting = () => {
    set_setting((pre) => !pre);
  };
  const showw = () => {
    setshow((pre) => !pre);
  };

  const navv = 'bg-gradient-to-r from-cyan-500 to-blue-500';

  return (
    <div>
      <div className= {navv + " fixed w-full p-3 top-0 left-0 bg-orange-200 flex flex-row  mb-3 "}>
        <h3 className=" w-[90%]  text-gray-600 text-center">Jannat's Dashboard</h3>

        <div className=" relative w-[10%] float-right">
          <img
            className=" w-10 h-10 rounded-full float-right"
            src={pic}
            alt="me"
            onClick={showw}
          />
          {show ? (
            <div className=" absolute top-[140%] right-2 min-w-[200px] bg-white z-[100] rounded-md shadow-md">
              <div className="text-center mb-3">
                <h3 className=" text-gray-500 font-semibold text-lg">
                  Jannat Islam
                </h3>
                <span className=" text-gray-400">Admin</span>
              </div>
              <hr className=" text-gray-500 mb-3" />
              <div className=" flex flex-col justify-start gap-2  text-gray-600 mb-3">
                <a className="pl-5 py-2 hover:bg-gray-200 " href="#">
                  <span className=" mr-2">
                    <i class="fa-regular fa-user"></i>
                  </span>{" "}
                  My Profile
                </a>
                <a className="pl-5 py-2 hover:bg-gray-200 " href="#">
                  <span className=" mr-2">
                    <i class="fa-solid fa-gear"></i>
                  </span>{" "}
                  Setting
                </a>
                <a className="pl-5 py-2 hover:bg-gray-200" href="#">
                  <span className=" mr-2">
                    <i class="fa-solid fa-wallet"></i>
                  </span>{" "}
                  Billing
                </a>
              </div>
              <hr className=" text-gray-500 mb-3" />
              <div className=" text-gray-500 mb-2 flex flex-col">
                <a className=" pl-5 py-2 hover:bg-gray-200 " href="#">
                  <span className="">
                    <i class="fa-solid fa-wallet"></i>
                  </span>{" "}
                  Log Out
                </a>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="">
        <div className="w-[20%] text-gray-500  rounded-t fixed top-16 left-0 bg-slate-100 h-full flex flex-col gap-4  pt-7">
          <div className=" ">
            <a
              className=" hover:bg-gray-200 pl-4 ml-1 pr-16 rounded-sm py-2 cursor-pointer"
              href="#"
            >
              <i class="fa-solid fa-house-user mr-2"></i>
              <span>Dashboard</span>
            </a>
          </div>
          <div className=" ">
            <div
              className="settiing "
              onClick={() => {
                setting();
              }}
            >
              <a
                className=" hover:bg-gray-200 pl-4 ml-1 pr-6 rounded-sm py-2 cursor-pointer"
                href="#"
              >
                <i class="fa-solid fa-house-user mr-2"></i>
                <span>Account Settings</span>
              </a>
            </div>
            {settingg ? (
              <div className="flex flex-col ml-1 mt-2">
                <li className=" hover:bg-gray-200 pl-4 ml-1 pr-14 rounded-sm py-2 cursor-pointer"> Account</li>
                <li className=" hover:bg-gray-200 pl-4 ml-1 pr-10 rounded-sm py-2 cursor-pointer">Authentications</li>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="cursor-pointer transition-all duration-300 ">
            <a href="#" className=" hover:bg-gray-200 pl-4 ml-1 pr-20 rounded-sm py-2 cursor-pointer">
              <i class="fa-solid fa-house-user mr-2"></i>
            <span>Inventory</span>
            </a>
            
          </div>
          <div className="cursor-pointer">
            <a href="#" className=" hover:bg-gray-200 pl-4 ml-1 pr-24 rounded-sm py-2 cursor-pointer">
              <i class="fa-solid fa-house-user mr-2"></i>
              <span>Order</span>
            </a>
            
          </div>
          <div className="cursor-pointer">
            <a href="#" className=" hover:bg-gray-200 pl-4 ml-1 pr-20 rounded-sm py-2 cursor-pointer">
              <i class="fa-solid fa-house-user mr-2"></i>
            <span>Customer</span>
            </a>
            
          </div>
        </div>
        <div className=" w-[80%] ml-[21%] mt-16  rounded-t h-full ">
          <Dashboard />
          {/* <Account /> */}
        </div>
      </div>
    </div>
  );
};

export default Admin_home;
