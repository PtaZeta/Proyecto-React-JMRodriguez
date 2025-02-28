import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Articulo() {
    return (
        <div id="articulo">
            <Header />
            <main className="mainarticulo">
                <div className="todo">
                    <section className="fotosArticulo">
                        <img src="/img/elixSr Black Knitted Sweater.png" alt="elixSr Black Knitted Sweater"/>
                        <article className="fotosAlter"><img src="/img/elixSr Black Knitted Sweater.png" alt="elixSr Black Knitted Sweater 1"/></article>
                        <article className="fotosAlter"><img src="/img/img1.png" alt="elixSr Black Knitted Sweater 2"/></article>
                        <article className="fotosAlter"><img src="/img/img2.png" alt="elixSr Black Knitted Sweater 3"/></article>
                    </section>
                    <aside>
                        <h2>elixSr Black Knitted Sweater</h2>
                        <h2>89.99€</h2>
                        <section className="tallas">
                            <h3>Tallas</h3>
                            <div>
                                <button className="botonTalla">S</button>
                                <button className="botonTalla">M</button>
                                <button className="botonTalla">L</button>
                                <button className="botonTalla">XL</button>
                            </div>
                        </section>
                        <section className="cantidad">
                            <h3>Cantidad</h3>
                            <div className="botonCantidad">
                                <span>-</span>
                                <span>0</span>
                                <span>+</span>
                            </div>
                            
                        </section>
                        <button className="boton-agregar">AGREGAR AL CARRITO</button>
                        <div className="contenedorEnlacesArticulo">
                            <ul className="listaEnlacesArticulo">
                                <li className="enlaceArticulo">DETAILS / DETALLES</li>
                                <li className="enlaceArticulo">SIZE CHART / TABLA DE TALLAS</li>
                                <li className="enlaceArticulo">GIFS / REGALOS</li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </main>
            <Footer />
        </div>
    );
}
