function HOLYCRUD() {
    const [input, setInput] = useState('');
    const [items, setItems] = useState([
        { id: 1, name: 'React' },
        { id: 2, name: 'Node' },
    ]);
    const [count, setCount] = useState(0);
    const [selectedID, setSelectedID] = useState(null);
    const [editValue, setEditValue] = useState('');

    function handleAdd(e) {
        e.preventDefault();
        setItems([...items, { id: Date.now(), name: input }]);
        setInput('');
        setCount(count + 1);
    }

    function handleEdit(item) {
        setSelectedID(item.id);
        setEditValue(item.name);
    }

    function handleSave() {
        setItems(
            items.map((item) =>
                item.id == selectedID ? { ...item, name: editValue } : item
            )
        );
        setSelectedID(null);
        setEditValue('');
    }

    function handleCancel() {
        setSelectedID(null);
        setEditValue('');
    }
    return (
        <>
            <p> Total count : {count} </p>
            <ul>
                {items.map((item) =>
                    selectedID == item.id ? (
                        <>
                            <input
                                type="text"
                                value={editValue}
                                onChange={(e) => setEditValue(e.target.value)}
                            />
                            <button onClick={handleSave}> Save </button>
                        </>
                    ) : (
                        <>
                            <h1>{item.name}</h1>
                            <button onClick={(e) => handleEdit(item)}>Edit</button>
                        </>
                    )
                )}
            </ul>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={(e) => handleAdd()}>Add</button>
        </>
    );
}
