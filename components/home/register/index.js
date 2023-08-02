import React from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { CiLocationArrow1 } from "react-icons/ci";
import { BsQrCodeScan } from "react-icons/bs";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import Style from "../index.module.css";
import Image from "next/image";

function Register() {
  const MkcTalentHuntStudentTeacherImg =
    "https://img.majorkalshiclasses.com/images/file_1690525731235.webp";

  const loader = ({ src }) => {
    return `${src}?w=0`; // This adds the width parameter to the image URL
  };

  return (
    <>
      <div className={`${Style.fontLivvic} mt-14 border py-4 shadow-md `}>
        {/* heading */}
        <div className="container mx-auto px-4">
          <div className="">
            <h6 className="flex items-center space-x-2">
              <AiOutlineMinus className="text-blue-600 w-8 h-8" />
              <span className="text-blue-600">REGISTRATION PROCESS</span>
            </h6>
            <h3 className="text-4xl font-bold">How to Register</h3>
          </div>
        </div>
        {/* steps to register */}
        <div className="container mx-auto  grid grid-cols-1 md:grid-cols-2 mt-8">
          <div className="flex flex-col items-center justify-center">
            <ul className="space-y-8">
              <li>
                <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row space-x-4 items-center">
                  <BsQrCodeScan className="w-14 h-14 mb-4 lg:mb-0" />
                  <div>
                    <h4 className="text-2xl">Online Registration</h4>
                    <p className="w-72 text-gray-700">
                      Fill Online Form By{" "}
                      <span className="text-blue-500 hover:cursor-pointer">
                        Click Here
                      </span>{" "}
                      And Pay ₹ 300/- (Registration Fee) Online.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row space-x-4 items-center">
                  <FaHandsHoldingChild className="w-14 h-14 mb-4 sm:mb-0 md:mb-0 lg:mb-0" />
                  <div>
                    <h4 className="text-2xl">Offline Registration</h4>
                    <p className="w-72 text-gray-700">
                      Purchase FORM from any your MKC Center, fill-in and
                      deposit.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="mb-16">
            <Image
              loader={loader}
              src={MkcTalentHuntStudentTeacherImg}
              alt="StudentTeacher"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
