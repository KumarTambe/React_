import React, { useState } from "react";

function Build2() {
    const [email, setEmail] = useState('')
    const [valid, setValid] = useState(false)

    function handleSubmit() {
        if (email.includes("@")) {
            setValid(true)
        } else {
            setValid(false)
        }
    }

    return (
        <>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
            {valid ? <h1>Success!</h1> : <h1>Error!</h1>}
        </>
    )
}

export default Build2;