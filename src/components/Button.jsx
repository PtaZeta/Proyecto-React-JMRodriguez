export default function Boton({ onClick, nombre }) {
    return (
        <button onClick={onClick} className="custom-button">
            {nombre}
        </button>
    );
}


