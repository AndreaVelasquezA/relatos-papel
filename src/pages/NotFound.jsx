import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const isDark = theme === "dark";

  return (
    <div style={{ ...styles.wrapper, ...(isDark ? styles.darkBg : styles.lightBg) }}>
      <div style={{ ...styles.card, ...(isDark ? styles.darkCard : styles.lightCard) }}>
        <h1 style={styles.title}>404</h1>

        <p style={styles.text}>
          La página que buscas no existe
        </p>

        <button
          onClick={() => navigate("/")}
          style={styles.button}
        >
          Volver al inicio
        </button>
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
    padding: "16px",
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
    padding: "28px",
    borderRadius: "14px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
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
    fontSize: "clamp(48px, 10vw, 72px)",
    margin: 0,
    fontWeight: "700",
  },

  text: {
    fontSize: "14px",
    opacity: 0.75,
    margin: 0,
  },

  button: {
    marginTop: "10px",
    padding: "12px 16px",
    background: "#3b82f6",
    border: "none",
    borderRadius: "10px",
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
    width: "100%",
  },
};