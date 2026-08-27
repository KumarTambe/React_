import react from 'react'

export function Counter() {
    const [value, setValue] = useState(0);

    function handleIncrement() {
        setValue(value + 1);
    }
    function handleDecrement() {
        while (value > 0) {
            setValue(value - 1);
        }
    }
    function handleReset() {
        setValue(0);
    }

    return (
        <>
            <h1>Count : {value}</h1>
            <button onClick={handleIncrement}>Increase</button>
            <button onClick={handleDecrement}>Decrease</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}