// Preview Component with Examples
import Tabs, { TabItem } from "@/lib/ui/Tabs";
import React, { useState } from "react";
function TabsPreview() {
  const [vars, setVars] = useState<Record<string, string>>({});

  const tabItems: TabItem[] = [
    {
      id: "overview",
      label: "Overview",
      content: (
        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h4 className="text-lg font-semibold mb-3">Overview</h4>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Welcome to the overview section. This is where you'll find a summary
            of your dashboard and key metrics.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
            <li>Total users: 1,234</li>
            <li>Active sessions: 567</li>
            <li>Revenue: $12,345</li>
          </ul>
        </div>
      ),
    },
    {
      id: "analytics",
      label: "Analytics",
      content: (
        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h4 className="text-lg font-semibold mb-3">Analytics</h4>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            View detailed analytics and insights about your application
            performance.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-700 rounded">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Page Views
              </p>
              <p className="text-2xl font-bold">45.2K</p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-700 rounded">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Bounce Rate
              </p>
              <p className="text-2xl font-bold">32%</p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-700 rounded">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Avg. Duration
              </p>
              <p className="text-2xl font-bold">3m 24s</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "reports",
      label: "Reports",
      content: (
        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h4 className="text-lg font-semibold mb-3">Reports</h4>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Generate and download comprehensive reports for your data.
          </p>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Download Report
          </button>
        </div>
      ),
    },
    {
      id: "settings",
      label: "Settings",
      content: (
        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h4 className="text-lg font-semibold mb-3">Settings</h4>
          <p className="text-gray-600 dark:text-gray-300">
            Configure your application settings and preferences.
          </p>
        </div>
      ),
    },
    {
      id: "disabled",
      label: "Disabled",
      content: <div>This tab is disabled</div>,
      disabled: true,
    },
  ];

  function toStyleObjectString(obj: Record<string, string>) {
    const entries = Object.entries(obj).map(([k, v]) => `"${k}": "${v}"`);
    return `{{ ${entries.join(", ")} } as React.CSSProperties}`;
  }

  const exportCode = `import React from 'react';\nimport { Tabs } from '@your-scope/newgen-ui';\n\nexport default function CustomTabs(){\n  const items = [\n    { id: 'tab1', label: 'Tab 1', content: <div>Content 1</div> },\n    { id: 'tab2', label: 'Tab 2', content: <div>Content 2</div> },\n  ];\n  return <div style=${toStyleObjectString(
    vars
  )}><Tabs items={items} /></div>\n}`;

  return (
    <div className="max-w-5xl mx-auto p-8 space-y-6 bg-white dark:bg-gray-900 min-h-screen">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
        Tabs Component
      </h2>

      <div className="space-y-8">
        {/* Default Variant */}
        <div
          style={vars as React.CSSProperties}
          className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg"
        >
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Default Variant
          </p>
          <Tabs items={tabItems} variant="default" />
        </div>

        {/* Pills Variant */}
        <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Pills Variant
          </p>
          <Tabs items={tabItems} variant="pills" />
        </div>

        {/* Underline Variant */}
        <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Underline Variant
          </p>
          <Tabs items={tabItems} variant="underline" />
        </div>

        {/* Sizes */}
        <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Different Sizes
          </p>
          <div className="space-y-6">
            <div>
              <p className="text-xs text-gray-500 mb-2">Small</p>
              <Tabs items={tabItems.slice(0, 3)} variant="pills" size="sm" />
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-2">Medium</p>
              <Tabs items={tabItems.slice(0, 3)} variant="pills" size="md" />
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-2">Large</p>
              <Tabs items={tabItems.slice(0, 3)} variant="pills" size="lg" />
            </div>
          </div>
        </div>

        {/* Custom Theme */}
        <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Custom Theme
          </p>
          <Tabs
            items={tabItems.slice(0, 3)}
            variant="default"
            theme={{
              primary: "#10b981",
              primary600: "#059669",
            }}
          />
        </div>

        {/* Theme Customization */}
        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
            Customize Theme
          </h4>
          <div className="space-y-3">
            <div>
              <label className="text-sm text-gray-600 dark:text-gray-400">
                Primary Color
              </label>
              <input
                type="color"
                defaultValue="#3b82f6"
                onChange={(e) =>
                  setVars((prev) => ({ ...prev, "--primary": e.target.value }))
                }
                className="w-full h-10 rounded cursor-pointer"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600 dark:text-gray-400">
                Primary 600
              </label>
              <input
                type="color"
                defaultValue="#2563eb"
                onChange={(e) =>
                  setVars((prev) => ({
                    ...prev,
                    "--primary-600": e.target.value,
                  }))
                }
                className="w-full h-10 rounded cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
          Usage
        </h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-x-auto">
          <code>{`import { Tabs } from '@your-scope/newgen-ui';

const items = [
  {
    id: 'tab1',
    label: 'Tab 1',
    content: <div>Content for tab 1</div>
  },
  {
    id: 'tab2',
    label: 'Tab 2',
    content: <div>Content for tab 2</div>
  },
  {
    id: 'tab3',
    label: 'Disabled',
    content: <div>Content for tab 3</div>,
    disabled: true
  }
];

// Basic usage
<Tabs items={items} />

// With variant
<Tabs items={items} variant="pills" />
<Tabs items={items} variant="underline" />

// With size
<Tabs items={items} size="sm" />
<Tabs items={items} size="lg" />

// With custom theme
<Tabs 
  items={items} 
  theme={{ primary: "#10b981", primary600: "#059669" }}
/>

// With onChange handler
<Tabs 
  items={items} 
  onChange={(tabId) => console.log(tabId)}
/>`}</code>
        </pre>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
          Export
        </h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-x-auto">
          <code>{exportCode}</code>
        </pre>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
          Props
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 dark:border-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-4 py-2 text-left">Prop</th>
                <th className="px-4 py-2 text-left">Type</th>
                <th className="px-4 py-2 text-left">Default</th>
                <th className="px-4 py-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="px-4 py-2 font-mono">items</td>
                <td className="px-4 py-2">TabItem[]</td>
                <td className="px-4 py-2">-</td>
                <td className="px-4 py-2">Array of tab items</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono">defaultTab</td>
                <td className="px-4 py-2">string</td>
                <td className="px-4 py-2">first tab id</td>
                <td className="px-4 py-2">Initially active tab</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono">variant</td>
                <td className="px-4 py-2">"default" | "pills" | "underline"</td>
                <td className="px-4 py-2">"default"</td>
                <td className="px-4 py-2">Visual style variant</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono">size</td>
                <td className="px-4 py-2">"sm" | "md" | "lg"</td>
                <td className="px-4 py-2">"md"</td>
                <td className="px-4 py-2">Size of tabs</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono">onChange</td>
                <td className="px-4 py-2">(tabId: string) =&gt; void</td>
                <td className="px-4 py-2">-</td>
                <td className="px-4 py-2">Callback when tab changes</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono">theme</td>
                <td className="px-4 py-2">object</td>
                <td className="px-4 py-2">-</td>
                <td className="px-4 py-2">Custom color theme</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4">
          <h4 className="font-semibold mb-2">TabItem Interface</h4>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm">
            <code>{`type TabItem = {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

export default TabsPreview;
