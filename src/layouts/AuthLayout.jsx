import React from "react";
import Logo from "../components/Logo/Logo";
import { Outlet } from "react-router";
import authImg from "../assets/authImage.png";

const AuthLayout = () => {
  return (
   <div className="max-w-[1440px] mx-auto min-h-screen flex flex-col bg-white">
   <div className="ms-10 ">
    <Logo />
   </div>

  <div className="flex-1 flex ">

    {/* LEFT SIDE – FORM */}
    <div className="flex-1 flex justify-center items-center">
      <div className="w-full max-w-md px-6">
        <Outlet />
      </div>
    </div>

    {/* RIGHT SIDE – IMAGE */}
    <div className="hidden lg:flex flex-1 justify-center items-center bg-[#fafdf0]">
      <img
        src={authImg}
        alt="auth illustration"
        className="w-[70%] max-w-lg object-contain"
      />
    </div>

  </div>
</div>

  );
};

export default AuthLayout;
