import React, { useState } from "react";
import { BsPhone } from "react-icons/bs";
import Style from "./index.module.css";
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
      <div className="container mx-auto flex items-center justify-center md:grid-cols-2 lg:flex lg:justify-center lg:items-center my-44 ">
        <div className="px-4">
          <div className={`${Style.fontLivvic} mt-8 mb-14`}>
            <h4 className="text-2xl font-semibold">
              Login into the Major Kalshi Classes Talent Hunt Program!
            </h4>
            <h6 className="text-lg">
              <span className="text-gray-700">Or</span>{" "}
              <a className="text-blue-600">Click Here to register</a>
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
