"use client";
import Dialog from "@/lib/ui/Dialog";
import { useState } from "react";
import LocalThemeControls from "../../../components/LocalThemeControls";
import { Button } from "../../../lib/ui";

export default function DialogPreview() {
  const [vars, setVars] = useState<Record<string, string>>({});
  const [open, setOpen] = useState(false);

  const exportCode = `import React, { useState } from 'react';
import { Dialog, Button } from '@your-scope/newgen-ui';

export default function CustomDialog(){
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog open={open} onClose={() => setOpen(false)} title="Custom Dialog">
        <p>Your dialog content here.</p>
      </Dialog>
    </div>
  );
}`;

  return (
    <div className="max-w-3xl mx-auto p-8 space-y-6">
      <h2 className="text-2xl font-semibold">Dialog</h2>

      <div className="space-y-6">
        <div style={vars} className="p-6 border rounded">
          <Button onClick={() => setOpen(true)}>Open Dialog</Button>

          <Dialog
            open={open}
            onClose={() => setOpen(false)}
            title="Dialog Title"
            theme={vars}
          >
            <p className="text-gray-700">
              This is a customizable dialog box. Adjust the colors below!
            </p>
          </Dialog>
        </div>

        <div className="glass-card p-4">
          <h4 className="font-semibold mb-3">Customize</h4>
          <LocalThemeControls onChange={(v) => setVars(v)} />
        </div>
      </div>

      <h3 className="text-lg font-medium">Usage</h3>
      <pre className="bg-black/5 p-4 rounded">
        {`import { Dialog } from '@your-scope/newgen-ui';

<Dialog open={true} onClose={() => {}} title="Example">Content</Dialog>`}
      </pre>

      <h3 className="text-lg font-medium">Export</h3>
      <div className="mt-2">
        <pre className="bg-black/5 p-4 rounded">{exportCode}</pre>
      </div>
    </div>
  );
}
