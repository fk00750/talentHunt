import React from "react";
import { IoArrowRedoCircleOutline } from "react-icons/io5";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoYoutube,
} from "react-icons/io5";
import Style from "./index.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-[#001128] footer-background-image py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3">
          <div className="mb-6">
            <div className="mb-6">
              <a href="https://flowbite.com/" class="flex items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://img.majorkalshiclasses.com/images/file_1689934507159.svg"
                  className="w-16 h-16 mr-3 rounded-full"
                  alt="MKC Talent Hunt Logo"
                />
                <span
                  className={`${Style.fontRem} text-white self-center text-2xl font-semibold whitespace-nowrap`}
                >
                  MKC Talent Hunt
                </span>
              </a>
            </div>
            <div>
              <p className={`${Style.fontLivvic} text-gray-200`}>
                The MKC Talent Hunt is a competitive examination designed to
                assess the academic potential of students preparing for the JEE,
                NEET, or Defense exams. The talent hunt will include a mock
                test, personalized feedback, scholarship opportunities,
                networking opportunities, and motivational talks. The MKC Talent
                Hunt is a valuable opportunity for students to improve their
                academic performance and prepare for their future careers.
              </p>
            </div>
          </div>
          <div className="mb-6">
            <h5 className={`${Style.fontRem} text-2xl text-gray-200`}>
              Contact Us
            </h5>
            <div className="flex flex-col px-4 space-y-4">
              <div className="mt-4">
                <h6 className={`${Style.fontRem} text-gray-200 text-xl`}>
                  Address
                </h6>
                <p className={`${Style.fontRem} text-gray-300`}>
                  105/244, Shapath Building, Tagore Town, Prayagraj, Uttar
                  Pradesh - 211002
                </p>
              </div>
              <div>
                <h6 className={`${Style.fontRem} text-gray-200 text-xl`}>
                  Phone
                </h6>
                <p className={`${Style.fontRem} text-gray-300`}>
                  (+91) 9696330033
                </p>
              </div>
              <div>
                <h6 className={`${Style.fontRem} text-gray-200 text-xl`}>
                  Email
                </h6>
                <p className={`${Style.fontRem} text-gray-300`}>
                  support@majorkalshiclasses.com
                </p>
              </div>
              <div>
                <h6 className={`${Style.fontRem} text-gray-200 text-xl`}>
                  Follow Us
                </h6>
                <div className="flex items-center mt-2 space-x-2">
                  <div className="border border-white px-2 py-2 rounded-lg">
                    <IoLogoFacebook className="w-6 h-6 text-white" />
                  </div>
                  <div className="border border-white px-2 py-2 rounded-lg">
                    <IoLogoInstagram className="w-6 h-6 text-white" />
                  </div>
                  <div className="border border-white px-2 py-2 rounded-lg">
                    <IoLogoYoutube className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h5 className={`${Style.fontRem} text-2xl text-gray-200`}>
              Navigation Links
            </h5>
            <div
              className={`${Style.fontLivvic} grid grid-cols-2 px-4 mt-4 text-gray-300 text-lg`}
            >
              <ul>
                <li>- Home</li>
                <li>- Test Center</li>
                <li>- Download</li>
                <li>- Gallery</li>
                <li>- About</li>
              </ul>
              <ul>
                <li>- Register</li>
                <li>- Enquiry</li>
                <li>- Terms & Condition</li>
                <li>- Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-slate-700 text-gray-200 text-center py-4">
        <span>{`© ${currentYear} Major Kalshi Classes. All rights reserved.`}</span>
      </div>
    </>
  );
};

export default Footer;
