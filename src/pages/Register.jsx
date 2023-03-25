import React from "react";
import { useState } from "react";
import { useAuthContext } from "../context/Authcontext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import set_auth_error from "../context/set_auth_error";
import { Link, useNavigate } from "react-router-dom";


const Register = () => {
  const { register, dispatch, state } = useAuthContext();
  const [form, set_form] = useState({});
  const navigate = useNavigate();

  

  function handle_change(e) {
    set_form((p) => ({ ...p, [e.target.name]: e.target.value }));
    console.log(form);
  }

  function handle_error() {
    if (form?.password === form?.confirm_password) {
      if (form?.password.length < 6) {
        set_auth_error(dispatch, "Password must be at least 6 character!");
      } else {
        dispatch({ type: "reset_error" });
      }
    } else {
      set_auth_error(dispatch, "password doesn't match");
    }
  }

  function handle_submit(e) {
    e.preventDefault();
    if(handle_error()) return;

    if(form?.name && form?.email && form?.password){
      register(form);
      // if(state?.authenticated){
      //   console.log('authenticated');
      //   navigate('/') 
      // }
    }
  }

  

  return (
    <div className="flex justify-center">
      <div className="flex flex-col absolute top-[30%] shadow-lg border-[2px] rounded-lg p-5 w-[60%]">
        <h3 className="text-2xl">Sign Up</h3>
        <form onSubmit={handle_submit}>
          {
            state?.error && (
              <span className=" text-red-500">{state?.error}</span>
            )
          }
          <div className="mt-3 flex ">
            <input
              type="text"
              placeholder="name"
              className="border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200 mr-2"
              name="name"
              onChange={handle_change}
              required
            />
            {/*  <input type="text" placeholder='lastname' className='border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200'
                  name='last'
                  value=''
                  onChange=''
                  />*/}
          </div>
          <div className="mt-3 ">
            <input
              type="email"
              placeholder="Write your email here"
              className="border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200"
              name="email"
              onChange={handle_change}
              required
            />
          </div>
          <div className="mt-3 flex">
            <input
              type="password"
              placeholder="password"
              className="border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200 mr-2"
              name="password"
              onChange={handle_change}
            />
            <input
              type="password"
              placeholder="confirm-password"
              className="border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200"
              name="confirm_password"
              onChange={handle_change}
            />
          </div>
          <button 
            type="submit"
            value="Register"
            onClick={handle_error}
            className="btn hover:scale-[1.02] mt-7"> Register
          </button>
            
          
          
        </form>
        <div className="flex justify-center items-center gap-2">
          <span className=" text-gray-500">Already have an Account?</span>
          <Link className=" text-orange-400" to='/login'>Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
