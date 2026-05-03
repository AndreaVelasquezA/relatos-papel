import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import hero from "../assets/video/hero.mp4";

export default function Landing() {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  const { isAuthenticated } = useContext(AuthContext);

  const [videoError, setVideoError] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        video.muted = true;
        await video.play();
      } catch (e) {
        setVideoError(true);
      }
    };

    playVideo();
  }, []);

  return (
    <div>
      <section style={styles.wrapper}>
        {!videoError && (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onCanPlay={() => setVideoReady(true)}
            onError={() => setVideoError(true)}
            style={{
              ...styles.media,
              opacity: videoReady ? 1 : 0,
            }}>
            <source src={hero} type="video/mp4" />
          </video>
        )}

        {videoError && (
          <img
            src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg"
            alt="books"
            style={styles.media}
          />
        )}

        <div style={styles.overlay} />

        <div style={styles.heroStack}>
          <div style={styles.content}>
            <h1 style={styles.title}>Relatos de Papel</h1>

            <p style={styles.subtitle}>
              Explora nuestra colección y elige entre la calidez de un libro
              físico o la comodidad de una lectura digital. Encuentra tu
              historia favorita hoy mismo y recíbela en casa o léela al
              instante.
            </p>

            <div style={styles.buttons}>
              <button style={styles.primary} onClick={() => navigate("/home")}>
                Ver catálogo
              </button>

              <button
                style={styles.secondary}
                onClick={() => {
                  navigate(isAuthenticated() ? "/profile" : "/login");
                }}>
                Mi cuenta
              </button>
            </div>
          </div>

          <div style={styles.features} aria-label="Ventajas">
            <div style={styles.card}>
              <span style={styles.icon} aria-hidden={true}>
                📦
              </span>
              <h3 style={styles.cardTitle}>Envíos rápidos</h3>
              <p style={styles.cardDesc}>Entrega segura en todo el país.</p>
            </div>

            <div style={styles.card}>
              <span style={styles.icon} aria-hidden={true}>
                💳
              </span>
              <h3 style={styles.cardTitle}>Pagos seguros</h3>
              <p style={styles.cardDesc}>
                Múltiples métodos de pago confiables.
              </p>
            </div>

            <div style={styles.card}>
              <span style={styles.icon} aria-hidden={true}>
                ⭐
              </span>
              <h3 style={styles.cardTitle}>Recomendados</h3>
              <p style={styles.cardDesc}>Encuentra los libros más populares.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  wrapper: {
    position: "relative",
    minHeight: "85vh",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#000",
    padding: "24px 0 40px",
    boxSizing: "border-box",
  },

  heroStack: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "clamp(28px, 5vh, 48px)",
    width: "100%",
    maxWidth: "960px",
    margin: "0 auto",
    padding: "0 20px",
    boxSizing: "border-box",
  },

  media: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 0,
    transition: "opacity 0.6s ease",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.80))",
    zIndex: 1,
  },

  content: {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    color: "#fff",
    padding: "20px",
    maxWidth: "700px",
  },

  title: {
    fontSize: "clamp(32px, 5vw, 52px)",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "clamp(20px, 2vw, 24px)",
    marginBottom: "20px",
    color: "#e2e8f0",
  },

  buttons: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  primary: {
    background: "#3b82f6",
    color: "#fff",
    padding: "16px 28px",
    fontSize: "18px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "600",
  },

  secondary: {
    border: "1px solid #fff",
    background: "transparent",
    color: "#fff",
    padding: "16px 28px",
    fontSize: "18px",
    borderRadius: "10px",
    cursor: "pointer",
  },

  features: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "15px",
    width: "100%",
  },

  card: {
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    padding: "20px",
    borderRadius: "12px",
    textAlign: "center",
    border: "1px solid rgba(255,255,255,0.22)",
    color: "#f8fafc",
  },

  cardTitle: {
    margin: "0 0 8px 0",
    fontSize: "1.05rem",
  },

  cardDesc: {
    margin: 0,
    fontSize: "0.92rem",
    lineHeight: 1.45,
    color: "rgba(248,250,252,0.88)",
  },

  icon: {
    fontSize: "24px",
    display: "block",
    marginBottom: "10px",
  },
};
