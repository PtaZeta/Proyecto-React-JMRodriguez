import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Encabezado from "../components/Header";
import PieDePagina from "../components/Footer";
import Carrito from "../components/Cart";
import Boton from "../components/Button";

export default function PaginaPrincipal() {
    const [carrito, setCarrito] = useState([]);
    const [productos, setProductos] = useState([]);
    const [esCarritoVisible, setEsCarritoVisible] = useState(false);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const response = await fetch("/products.json");
                if (!response.ok) {
                    throw new Error("Error al cargar productos");
                }
                const data = await response.json();
                setProductos(data);
            } catch (error) {
                console.error("Error al cargar productos:", error);
            }
        };

        fetchProductos();
    }, []);

    const agregarAlCarrito = (producto) => {
        setCarrito((carritoPrevio) => {
            const itemExistente = carritoPrevio.find((item) => item.id === producto.id);
            if (itemExistente) {
                return carritoPrevio.map((item) =>
                    item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
                );
            } else {
                return [...carritoPrevio, { ...producto, cantidad: 1 }];
            }
        });
    };

    const eliminarDelCarrito = (producto) => {
        setCarrito((carritoPrevio) => {
            return carritoPrevio.map((item) =>
                item.id === producto.id ? { ...item, cantidad: item.cantidad - 1 } : item
            ).filter((item) => item.cantidad > 0);
        });
    };

    return (
        <div id="index">
            <Encabezado onCarritoClick={() => setEsCarritoVisible(!esCarritoVisible)} />

            <main className="mainindex">
                <section>
                    {productos.map((producto) => (
                        <article key={producto.id} className="producto-card">
                            <Link to={"/other-page"}>
                                <img src={producto.imagen} alt={producto.nombre} className="producto-image" />
                                <p className="producto-name">{producto.nombre} {producto.precio} €</p>
                            </Link>
                            <Boton onClick={() => agregarAlCarrito(producto)}>Agregar al Carrito</Boton>
                        </article>
                    ))}
                </section>
                {esCarritoVisible && (
                    <Carrito
                        itemsCarrito={carrito}
                        onAumentar={agregarAlCarrito}
                        onDisminuir={eliminarDelCarrito}
                        onCerrar={() => setEsCarritoVisible(false)}
                        className="cart-overlay"
                    />
                )}
            </main>
            <PieDePagina />
        </div>
    );
}