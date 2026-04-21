import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import hero from '../assets/video/hero.mp4';

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
                        }}
                    >
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

                <div style={styles.content}>
                    <h1 style={styles.title}>Relatos de Papel</h1>

                    <p style={styles.subtitle}>
                        Compra libros, descubre autores y recibe tus historias
                        favoritas directamente en casa.
                    </p>

                    <div style={styles.buttons}>
                        <button
                            style={styles.primary}
                            onClick={() => navigate('/home')}
                        >
                            Ver catálogo
                        </button>

                        <button
                            style={styles.secondary}
                            onClick={() => {
                                navigate(
                                    isAuthenticated() ? '/profile' : '/login',
                                );
                            }}
                        >
                            Mi cuenta
                        </button>
                    </div>
                </div>
            </section>

            <section style={styles.section}>
                <div style={styles.features}>
                    <div style={styles.card}>
                        <span style={styles.icon}>📦</span>
                        <h3>Envíos rápidos</h3>
                        <p>Entrega segura en todo el país.</p>
                    </div>

                    <div style={styles.card}>
                        <span style={styles.icon}>💳</span>
                        <h3>Pagos seguros</h3>
                        <p>Múltiples métodos de pago confiables.</p>
                    </div>

                    <div style={styles.card}>
                        <span style={styles.icon}>⭐</span>
                        <h3>Recomendados</h3>
                        <p>Encuentra los libros más populares.</p>
                    </div>
                </div>
            </section>

            <section style={styles.cta}>
                <h2 style={styles.ctaTitle}>Empieza a leer hoy</h2>

                <button
                    style={styles.primary}
                    onClick={() => navigate('/home')}
                >
                    Ir al catálogo
                </button>
            </section>
        </div>
    );
}

const styles = {
    wrapper: {
        position: 'relative',
        height: '80vh',
        minHeight: '500px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#000',
    },

    media: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: 0, 
        transition: 'opacity 0.6s ease',
    },

    overlay: {
        position: 'absolute',
        inset: 0,
        background:
            'linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.80))',
        zIndex: 1, 
    },

    content: {
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        color: '#fff',
        padding: '20px',
        maxWidth: '700px',
    },

    title: {
        fontSize: 'clamp(32px, 5vw, 52px)',
        marginBottom: '10px',
    },

    subtitle: {
        fontSize: 'clamp(14px, 2vw, 18px)',
        marginBottom: '20px',
        color: '#e2e8f0',
    },

    buttons: {
        display: 'flex',
        gap: '10px',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },

    primary: {
        background: '#3b82f6',
        color: '#fff',
        padding: '12px 20px',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
        fontWeight: '600',
    },

    secondary: {
        border: '1px solid #fff',
        background: 'transparent',
        color: '#fff',
        padding: '12px 20px',
        borderRadius: '10px',
        cursor: 'pointer',
    },

    section: {
        padding: '40px 20px',
        background: 'var(--bg)',
    },

    features: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '15px',
        maxWidth: '900px',
        margin: '0 auto',
    },

    card: {
        background: 'var(--bg-secondary)',
        padding: '20px',
        borderRadius: '12px',
        textAlign: 'center',
        border: '1px solid var(--border)',
    },

    icon: {
        fontSize: '24px',
        display: 'block',
        marginBottom: '10px',
    },

    cta: {
        padding: '40px 20px',
        textAlign: 'center',
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border)',
    },

    ctaTitle: {
        marginBottom: '15px',
    },
};
