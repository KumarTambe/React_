
function JobCard({ title, company, salary, isRemote }) {
    return (
        <li>
            {title} at {company} — {salary} — {isRemote ? "Remote" : "On-site"}
        </li>
    )
}


function JobList({ jobs }) {
    return (
        <ul>
            {jobs.map(j => (
                <JobCard
                    key={j.id}
                    title={j.title}
                    company={j.company}
                    salary={j.salary}
                    isRemote={j.isRemote}
                />
            ))}
        </ul>
    )
}


function App() {
    return <JobList jobs={jobs} />
}