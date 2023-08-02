import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { BsPhone } from "react-icons/bs";
import { SiGoogleclassroom, SiGooglemessages } from "react-icons/si";
import { GiBlackBook } from "react-icons/gi";
import Style from "./index.module.css";
import Typewriter from "typewriter-effect";

function Enquiry() {
  return (
    <>
      <div className="">
        <div className="text-center border border-x-0 border-t-0 shadow-lg bg-blue-600 text-white mt-20 py-16 px-8 text-2xl">
          <div className="">
            <h4 className={`${Style.fontLivvic} text-4xl`}>Enquiry Page</h4>
            <Typewriter
              options={{
                strings: [
                  "Do You Have What It Takes to Trade with the Best?",
                  "Apply to the Major Kalshi Classes Talent Hunt Today!",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </div>
        </div>
        <div className="flex items-center justify-center mt-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
            <div className="flex items-center">
              <img src="./talenthuntstudent.png" alt="" />
            </div>
            <div className="mx-12">
              <div className="border shadow-lg px-4 py-2">
                <div className="flex items-center justify-center my-6">
                  <h4 className="text-xl">Send Your Enquiry</h4>
                </div>
                <div>
                  <form>
                    <div class="flex mb-6">
                      <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                        <BiUserCircle className="w-6 h-6 text-gray-700" />
                      </span>
                      <input
                        type="text"
                        id="aspirant-name"
                        class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5"
                        placeholder="Enter Your Name"
                      />
                    </div>
                    <div class="flex mb-6">
                      <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                        <BsPhone className="w-6 h-6 text-gray-700" />
                      </span>
                      <input
                        type="text"
                        id="aspirant-name"
                        class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5"
                        placeholder="Enter Your Mobile No."
                      />
                    </div>
                    <div class="flex mb-6">
                      <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                        <GiBlackBook className="w-6 h-6 text-gray-700" />
                      </span>
                      <select
                        id="countries"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      >
                        <option value="">Select Your Stream</option>
                        <option>PCM</option>
                        <option>PCB</option>
                        <option>Commerce</option>
                        <option>Arts</option>
                      </select>
                    </div>
                    <div class="flex mb-6">
                      <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                        <SiGoogleclassroom className="w-6 h-6 text-gray-700" />
                      </span>
                      <select
                        id="countries"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      >
                        <option value="">Select Your Class</option>
                        <option>Class 10</option>
                        <option>Class 11</option>
                        <option>Class 12 (appearing)</option>
                        <option>Class 12 (passed)</option>
                      </select>
                    </div>
                    <div class="flex mb-6">
                      <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                        <SiGooglemessages className="w-6 h-6 text-gray-700" />
                      </span>
                      <textarea
                        id="message"
                        rows="2"
                        class="block p-2.5 w-full text-sm text-gray-900 rounded-none rounded-r-lg focus:outline-none bg-gray-50  border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Write Your Message..."
                      ></textarea>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Enquiry;
