import React, { useState } from "react";

function Build3() {
    let names = ["Anish", "Jaiden", "Ranveer", "Kumar", "Shivam"]
    const [input, setInput] = useState('')

    const filteredItems = names.filter((name) => name.toLowerCase().includes(input.toLowerCase()))

    return (
        <>
            {filteredItems.map((item, index) => <li key={index}>{item}</li>)}
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

        </>
    )
}

export default Build3