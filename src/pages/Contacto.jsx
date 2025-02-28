import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contacto() {
    return (
        <div id="contacto">
            <Header />
            <main className="contenedorFormulario">
            <h2>PÓNGANSE EN CONTACTO</h2>
            <form>
                <div className="formulario">
                    <label for="nombre">Nombre completo:</label>
                    <input type="text" id="nombre" name="nombre" />
                </div>
                <div className="correoTelefono">
                    <div className="formulario">
                    <label for="email">Correo electrónico:</label>
                    <input type="email" id="email" name="email" />
                    </div>
                    <div className="formulario">
                    <label for="telefono">Teléfono:</label>
                    <input type="tel" id="telefono" name="telefono" />
                    </div>
                </div>
                <div className="formulario">
                    <label for="mensaje">Qué necesita:</label>
                    <textarea id="mensaje" name="mensaje" rows="4"></textarea>
                </div>
                <button className="enviarFormulario" type="submit">ENVIAR</button>
            </form>
            </main>
            <Footer />
        </div>
    );
}
