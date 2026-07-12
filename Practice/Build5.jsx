import React from "react";
import { UserContext } from "./UserContext";
import { useContext } from "react";

function ChildComponent() {
    const user = useContext(UserContext)
    return <h1>{user}</h1>
}

function Build5() {
    return (
        <UserContext.Provider value="Kumar">
            <ChildComponent />
        </UserContext.Provider>
    )
}

export default Build5;