import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Info() {
    return (
        <div id="info">
            <Header />
            <main>
            <div className="info">
                <h1>QUIENES SOMOS</h1>
                <p>
                    En elixSr, creemos que la moda es más que ropa: es una declaración de identidad y un reflejo
                    de la pasión que nos mueve. Nacimos en España en 2022 con una visión clara: unir influencias globales
                    para crear piezas únicas, llenas de personalidad y autenticidad. Nos inspiramos en culturas y estilos de
                    todo el mundo, fusionándolos en colecciones que hablan de esfuerzo, dedicación y un espíritu libre.
                </p>
                <p>
                    Cada prenda que creamos es una invitación a formar parte de nuestra comunidad global, a ser parte de un
                    movimiento que celebra la individualidad y la valentía de quienes no temen destacar. No somos solo una marca
                    de moda: somos una comunidad de personas jóvenes, creativas y determinadas a alcanzar sus metas,
                    y vemos cada pieza de Elixirhoctes como una extensión de esos valores.
                </p>
                <p>
                    Únete a nosotros y descubre el estilo elixSr: donde la moda se convierte en una herramienta para expresar quién eres realmente.
                </p>
                <h2>Sé parte de elixSr. Vive el estilo que representa quién eres.</h2>
            </div>
            </main>
            <Footer />
        </div>
    );
}
