import { useState, useEffect } from "react";

export default function Cart({ cartItems, onRemove }) {
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    
    return (
        <div className="cart">
            <h2>Carrito de Compras</h2>
            {cartItems.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            {item.name} - ${item.price} x {item.quantity}
                            <button onClick={() => onRemove(item.id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            )}
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </div>
    );
}