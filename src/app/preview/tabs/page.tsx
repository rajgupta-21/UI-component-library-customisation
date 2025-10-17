"use client";

import Tabs from "@/lib/ui/Tabs";
import { useState } from "react";
import LocalThemeControls from "../../../components/LocalThemeControls";

export default function TabsPreview() {
  const [vars, setVars] = useState<Record<string, string>>({
    "--tab-active-bg": "#7C3AED",
    "--tab-inactive-bg": "#f3f3f3",
    "--tab-text": "#111111",
    "--tab-border": "#7C3AED",
    "--tab-content-bg": "#ffffff",
  });

  const tabs = [
    { label: "Tab 1", content: <p>Content for Tab 1</p> },
    { label: "Tab 2", content: <p>Content for Tab 2</p> },
    { label: "Tab 3", content: <p>Content for Tab 3</p> },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-semibold">Tabs Component</h2>

      {/* Tabs preview */}
      <div
        className="glass-card border border-white/10 p-6 rounded-2xl"
        style={vars}
      >
        <Tabs tabs={tabs} />
      </div>

      {/* Theme controls */}
      <div className="glass-card p-4 rounded-2xl">
        <h4 className="font-semibold mb-3">Customize Tabs Colors</h4>
        <LocalThemeControls
          onChange={(v) =>
            setVars({
              "--tab-active-bg": v.primary || "#7C3AED",
              "--tab-inactive-bg": v.background || "#f3f3f3",
              "--tab-text": v.text || "#111111",
              "--tab-border": v.secondary || "#7C3AED",
              "--tab-content-bg": v.background || "#ffffff",
            })
          }
        />
      </div>

      <h3 className="text-lg font-medium">Usage</h3>
      <pre className="bg-black/5 p-4 rounded overflow-x-auto">
        {`import { Tabs } from '@your-scope/newgen-ui';

const tabs = [
  { label: "Tab 1", content: <p>Content 1</p> },
  { label: "Tab 2", content: <p>Content 2</p> },
];

<div style={{
  "--tab-active-bg": "#7C3AED",
  "--tab-inactive-bg": "#f3f3f3",
  "--tab-text": "#111",
  "--tab-border": "#7C3AED",
  "--tab-content-bg": "#ffffff"
} as React.CSSProperties}>
  <Tabs tabs={tabs} />
</div>`}
      </pre>
    </div>
  );
}
