"use client";
import Link from "next/link";
import React from "react";

export type LibNavbarProps = {
  brand?: React.ReactNode;
  links?: { href: string; label: string }[];
  theme?: { primary?: string; primary600?: string };
  className?: string;
};

export default function LibNavbar({
  brand = (
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-md bg-[var(--primary)] flex items-center justify-center text-white font-bold">
        R
      </div>
      <div>
        <div className="font-semibold">NewGen UI</div>
      </div>
    </div>
  ),
  links = [
    { href: "/", label: "Home" },
    { href: "/documentation", label: "Docs" },
    { href: "/components", label: "Components" },
  ],
  theme,
  className = "",
}: LibNavbarProps) {
  const navStyle: React.CSSProperties = theme
    ? {
        background: `linear-gradient(90deg, ${theme.primary}, ${
          theme.primary600 || theme.primary
        })`,
      }
    : {
        background: "linear-gradient(90deg,var(--primary),var(--primary-600))",
      };

  return (
    <nav className={`w-full py-3 ${className}`} style={navStyle}>
      <div className="container-max px-4 flex items-center justify-between">
        <div>{brand}</div>
        <div className="hidden sm:flex gap-3">
          {links.map((l, i) => (
            <Link
              key={`${l.href || l.label}-${i}`}
              href={l.href || "/"}
              className="nav-link"
            >
              <span
                style={{
                  padding: "6px 10px",
                  borderRadius: 8,
                  transition: "all 160ms",
                  color: "white",
                }}
              >
                {l.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
