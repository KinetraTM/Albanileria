import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { scrollToSection } from "../util/scroll";
import SplitTextReveal from "../components/SplitTextReveal";
import "../style/UI/components.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const go = (id) => {
    setOpen(false);
    scrollToSection(id);
  };
  return (
    <nav className="navbar">
      <div className="container navbar__inner">
        <span className="navbar__brand">
          <img
            src="/logo.svg"
            alt=""
            style={{
              width: 28,
              height: 28,
              verticalAlign: "middle",
              marginRight: 8,
            }}
          />
          <SplitTextReveal unit="chars" duration={900} trigger="load">
            Gustavo Burique
          </SplitTextReveal>
        </span>
        <button
          className="navbar__toggle"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <ul className={`navbar__links ${open ? "navbar__links--open" : ""}`}>
          <li>
            <a
              href="#nosotros"
              onClick={(e) => {
                e.preventDefault();
                go("nosotros");
              }}
            >
              Sobre Mi
            </a>
          </li>
          <li>
            <a
              href="#obras"
              onClick={(e) => {
                e.preventDefault();
                go("obras");
              }}
            >
              Obras
            </a>
          </li>
          <li>
            <a
              href="#servicios"
              onClick={(e) => {
                e.preventDefault();
                go("servicios");
              }}
            >
              Servicios
            </a>
          </li>
          <li>
            <a
              href="#faq"
              onClick={(e) => {
                e.preventDefault();
                go("faq");
              }}
            >
              FAQ
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                go("contacto");
              }}
            >
              Contacto
            </a>
          </li>
          <li>
            <Link to="/obras">Galería</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
