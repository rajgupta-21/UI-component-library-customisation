"use client";
import { useState } from "react";
import LocalThemeControls from "../../../components/LocalThemeControls";
import LibNavbar from "../../../lib/ui/Navbar";

export default function NavbarPreview() {
  const [vars, setVars] = useState<Record<string, string>>({});

  function toStyleObjectString(obj: Record<string, string>) {
    const entries = Object.entries(obj).map(([k, v]) => `"${k}": "${v}"`);
    return `{{ ${entries.join(", ")} } as React.CSSProperties}`;
  }

  const exportCode = `import React from 'react';\nimport { Navbar } from '@your-scope/newgen-ui';\n\nexport default function CustomNavbar(){\n  return <div style=${toStyleObjectString(
    vars
  )}><Navbar /></div>\n}`;

  return (
    <div className="max-w-4xl mx-auto p-8 space-y-6">
      <h2 className="text-2xl font-semibold">Navbar</h2>

      <div className="space-y-6">
        <div style={vars} className="border rounded">
          <LibNavbar />
        </div>

        <div className="glass-card p-4">
          <h4 className="font-semibold mb-3">Customize</h4>
          <LocalThemeControls onChange={(v) => setVars(v)} />
        </div>
      </div>

      <h3 className="text-lg font-medium">Usage</h3>
      <pre className="bg-black/5 p-4 rounded">
        {`import { Navbar } from '@your-scope/newgen-ui';

<Navbar />`}
      </pre>

      <h3 className="text-lg font-medium">Export</h3>
      <div className="mt-2">
        <pre className="bg-black/5 p-4 rounded">{exportCode}</pre>
      </div>
    </div>
  );
}
