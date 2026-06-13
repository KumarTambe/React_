function Counter(props) {
    const [number, setNumber] = useState(0);

    function handleIncrement() {
        setNumber(number + 1);
    }
    function handleDecrement() {
        if (number > 0) {
            setNumber(number - 1);
        }
    }
    function handleReset() {
        setNumber(0);
    }

    return (
        <>
            <p>{number}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </>
    );
}
