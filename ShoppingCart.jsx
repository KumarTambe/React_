

function ShoppingCart(props) {
    const items = [
        { id: 1, name: 'Fruits', price: 100 },
        { id: 2, name: 'Toys', price: 200 },
        { id: 3, name: 'Water', price: 50 },
    ];
    const [cart, setCart] = useState([]);

    function handleAddButton(item) {
        if (cart.some((c) => c.id === item.id)) {
            alert('Item already in cart');
        } else {
            setCart([...cart, item]);
        }
    }

    return (
        <>
            <h1>Cart : {cart.length}</h1>
            <ul>
                {items.map((item, key) => (
                    <li key={item.id}>
                        {item.name}
                        <button onClick={(e) => handleAddButton(item)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </>
    );
}
