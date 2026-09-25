import React from "react";
import jobs from "./data/job.js"
import JobCard from "./components/JobCard.jsx";

export default function App() {
  return (
    <div>
      {jobs.map((j) =>
        <JobCard
          key={j.id}
          job={j}
        />
      )}
    </div>
  )
}