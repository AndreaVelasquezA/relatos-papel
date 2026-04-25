import { createPortal } from 'react-dom';

export default function ConfirmModal({
    open,
    title,
    message,
    confirmText = 'Confirmar',
    cancelText = 'Cancelar',
    onConfirm,
    onClose,
    isDark = false,
}) {
    if (!open) return null;

    return createPortal(
        <div style={styles.overlay}>
            <div
                style={{
                    ...styles.modal,
                    background: isDark ? '#1e293b' : '#fff',
                    color: isDark ? '#fff' : '#111827',
                }}
            >
                <h3 style={styles.title}>{title}</h3>

                <p style={styles.message}>{message}</p>

                <div style={styles.actions}>
                    {cancelText && (
                        <button
                            style={{
                                ...styles.cancelBtn,
                                color: isDark ? '#fff' : '#111827',
                            }}
                            onClick={onClose}
                        >
                            {cancelText}
                        </button>
                    )}

                    <button style={styles.confirmBtn} onClick={onConfirm}>
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>,
        document.body,
    );
}

const styles = {
    overlay: {
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.5)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2000,
        padding: '20px',
    },

    modal: {
        width: '100%',
        maxWidth: '400px',
        borderRadius: '16px',
        padding: '24px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    },

    title: {
        margin: 0,
        marginBottom: '10px',
        fontSize: '22px',
    },

    message: {
        margin: 0,
        marginBottom: '24px',
        lineHeight: 1.5,
        opacity: 0.8,
    },

    actions: {
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '12px',
    },

    cancelBtn: {
        padding: '10px 16px',
        borderRadius: '10px',
        border: '1px solid #cbd5e1',
        background: 'transparent',
        cursor: 'pointer',
    },

    confirmBtn: {
        padding: '10px 16px',
        borderRadius: '10px',
        border: 'none',
        background: '#ef4444',
        color: '#fff',
        fontWeight: '600',
        cursor: 'pointer',
    },
};