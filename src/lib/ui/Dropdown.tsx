"use client";
import { useState } from "react";

export interface DropdownItem {
  label: string;
  value: string;
  onClick?: () => void;
}

export interface DropdownProps {
  label: string;
  items: DropdownItem[];
  theme?: {
    background?: string; // background of dropdown menu
    text?: string; // text color
    border?: string; // border color
    hover?: string; // hover background color
  };
}

export default function Dropdown({ label, items, theme }: DropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block w-48">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-4 py-2 rounded-lg shadow-md"
        style={{
          background: theme?.background || "#fff",
          color: theme?.text || "#111",
          border: `1px solid ${theme?.border || "#ccc"}`,
        }}
      >
        {label}
      </button>

      {open && (
        <div
          className="absolute left-0 mt-2 w-full rounded-lg shadow-lg z-50"
          style={{
            background: theme?.background || "#fff",
            border: `1px solid ${theme?.border || "#ccc"}`,
          }}
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              className="px-4 py-2 cursor-pointer hover:brightness-90"
              style={{
                color: theme?.text || "#111",
                background: theme?.background || "#fff",
              }}
              onClick={() => {
                item.onClick?.();
                setOpen(false);
              }}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
