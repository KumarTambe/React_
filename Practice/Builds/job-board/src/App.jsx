
import JobList from "./components/JobList.jsx";

import { JobDetails } from "./components/JobDetail.jsx";
import { Link, Routes, Route } from "react-router-dom";

export default function App() {


  return (
    <Routes>
      <Route path='/' element={<JobList />} />
      <Route path='/jobs/:id' element={<JobDetails />} />
    </Routes>

  )
}