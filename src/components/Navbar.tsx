import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ToothLogo from "./ToothLogo";

const navLinks = [
  { label: "Inicio", path: "/" },
  { label: "Servicios", path: "/servicios" },
  { label: "Nosotros", path: "/nosotros" },
  { label: "Galería", path: "/galeria" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  const navBg = scrolled
    ? "bg-primary/95 backdrop-blur-md shadow-elevated"
    : "bg-transparent";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <ToothLogo className="w-8 h-8 text-cyan transition-transform group-hover:scale-110" />
          <div className="leading-tight">
            <span className="font-display text-sm md:text-base font-bold text-primary-foreground">
              Dr. Lucio Martel
            </span>
            <span className="hidden sm:block text-[10px] text-cyan-light tracking-widest uppercase">
              Clínica Dental
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname === link.path
                  ? "text-cyan"
                  : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contacto"
            className="ml-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-accent text-accent-foreground hover:bg-cyan-light transition-colors"
          >
            Contáctanos
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-primary-foreground p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-primary/98 backdrop-blur-md border-t border-primary-foreground/10 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                  pathname === link.path
                    ? "text-cyan bg-primary-foreground/5"
                    : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contacto"
              className="mt-2 px-5 py-3 text-sm font-semibold rounded-lg bg-accent text-accent-foreground text-center hover:bg-cyan-light transition-colors"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
