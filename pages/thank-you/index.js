import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { IoHomeOutline, IoPersonAddOutline } from "react-icons/io5";
import Router from "next/router";

function thankYou() {
  const navigateToHome = () => {
    Router.push("/");
  };

  const navigateToCreateNewProfile = () => {
    Router.push("/create-profile");
  };

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="flex flex-col justify-center items-center">
          <BsPatchCheckFill size={62} className="text-green-600" />
          <div className="lg:text-4xl md:text-2xl sm:text-xl text-lg my-8 px-4 text-center">
            Thank you for registering to MKC Talent Hunt Program
          </div>
          <div className="flex flex-col lg:flex-row items-center space-x-4 space-y-4 lg:space-y-0 md:space-y-0 sm:space-y-0">
            <button
              onClick={navigateToHome}
              className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center space-x-2"
            >
              <IoHomeOutline className="w-6 h-6" />
              <span>GO HOME</span>
            </button>
            <div>
              <span className="text-2xl text-gray-700">OR</span>
            </div>
            <button
              onClick={navigateToCreateNewProfile}
              className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center space-x-2"
            >
              <IoPersonAddOutline className="w-6 h-6" />
              <span className="uppercase">create new profile</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default thankYou;
