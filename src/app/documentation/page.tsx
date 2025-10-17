import Link from "next/link";
import { Card } from "../../lib/ui";

export default function DocumentationPage() {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Documentation</h1>
        <p className="text-[var(--muted)] mt-2 max-w-2xl">
          Clear, simple information about NewGen UI — what it is, what languages
          it supports, and where to find components.
        </p>
      </header>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Languages we support</h2>
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-md bg-yellow-300 flex items-center justify-center font-bold">
              JS
            </div>
            <div className="text-sm text-[var(--muted)]">JavaScript</div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-md bg-blue-500 flex items-center justify-center font-bold text-white">
              TS
            </div>
            <div className="text-sm text-[var(--muted)]">TypeScript</div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-md bg-gradient-to-br from-[#000000] to-[#111827] flex items-center justify-center font-bold text-white">
              R
            </div>
            <div className="text-sm text-[var(--muted)]">React</div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">What NewGen UI is</h2>
        <p className="text-[var(--muted)]">
          A small set of React components that are easy to theme and customize.
          You can either copy the component code directly or import the
          components after the package is published to npm.
        </p>
      </section>

      <section className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="Compatibility"
          description="Works with common React setups"
        >
          <ul className="list-disc pl-5 text-sm text-[var(--muted)]">
            <li>Next.js (app & pages)</li>
            <li>Vite + React</li>
            <li>Create React App</li>
          </ul>
        </Card>

        <Card title="Where to get components" description="Two easy ways">
          <ol className="list-decimal pl-5 text-sm text-[var(--muted)]">
            <li>Copy the code from the preview pages for quick use.</li>
            <li>
              Install the npm package (when published) and import components.
            </li>
          </ol>
        </Card>
      </section>

      <footer className="py-8 border-t">
        <div className="flex items-center justify-between">
          <div className="text-sm text-[var(--muted)]">
            Want more help? Visit the preview pages or open the repo README for
            publishing instructions.
          </div>
          <div>
            <Link
              href="/preview"
              className="text-sm text-[var(--muted)] underline"
            >
              Preview
            </Link>
            <Link
              href="/components"
              className="ml-6 text-sm text-[var(--muted)] underline"
            >
              Components
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
