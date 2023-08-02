import React from "react";
import { MdOutlineCollectionsBookmark } from "react-icons/md";
import { IoIosBookmarks } from "react-icons/io";
import Style from "../index.module.css";

function ExamPattern() {
  return (
    <div
      className={`${Style.fontLivvic} container mx-auto flex flex-col items-center justify-center my-14`}
    >
      <div>
        <h6 className="text-blue-600 text-center uppercase">
          -- MKC Talent Hunt --
        </h6>
        <h3 className="text-4xl font-bold">Syllabus & Pattern</h3>
      </div>
      <div className="my-8 grid grid-cols-1 space-y-4 lg:grid-cols-3 gap-4">
        <div className="flex space-x-4 border shadow-lg px-4 py-2 rounded-md">
          <div className="flex items-center bg-blue-600 rounded-full px-4 py-4">
            <IoIosBookmarks className="w-8 h-8 text-white" />
          </div>
          <div className="flex flex-col items-center ">
            <h5 className="text-xl">Class X</h5>
            <span className="text-gray-700">Syllabus & Pattern</span>
          </div>
        </div>
        <div className="flex space-x-4 border shadow-lg px-4 py-2 rounded-md">
          <div className="flex items-center bg-blue-600 rounded-full px-4 py-4">
            <IoIosBookmarks className="w-8 h-8 text-white" />
          </div>
          <div className="flex flex-col items-center ">
            <h5 className="text-xl">Class XI</h5>
            <span className="text-gray-700">Syllabus & Pattern</span>
          </div>
        </div>
        <div className="flex space-x-4 border shadow-lg px-4 py-2 rounded-md">
          <div className="flex items-center bg-blue-600 rounded-full px-4 py-4">
            <IoIosBookmarks className="w-8 h-8 text-white" />
          </div>
          <div className="flex flex-col items-center ">
            <h5 className="text-xl">Class XII</h5>
            <span className="text-gray-700">Syllabus & Pattern</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExamPattern;
