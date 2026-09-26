import React, { useState, useEffect, createContext } from "react";

export const SavedJobsContext = createContext()

export function SavedJobsProvider({ children }) {
    const [savedIDs, setSavedID] = useState(() => {
        const stored = localStorage.getItem('savedJobs')
        return stored ? JSON.parse(stored) : []
    })

    useEffect(() => {
        localStorage.setItem('savedJobs', JSON.stringify(savedIDs))
    }, [savedIDs])

    function toggleSave(id) {
        if (savedIDs.includes(id)) {
            setSavedID(savedIDs.filter((s) => s != id))
        } else {
            setSavedID([...savedIDs, id]);
        }
    }

    function isSaved(id) {
        if (savedIDs.includes(id)) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <SavedJobsContext.Provider value={{ savedIDs, setSavedID, toggleSave, isSaved }}>
            {children}
        </SavedJobsContext.Provider>
    )
}