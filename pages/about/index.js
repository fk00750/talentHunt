import React, { useState } from "react";
import Style from "./index.module.css";
import Image from "next/image";

const ReadMoreText = ({ text, maxLength }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="px-4">
      <p className="text-center text-gray-700">
        {isExpanded ? text : `${text.slice(0, maxLength)}...`}
        <button
          className="text-blue-500 hover:text-blue-700"
          onClick={toggleReadMore}
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </p>
    </div>
  );
};

function About() {
  const MkcTalentHuntAboutPageImg =
    "https://img.majorkalshiclasses.com/images/file_1690534508780.webp";

  const loader = ({ src }) => {
    return `${src}?w=0`; // This adds the width parameter to the image URL
  };

  return (
    <>
      <div className="mt-28">
        <div className="container mx-auto">
          <div className={`${Style.fontRem} my-8 flex flex-col items-center`}>
            <h4 className="text-blue-500 text-center text-lg lg:text-2xl">
              About
            </h4>
            <h6 className="text-gray-900 text-center  text-xl lg:text-4xl">
              MKC Talent Hunt Program
            </h6>
          </div>
          <ReadMoreText
            text="The MKC Talent Hunt is a national scholarship exam for JEE NEET and Defence aspirants. It covers a wide range of topics and is open to students from all over India. The exam offers scholarships based on merit, which means that students who score well on the exam are eligible for financial assistance. This can be a great opportunity for students to get ahead in their careers, as it can help them to pay for college or other educational expenses. Additionally, the exam can help students to stand out from the competition when applying for jobs, as it demonstrates their academic skills and abilities."
            maxLength={150}
          />
          <div className="grid px-4 lg:grid-cols-2 mt-14 gap-4">
            <div className="px-4">
              <Image
                loader={loader}
                src={MkcTalentHuntAboutPageImg}
                alt="StudentTeacher"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="rounded-md max-w-md h-auto mx-auto"
              />
            </div>
            <div className="">
              <div className="flex h-full justify-center flex-col space-y-6">
                <div>
                  <img src="./achievement.png" alt="" />
                  <h4 className={`${Style.fontRem} text-2xl`}>Our Mission</h4>
                </div>
                <p className="text-lg text-gray-800">
                  {
                    "MKC believes every student can achieve great things. Our mission is to help them reach their full potential with resources and support. MKC Talent Hunt can help students become engineers, doctors, or join the armed forces. We're committed to helping students succeed, and MKC Talent Hunt is a valuable tool."
                  }
                </p>
              </div>
            </div>
          </div>

          <div className={Style.fontRem}>
            <div
              className=" p-4 bg-white rounded-lg md:p-8"
              id="stats"
              role="tabpanel"
              aria-labelledby="stats-tab"
            >
              <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-3 sm:p-8">
                <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-3xl font-extrabold">16+</dt>
                  <dd className="text-gray-500">Years of Experience</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-3xl font-extrabold">100+</dt>
                  <dd className="text-gray-500">Courses Offered</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-3xl font-extrabold">1000s</dt>
                  <dd className="text-gray-500">Students Trained</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-3xl font-extrabold">50+</dt>
                  <dd className="text-gray-500">Expert Faculty Members</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-3xl font-extrabold">90%</dt>
                  <dd className="text-gray-500">Success Rate</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-3xl font-extrabold">24x7</dt>
                  <dd className="text-gray-500">Doubt Clearing Support</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className=""></div>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default About;
