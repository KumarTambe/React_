import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    function handleAdd() {
        setCount(count + 1);
    }
    function handleMinus() {
        if (count === 0) {
            return;
        } else {
            setCount(count - 1);
        }
    }
    function handleReset() {
        setCount(0);
    }
    return (
        <>
            <h1>Count:{count}</h1>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleMinus}>Minus</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}