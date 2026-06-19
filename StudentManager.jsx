import { useState, useEffect } from 'react';

function StudentManager() {
    const [students, setStudents] = useState(() => {
        const savedData = localStorage.getItem('students')
        return savedData ? JSON.parse(savedData)
            :
            [
                { id: 1, name: 'John Doe', age: 20 },
                { id: 2, name: 'Jane Smith', age: 22 },
                { id: 3, name: 'Michael Johnson', age: 19 }
            ]
    })


    useEffect(() => {
        localStorage.setItem('students', JSON.stringify(students))
    }, [students])

    const [input, setInput] = useState('');
    const [selectedID, setSelectedID] = useState(null);
    const [editValue, setEditValue] = useState('');

    const [searchTerm, setSearchTerm] = useState('');

    const filteredList = students.filter((student) => student.name.toLowerCase().includes(searchTerm.toLowerCase()));

    function handleAdd(e) {
        e.preventDefault();
        if (!input.trim()) return;
        if (students.some((student) => student.name == input)) return;
        setStudents([...students, { id: Date.now(), name: input }]);
        setInput('');
    }

    function handleDelete(student) {
        setStudents(students.filter((s) => student.id != s.id));
    }

    function handleEdit(student) {
        setSelectedID(student.id);
        setEditValue(student.name);
    }

    function handleSave() {
        setStudents(students.map((student) =>
            student.id == selectedID ?
                ({ ...student, name: editValue })
                :
                student
        ))
        setSelectedID(null);
        setEditValue('');
    }

    function handleCancel() {
        setSelectedID(null);
        setEditValue('');
    }



    return (
        <div>
            <h1> Students : </h1>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <ul>
                {filteredList.map((student) => (
                    <li key={student.id}>
                        {selectedID == student.id ? (
                            <>
                                <input
                                    type="text"
                                    value={editValue}
                                    onChange={(e) => setEditValue(e.target.value)}
                                />
                                <button onClick={handleSave}>Save</button>
                                <button onClick={handleCancel}>Cancel</button>
                            </>
                        ) : (
                            <>
                                {student.name}
                                <button onClick={(e) => handleEdit(student)}>Edit</button>
                                <button onClick={(e) => handleDelete(student)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
            <input
                type="text"
                value={input}
                onChange={(e) => { setInput(e.target.value) }}
            />
            <button onClick={(e) => { handleAdd(e) }}>Add</button>
        </div>
    );
}
export default StudentManager