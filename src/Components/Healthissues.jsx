import React, { useState } from "react";

const HealthIssuesForm = () => {
  const healthIssues = [
    "Diabetes",
    "High blood pressure",
    "Digestive issues",
    "Others",
    "None",
  ];

  const [selectedIssues, setSelectedIssues] = useState([]);

  const handleIssueClick = (issue) => {
    if (selectedIssues.includes(issue)) {
      setSelectedIssues(selectedIssues.filter((item) => item !== issue));
    } else {
      setSelectedIssues([...selectedIssues, issue]);
    }
  };

  return (
    <div className="min-h-screen mx-[10%] flex flex-col justify-center items-center">
        <h1 className="font-bold text-black mb-2">Any health issues?</h1>
        <div className="grid grid-cols-2 gap-2">
          {healthIssues.map((issue) => (
            <button
              key={issue}
              onClick={() => handleIssueClick(issue)}
              className={`bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded-lg`}
              style={{
                backgroundColor: selectedIssues.includes(issue) ? "#4299e1" : "",
              }}
            >
              {issue}
            </button>
          ))}
        </div>
      </div>
  );
};

export default HealthIssuesForm;
