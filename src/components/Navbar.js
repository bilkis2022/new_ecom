import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Categoryapi } from "../apifolder/Categoriesapi";
import { useAuthContext } from "../context/Authcontext";
import { UsecartContext } from "../context/ProductContext";

const Navbar = () => {
  const { state, logout } = useAuthContext();
  const history = useNavigate();
  const [right, setRight] = useState("text-[14px] cursor-pointer ml-[25px]");
  const [search, set_search] = useState("");
  console.log("nm", state?.user?.name);
  console.log("state", state);

  const { statee, dispatch, increase_product } = UsecartContext();
  console.log("statee", statee);

  return (
    <div className="navbar h-[60px] shadow-md relative z-10 mobile:h-[110px] mb-2">
      <div className="wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center mobile:flex mobile:flex-col">
        {/* left div___ */}
        <div className="left flex flex-1 items-center">
          <div className="language cursor-pointer text-[16px]">En</div>
          <div className="relative searchInput flex border-[2px] border-solid border-lightgrey rounded-md items-center ml-[10px] p-[5px] focus-within:border-[#8a4af3] transition-all">
            <input
              onChange={(e) => set_search(e.target.value)}
              type="text"
              className="input outline-none"
            />
            <Search style={{ fontSize: "19px" }} />
            {search ? (
              <div className=" absolute top-14 left-0 w-full bg-slate-50 shadow-lg rounded-md ">
                <ul className=" pl-5 ">
                  {Categoryapi.filter((user) =>
                    user.title.toLowerCase().includes(search)
                  ).map((pr) => (
                    <li className=" text-gray-500 cursor-pointer" key={pr.id}>
                      {pr.title}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        {/* center div */}
        <div className="center flex-1 text-center">
          <div className="logo font-bold text-lg">Summer King's</div>
        </div>

        {/* right div */}
        <div className="right flex flex-1 items-center justify-end mobile:justify-start">
          {state?.authenticated ? (
            <div className={right}>
              <span>{state?.user?.name}</span>
              <span onClick={logout}>Log Out </span>
            </div>
          ) : (
            <>
              <div className={right} onClick={() => history("/register")}>
                Register
              </div>
              <div className={right} onClick={() => history("/login")}>
                Log in
              </div>
            </>
          )}

          <div className={right} onClick={() => history("/cart")}>
            <Badge badgeContent={statee?.cartItems?.length} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
