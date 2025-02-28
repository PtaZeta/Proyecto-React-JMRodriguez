import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Drop() {
    return (
        <div id="drop">
            <Header />
            <main>
                <ul className="contador">
                    <li>
                        <span className="numero">04</span>
                        <span className="letra">DAYS</span>
                    </li>
                    <li>
                        <span className="numero">03</span>
                        <span className="letra">HOURS</span>
                    </li>
                    <li>
                        <span className="numero">52</span>
                        <span className="letra">MINUTES</span>
                    </li>
                    <li>
                        <span className="numero">08</span>
                        <span className="letra">SECONDS</span>
                    </li>
                </ul>
                <div className="contenedorSorteo">
                    <h2>PARTICIPA EN EL SORTEO</h2>
                    <div className="botonSorteo">
                    <input className="sorteoEmail" type="email" placeholder="Correo electrónico" />
                    <button>
                        <span><img src="img/flecha_derecha.png" alt="Flecha" /></span>
                    </button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
