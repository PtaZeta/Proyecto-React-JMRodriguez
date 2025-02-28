import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Articulo from "./pages/Articulo";
import Contacto from "./pages/Contacto";
import Drop from "./pages/Drop";
import Info from "./pages/Info";

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/articulo" element={<Articulo />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/drop" element={<Drop />} />
                <Route path="/info" element={<Info />} />
            </Routes>
        </Router>
    );
}
