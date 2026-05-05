import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import hero from "../assets/video/hero.mp4";
import "./Landing.css";

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
      <section className="landing-section">
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
            className={`landing-media ${!videoReady ? "landing-media--loading" : ""}`}
          >
            <source src={hero} type="video/mp4" />
          </video>
        )}

        {videoError && (
          <img
            src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg"
            alt="books"
            className="landing-media"
          />
        )}

        <div className="landing-overlay" />

        <div className="landing-hero-stack">
          <div className="landing-content">
            <h1 className="landing-title">Relatos de Papel</h1>

            <p className="landing-subtitle">
              Explora nuestra colección y elige entre la calidez de un libro
              físico o la comodidad de una lectura digital. Encuentra tu
              historia favorita hoy mismo y recíbela en casa o léela al
              instante.
            </p>

            <div className="landing-buttons">
              <button
                type="button"
                className="landing-btn-primary"
                onClick={() => navigate("/home")}
              >
                Ver catálogo
              </button>

              <button
                type="button"
                className="landing-btn-secondary"
                onClick={() => {
                  navigate(isAuthenticated() ? "/profile" : "/login");
                }}
              >
                Mi cuenta
              </button>
            </div>
          </div>

          <div className="landing-features" aria-label="Ventajas">
            <div className="landing-card">
              <span className="landing-card-icon" aria-hidden={true}>
                📦
              </span>
              <h3 className="landing-card-title">Envíos rápidos</h3>
              <p className="landing-card-desc">Entrega segura en todo el país.</p>
            </div>

            <div className="landing-card">
              <span className="landing-card-icon" aria-hidden={true}>
                💳
              </span>
              <h3 className="landing-card-title">Pagos seguros</h3>
              <p className="landing-card-desc">
                Múltiples métodos de pago confiables.
              </p>
            </div>

            <div className="landing-card">
              <span className="landing-card-icon" aria-hidden={true}>
                ⭐
              </span>
              <h3 className="landing-card-title">Recomendados</h3>
              <p className="landing-card-desc">
                Encuentra los libros más populares.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
