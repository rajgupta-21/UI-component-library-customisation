import React from "react";

export type ButtonProps =
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" })
  | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a"; href: string });

export default function Button({
  size = "md",
  className = "",
  as = "button",
  children,
  theme,
  ...rest
}: React.PropsWithChildren<
  (ButtonProps & { size?: "sm" | "md" | "lg" }) & {
    theme?: { primary?: string; primary600?: string; accent?: string };
  }
>) {
  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  }[size];
  const classes =
    `${sizeClasses} inline-flex items-center gap-2 rounded-lg text-white shadow-md ${className}`.trim();

  if (as === "a") {
    const anchorProps = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    const anchorHref = anchorProps.href ?? "";
    const style = theme
      ? ({
          background: `linear-gradient(90deg, ${theme.primary}, ${
            theme.primary600 || theme.primary
          })`,
        } as React.CSSProperties)
      : ({
          background:
            "linear-gradient(90deg,var(--primary),var(--primary-600))",
        } as React.CSSProperties);
    return (
      <a href={anchorHref} className={classes} style={style} {...anchorProps}>
        {children}
      </a>
    );
  }
  const style = {
    background: "linear-gradient(90deg,var(--primary),var(--primary-600))",
  } as React.CSSProperties;

  return (
    <button
      className={classes}
      style={style}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
