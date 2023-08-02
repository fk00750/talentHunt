import axios from "axios";
import Router from "next/router";
import React, { useRef, useState } from "react";
import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function OTPhandler({ isOpen, closeModal, otpFromServer }) {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal open/close
  const [otp, setOtp] = useState("");
  const [expectedOTP, setExpectedOTP] = useState("");
  const otpInputRefs = useRef([]);
  const [otpVerificationSuccessful, setOtpVerificationSuccessful] =
    useState(null);
  const [errorOtpVerification, setOtpVerificationError] = useState(false);

  const handleInputChange = (index, value) => {
    const newOtp = otp.split("");
    newOtp[index] = value;
    setOtp(newOtp.join(""));

    // Auto-focus the next input
    if (value && index < otpInputRefs.current.length - 1) {
      otpInputRefs.current[index + 1].focus();
    }
  };

  // use react-toastify to further enhance the frontend
  const handleVerifyOTP = async (e) => {
    e.preventDefault();

    if (otp == otpFromServer) {
      setOtp("");
      Router.push("/thank-you");
    } else {
      setOtpVerificationError;
      toast.error("Incorrect OTP Entered", {
        position: "top-center",
        autoClose: 3000, // Close after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      maxWidth: "400px",
      width: "100%",
      padding: "1rem",
      borderRadius: "8px",
    },
  };

  return (
    <>
      {otpVerificationSuccessful ? (
        <ToastContainer
          autoClose={3000}
          position="top-center"
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      ) : (
        <ToastContainer
          autoClose={3000}
          position="top-center"
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          // Add any additional props or elements for the error state if needed
        />
      )}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="OTP Verification Modal"
        style={customStyles}
        ariaHideApp={false}
      >
        <h2 className="text-2xl font-semibold mb-2">OTP Verification</h2>
        <p className="text-gray-600 mb-4">
          Please enter the OTP sent to your mobile number.
        </p>
        <div className="flex items-center justify-center space-x-2 mb-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <input
              key={index}
              type="text"
              className="w-12 text-2xl bg-gray-200 border border-gray-300 rounded px-2 py-1 focus:outline-none"
              maxLength="1"
              value={otp[index] || ""}
              onChange={(e) => handleInputChange(index, e.target.value)}
              ref={(el) => (otpInputRefs.current[index] = el)}
            />
          ))}
        </div>
        <button
          onClick={handleVerifyOTP}
          className="w-full bg-blue-600 text-white rounded-md py-2 font-semibold focus:outline-none"
        >
          Verify OTP
        </button>
        <button
          //   onClick={handleResendOTP}
          className="w-full mt-2 bg-gray-300 text-gray-600 rounded-md py-2 font-semibold focus:outline-none"
        >
          Resend OTP
        </button>
      </Modal>
    </>
  );
}

export default OTPhandler;
