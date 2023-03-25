import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/Authcontext";

const Login = () => {
  const { state, login } = useAuthContext();
  const [form, set_form] = useState({});
  const navigate = useNavigate();

  function handle_change(e) {
    set_form((p) => ({ ...p, [e.target.name]: e.target.value }));
    console.log(form);
  }

  function handle_submit(e) {
    e.preventDefault();
    if (form?.email && form?.password) {
      login(form?.email, form?.password);

      if (state?.authenticated) {
        navigate("/");
      }
    }
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col absolute top-[30%] shadow-lg border-[2px] rounded-lg p-5 w-[60%]">
        <h3 className="text-2xl">Login</h3>

        <form onSubmit={handle_submit}>
          {state?.error && (
            <span className=" text-red-400">{state?.error}</span>
          )}
          <div className="mt-3 ">
            <input
              type="email"
              placeholder="email"
              className="border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200"
              name="email"
              required
              onChange={handle_change}
            />
          </div>
          <div className="mt-3 ">
            <input
              type="password"
              placeholder="password"
              className="border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200"
              name="password"
              required
              onChange={handle_change}
            />
          </div>
          <button
            type="submit"
            value="Login"
            className="btn hover:scale-[1.02] mt-7"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
