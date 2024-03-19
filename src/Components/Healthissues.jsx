import React, { useState, useEffect } from "react";

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

  useEffect(() => {
    // Update local storage when selected health issues change
    localStorage.setItem(
      "selectedHealthIssues",
      JSON.stringify(selectedIssues)
    );
  }, [selectedIssues]);

  return (
    <div className="mt-10 flex flex-col justify-center lg:items-center">
      <h2 className="font-bold text-2xl text-black mb-5">Any health issues?</h2>
      <div className="flex flex-wrap gap-2 mb-12">
        {healthIssues.map((issue) => (
          <button
            key={issue}
            onClick={() => handleIssueClick(issue)}
            className={`border border-gray-300 hover:bg-blue-200 py-3 px-4 rounded-md`}
            style={{
              backgroundColor: selectedIssues.includes(issue)
                ? "rgb(191 219 254)"
                : "",
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
