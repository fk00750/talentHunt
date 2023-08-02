import React from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";
import Router from "next/router";
import Style from "../index.module.css";
import Typewriter from "typewriter-effect";
import Image from "next/image";

function HeroSection() {
  const navigateToRegisterPage = () => {
    Router.push("/register");
  };

  const MkcTalentHuntHeroSectionSchoolBoyImg =
    "https://img.majorkalshiclasses.com/images/file_1690527453078.webp";

  const loader = ({ src }) => {
    return `${src}?w=0`; // This adds the width parameter to the image URL
  };

  return (
    <>
      <div className="md:mx-auto px-4 container sm:mt-16 md:mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
          <div className={`container mt-36`}>
            <div className="flex items-center space-x-2">
              <AiOutlineMinus className="text-blue-600" />
              <h6 className="text-blue-600 text-lg uppercase">
                MKC Talent Hunt
              </h6>
            </div>
            <div className="space-y-8 my-4">
              <h2 className={`${Style.fontRem} w-fit text-5xl md:text-5xl`}>
                India{"'s "}
                <div className="text-blue-600">
                  <Typewriter
                    options={{
                      strings: ["Biggest", "Competitive"],
                      autoStart: true,
                      loop: true,
                      // delay: 50,
                    }}
                  />
                </div>
                Scholarship Exam
              </h2>
              <p className={`${Style.fontRem} text-gray-600 text-xl`}>
                MKC is organizing scholarship event for students of class
                10th,11th and 12th who aspire to a career in JEE, NEET, or
                defence. <span className="text-gray-900">Apply today!</span>
              </p>
            </div>
            <div>
              <button
                onClick={navigateToRegisterPage}
                className="bg-blue-600 text-white text-2xl px-2 py-2 rounded-md flex items-center sm:mb-0 md:mb-2 lg:mb-0"
              >
                <AiOutlineUserAdd />
                Register Now
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center mt-6">
            <Image
              loader={loader}
              src={MkcTalentHuntHeroSectionSchoolBoyImg}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="ml-14 h-auto sm:32 md:h-96 lg:h-auto"
              alt="mkc talent hunt progrma school boy holding trophy"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
