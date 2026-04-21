import { Link, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
import { ThemeContext } from "../../context/ThemeContext";
import { createPortal } from "react-dom";
import CartDrawer from "../cart/CartDrawer";

import {
  Menu,
  X,
  Sun,
  Moon,
  ShoppingCart,
  LogOut,
  User,
  BookOpen,
  Home,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [openCart, setOpenCart] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [confirmLogout, setConfirmLogout] = useState(false);

  const location = useLocation();
  const isDark = theme === "dark";

  const isActive = (path) => location.pathname === path;

  const closeMenu = () => setMenuOpen(false);

  const handleLogout = () => {
    localStorage.setItem("books_current_page", 1);
    logout();
    setConfirmLogout(false);
    closeMenu();
  };

  return (
    <>
      <nav className={`nav ${isDark ? "dark" : "light"}`}>
        <Link to="/" className="logo">
          📚 Relatos
        </Link>

        <div className="links">
          <NavItem to="/" icon={<Home size={18} />} active={isActive("/")}>
            Inicio
          </NavItem>

          <NavItem to="/home" icon={<BookOpen size={18} />} active={isActive("/home")}>
            Libros
          </NavItem>

          {user && (
            <NavItem to="/profile" icon={<User size={18} />} active={isActive("/profile")}>
              Perfil
            </NavItem>
          )}
        </div>

        <div className="right">
          <button className="cartBtn" onClick={() => setOpenCart(true)}>
            <ShoppingCart size={18} />
            {cart.length > 0 && <span className="badge">{cart.length}</span>}
          </button>

          <div className="desktop-only">
            <button className="iconBtn" onClick={toggleTheme}>
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {!user ? (
              <Link className="navBtn" to="/login">
                Login
              </Link>
            ) : (
              <button className="navBtn" onClick={() => setConfirmLogout(true)}>
                <LogOut size={18} />
              </button>
            )}
          </div>

          <button className="menuBtn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="overlay"
              onClick={closeMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className={`mobileMenu ${isDark ? "mobileDark" : "mobileLight"}`}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
            >
              <button className="closeBtn" onClick={closeMenu}>
                <X />
              </button>

              <Link className="mobileItem" to="/" onClick={closeMenu}>
                <Home size={18} /> Inicio
              </Link>

              <Link className="mobileItem" to="/home" onClick={closeMenu}>
                <BookOpen size={18} /> Libros
              </Link>

              {user && (
                <Link className="mobileItem" to="/profile" onClick={closeMenu}>
                  <User size={18} /> Perfil
                </Link>
              )}

              <button className="mobileItem" onClick={toggleTheme}>
                {isDark ? <Sun size={18} /> : <Moon size={18} />} Tema
              </button>

              {!user ? (
                <Link className="mobileItem" to="/login" onClick={closeMenu}>
                  Login
                </Link>
              ) : (
                <button
                  className="mobileItem logout"
                  onClick={() => {
                    setConfirmLogout(true);
                    closeMenu();
                  }}
                >
                  <LogOut size={18} /> Cerrar sesión
                </button>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <CartDrawer open={openCart} onClose={() => setOpenCart(false)} />


      {confirmLogout &&
        createPortal(
          <div className="modalOverlay">
            <div className={`modal ${isDark ? "modalDark" : "modalLight"}`}>
              <h3>¿Cerrar sesión?</h3>
              <p>Tu sesión se cerrará y deberás iniciar nuevamente.</p>

              <div className="modalActions">
                <button onClick={() => setConfirmLogout(false)}>
                  Cancelar
                </button>

                <button className="confirmBtn" onClick={handleLogout}>
                  Salir
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

function NavItem({ to, children, icon, active }) {
  return (
    <Link to={to} className={`navItem ${active ? "active" : ""}`}>
      {icon}
      <span>{children}</span>
    </Link>
  );
}