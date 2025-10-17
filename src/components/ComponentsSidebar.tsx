"use client";

import React from "react";

type Item = { id: string; label: string; href: string };

export default function ComponentsSidebar({ items }: { items: Item[] }) {
  const [active, setActive] = React.useState<string | null>(
    items[0]?.id ?? null
  );

  React.useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    items.forEach((it) => {
      const el = document.getElementById(it.id);
      if (el) io.observe(el);
    });

    return () => io.disconnect();
  }, [items]);

  return (
    <aside className="hidden md:block">
      <div className="sticky top-20">
        <h2 className="text-xl font-semibold mb-4">Components</h2>
        <nav className="flex flex-col gap-2">
          {items.map((it) => (
            <div key={it.id} className="flex items-center justify-between">
              <a
                href={`#${it.id}`}
                className={`nav-link ${active === it.id ? "active" : ""}`}
              >
                {it.label}
              </a>
              <a
                href={it.href}
                className="text-xs text-blue-400 hover:underline ml-2"
                aria-label={`Open preview for ${it.label}`}
              >
                Preview
              </a>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
