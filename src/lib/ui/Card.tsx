import React from "react";

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  title?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  theme?: { primary?: string; primary600?: string; accent?: string };
};

export default function Card({
  title,
  description,
  footer,
  className = "",
  children,
  theme,
  ...rest
}: React.PropsWithChildren<CardProps>) {
  // Prefer CSS variable-based styling so parent wrappers (preview pages)
  // can set --primary / --primary-rgb via inline style and have the card react.
  // If a theme prop is provided, compute rgba values from the hex and use those.
  function hexToRgb(hex?: string): [number, number, number] | null {
    if (!hex) return null;
    const h = hex.replace(/^#/, "");
    const full =
      h.length === 3
        ? h
            .split("")
            .map((c) => c + c)
            .join("")
        : h;
    const num = parseInt(full, 16);
    if (Number.isNaN(num)) return null;
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;
    return [r, g, b];
  }

  let style: React.CSSProperties | undefined = {
    // use CSS variables by default so LocalThemeControls (which sets them)
    // will update the card automatically
    background: "rgba(var(--primary-rgb),0.12)",
    boxShadow: "0 8px 30px rgba(var(--primary-rgb),0.06)",
  };

  if (theme?.primary) {
    const rgb = hexToRgb(theme.primary);
    if (rgb) {
      const [r, g, b] = rgb;
      style = {
        borderColor: `rgba(${r}, ${g}, ${b}, 0.12)`,
        boxShadow: `0 8px 30px rgba(${r}, ${g}, ${b}, 0.06)`,
      };
    }
  }

  return (
    <div
      className={` border p-6 rounded-2xl ${className}`}
      style={style}
      {...rest}
    >
      {title && <h3 className="text-xl font-semibold mb-1">{title}</h3>}
      {description && (
        <p className="text-sm text-[var(--muted)] mb-3">{description}</p>
      )}
      <div>{children}</div>
      {footer && (
        <div className="mt-4 text-sm text-[var(--muted)]">{footer}</div>
      )}
    </div>
  );
}
