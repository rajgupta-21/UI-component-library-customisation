"use client";

import Dropdown from "@/lib/ui/Dropdown";
import { useState } from "react";
import LocalThemeControls from "../../../components/LocalThemeControls";

export default function DropdownPreview() {
  // Theme state for dropdown colors
  const [theme, setTheme] = useState({
    background: "#ffffff",
    text: "#111111",
    border: "#7C3AED",
    hover: "#E0D7F8",
  });

  const items = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-semibold">Dropdown Component</h2>

      {/* Dropdown preview */}
      <div className="glass-card border border-white/10 p-6 rounded-2xl">
        <Dropdown label="Select an Option" items={items} theme={theme} />
      </div>

      {/* Theme customization */}
      <div className="glass-card p-4 rounded-2xl">
        <h4 className="font-semibold mb-3">Customize Dropdown Colors</h4>
        <LocalThemeControls
          onChange={(v) =>
            setTheme((prev) => ({
              background: v.background || prev.background,
              text: v.text || prev.text,
              border: v.primary || prev.border,
              hover: v.secondary || prev.hover,
            }))
          }
        />
      </div>

      {/* Usage example */}
      <h3 className="text-lg font-medium">Usage</h3>
      <pre className="bg-black/5 p-4 rounded overflow-x-auto">
        {`import { Dropdown } from '@your-scope/newgen-ui';

const items = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
  { label: "Option 3", value: "3" }
];

<Dropdown 
  label="Select an Option" 
  items={items} 
  theme={{ background: "#fff", text: "#111", border: "#7C3AED", hover: "#E0D7F8" }} 
/>`}
      </pre>
    </div>
  );
}
