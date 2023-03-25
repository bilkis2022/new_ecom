import React from "react";
import Announce from "../components/Announce";
import Counter from "../components/Counter";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { UsecartContext } from "../context/ProductContext";

const Cart = () => {
  const { statee } = UsecartContext();

  return (
    <div>
      <Announce />
      <Navbar />

      <div className="mb-4 p-5">
        <div className="flex justify-center text-5xl">Cart</div>
        <div className="flex items-center justify-between mt-4 mobile:flex-col mobile:justify-center">
          <button className="btn bg-white border-2 border-[#8a4af3] text-[#8a4af3] hover:bg-white">
            Continue Shopping
          </button>

          <div className="flex underline text-lg hover:cursor-pointer mobile:mt-2 mobile:mb-2">
            <p>Items in your cart: 3</p>
            <p className="ml-5">Whitlist Item: 0</p>
          </div>
          <button className="btn">Checkout</button>
        </div>
        {/* central div */}
        <div className="flex mt-7 mobile3:flex-col">
          <div className="flex flex-1 flex-col ">
            {/* list of product div */}
            {statee.cartItems
              ? statee.cartItems.map((itmm) => (
                <div key={itmm.id}>
                  <div className="w-[100%] h-auto items-center flex mobile2:flex-col ">
                    <div className="flex self-start pl-5 mobile2:mb-10">
                      <img
                        src={itmm.src}
                        alt="1st-product-img"
                        className="w-[7.5rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300"
                      />
                      <div className="description flex flex-col ml-5 h-auto justify-between">
                        <p>
                          <b className="mr-2">ID:</b>123456
                        </p>
                        <p>
                          <b className="mr-2">Product:</b>Dazzing sky shirt
                        </p>
                        <p className="flex">
                          <b className="mr-2">Color:</b>
                          <div className="rounded-full border-2 p-[10px] cursor-pointer bg-sky-500 ml-1 w-[20px] h-[20px]"></div>
                        </p>
                        <p>
                          <b className="mr-2">Size:</b>lg
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center items-center flex-auto">
                      <Counter />
                      <div className="text-4xl mt-3 flex items-center justify-center">
                        <b>${itmm.price}</b>
                      </div>
                    </div>
                    
                  </div>
                   <hr className="mt-4 mb-4" />
                </div>
                  
                ))
              : ""}
            {/* <div className="w-[100%] h-auto items-center flex mobile2:flex-col ">
              <div className="flex self-start pl-5 mobile2:mb-10">
                <img
                  src="https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinElectricBlue04_360x.jpg?v=1642719824"
                  alt="1st-product-img"
                  className="w-[7.5rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300"
                />
                <div className="description flex flex-col ml-5 h-auto justify-between">
                  <p>
                    <b className="mr-2">ID:</b>123456
                  </p>
                  <p>
                    <b className="mr-2">Product:</b>Dazzing sky shirt
                  </p>
                  <p className="flex">
                    <b className="mr-2">Color:</b>
                    <div className="rounded-full border-2 p-[10px] cursor-pointer bg-sky-500 ml-1 w-[20px] h-[20px]"></div>
                  </p>
                  <p>
                    <b className="mr-2">Size:</b>lg
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center flex-auto">
                <Counter />
                <div className="text-4xl mt-3 flex items-center justify-center">
                  <b>$70</b>
                </div>
              </div>
            </div>
            <hr className="mt-4 mb-4" />
            <div className="w-[100%] h-auto items-center flex mobile2:flex-col">
              <div className="flex self-start pl-5 mobile2:mb-10">
                <img
                  src="https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinElectricBlue04_360x.jpg?v=1642719824"
                  alt="1st-product-img"
                  className="w-[7.5rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300"
                />
                <div className="description flex flex-col ml-5 h-auto justify-between">
                  <p>
                    <b className="mr-2">ID:</b>123456
                  </p>
                  <p>
                    <b className="mr-2">Product:</b>Dazzing sky shirt
                  </p>
                  <p className="flex">
                    <b className="mr-2">Color:</b>
                    <div className="rounded-full border-2 p-[10px] cursor-pointer bg-sky-500 ml-1 w-[20px] h-[20px]"></div>
                  </p>
                  <p>
                    <b className="mr-2">Size:</b>lg
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center flex-auto">
                <Counter />
                <div className="text-4xl mt-3 flex items-center justify-center">
                  <b>$70</b>
                </div>
              </div>
            </div>
            <hr className="mt-5 mb-4" /> */}
          </div>
          <div className="flex-[0.4] w-auto h-[40vh] border-2 border-[#8a4af3] rounded-md shadow-lg flex flex-col justify-center p-2">
            <h1 className="text-[2rem] text-center">Summary</h1>
            <div className="flex justify-between mt-3 w-[100%]">
              <p>Subtotal</p>
              <p>$140</p>
            </div>
            <div className="flex justify-between mt-3 w-[100%]">
              <p>Shipping </p>
              <p>$40</p>
            </div>
            <div className="flex justify-between mt-3 w-[100%]">
              <p>Shipping discount</p>
              <p>-$10</p>
            </div>
            <div className="flex justify-between mt-3 w-[100%] text-2xl font-bold">
              <p>Total</p>
              <p>$170</p>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
      {/* {statee.cartItems ? "trrrrrrrrrrr" : "ppppppppppppppppp"} */}
    </div>
  );
};

export default Cart;
