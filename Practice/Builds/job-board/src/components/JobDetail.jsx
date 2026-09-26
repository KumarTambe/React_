import React from 'react'
import jobs from '../data/job'
import { useParams, Link } from 'react-router-dom'

export function JobDetails() {
    const [input, setInput] = useState('');
    const { id } = useParams()
    const job = jobs.find((j) => j.id == Number(id))
    if (!job) return <h1> Job not found</h1>

    return (
        <>
            <h1>Job title :{job.title}</h1>
            <h1>company :{job.company}</h1>
            <h1>location :{job.location}</h1>
            <Link to={'/'}>Go back</Link>
        </>
    )
}