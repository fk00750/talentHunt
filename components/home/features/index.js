import React from "react";
import { MdSupportAgent, MdOutlineAssignment } from "react-icons/md";
import { GiTiedScroll } from "react-icons/gi";
import { SlGraph } from "react-icons/sl";
import Style from "../index.module.css";
import Image from "next/image";

function Features() {
  const MkcTalentHuntResearchImg =
    "https://img.majorkalshiclasses.com/images/file_1690522348561.webp";
  const MkcTalentHuntMedalInHandImg =
    "https://img.majorkalshiclasses.com/images/file_1690522865409.webp";
  const MkcTalentHuntSupportiveTeacherImg =
    "https://img.majorkalshiclasses.com/images/file_1690522954013.webp";

  const loader = ({ src }) => {
    return `${src}?w=144`; // This adds the width parameter to the image URL
  };

  const loader2 = ({ src }) => {
    return `${src}?w=384`; // This adds the width parameter to the image URL
  };

  return (
    <div className="container md:mx-auto px-4 my-24 md:grid md:grid-cols-1 md:gap-4 lg:grid lg:grid-cols-2 flex flex-col">
      <div className="flex flex-col space-y-4 items-center justify-center mt-8 md:mt-0 sm:mt-0">
        <div className="flex space-x-4 items-center">
          <Image
            loader={loader}
            src={MkcTalentHuntResearchImg}
            width={144}
            height={144}
            className="md:w-64 md:h-64 w-36 h-36 rounded-md"
            alt="research image"
          />
          <Image
            loader={loader}
            src={MkcTalentHuntMedalInHandImg}
            width={144}
            height={0}
            className="md:w-64 md:h-72 w-36 rounded-md"
            alt="gold medal in hand"
          />
        </div>
        <div className="flex items-center mx-16">
          <Image
            loader={loader2}
            src={MkcTalentHuntSupportiveTeacherImg}
            width={384}
            height={0}
            className="w-96 rounded-md"
            alt="teacher smiling"
          />
        </div>
      </div>
      <div
        className={`${Style.fontLivvic} flex flex-col space-y-14 order-first md:order-last `}
      >
        <div>
          <h3 className="text-blue-600 md:text-2xl uppercase">
            MKC Talent Hunt
          </h3>
          <h6 className="md:text-4xl text-2xl">
            Major Kalshi Classes Talent Hunt: Your Path To Achievement And
            Distinction
          </h6>
        </div>
        <div className="flex flex-col space-y-4">
          <p className="text-gray-700 text-lg">
            MKC Talent Hunt is a nationwide scholarship exam organized by Major
            Kalshi Classes for JEE NEET and Defence Aspirants. The exam is
            conducted every year to provide financial assistance to deserving
            students who aspire to pursue higher education in these fields.
          </p>
          <p className="text-gray-700 text-lg">
            The exam is open to students from all over India and the
            scholarships offered are based on the merit of the students. The
            exam is a great opportunity for students to get ahead in their
            careers and get financial assistance.
          </p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
          <div className="flex space-x-4 w-72">
            <div className="bg-blue-700 w-fit h-fit rounded-full">
              <MdOutlineAssignment size={32} className="mx-2 my-2 text-white" />
            </div>
            <div className="flex flex-col space-y-4">
              <h3 className="text-2xl">Comprehensive Assessment</h3>
              <p className="text-gray-700">
                The talent hunt will help you gauge your JEE, NEET, or Defence
                exam preparation and identify strengths and weaknesses.
              </p>
            </div>
          </div>
          <div className="flex space-x-4 w-72">
            <div className="bg-blue-700 w-fit h-fit rounded-full">
              <MdSupportAgent size={32} className="mx-2 my-2 text-white" />
            </div>
            <div className="flex flex-col space-y-4">
              <h3 className="text-2xl">Expert Guidance</h3>
              <p className="text-gray-700">
                {
                  "Experienced experts will conduct the talent hunt. They'll give feedback on your performance and answer questions about exams and preparation."
                }
              </p>
            </div>
          </div>
          <div className="flex space-x-4 w-72">
            <div className="bg-blue-700 w-fit h-fit rounded-full">
              <GiTiedScroll size={32} className="mx-2 my-2 text-white" />
            </div>
            <div className="flex flex-col space-y-4">
              <h3 className="text-2xl">Scholarships and Rewards</h3>
              <p className="text-gray-700">
                The talent hunt offers prizes and scholarships for top
                performers. Win financial assistance for your studies.
              </p>
            </div>
          </div>
          <div className="flex space-x-4 w-72">
            <div className="bg-blue-700 w-fit h-fit rounded-full">
              <SlGraph size={32} className="mx-2 my-2 text-white" />
            </div>
            <div className="flex flex-col space-y-4">
              <h3 className="text-2xl">Pathway to Success</h3>
              <p className="text-gray-700">
                There are many variations of passages of the Ipsum available for
                now
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
