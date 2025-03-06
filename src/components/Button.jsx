export default function Button({ onClick, children }) {
    return (
        <button onClick={onClick} className="custom-button">
            {children}
        </button>
    );
}