import React, { useState, useContext, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { SavedJobsContext } from '../context/SavedJobsContext';

export function JobDetails() {

    const { toggleSave, isSaved } = useContext(SavedJobsContext)
    const { id } = useParams()
    const [job, setJob] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchJob() {
            try {
                const response = await fetch(`http://localhost:3000/api/jobs/${id}`)
                const data = await response.json()
                setJob(data.job)
                setLoading(false)
            } catch (err) {
                console.log(err)
            }
        }
        fetchJob()
    }, [])


    if (!job) return <h1> Job not found</h1>

    return (
        <>
            {loading ?
                <h1>Fetching data about the job...</h1>
                :
                <>
                    <h1>Job title :{job.title}</h1>
                    <h1>company :{job.company}</h1>
                    <h1>location :{job.location}</h1>
                    <Link to={'/'}>Go back</Link>
                    <button onClick={() => toggleSave(job.id)}>
                        {isSaved(job.id) ? "Saved ✅" : "Save 🔖"}
                    </button>
                </>
            }
        </>
    )
}