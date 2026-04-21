import { useEffect } from "react";

export default function Toast({
  message,
  show,
  onClose,
  type = "success",
}) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  const typeStyles = {
    success: {
      borderColor: "#22c55e",
      icon: "✅",
    },
    error: {
      borderColor: "#ef4444",
      icon: "❌",
    },
    info: {
      borderColor: "var(--primary)",
      icon: "ℹ️",
    },
  };

  const current = typeStyles[type] || typeStyles.success;

  return (
    <div style={styles.container}>
      <div
        style={{
          ...styles.toast,
          borderLeft: `4px solid ${current.borderColor}`,
        }}
      >
        <span style={styles.icon}>{current.icon}</span>

        <span style={styles.message}>{message}</span>

        <button onClick={onClose} style={styles.close}>
          ✕
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: 9999,

    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  toast: {
    display: "flex",
    alignItems: "center",
    gap: "10px",

    minWidth: "260px",
    maxWidth: "320px",

    padding: "12px 14px",
    borderRadius: "var(--radius)",

    background: "var(--bg-secondary)",
    color: "var(--text)",

    border: "1px solid var(--border)",

    boxShadow: "0 10px 25px rgba(0,0,0,0.25)",

    animation: "slideIn 0.3s ease",
  },

  icon: {
    fontSize: "16px",
  },

  message: {
    flex: 1,
    fontSize: "14px",
  },

  close: {
    background: "transparent",
    border: "none",
    color: "var(--text-secondary)",
    cursor: "pointer",
    fontSize: "14px",
  },
};