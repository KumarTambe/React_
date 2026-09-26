import React, { useContext } from "react";
import { SavedJobsContext } from "../context/SavedJobsContext";
import jobs from "../data/job";

export function SavedJobs() {
    const { savedIDs, toggleSave } = useContext(SavedJobsContext)

    const filteredJobs = jobs.filter((j) => savedIDs.includes(j.id))
    return (
        <>
            {
                filteredJobs.length === 0 ?

                    <h1>No saved jobs!</h1>
                    :
                    <>
                        {
                            filteredJobs.map((j) =>
                                <li key={j.id}>{j.title}<button onClick={() => toggleSave(j.id)}>Remove</button></li>
                            )}
                    </>
            }
        </>
    )
}