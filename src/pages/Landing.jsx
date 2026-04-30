import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect, useContext } from 'react';
import { Feather, Bookmark, Compass, ChevronDown } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';
import hero from '../assets/video/hero.mp4';
import './Landing.css';
export default function Landing() {
    const navigate = useNavigate();
    const videoRef = useRef(null);
    const featuresRef = useRef(null);
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
    const scrollToContent = () => {
        featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div className="landing">
            {' '}
            <section className="hero">
                {' '}
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
                        className={`hero-media ${videoReady ? 'visible' : ''}`}
                    >
                        {' '}
                        <source src={hero} type="video/mp4" />{' '}
                    </video>
                )}{' '}
                {videoError && (
                    <img
                        src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg"
                        alt="books"
                        className="hero-media visible"
                    />
                )}{' '}
                <div className="hero-overlay" />{' '}
                <div className="hero-content">
                    {' '}
                    <span className="hero-badge">
                        {' '}
                        Librería digital contemporánea{' '}
                    </span>{' '}
                    <h1 className="hero-title"> Relatos de Papel </h1>{' '}
                    <p className="hero-subtitle">
                        {' '}
                        Descubre historias memorables y encuentra libros para
                        cada tipo de lector.{' '}
                    </p>{' '}
                    <div className="hero-buttons">
                        {' '}
                        <button
                            className="btn-primary"
                            onClick={() => navigate('/home')}
                        >
                            {' '}
                            Explorar catálogo{' '}
                        </button>{' '}
                        <button
                            className="btn-secondary"
                            onClick={() =>
                                navigate(
                                    isAuthenticated() ? '/profile' : '/login',
                                )
                            }
                        >
                            {' '}
                            Mi biblioteca{' '}
                        </button>{' '}
                    </div>{' '}
                </div>{' '}
                <button className="scroll-indicator" onClick={scrollToContent}>
                    {' '}
                    <span>Descubrir más</span> <ChevronDown size={18} />{' '}
                </button>{' '}
            </section>{' '}
            <section ref={featuresRef} className="features-section">
                {' '}
                <div className="section-header">
                    {' '}
                    <span className="section-tag"> EXPERIENCIA </span>{' '}
                    <h2> Una experiencia enfocada en la lectura </h2>{' '}
                    <p>
                        {' '}
                        Navega y descubre historias con una interfaz moderna,
                        cómoda y fácil de usar.{' '}
                    </p>{' '}
                </div>{' '}
                <div className="features-grid">
                    {' '}
                    <div className="feature-card">
                        {' '}
                        <div className="feature-icon">
                            {' '}
                            <Feather size={20} strokeWidth={1.8} />{' '}
                        </div>{' '}
                        <h3> Curaduría literaria </h3>{' '}
                        <p>
                            {' '}
                            Selecciones pensadas para lectores que buscan algo
                            más que tendencias.{' '}
                        </p>{' '}
                    </div>{' '}
                    <div className="feature-card">
                        {' '}
                        <div className="feature-icon">
                            {' '}
                            <Bookmark size={20} strokeWidth={1.8} />{' '}
                        </div>{' '}
                        <h3> Lectura sin fricción </h3>{' '}
                        <p>
                            {' '}
                            Compra rápida y acceso inmediato a tus libros
                            favoritos.{' '}
                        </p>{' '}
                    </div>{' '}
                    <div className="feature-card">
                        {' '}
                        <div className="feature-icon">
                            {' '}
                            <Compass size={20} strokeWidth={1.8} />{' '}
                        </div>{' '}
                        <h3> Nuevos descubrimientos </h3>{' '}
                        <p>
                            {' '}
                            Explora autores, géneros y relatos que conecten
                            contigo.{' '}
                        </p>{' '}
                    </div>{' '}
                </div>{' '}
            </section>{' '}
            <section className="cta-section">
                {' '}
                <div className="cta-box">
                    {' '}
                    <span className="section-tag"> COMIENZA HOY </span>{' '}
                    <h2> Tu próxima historia empieza aquí </h2>{' '}
                    <p>
                        {' '}
                        Construye tu propia biblioteca desde cualquier
                        lugar.{' '}
                    </p>{' '}
                    <button
                        className="btn-primary"
                        onClick={() => navigate('/home')}
                    >
                        {' '}
                        Ir al catálogo{' '}
                    </button>{' '}
                </div>{' '}
            </section>{' '}
        </div>
    );
}
