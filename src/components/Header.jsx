import { Link } from "react-router-dom";
import "../assets/styles.css";

export default function Header() {
    return (
        <header>
            <select name="idioma" id="idioma">
                <option value="español">ESPAÑOL</option>
                <option value="ingles">INGLES</option>
                <option value="aleman">ALEMAN</option>
                <option value="frances">FRANCES</option>
            </select>
            <img src="/img/logo_elixSr_white.png" alt="ElixSr White" />
            <section>
                <img src="/img/icono_busca_white.png" alt="Buscar" />
                <img src="/img/icono_perfil_white.png" alt="Perfil" />
                <img src="/img/icono_carrito_white.png" alt="Carrito" />
            </section>
            <nav>
                <ul className="navegacion">
                    <li><Link to="/">INICIO</Link></li>
                    <li><Link to="/drop">DROPS</Link></li>
                    <li><Link to="/contacto">CONTACTO</Link></li>
                    <li><Link to="/info">INFO</Link></li>
                </ul>
            </nav>
        </header>
    );
}
