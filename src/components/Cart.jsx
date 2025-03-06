import { useState } from "react";

export default function Carrito({ itemsCarrito, onAumentar, onDisminuir, onCerrar, className }) {
    const precioTotal = itemsCarrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    
    return (
        <div className={`cart ${className}`}>
            <button className="close-cart" onClick={onCerrar}>X</button>
            <h2>Carrito de Compras</h2>
            {itemsCarrito.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                <ul>
                    {itemsCarrito.map((item) => (
                        <li key={item.id}>
                            {item.nombre} - {item.precio} x {item.cantidad} €
                            <button onClick={() => onAumentar(item)} className="cart-button">+</button>
                            <button onClick={() => onDisminuir(item)} className="cart-button">-</button>
                        </li>
                    ))}
                </ul>
            )}
            <h3>Total: {precioTotal.toFixed(2)} €</h3>
        </div>
    );
}