import React from "react";
import cartoon from "../../images/cartoon2.jpg";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./dashboard.css";

const Dashboard = () => {
  const data = [
    {
      name: "Jan",
      2022: 30,
      2023: 60,
      amt: 2400,
      profit: 0,
    },
    {
      name: "Feb",
      2022: 80,
      2023: 90,
      amt: 2210,
      profit: 0,
    },
    {
      name: "Mar",
      2022: 70,
      2023: 80,
      amt: 2290,
      profit: 0,
    },
    {
      name: "Apr",
      2022: 30,
      2023: 40,
      amt: 2000,
      profit: 0,
    },
    {
      name: "May",
      2022: 50,
      2023: 60,
      amt: 2181,
      profit: 0,
    },
    {
      name: "Jun",
      2022: 90,
      2022: 100,
      amt: 2500,
      profit: 100,
    },
  ];

  return (
    <div className="bg-slate-100 h-full p-3">
      <h3 className=" mb-6 text-lg text-gray-600 font-semibold  mt-4">Dashboard</h3>
      <div className=" flex flex-row">
        <div className="left_side w-[60%] flex flex-col gap-5">
          <div className="notify flex flex-row bg-white rounded-md mb-8 p-3 shadow-xl">
            <div className="cngrts w-[80%]">
              <h4 className=" text-blue-500 mb-2">
                Congratulations Jannat! <i class="fa-solid fa-gifts"></i>
              </h4>
              <p className=" text-gray-600 mb-4">
                You have done <span className=" text-gray-900">70%</span> more
                sales today. Check <br /> your new badge in your profile.
              </p>
              <button className=" px-4 py-2 text-blue-500 border border-blue-500 rounded-md hover:border-none hover:text-gray-900 hover:bg-blue-300">
                View Badges
              </button>
            </div>
            <div className=" w-[20%]">
              <img className="  w-full" src={cartoon} alt="congrates" />
            </div>
          </div>
          <div className="chart">
            <div className="show_chart p-3 bg-white shadow-xl">
              <h4 className=" text-gray-600 mb-2">Total Revenue</h4>
              <span className=" text-sm text-gray-600 mr-2">2023</span>{" "}
              <span className=" text-sm text-gray-600 mr-2">2022</span>
              <AreaChart
                className=" mt-4"
                width={500}
                height={250}
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="2022"
                  stroke="#8884d8"
                  fillOpacity={1}
                  fill="url(#colorUv)"
                />
                <Area
                  type="monotone"
                  dataKey="2023"
                  stroke="#82ca9d"
                  fillOpacity={1}
                  fill="url(#colorPv)"
                />
              </AreaChart>
            </div>
            <div></div>
          </div>
        </div>
        <div className="right_side w-[40%] grid  ">
          <div className="profit bg-white shadow-xl flex flex-row gap-2 p-3">
            <div className="flex flex-col justify-center items-start w-[80%] gap-2 m-auto">
              <span className=" text-lime-600 p-3 bg-lime-100 rounded-lg">
                <i class="fa-regular fa-clock"></i>
              </span>
              <h5 className=" text-gray-600 font-bold text-xl">Profit</h5>
              <h5 className=" text-gray-600 font-bold text-2xl">
                $<span>12,628</span>{" "}
              </h5>
              <h5 className="  font-bold  text-lime-500"> &#8593; +72.80% </h5>
            </div>
            <div>
              {" "}
              <span>
                <i class="fa-solid fa-ellipsis-vertical"></i>
              </span>{" "}
            </div>
          </div>
          <div className="sales bg-white shadow-xl flex flex-row gap-2 p-3">
            <div className="flex flex-col justify-center items-start w-[80%] gap-2 m-auto">
              <span className=" text-blue-600 px-3 py-2 bg-blue-100 rounded-lg">
              <i class="fa-regular fa-file"></i>
              </span>
              <h5 className=" text-gray-600 font-bold text-xl">Sales</h5>
              <h5 className=" text-gray-600 font-bold text-2xl">
                $<span>12,628</span>{" "}
              </h5>
              <h5 className="  font-bold  text-lime-500"> &#8593; +72.80% </h5>
            </div>
            <div>
              {" "}
              <span>
                <i class="fa-solid fa-ellipsis-vertical"></i>
              </span>{" "}
            </div>
          </div>
          <div className="payments bg-white shadow-xl flex flex-row gap-2 p-3">
            <div className="flex flex-col justify-center items-start w-[80%] gap-2 m-auto">
              <span className=" text-red-600 px-3 py-2 bg-red-100 rounded-lg">
              <i class="fa-brands fa-paypal"></i>
              </span>
              <h5 className=" text-gray-600 font-bold text-xl">Payments</h5>
              <h5 className=" text-gray-600 font-bold text-2xl">
                $<span>12,628</span>{" "}
              </h5>
              <h5 className="  font-bold  text-lime-500"> &#8593; +72.80% </h5>
            </div>
            <div>
              {" "}
              <span>
                <i class="fa-solid fa-ellipsis-vertical"></i>
              </span>{" "}
              
            </div>
          </div>
          <div className="transaction bg-white shadow-xl flex flex-row gap-2 p-3">
            <div className="flex flex-col justify-center items-start w-[80%] gap-2 m-auto">
              <span className=" text-indigo-600 py-2 px-3 bg-indigo-100 rounded-lg">
              <i class="fa-regular fa-credit-card"></i>
              </span>
              <h5 className=" text-gray-600 font-bold text-xl">Transaction</h5>
              <h5 className=" text-gray-600 font-bold text-2xl">
                $<span>12,628</span>{" "}
              </h5>
              <h5 className="  font-bold  text-lime-500"> &#8593; +72.80% </h5>
            </div>
            <div>
              {" "}
              <span>
                <i class="fa-solid fa-ellipsis-vertical"></i>
              </span>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
