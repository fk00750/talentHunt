import React from "react";
import { BsCashCoin } from "react-icons/bs";
import { PiCertificateLight, PiTrophyLight } from "react-icons/pi";
import { LiaAwardSolid } from "react-icons/lia";

function AboutTalentX() {
  return (
    <div className="container mt-14 mx-auto px-4">
      <div className="flex flex-col md:flex-col md:space-x-28">
        <div className="flex-none w-80 space-y-4">
          <h3 className="text-4xl font-bold">Why we are best from others?</h3>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button className="bg-[#F9CF5B] px-4 py-2 whitespace-nowrap rounded-3xl">
            Start Now
          </button>
        </div>
        <div className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-4 justify-items-center gap-12">
            <div className="border shadow-md px-2 py-4 w-72 ">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-200 w-fit rounded-md">
                    <BsCashCoin className="w-16 h-16 text-purple-600 px-2 py-2" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xl">₹ 1.25 Cr</h5>
                    <h6>Cash Prize</h6>
                  </div>
                </div>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae odit quia sit tempora. Saepe adipisci possimus
                  porro?
                </p>
              </div>
            </div>
            <div className="border shadow-md px-2 py-4 w-72 ">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-200 w-fit rounded-md">
                    <PiCertificateLight className="w-16 h-16 text-green-600 px-2 py-2" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xl">₹ 250 Cr.</h5>
                    <h6>Scholarship worth</h6>
                  </div>
                </div>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae odit quia sit tempora. Saepe adipisci possimus
                  porro?
                </p>
              </div>
            </div>
            <div className="border shadow-md px-2 py-4 w-72 ">
              <div className="flex flex-col space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-200 w-fit rounded-md">
                    <PiTrophyLight className="w-16 h-16 text-blue-600 px-2 py-2" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xl">4,750</h5>
                    <h6>National Ranks & Total Prizes for Students</h6>
                  </div>
                </div>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae odit quia sit tempora. Saepe adipisci possimus
                  porro?
                </p>
              </div>
            </div>
            <div className="border shadow-md px-2 py-4 w-72 ">
              <div className="flex flex-col space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-200 w-fit rounded-md">
                    <LiaAwardSolid className="w-16 h-16 text-red-600 px-2 py-2" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xl">Upto 90%</h5>
                    <h6>Scholarship For MKC Classroom Course for 2024-25</h6>
                  </div>
                </div>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae odit quia sit tempora.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTalentX;
