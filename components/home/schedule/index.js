import React, { useState } from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

function Schedule() {
  const days = [
    { dayNumber: "Day 1:", date: "Wednesday, Oct 12th" },
    { dayNumber: "Day 2:", date: "Thursday, Oct 13th" },
    { dayNumber: "Day 3:", date: "Friday, Oct 14th" },
    // Add more days as needed
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="my-14">
      <div className="text-center">
        <h3 className="text-5xl font-mono font-bold">The Schedule</h3>
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-center space-x-2">
          {days.map((day, index) => (
            <div
              key={index}
              className={`flex items-center justify-center ${
                index === activeTab
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300 text-gray-700"
              } px-4 py-2 rounded-full cursor-pointer`}
              onClick={() => setActiveTab(index)}
            >
              <b>{day.dayNumber}</b>
              <span>{day.date}</span>
            </div>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-4 flex items-center justify-center">
          <div className="border shadow-md w-72 px-4 py-8 flex flex-col space-y-4">
            <div>
              <h5 className="text-2xl">{days[activeTab].date}</h5>
              <h6 className="text-sm text-gray-700">
                <b className="uppercase">Venue</b>: Mega Complex, V-32 Marathi
                Road, Patna
              </h6>
            </div>
            <div>
              <h6 className="text-xl">Exam Mode</h6>
              <div className="text-gray-700 flex items-center container w-fit mx-4 hover:cursor-pointer ">
                <MdOutlineKeyboardDoubleArrowRight />
                <span>Offline</span>
              </div>
            </div>
            <div>
              <h6 className="text-xl">Medium</h6>
              <div className="text-gray-700 flex items-center container w-fit mx-4 hover:cursor-pointer ">
                <MdOutlineKeyboardDoubleArrowRight />
                <span>English Only</span>
              </div>
            </div>
            <div>
              <h6 className="text-xl">Duration</h6>
              <div className="text-gray-700 flex items-center container w-fit mx-4 hover:cursor-pointer ">
                <MdOutlineKeyboardDoubleArrowRight />
                <span>2 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
