import React, { useState } from "react";


function ShoppingCart() {
    const [cart, setCart] = useState([]);

    function addToCart(product) {
        const found = cart.find((c) => c.id == product.id);
        if (found) {
            setCart(cart.map((c) => c.id == product.id ? { ...c, qty: qty + 1 } : c))
        } else {
            setCart([...cart, { id: product.id, name: product.name, price: product.price, qty: 1 }])
        }
    }

    function removeFromCart(id) {
        setCart(cart.filter((c) => c.id != id));
    }

    function changeQty(id, newQty) {
        if (newQty <= 0) {
            setCart(cart.filter((c) => c.id != id));
        } else {
            setCart(cart.map((c) => c.id == id ? { ...cart, qty: newQty } : c))
        }
    }

    let total = cart.reduce((total, current) => total + current.price * current.qty);

    return null;
}
