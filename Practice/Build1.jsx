
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

//exercise 3 

function StudentBadge({ name, cgpa }) {
    return (
        <>
            <h1>{cgpa > 8 ? `Top Student ${name}` : cgpa < 6 ? "Low CGPA" + name : name}</h1>
        </>
    )
}

//practice

function ProfileCard({ name, role, skills, isAvailable }) {
    return (
        <>
            <h1> {name} is a {role} and has the following skils :</h1>
            <>
                {skills.map((s) =>
                    <span key={index}>{s}</span>
                )}
            </>
            <h1>{isAvailable ? "Open to work" : "Not avaiable"}</h1>
        </>
    )
}

function App() {
    return (
        <div>
            <ProfileCard
                name="Kumar"
                role="Developer"
                skills={["React", "Node", "MongoDB"]}
                isAvailable={true}
            />
            <ProfileCard
                name="Prasad"
                role="Designer"
                skills={["Figma", "CSS"]}
                isAvailable={false}
            />
            <ProfileCard
                name="Tanmay"
                role="Backend Dev"
                skills={["Node", "PostgreSQL"]}
                isAvailable={true}
            />
        </div>
    )
}