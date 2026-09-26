import React, { useState } from 'react'
import jobs from '../data/job.js'
import JobCard from './JobCard.jsx'
import { Link } from 'react-router-dom'

export default function JobList() {
    const [input, setInput] = useState('')

    const filteredJobs = jobs.filter((j) =>
        j.title.toLowerCase().includes(input.toLowerCase()) ||
        j.company.toLowerCase().includes(input.toLowerCase())
    )

    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Search jobs..."
            />
            {filteredJobs.map((j) => (
                <Link to={`/jobs/${j.id}`} key={j.id}>
                    <JobCard job={j} />
                </Link>
            ))}
            {filteredJobs.length === 0 && <p>No jobs found</p>}
        </div>
    )
}