"use client";
import { useState } from "react";
import LocalThemeControls from "../../../components/LocalThemeControls";
import { Button } from "../../../lib/ui";

export default function ButtonPreview() {
  const [vars, setVars] = useState<Record<string, string>>({});

  function toStyleObjectString(obj: Record<string, string>) {
    const entries = Object.entries(obj).map(([k, v]) => `"${k}": "${v}"`);
    return `{{ ${entries.join(", ")} } as React.CSSProperties}`;
  }

  const exportCode = `import React from 'react';\nimport { Button } from '@your-scope/newgen-ui';\n\nexport default function CustomButton(){\n  return <div style=${toStyleObjectString(
    vars
  )}><Button>Primary</Button></div>\n}`;

  return (
    <div className="max-w-3xl mx-auto p-8 space-y-6">
      <h2 className="text-2xl font-semibold">Button</h2>

      <div className="space-y-6">
        <div style={vars} className="p-6 border rounded">
          <div className="flex mx-[45%]  ">
            <Button>Primary</Button>
          </div>
        </div>

        <div className="glass-card p-4">
          <h4 className="font-semibold mb-3">Customize</h4>
          <LocalThemeControls onChange={(v) => setVars(v)} />
        </div>
      </div>

      <h3 className="text-lg font-medium">Usage</h3>
      <pre className="bg-black/5 p-4 rounded">
        {`import { Button } from '@your-scope/newgen-ui';

<Button variant="primary">Primary Button</Button>`}
      </pre>

      <h3 className="text-lg font-medium">Export</h3>
      <div className="mt-2">
        <pre className="bg-black/5 p-4 rounded">{exportCode}</pre>
      </div>
    </div>
  );
}
