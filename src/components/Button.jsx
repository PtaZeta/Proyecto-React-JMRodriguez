export default function Boton({ onClick, children }) {
    return (
        <button onClick={onClick} className="custom-button">
            {children}
        </button>
    );
}