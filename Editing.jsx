import { useState } from 'react';

function Editing() {
    const [items, setItems] = useState([
        { id: 1, name: 'React' },
        { id: 2, name: 'Node' },
        { id: 3, name: 'Express' },
    ]);
    const [selectedID, setSelectedID] = useState(null);
    const [editValue, setEditValue] = useState('');

    function handleEdit(item) {
        setSelectedID(item.id);
        setEditValue(item.name);
    }
    function handleSave(id) {
        setItems(
            items.map((item) =>
                item.id === id ? { ...item, name: editValue } : item
            )
        );
        setSelectedID(null);
        setEditValue('');
    }

    return (
        <>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {selectedID == item.id ? (
                            <>
                                (
                                <input
                                    value={editValue}
                                    onChange={(e) => setEditValue(e.target.value)}
                                />
                                <button onClick={() => handleSave(item.id)}>Save</button>)
                            </>
                        ) : (
                            <>
                                {item.name}
                                <button onClick={() => handleEdit(item)}>Edit</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
}
