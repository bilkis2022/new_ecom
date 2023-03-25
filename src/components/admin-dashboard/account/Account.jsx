import React from "react";
import me from "../../../images/me.jpg";

const Account = () => {
  return (
    <div className=" bg-slate-100 mb-4">
      <h3 className=" mt-5 ml-4">
        <span className=" text-gray-400 ">Account Settings /</span> Account
      </h3>
      <div className="bg-white p-3 mt-4 ml-3 mb-7 pb-4 rounded-md shadow-lg">
        <h3 className="text-gray-600 mb-5 font-semibold text-xl">
          Profile Details
        </h3>
        <div className=" flex flex-row gap-4 mb-8">
          <div>
            <img
              className=" h-[130px] w-[120px] rounded-md shadow-md"
              src={me}
              alt="me"
            />
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <div className=" flex flex-row gap-3">
              <label
                htmlFor="inp"
                className=" bg-indigo-500 px-3 py-1 rounded-md shadow-sm text-white cursor-pointer"
              >
                <span>Upload new photo</span>
                <input
                  className="hidden"
                  type="file"
                  name=""
                  id="inp"
                  accept="file_extension|audio/*|video/*|image/*|media_type"
                  placeholder=""
                />
              </label>
              <button
                type="reset"
                className=" text-gray-600 border border-gray-600 py-2 px-4 rounded-md hover:border-none hover:bg-gray-400 hover:text-white"
              >
                Reset
              </button>
            </div>
            <p className="text-gray-600">
              Allowed JPG, GIF or PNG. Max size of 800K
            </p>
          </div>
        </div>
        <hr className="text-gray-600" />

        {/* inputss.. */}
        <div className="frm p-5">
          <form action="">
            <div className=" flex flex-col gap-7">
              <div className=" flex flex-row gap-7 ">
                <div className=" w-[50%] flex flex-col gap-2">
                  <label
                    className=" text-gray-500 text-xs font-semibold"
                    htmlFor="fname"
                  >
                    FIRST NAME
                  </label>
                  <input
                    className=" w-full border border-gray-300 p-2 rounded-md text-gray-500 focus:border-indigo-500 focus:outline-none font-semibold"
                    type="text"
                    name=""
                    id="fname"
                    value="John"
                    autoFocus
                  />
                </div>
                <div className=" w-[50%]  flex flex-col gap-2">
                  <label
                    className=" text-gray-500 text-xs font-semibold"
                    htmlFor="lname"
                  >
                    LAST NAME
                  </label>
                  <input
                    className=" w-full border border-gray-300 p-2 rounded-md text-gray-500 focus:border-indigo-500 focus:outline-none font-semibold"
                    type="text"
                    name=""
                    id="lname"
                    value="Doe"
                    autoFocus
                  />
                </div>
              </div>
              <div className=" flex flex-row gap-7 ">
                <div className=" w-[50%] flex flex-col gap-2">
                  <label
                    className=" text-gray-500 text-xs font-semibold"
                    htmlFor="email"
                  >
                    E-MAIL
                  </label>
                  <input
                    className=" w-full border border-gray-300 p-2 rounded-md text-gray-500 focus:border-indigo-500 focus:outline-none font-semibold"
                    type="text"
                    name=""
                    id="email"
                    value="xxx@mail.com"
                    autoFocus
                  />
                </div>
                <div className=" w-[50%] flex flex-col gap-2">
                  <label
                    className=" text-gray-500 text-xs font-semibold"
                    htmlFor="organization"
                  >
                    ORGANIZATION
                  </label>
                  <input
                    className=" w-full border border-gray-300 p-2 rounded-md text-gray-500 focus:border-indigo-500 focus:outline-none font-semibold"
                    type="text"
                    name=""
                    id="organization"
                    value="JANNATEX"
                  />
                </div>
              </div>
              <div className=" flex flex-row gap-7 ">
                <div className=" w-[50%] flex flex-col gap-2">
                  <label
                    className=" text-gray-500 text-xs font-semibold"
                    htmlFor="phone"
                  >
                    PHONE NUMBER
                  </label>
                  <input
                    className=" w-full border border-gray-300 p-2 rounded-md text-gray-500 focus:border-indigo-500 focus:outline-none font-semibold"
                    type="text"
                    name=""
                    id="phone"
                    value="***"
                    placeholder="00000"
                    autoFocus
                  />
                </div>
                <div className=" w-[50%] flex flex-col gap-2">
                  <label
                    className=" text-gray-500 text-xs font-semibold"
                    htmlFor="addr"
                  >
                    ADDRESS
                  </label>
                  <input
                    className=" w-full border border-gray-300 p-2 rounded-md text-gray-500 focus:border-indigo-500 focus:outline-none font-semibold placeholder:text-gray-300"
                    type="text"
                    name=""
                    id="addr"
                    value=""
                    placeholder="Address"
                  />
                </div>
              </div>
              <div className=" flex flex-row gap-7 ">
                <div className=" w-[50%] flex flex-col gap-2">
                  <label
                    className=" text-gray-500 text-xs font-semibold"
                    htmlFor="state"
                  >
                    STATE
                  </label>
                  <input
                    className=" w-full border border-gray-300 p-2 rounded-md text-gray-500 focus:border-indigo-500 focus:outline-none font-semibold placeholder:text-gray-300"
                    type="text"
                    name=""
                    id="state"
                    value=""
                    placeholder="State"
                    autoFocus
                  />
                </div>
                <div className=" w-[50%] flex flex-col gap-2">
                  <label
                    className=" text-gray-500 text-xs font-semibold"
                    htmlFor="zip"
                  >
                    ZIP CODE
                  </label>
                  <input
                    className=" w-full border border-gray-300 p-2 rounded-md text-gray-500 focus:border-indigo-500 focus:outline-none font-semibold placeholder:text-gray-300"
                    type="text"
                    name=""
                    id="zip"
                    value=""
                    placeholder="231456"
                  />
                </div>
              </div>
              <div className=" flex flex-row gap-7">
                <div className=" w-[50%] flex flex-col gap-2">
                  <label
                    className=" text-gray-500 text-xs font-semibold"
                    htmlFor="country"
                  >
                    COUNTRY
                  </label>

                  <select
                    className=" w-full border border-gray-300 p-2 rounded-md text-gray-500 focus:border-indigo-500 focus:outline-none font-semibold"
                    name=""
                    id="country"
                  >
                    <option value="">Select</option>
                    <option value="Canada">Canada</option>
                    <option value="America">America</option>
                    <option value="Japan">Japan</option>
                  </select>
                </div>
                <div className=" w-[50%] flex flex-col gap-2">
                  <label
                    className=" text-gray-500 text-xs font-semibold"
                    htmlFor="language"
                  >
                    LANGUAGE
                  </label>
                  <select
                    className=" w-full border border-gray-300 p-2 rounded-md text-gray-500 focus:border-indigo-500 focus:outline-none font-semibold"
                    name=""
                    id="language"
                  >
                    <option value="">Select Language</option>
                    <option value="Canada">Bangla</option>
                    <option value="America">English</option>
                    <option value="Japan">Arabic</option>
                  </select>
                </div>
              </div>
              <div className=" flex flex-row gap-7 ">
                <div className=" w-[50%] flex flex-col gap-2">
                  <label
                    className=" text-gray-500 text-xs font-semibold"
                    htmlFor="timezone"
                  >
                    TIMEZONE
                  </label>
                  <select
                    className=" w-full border border-gray-300 p-2 rounded-md text-gray-500 focus:border-indigo-500 focus:outline-none font-semibold"
                    id="timezone"
                  >
                    <option value="">Select Timezone</option>
                    <option value="-12">
                      (GMT-12:00) International Date Line West
                    </option>
                    <option value="-11">
                      (GMT-11:00) Midway Island, Samoa
                    </option>
                    <option value="-10">(GMT-10:00) Hawaii</option>
                    <option value="-9">(GMT-09:00) Alaska</option>
                    <option value="-8">
                      (GMT-08:00) Pacific Time (US & Canada)
                    </option>
                    <option value="-8">
                      (GMT-08:00) Tijuana, Baja California
                    </option>
                    <option value="-7">(GMT-07:00) Arizona</option>
                    <option value="-7">
                      (GMT-07:00) Chihuahua, La Paz, Mazatlan
                    </option>
                    <option value="-7">
                      (GMT-07:00) Mountain Time (US & Canada)
                    </option>
                    <option value="-6">(GMT-06:00) Central America</option>
                    <option value="-6">
                      (GMT-06:00) Central Time (US & Canada)
                    </option>
                    <option value="-6">
                      (GMT-06:00) Guadalajara, Mexico City, Monterrey
                    </option>
                    <option value="-6">(GMT-06:00) Saskatchewan</option>
                    <option value="-5">
                      (GMT-05:00) Bogota, Lima, Quito, Rio Branco
                    </option>
                    <option value="-5">
                      (GMT-05:00) Eastern Time (US & Canada)
                    </option>
                    <option value="-5">(GMT-05:00) Indiana (East)</option>
                    <option value="-4">
                      (GMT-04:00) Atlantic Time (Canada)
                    </option>
                    <option value="-4">(GMT-04:00) Caracas, La Paz</option>
                  </select>
                </div>
                <div className=" w-[50%]  flex flex-col gap-2">
                  <label
                    className=" text-gray-500 text-xs font-semibold"
                    htmlFor="currency"
                  >
                    CURRENCY
                  </label>
                  <select
                    className=" w-full border border-gray-300 p-2 rounded-md text-gray-500 focus:border-indigo-500 focus:outline-none font-semibold"
                    id="currency"
                  >
                    <option value="">Select Currency</option>
                    <option value="usd">USD</option>
                    <option value="euro">Euro</option>
                    <option value="pound">Pound</option>
                    <option value="bitcoin">Bitcoin</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <button
                className=" bg-indigo-500 px-3 py-1 rounded-md shadow-sm text-white cursor-pointer mr-3"
                type="submit"
              >
                Save changes
              </button>
              <button
                className=" text-gray-600 border border-gray-600 py-2 px-4 rounded-md hover:border-none hover:bg-gray-400 hover:text-white"
                type="reset"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* _________delete account part ___________*/}

      <div className="bg-white p-3 mt-4 ml-3 mb-7 pb-4 rounded-md shadow-lg">
        <h3 className=" text-gray-500 font-semibold text-lg mb-3 ">Delete Account</h3>
        
          <div className="card">
            <div className="pre bg-yellow-100 w-[90%] text-yellow-700 p-2 rounded-md shadow-md mb-4">
              <h4>Are you sure you want to delete your account?</h4>
              <p>
                Once you delete your account, there is no going back. Please be
                certain.
              </p>
            </div>
            <form action="">
              <div className=" mb-4">
                <input className=" mr-2 border border-gray-200 text-gray-500 outline-none h-4 w-4 rounded-md checked:bg-indigo-600 shadow-md" type="checkbox" name="" id="deactivaion" />
                <label className="text-gray-500 font-semibold" htmlFor="deactivaion">I confirm my account deactivation</label>
            </div>
            <button className=" bg-red-500 px-3 py-2 rounded-md shadow-md text-white cursor-pointer" type="submit">Deactivate Account</button>
            </form>
            
          </div>
        
      </div>
    </div>
  );
};

export default Account;
