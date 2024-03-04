import React from "react";
const productivity = [
  { id: 1, title: "Productivity on Monday", value: "4" },
  { id: 2, title: "Productivity on Tuesday", value: "92" },
  { id: 3, title: "Productivity on Wednesday", value: "122" },
  { id: 4, title: "Productivity on Thursday", value: "93" },
  { id: 5, title: "Productivity on Friday", value: "89" },
  { id: 6, title: "Productivity on Saturday", value: "98" },
];

const HomeScreen = () => {
  return (
    <div className="flex flex-col items-start m-0">
      <div
        className="text-center mx-auto mb-2 mt-2 rounded-lg"
        style={{
          height: "28rem",
          width: "19rem",
          backgroundColor: "#5E5E5E82",
        }}
      >
        <div
          className="text-center mx-auto mb-8"
          style={{
            width: "19.1rem",
            height: "45px",
            backgroundColor: "#1A2C2C99",
            borderRadius: "2rem",
          }}
        >
          <p
            className="px-4 py-2 dashboard"
            style={{
              backgroundColor: "#1A2C2C99",
              color: "#FFFFFFB3",
              borderRadius: "2rem",
            }}
          >
            Employee Productivity Dashboard
          </p>
        </div>
        {productivity.map((p) => (
          <div key={p.id} className="flex flex-col mb-2">
            <div className="flex justify-around text-white">
              <p>{p.title} </p>{" "}
              <span style={{ color: "#36A546" }}>{p.value}%</span>
            </div>
            <div className="">
              <progress
                className="rounded-lg"
                value={p.value}
                max="200"
                style={{
                  width: "15.4rem",
                  borderRadius: "10px",
                }}
              ></progress>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
