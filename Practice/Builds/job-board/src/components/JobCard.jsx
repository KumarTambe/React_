import React from "react";

function JobCard({ job }) {
    return (
        <>
            <h1>The Job title is : {job.title}</h1>
            <h1>The company is : {job.company}</h1>
            <h1>The salary is : {job.salary}</h1>
            {job.isRemote ? <h1>The job is remote!</h1> : <h1>The job is on-site</h1>}
        </>
    )
}

export default JobCard