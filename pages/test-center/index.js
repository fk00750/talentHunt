import React, { useState } from "react";
import testCenterData from "../../json/testCenter.json";

function TestCenter() {
  const initialData = testCenterData;

  const [data, setData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) => {
    const searchTermLowerCase = searchTerm.toLowerCase();
    const stateLowerCase = item.state.toLowerCase();
    const cityLowerCase = item.city.toLowerCase();
    const testCenterCodeLowerCase = item.testCenterCode.toLowerCase();
    const testDateLowerCase = item.testDate.toLowerCase();

    return (
      stateLowerCase.includes(searchTermLowerCase) ||
      cityLowerCase.includes(searchTermLowerCase) ||
      testCenterCodeLowerCase.includes(searchTermLowerCase) ||
      testDateLowerCase.includes(searchTermLowerCase)
    );
  });

  return (
    <div className="container my-5 min-vh-100">
      <div className="card shadow-sm">
        <div className="card-body pb-2">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </span>
            <input
              type="text"
              id="table-search"
              className="form-control"
              placeholder="Search for items"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>
      </div>

      <div className="mt-4 h-100">
        <div className="table-responsive h-100 overflow-auto">
          <table className="table table-hover">
            <thead className="table-light">
              <tr>
                <th scope="col">State</th>
                <th scope="col">City</th>
                <th scope="col">Test Center Code</th>
                <th scope="col">Test Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={index}>
                  <td>{item.state}</td>
                  <td>{item.city}</td>
                  <td>{item.testCenterCode}</td>
                  <td>{item.testDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TestCenter;
