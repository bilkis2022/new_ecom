import React, { useState } from "react";
import {
  FavoriteOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { UsecartContext } from "../context/ProductContext";


const Productss = ({ item }) => {
  const history = useNavigate();

  const { increase_product } = UsecartContext();

  const iconstyle =
    "w-[40px] h-[40px] bg-white flex items-center justify-center rounded-full m-3 cursor-pointer hover:bg-[#894af3] hover:text-white";

  return (
    <div className="relative  rounded-md shadow-lg m-4 overflow-hidden min-w-[360px] min-h-[350px]  object-fill gap-6">
      <img src={item.src} alt="productimg" className="w-[100%] h-[100%]" />
      <div className="absolute w-[100%] h-[100%] top-0 left-0 opacity-0 hover:opacity-[1] justify-center items-center flex duration-300 hover:bg-[rgba(0,0,0,0.2)] ease-in">
        <div className={iconstyle} onClick={()=>increase_product(item)}>
          <ShoppingCartOutlined />
        </div>
        <div className={iconstyle}>
          <FavoriteOutlined />
        </div>
        <div className={iconstyle} onClick={() => history("/productpage")}>
          <SearchOutlined />
        </div>
      </div>
    </div>
  );
};

export default Productss;
