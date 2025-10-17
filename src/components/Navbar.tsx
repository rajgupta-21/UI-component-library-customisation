"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/documentation", label: "Documentation" },
    { href: "/components", label: "Components" },
    { href: "/about", label: "About" },
  ];

  function setTheme(theme: string) {
    document.documentElement.setAttribute("data-theme", theme);
  }

  return (
    <nav className="w-full sticky top-0 z-40">
      <div className="container-max px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center text-white font-bold">
              R
            </div>
            <div>
              <div className="font-semibold text-lg">NewGen UI</div>
              <div className="text-xs text-[var(--muted)]">
                A next-gen component library
              </div>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-1 ml-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`nav-link ${pathname === l.href ? "active" : ""}`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-3">
            <button
              aria-label="Use light theme"
              onClick={() => setTheme("light")}
              className="swatch"
              style={{ background: "linear-gradient(90deg,#fff,#e6eef8)" }}
            />
            <button
              aria-label="Use dark theme"
              onClick={() => setTheme("")}
              className="swatch"
              style={{
                background:
                  "linear-gradient(90deg,var(--primary),var(--accent))",
              }}
            />
            <Link href="/" className="btn-primary hidden sm:inline-block">
              Get started
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-md"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mobile-nav-backdrop">
          <div className="px-6 py-4">
            <div className="flex flex-col gap-3">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`nav-link ${pathname === l.href ? "active" : ""}`}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/"
                className="btn-primary inline-block w-full text-center mt-2"
                onClick={() => setOpen(false)}
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
