import React, { useState } from "react";

const EmployeeListView = () => {
  const employeeData = [
    { id: 1, name: "Arjun", dob: "16-11-2000", role: "Software Engineer" },
    { id: 2, name: "Mahesh", dob: "15-01-2000", role: "Web Developer" },
    { id: 3, name: "Ram", dob: "20-06-1999", role: "Android Developer" },
    { id: 5, name: "Lakshman", dob: "08-12-2002", role: "React.js Developer" },
  ];

  const [searchInput, setSearchInput] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState(employeeData);

  const handleSearchInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);

    // Filter employees based on search input
    const filtered = employeeData.filter((employee) =>
      employee.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredEmployees(filtered);
  };

  return (
    <div className="mb-20">
      {/* Search bar */}
      <div className="flex text-white">
        <input
          type="text"
          placeholder="Search with name                      🔍"
          value={searchInput}
          onChange={handleSearchInputChange}
          className="mb-8 p-2 rounded-2xl mx-auto search-bar"
          style={{
            width: "280px",
            height: "50px",
          }}
        />
      </div>

      <div>
        {filteredEmployees.map((employee) => (
          <div
            key={employee.id}
            className="p-8 mb-4 rounded-2xl w-[17rem] relative"
            style={{ backgroundColor: "#131816" }}
          >
            <div
              className="absolute  text-white p-1 w-8 h-8 text-center"
              style={{
                zIndex: 1,
                borderRadius: "1rem",
                backgroundColor: "#131816",
                border: "2px solid black",
                top: "6px",
                right: "6px",
              }}
            >
              {employee.id}
            </div>

            {/* Employee details */}
            <div className="text-white m-2" style={{ color: "#969898" }}>
              EMP ID : <span className="text-white"> {employee.id}</span>
            </div>
            <div className="text-white m-2" style={{ color: "#969898" }}>
              Name : <span className="text-white"> {employee.name}</span>
            </div>
            <div className="text-white m-2" style={{ color: "#969898" }}>
              DOB : <span style={{ color: "#86591D" }}>{employee.dob}</span>
            </div>
            <div className="text-white m-2" style={{ color: "#969898" }}>
              Role : <span style={{ color: "#2A7435" }}> {employee.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeListView;
