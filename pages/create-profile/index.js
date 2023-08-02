import React, { useState } from "react";
import { LiaUserCircle } from "react-icons/lia";
import API from "../../api/index";
import axios from "axios";

function Profile() {
  const [aspirantName, setAspirantName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [presentClass, setPresentClass] = useState("");
  const [educationBoard, setEducationBoard] = useState("");
  const [careerAmbition, setCareerAmbition] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [residentialAddress, setResidentialAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [testCenterCity, setTestCenterCity] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleAspirantNameChange = (event) => {
    setAspirantName(event.target.value);
  };

  const handleFatherNameChange = (event) => {
    setFatherName(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleDateOfBirthChange = (event) => {
    setDateOfBirth(event.target.value);
  };

  const handlePresentClassChange = (event) => {
    setPresentClass(event.target.value);
  };

  const handleEducationBoardChange = (event) => {
    setEducationBoard(event.target.value);
  };

  const handleCareerAmbitionChange = (event) => {
    setCareerAmbition(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleResidentialAddressChange = (event) => {
    setResidentialAddress(event.target.value);
  };

  const handlePincodeChange = (event) => {
    setPincode(event.target.value);
    const data = axios.get(`${API}/getcity/${pincode}`).then((res) => {
      return res.data;
    });
    console.log(data);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleSchoolNameChange = (event) => {
    setSchoolName(event.target.value);
  };

  const handleTestCenterCityChange = (event) => {
    setTestCenterCity(event.target.value);
  };

  const handleAgreeTermsChange = (event) => {
    setAgreeTerms(event.target.checked);
  };

  // save the following StudentData data into localStorage, using react
  const handleSubmit = (event) => {
    event.preventDefault();

    const StudentData = [
      {
        "aspirantName,": aspirantName,
        "fatherName,": fatherName,
        "gender,": gender,
        "dateOfBirth,": dateOfBirth,
        "presentClass,": presentClass,
        "educationBoard,": educationBoard,
        "careerAmbition,": careerAmbition,
        "phoneNumber,": phoneNumber,
        "email,": email,
        "residentialAddress,": residentialAddress,
        "pincode,": pincode,
        "city,": city,
        "state,": state,
        "schoolName,": schoolName,
        "testCenterCity,": testCenterCity,
        "agreeTerms,": agreeTerms,
      },
    ];
    // Convert the StudentData object to a JSON string.
    const jsonString = JSON.stringify(StudentData);

    // Save the JSON string to localStorage.
    localStorage.setItem("StudentData", jsonString);

    console.log(StudentData);
  };

  return (
    <>
      <div className="my-24 flex flex-col sm:my-28 md:my-32 lg:my-36">
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center justify-center ">
            <LiaUserCircle className="w-14 h-14 text-blue-600" />
            <h3 className="text-xl">MKC Talent Hunt Aspirant Profile</h3>
          </div>
        </div>
        <div className="flex justify-center my-14">
          <form
            onSubmit={handleSubmit}
            className="border shadow-lg px-4 py-4 rounded-md sm:grid sm:grid-cols-2 sm:gap-4 lg:grid lg:grid-cols-3"
          >
            <div className="mb-6">
              <label
                htmlFor="aspirantName"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Aspirant Name
              </label>
              <input
                type="text"
                id="aspirantName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Type Aspirant Name"
                required
                value={aspirantName}
                onChange={handleAspirantNameChange}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="aspirantName"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                {"Aspirant Father's Name"}
              </label>
              <input
                type="text"
                id="aspirantName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Type Aspirant Father Name"
                required
                value={fatherName}
                onChange={handleFatherNameChange}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="gender"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Gender
              </label>
              <select
                id="gender"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={gender}
                onChange={handleGenderChange}
              >
                <option>Please Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-6">
              <label
                htmlFor="dob"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Date of Birth
              </label>
              <div className="relative max-w-sm">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <input
                  datepicker="true" /* Change `datepicker-buttons` to `datepicker="true"` */
                  type="date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
                  placeholder="Select date"
                  value={dateOfBirth}
                  onChange={handleDateOfBirthChange}
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="present-class"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Present Class (2023 - 2024)
              </label>
              <select
                id="presentClass"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={presentClass}
                onChange={handlePresentClassChange}
              >
                <option>Please Select</option>
                <option value="10">Class 10</option>
                <option value="11">Class 11</option>
                <option value="12-passed">Class 12 (Appearing)</option>
                <option value="12-appearing">Class 12 (Passed)</option>
              </select>
            </div>
            <div className="mb-6">
              <label
                htmlFor="educationBoard"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Education Board
              </label>
              <select
                id="educationBoard"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={educationBoard}
                onChange={handleEducationBoardChange}
              >
                <option>Please Select</option>
                <option className="ICSE">ICSE</option>
                <option className="CBSE">CBSE</option>
                <option className="STATE">STATE</option>
              </select>
            </div>
            <div className="mb-6">
              <label
                htmlFor="careerAmbition"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Career Ambition
              </label>
              <select
                id="Career Ambition"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={careerAmbition}
                onChange={handleCareerAmbitionChange}
              >
                <option>Please Select</option>
                <option value="NDA">NDA</option>
                <option value="NEET">NEET</option>
                <option value="JEE">JEE</option>
              </select>
            </div>
            <div className="mb-6">
              <label
                htmlFor="mobileNumber"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Mobile No / WhatsApp No
              </label>
              <input
                type="tel"
                id="aspirantPhoneNumber"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Type Aspirant Phone Number"
                required
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="aspirantEmail"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                E-mail
              </label>
              <input
                type="email"
                id="aspirantEmail"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Type Aspirant Email"
                required
                value={email}
                onChange={handleEmailChange}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="aspirantResidentialAddress"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Aspirant Residential Address
              </label>
              <input
                type="text"
                id="aspirantResidentialAddress"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Type Residential Address"
                required
                value={residentialAddress}
                onChange={handleResidentialAddressChange}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="aspirantPincode"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Aspirant Pincode
              </label>
              <input
                type="number"
                id="aspirantPincode"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Type Pincode"
                required
                value={pincode}
                onChange={handlePincodeChange}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="aspirantCity"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Aspirant City
              </label>
              <select
                id="aspirantCity"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={city}
                onChange={handleCityChange}
              >
                <option>Please Select</option>
                <option value="allahabad">Allahabad</option>
                <option value="Patna">Patna</option>
                <option value="Mumbai">Mumbai</option>
              </select>
            </div>
            <div className="mb-6">
              <label
                htmlFor="aspirantState"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Aspirant State
              </label>
              <select
                id="aspirantState"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={state}
                onChange={handleStateChange}
              >
                <option>Please Select</option>
                <option value="uttar-pradesh">Uttar Pradesh</option>
                <option value="bihar">Bihar</option>
                <option value="maharastra">Maharastra</option>
              </select>
            </div>
            <div className="mb-6">
              <label
                htmlFor="aspirantSchoolName"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Aspirant School Name
              </label>
              <input
                type="text"
                id="aspirantResidentialAddress"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Type School Name"
                required
                value={schoolName}
                onChange={handleSchoolNameChange}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="testCenterCity"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Test Center City
              </label>
              <select
                id="testCenterCity"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={testCenterCity}
                onChange={handleTestCenterCityChange}
              >
                <option>Please Select</option>
                <option className="allahabad">Allahabad</option>
                <option className="agra">Agra</option>
                <option className="kanpur">Kanpur</option>
              </select>
            </div>
            <div className="flex items-center ">
              <div className="flex items-center mb-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value={agreeTerms}
                  onChange={handleAgreeTermsChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 "
                />
                <label
                  htmlFor="checkbox-1"
                  className="ml-2 text-sm font-medium text-gray-900"
                >
                  I agree to the{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    terms and conditions
                  </a>
                  .
                </label>
              </div>
            </div>
            <div className="flex items-center ">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Save & Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Profile;
