import React, { useState } from "react";
import Style from "./index.module.css";
import { BsCameraFill } from "react-icons/bs";

const AspirantInformation = ({ label, value, isEditable, onInputChange }) => {
  const [editingValue, setEditingValue] = useState(value);

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setEditingValue(newValue);
    onInputChange(label, newValue);
  };

  return (
    <div className="mb-4">
      <h6 className="text-xl text-gray-950">{label}</h6>
      {isEditable ? (
        <input
          type="text"
          className="bg-white border border-blue-300 focus:outline-none focus:border-blue-600 text-gray-700 px-2 py-2 rounded-md w-full"
          value={editingValue}
          onChange={handleInputChange}
        />
      ) : (
        <div className="bg-[#dadff7] text-gray-700 px-2 py-2 rounded-xl">
          <span>{value}</span>
        </div>
      )}
    </div>
  );
};

const getStudentData = () => {
  if (localStorage === undefined) {
    return;
  }
  const studentData = localStorage.getItem("StudentData");

  // Convert the JSON string back to a JavaScript object.
  const student = JSON.parse(studentData);

  return student;
};

function StudentProfile() {
  //   console.log(getStudentData());

  const initialAspirantDetails = [
    { label: "Aspirant Name", value: "William Shakespeare" },
    { label: "Aspirant Father Name", value: "William Shakespeare Father" },
    { label: "Gender", value: "Male" },
    { label: "Date of Birth", value: "2023-07-08" },
    { label: "Present Class (2023-2024)", value: "Class X" },
    { label: "Education Board", value: "ICSE" },
    { label: "Career Ambition", value: "JEE" },
    { label: "School Name", value: "Ewing Christian Public School" },
    { label: "Residential Address", value: "J 74 J.K Ashiyana, Kareli" },
    { label: "City", value: "Prayagraj" },
    { label: "Pincode", value: "211016" },
    { label: "Uttar Pradesh", value: "UTTAR PRADESH" },
    { label: "Mobile No", value: "9616562288" },
    { label: "Email", value: "fk7384329@gmail.com" },
  ];

  const [selectedFile, setSelectedFile] = useState(null);

  const [aspirantDetails, setAspirantDetails] = useState(
    initialAspirantDetails
  );
  const [editMode, setEditMode] = useState(false);

  const handleInputChange = (label, newValue) => {
    const updatedDetails = aspirantDetails.map((detail) =>
      detail.label === label ? { ...detail, value: newValue } : detail
    );
    setAspirantDetails(updatedDetails);
  };

  const handleEditProfile = () => {
    setEditMode(true);
  };

  const handleSaveProfile = () => {
    setEditMode(false);
  };

  return (
    <>
      <div>
        <div className={`footer-background-image bg-blue-600 py-8 mt-20`}>
          <h2 className={`${Style.fontLivvic} text-white text-4xl text-center`}>
            Student Profile
          </h2>
        </div>
        <div className="my-8 container mx-auto border shadow-lg px-4 py-4">
          <div className="flex flex-col space-y-4 lg:grid lg:grid-cols-3 lg:gap-4">
            <div>
              <div className="flex flex-col items-center space-y-4">
                <div>
                  <div className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="./user-image.png"
                      alt="User Profile"
                      className="rounded-full w-36 h-36"
                    />
                    {/* <input
                      type="file"
                      className={`w-36 h-36 rounded-full border`}
                    /> */}
                    <div className="absolute bottom-0 right-0 p-1 bg-white text-blue-600 rounded-full">
                      <BsCameraFill className="text-primary w-6 h-6" />
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    className={`bg-[#191716] px-2 py-2 rounded-md text-white`}
                  >
                    Upload New
                  </button>
                </div>
              </div>
            </div>
            <div className={`${Style.fontLivvic} col-span-2`}>
              <div className="lg:grid lg:grid-cols-3 lg:gap-4 mb-4">
                {aspirantDetails.map((detail, index) => (
                  <AspirantInformation
                    key={index}
                    label={detail.label}
                    value={detail.value}
                    isEditable={editMode}
                    onInputChange={handleInputChange}
                  />
                ))}
              </div>
              <div>
                {editMode ? (
                  <button
                    className="bg-green-500 px-2 py-2 rounded-md"
                    onClick={handleSaveProfile}
                  >
                    Save Profile
                  </button>
                ) : (
                  <button
                    className="bg-yellow-500 px-2 py-2 rounded-md"
                    onClick={handleEditProfile}
                  >
                    Edit Profile
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentProfile;
