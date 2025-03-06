import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import Button from "../components/Button";

export default function HomePage() {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/data/products.json")
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error al cargar productos:", error));
    }, []);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);
            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    return (
        <div id="index">
            <Header />
            <main className="mainindex">
                <section>
                    {products.map((product) => (
                        <article key={product.id} className="product-card">
                            <img src={product.img} alt={product.name} className="product-image" />
                            <p className="product-name">{product.name}</p>
                            <p className="product-price">{product.price}€</p>
                            <Button onClick={() => addToCart(product)}>Agregar al Carrito</Button>
                        </article>
                    ))}
                </section>
                <Cart cartItems={cart} onRemove={removeFromCart} />
            </main>
            <Footer />
        </div>
    );
}