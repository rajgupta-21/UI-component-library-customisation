import React from "react";

export interface DialogProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
  theme?: {
    primary?: string;
    primary600?: string;
    accent?: string;
    background?: string;
  };
}

export default function Dialog({
  open,
  onClose,
  title,
  children,
  theme,
}: DialogProps) {
  if (!open) return null;

  const overlayStyle = {
    background: "rgba(0, 0, 0, 0.4)",
  } as React.CSSProperties;

  const dialogStyle = theme
    ? ({
        background: theme.primary || "white",
        border: `4px solid ${theme.primary || "var(--primary)"}`,
        color: "var(--text-color, #111)",
        transition: "all 0.2s ease-in-out",
      } as React.CSSProperties)
    : ({
        background: "var(--background, white)",
        borderTop: "5px solid var(--primary)",
      } as React.CSSProperties);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center"
      style={overlayStyle}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg  max-w-md p-6 relative"
        style={dialogStyle}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-3 text-gray-600 hover:text-gray-800"
        >
          ✕
        </button>
        {title && <h2 className="text-xl font-semibold mb-3">{title}</h2>}
        <div>{children}</div>
      </div>
    </div>
  );
}
