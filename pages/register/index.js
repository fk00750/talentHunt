import React, { useState } from "react";
import { BsPhone } from "react-icons/bs";
import Style from "./index.module.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { IoLogoAppleAr } from "react-icons/io5";
import { BsFillCheckCircleFill } from "react-icons/bs";
import OTPhandler from "@/components/common/otp";
import API from "../../api";
import axios from "axios";

function Register() {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal open/close
  const [mobileNumber, setMobileNumber] = useState("");
  const [otpFromServer, setOTPfromServer] = useState("");

  const makeOtpRequest = async (e) => {
    e.preventDefault();

    const OTP_URL = API.sendOtp;

    let data = JSON.stringify({
      mobile: mobileNumber,
    });

    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: OTP_URL,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    return axios(config)
      .then((response) => {
        if (response.status == 200) {
          setOTPfromServer(response.data.otp);
          setIsModalOpen(true);
          setMobileNumber("");
          console.log(response.data);
          return response.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <>
      {isModalOpen && (
        <OTPhandler
          isOpen={isModalOpen}
          closeModal={closeModal}
          otpFromServer={otpFromServer}
        />
      )}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-44 sm:space-x-8 md:space-x-6 lg:space-x-2 ">
        <div className="my-8 hidden sm:block md:block lg:block">
          <div className={`${Style.fontRem} flex items-center space-x-2`}>
            <div className="bg-blue-600 text-white w-fit px-2 py-2 rounded-full">
              <IoLogoAppleAr className="h-6 w-6" />
            </div>
            <h4 className="text-2xl font-semibold">MKC Talent Hunt</h4>
          </div>
          <div className={`${Style.fontLivvic} mt-8 pl-12`}>
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
                  <BsFillCheckCircleFill className="text-blue-600" />
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-700">
                  To register online, enter your phone number and verify the OTP
                </h3>
              </li>
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
                  <BsFillCheckCircleFill className="text-blue-600" />
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-700">
                  Once you verify the OTP, you will have to create a profile
                </h3>
              </li>
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
                  <BsFillCheckCircleFill className="text-blue-600" />
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-700">
                  Make the Payment using various available methods
                </h3>
              </li>
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
                  <BsFillCheckCircleFill className="text-blue-600" />
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-700">
                  Once the payment is made you will receive the Admit Card and
                  other details.
                </h3>
              </li>
            </ol>
          </div>
        </div>
        <div className="px-4">
          <div className={`${Style.fontLivvic} mt-8 mb-14`}>
            <h4 className="text-2xl font-semibold">
              Register Now for the Major Kalshi Classes Talent Hunt Program!
            </h4>
            <h6 className="text-lg">
              <span className="text-gray-700">Or</span>{" "}
              <a className="text-blue-600">Click Here to login</a>
            </h6>
          </div>
          <div>
            <form onSubmit={makeOtpRequest}>
              <div className="flex mb-6">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                  <BsPhone className="w-6 h-6 text-gray-700" />
                </span>
                <input
                  type="tel"
                  id="aspirant-name"
                  class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5"
                  placeholder="Enter Your Mobile No."
                />
              </div>
              <div class="flex items-center mb-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className=" text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500   focus:ring-2 "
                />
                <label
                  htmlFor="checkbox-1"
                  className="ml-2 text-sm font-medium text-gray-900"
                >
                  I agree to the{" "}
                  <a
                    href="#"
                    class="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    terms and conditions
                  </a>
                  .
                </label>
              </div>
              <div className="mb-6">
                <button className="bg-blue-600 text-white px-2 py-2 w-full rounded-md">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
