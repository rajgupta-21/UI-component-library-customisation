"use client";
import { useState } from "react";
import LocalThemeControls from "../../../components/LocalThemeControls";
import { Card } from "../../../lib/ui";

export default function CardPreview() {
  const [vars, setVars] = useState<Record<string, string>>({});

  function toStyleObjectString(obj: Record<string, string>) {
    const entries = Object.entries(obj).map(([k, v]) => `"${k}": "${v}"`);
    return `{{ ${entries.join(", ")} } as React.CSSProperties}`;
  }

  const exportCode = `import React from 'react';\nimport { Card } from '@your-scope/newgen-ui';\n\nexport default function CustomCard(){\n  return <div style=${toStyleObjectString(
    vars
  )}><Card title=\"Card title\">...children...</Card></div>\n}`;

  return (
    <div className="max-w-3xl mx-auto p-8 space-y-6">
      <h2 className="text-2xl font-semibold">Card</h2>

      <div className="space-y-6">
        <div style={vars} className="p-6 border rounded">
          <Card title="Card title" description="This is a description">
            <p>Here is some card content.</p>
          </Card>
        </div>

        <div className="glass-card p-4">
          <h4 className="font-semibold mb-3">Customize</h4>
          <LocalThemeControls onChange={(v) => setVars(v)} />
        </div>
      </div>

      <h3 className="text-lg font-medium">Usage</h3>
      <pre className="bg-black/5 p-4 rounded">
        {`import { Card } from '@your-scope/newgen-ui';

<Card title="Card title" description="This is a description">...children...</Card>`}
      </pre>

      <h3 className="text-lg font-medium">Export</h3>
      <div className="mt-2">
        <pre className="bg-black/5 p-4 rounded">{exportCode}</pre>
      </div>
    </div>
  );
}
