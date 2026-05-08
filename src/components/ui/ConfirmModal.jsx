import { createPortal } from 'react-dom';
import './ConfirmModal.css';

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
        <div className={`confirm-modal-overlay ${isDark ? 'dark' : ''}`}>
            <div className={`confirm-modal ${isDark ? 'dark' : ''}`}>
                <h3 className="confirm-modal-title">{title}</h3>
                <p className="confirm-modal-message">{message}</p>
                <div className="confirm-modal-actions">
                    {cancelText && (
                        <button 
                            className="confirm-modal-cancel" 
                            onClick={onClose}
                        >
                            {cancelText}
                        </button>
                    )}
                    <button 
                        className="confirm-modal-confirm" 
                        onClick={onConfirm}
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>,
        document.body,
    );
}