
import JobList from "./components/JobList.jsx";

import { JobDetails } from "./components/JobDetail.jsx";
import { Link, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { SavedJobs } from "./components/SavedJobs.jsx";
import { SavedJobsContext } from "./context/SavedJobsContext.jsx";

export default function App() {
  const { savedIDs } = useContext(SavedJobsContext)

  return (
    <>
      <nav>
        <Link to="/">Jobs</Link>
        <Link to="/saved">Saved({savedIDs.length})</Link>
      </nav>
      <Routes>
        <Route path='/' element={<JobList />} />
        <Route path='/saved' element={<SavedJobs />} />
        <Route path='/jobs/:id' element={<JobDetails />} />
      </Routes>

    </>
  )
}