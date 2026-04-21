import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";

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
    <div style={{ ...styles.wrapper, ...(isDark ? styles.darkBg : styles.lightBg) }}>
      <div style={{ ...styles.card, ...(isDark ? styles.darkCard : styles.lightCard) }}>
        <h2 style={styles.title}>Bienvenido</h2>

        <p style={styles.subtitle}>Inicia sesión para continuar</p>

        {error && <div style={styles.error}>{error}</div>}

        <div style={styles.inputGroup}>
          <label>Email</label>
          <input
            type="email"
            placeholder="ejemplo@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ ...styles.input, ...(isDark ? styles.inputDark : styles.inputLight) }}
          />
        </div>

        <div style={styles.inputGroup}>
          <label>Contraseña</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ ...styles.input, ...(isDark ? styles.inputDark : styles.inputLight) }}
          />
        </div>

        <button
          onClick={handleLogin}
          disabled={loading}
          style={{
            ...styles.button,
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? "Entrando..." : "Entrar"}
        </button>

        <p style={styles.footer}>
          Demo: usa cualquier email y contraseña "1234"
        </p>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    transition: "all 0.3s ease",
  },

  lightBg: {
    background: "linear-gradient(135deg, #e2e8f0, #f8fafc)",
  },

  darkBg: {
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
  },

  card: {
    width: "100%",
    maxWidth: "420px",
    padding: "30px",
    borderRadius: "14px",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    transition: "all 0.3s ease",
  },

  lightCard: {
    background: "#ffffff",
    color: "#0f172a",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  },

  darkCard: {
    background: "#1e293b",
    color: "#ffffff",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
  },

  title: {
    margin: 0,
    fontSize: "24px",
    textAlign: "center",
  },

  subtitle: {
    textAlign: "center",
    fontSize: "14px",
    opacity: 0.7,
  },

  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },

  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid transparent",
    outline: "none",
    fontSize: "14px",
  },

  inputLight: {
    background: "#f1f5f9",
    color: "#0f172a",
    border: "1px solid #e2e8f0",
  },

  inputDark: {
    background: "#0f172a",
    color: "#fff",
    border: "1px solid #334155",
  },

  button: {
    marginTop: "10px",
    padding: "14px",
    background: "#3b82f6",
    border: "none",
    borderRadius: "8px",
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
    transition: "0.2s",
  },

  error: {
    background: "#7f1d1d",
    color: "#fecaca",
    padding: "10px",
    borderRadius: "8px",
    fontSize: "13px",
  },

  footer: {
    marginTop: "10px",
    fontSize: "12px",
    textAlign: "center",
    opacity: 0.7,
  },
};