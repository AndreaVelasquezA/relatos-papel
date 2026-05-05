import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const { login } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const isDark = theme === "dark";

  const handleLogin = () => {
    setError("");

    if (!email || !password) {
      setError("Todos los campos son obligatorios");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const ok = login(email, password);

      if (ok) navigate("/profile");
      else setError("Credenciales incorrectas");

      setLoading(false);
    }, 800);
  };

  return (
    <div
      className={`login-page ${isDark ? "login-page--dark" : "login-page--light"}`}
    >
      <div
        className={`login-card ${isDark ? "login-card--dark" : "login-card--light"}`}
      >
        <h2 className="login-title">Bienvenido</h2>

        <p className="login-subtitle">Inicia sesión para continuar</p>

        {error && <div className="login-error">{error}</div>}

        <div className="login-input-group">
          <label htmlFor="login-email">Email</label>
          <input
            id="login-email"
            type="email"
            placeholder="ejemplo@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            className={`login-input ${isDark ? "login-input--dark" : "login-input--light"}`}
          />
        </div>

        <div className="login-input-group">
          <label htmlFor="login-password">Contraseña</label>
          <input
            id="login-password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            className={`login-input ${isDark ? "login-input--dark" : "login-input--light"}`}
          />
        </div>

        <button
          type="button"
          onClick={handleLogin}
          disabled={loading}
          className={`login-submit ${loading ? "login-submit--loading" : ""}`}
        >
          {loading ? "Entrando..." : "Entrar"}
        </button>

        <p className="login-footer">
          Email: usuario@test.com, Contraseña: 123456
        </p>
      </div>
    </div>
  );
}
