import Link from "next/link";
import { Button, Card } from "../lib/ui";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* HERO */}
      <section className="min-h-[80vh] flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-start gap-12">
          <div className="flex-1">
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Build beautiful, adaptable UIs — fast.
            </h1>
            <p className="text-lg text-[var(--muted)] max-w-2xl mb-8 leading-relaxed">
              NewGen UI is a lightweight React component library focused on
              themeability, personalization and composition. Let users pick
              brand colors, tweak component options, and ship consistent
              interfaces quickly.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/components" className="btn-primary">
                Explore components
              </Link>
              <Link
                href="/preview"
                className="px-4 py-2 rounded-lg border text-[var(--foreground)] bg-transparent hover:bg-white/3"
              >
                Live preview
              </Link>
              <a
                href="/documentation"
                className="px-4 py-2 rounded-lg text-sm text-[var(--muted)] hover:underline"
              >
                Documentation
              </a>
            </div>
          </div>

          {/* removed quick theme controls from home page; theme customization now lives on component preview pages */}
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-8">Features</h2>
          <p className="text-[var(--muted)] max-w-3xl mb-8">
            Everything you need to build a modern design system: tokens,
            composable primitives, and a simple path to publish and reuse your
            components across projects.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-[rgba(108,92,231,0.06)] to-transparent hover:scale-[1.01] transform transition shadow-md hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex-none">
                  <div
                    className="w-14 h-14 rounded-lg flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg,var(--primary),var(--accent))",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 12h18"
                        stroke="white"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 3v18"
                        stroke="white"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">
                    Themeable design
                  </h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    Expose tokens and color pickers so end users and teams can
                    tune the brand palette. Components automatically inherit
                    theme variables for consistent visuals.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-[rgba(0,212,255,0.03)] to-transparent hover:scale-[1.01] transform transition shadow-md hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex-none">
                  <div
                    className="w-14 h-14 rounded-lg flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg,#06b6d4,#60a5fa)",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 7h16M4 12h16M4 17h16"
                        stroke="white"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">
                    Composable primitives
                  </h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    Build complex UIs by composing small, focused components —
                    all well-typed and easy to customize via props and tokens.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-[rgba(255,200,102,0.03)] to-transparent hover:scale-[1.01] transform transition shadow-md hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex-none">
                  <div
                    className="w-14 h-14 rounded-lg flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg,#ffb86b,#ff6b6b)",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 5v14M5 12h14"
                        stroke="white"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Publish-ready</h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    Ready-to-publish architecture and a starter packaging
                    scaffold make it straightforward to bundle components and
                    distribute via npm.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="py-20 bg-[rgba(255,255,255,0.02)]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">Live showcase</h2>
          <p className="text-[var(--muted)] mb-8">
            Spacey live examples so you can absorb how components behave with a
            custom theme.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8">
              <h4 className="font-semibold mb-4">Buttons</h4>
              <div className="flex flex-wrap gap-4 items-center mb-6">
                <Button variant="primary">Primary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="outline">Outline</Button>
              </div>
              <p className="text-sm text-[var(--muted)]">
                Buttons respond to theme tokens; try changing the primary color.
              </p>
            </div>

            <div className="glass-card p-8">
              <h4 className="font-semibold mb-4">Cards</h4>
              <Card title="Example card" description="Adaptive surface">
                <p className="text-[var(--muted)]">
                  Cards inherit background and foreground tokens and show how
                  surfaces adapt.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold mb-4">Ready to build?</h3>
          <p className="text-[var(--muted)] mb-6">
            Explore components, tweak theme tokens, and publish your design
            system.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/components" className="btn-primary">
              Explore components
            </Link>
            <Link
              href="/documentation"
              className="px-4 py-2 rounded-lg border text-[var(--foreground)] bg-transparent"
            >
              Docs
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t">
        <div className="max-w-6xl mx-auto px-6 text-sm text-[var(--muted)]">
          © {new Date().getFullYear()} NewGen UI — Built for customizable
          components
        </div>
      </footer>
    </div>
  );
}
