import React, { useContext } from 'react'
import jobs from '../data/job'
import { useParams, Link } from 'react-router-dom'
import { SavedJobsContext } from '../context/SavedJobsContext';

export function JobDetails() {

    const { toggleSave, isSaved } = useContext(SavedJobsContext)
    const { id } = useParams()
    const job = jobs.find((j) => j.id == Number(id))
    if (!job) return <h1> Job not found</h1>

    return (
        <>
            <h1>Job title :{job.title}</h1>
            <h1>company :{job.company}</h1>
            <h1>location :{job.location}</h1>
            <Link to={'/'}>Go back</Link>
            <button onClick={() => toggleSave(job.id)}>
                {isSaved(job.id) ? "Saved ✅" : "Save 🔖"}
            </button>
        </>
    )
}