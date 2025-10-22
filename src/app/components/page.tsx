"use client";

import Carousel from "@/lib/ui/Carousel";
import Link from "next/link";
import { useState } from "react";
import ComponentsSidebar from "../../components/ComponentsSidebar";
import MobileComponentsDrawer from "../../components/MobileComponentsDrawer";

import { Button, Card } from "../../lib/ui";
import Dialog from "../../lib/ui/Dialog";
import Dropdown from "../../lib/ui/Dropdown";
import LibNavbar from "../../lib/ui/Navbar";
import Pagination from "../../lib/ui/Pagination";
import Progress from "../../lib/ui/Progress";
import Tabs from "../../lib/ui/Tabs";

const components = [
  { id: "button", label: "Button", href: "/preview/button" },
  { id: "card", label: "Card", href: "/preview/card" },
  { id: "navbar", label: "Navbar", href: "/preview/navbar" },
  { id: "dialog", label: "Dialog", href: "/preview/dialog" },
  { id: "carousel", label: "Carousel", href: "/preview/carousel" },
  { id: "dropdown", label: "Dropdown", href: "/preview/dropdown" },
  { id: "tabs", label: "Tabs", href: "/preview/tabs" },
  { id: "progress", label: "Progress", href: "/preview/progress" },
  { id: "pagination", label: "Pagination", href: "/preview/pagination" },
  { id: "input", label: "Input", href: "/preview/input" },
];

export default function ComponentsPage() {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-10 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8">
      {/* Sidebar */}
      <ComponentsSidebar items={components} />

      <main>
        {/* Mobile header */}
        <div className="md:hidden mb-4 flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Components</h1>
          <MobileComponentsDrawer items={components} />
        </div>

        {/* Page heading */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">Components</h1>
            <p className="text-sm text-[var(--muted)] mt-1">
              Preview and copy-ready examples of each component. Use the sidebar
              to jump between components.
            </p>
          </div>
          <div className="space-x-3">
            <Link
              href="/preview"
              className="text-sm text-[var(--muted)] underline"
            >
              Open preview index
            </Link>
            <Link
              href="/"
              className="px-4 py-2 text-sm rounded-lg bg-[var(--primary)] text-white hover:opacity-90 transition"
            >
              Back home
            </Link>
          </div>
        </div>

        {/* BUTTON DEMO */}
        <section id="button" className="mb-8">
          <div className="glass-card border border-white/10 p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Button</h3>
              <Link
                href="/preview/button"
                className="text-sm text-blue-400 underline"
              >
                Open preview
              </Link>
            </div>

            <div className="flex gap-4 items-center mb-4">
              <Button>Primary</Button>
              <Button className="bg-transparent border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white">
                Outline
              </Button>
              <Button className="bg-transparent text-[var(--primary)] hover:underline">
                Ghost
              </Button>
            </div>
          </div>
        </section>

        {/* CARD DEMO */}
        <section id="card" className="mb-8">
          <div className="glass-card border border-white/10 p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Card</h3>
              <Link
                href="/preview/card"
                className="text-sm text-blue-400 underline"
              >
                Open preview
              </Link>
            </div>

            <Card title="Card title" description="A short description">
              <p>Card content and example usage.</p>
            </Card>
          </div>
        </section>

        {/* NAVBAR DEMO */}
        <section id="navbar" className="mb-8">
          <div className="glass-card border border-white/10 p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Navbar</h3>
              <Link
                href="/preview/navbar"
                className="text-sm text-blue-400 underline"
              >
                Open preview
              </Link>
            </div>

            <div className="border rounded-lg p-4 mb-4">
              <LibNavbar />
            </div>
          </div>
        </section>

        {/* DIALOG DEMO */}
        <section id="dialog" className="mb-8">
          <div className="glass-card border border-white/10 p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Dialog</h3>
              <Link
                href="/preview/dialog"
                className="text-sm text-blue-400 underline"
              >
                Open preview
              </Link>
            </div>

            <Button onClick={() => setOpen(true)}>Open Dialog</Button>
            <Dialog
              open={open}
              onClose={() => setOpen(false)}
              title="Example Dialog"
            >
              <p>
                This is a customizable dialog component. You can change its
                colors via the color slider.
              </p>
            </Dialog>
          </div>
        </section>

        {/* CAROUSEL DEMO */}
        <section id="carousel" className="mb-8">
          <div className="glass-card border border-white/10 p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Carousel</h3>
              <Link
                href="/preview/carousel"
                className="text-sm text-blue-400 underline"
              >
                Open preview
              </Link>
            </div>

            {/* Carousel preview */}
            <div className="mb-4">
              <Carousel
                slides={[
                  <div className="h-48 flex items-center justify-center bg-red-300 text-white text-2xl rounded-xl">
                    Slide 1
                  </div>,
                  <div className="h-48 flex items-center justify-center bg-green-300 text-white text-2xl rounded-xl">
                    Slide 2
                  </div>,
                  <div className="h-48 flex items-center justify-center bg-blue-300 text-white text-2xl rounded-xl">
                    Slide 3
                  </div>,
                ]}
                theme={{ background: "#f3f3f3", indicator: "#7C3AED" }}
                autoPlay
                autoPlayInterval={4000}
              />
            </div>
          </div>
        </section>

        {/* DROPDOWN DEMO */}
        <section id="dropdown" className="mb-8">
          <div className="glass-card border border-white/10 p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Dropdown</h3>
              <Link
                href="/preview/dropdown"
                className="text-sm text-blue-400 underline"
              >
                Open preview
              </Link>
            </div>

            {/* Dropdown preview */}
            <Dropdown
              label="Select an Option"
              items={[
                { label: "Option 1", value: "1" },
                { label: "Option 2", value: "2" },
                { label: "Option 3", value: "3" },
              ]}
              theme={{
                background: "#ffffff",
                text: "#111111",
                border: "#7C3AED",
                hover: "#E0D7F8",
              }}
            />
          </div>
        </section>

        {/* TABS DEMO */}
        <section id="tabs" className="mb-8">
          <div className="glass-card border border-white/10 p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Tabs</h3>
              <Link
                href="/preview/tabs"
                className="text-sm text-blue-400 underline"
              >
                Open preview
              </Link>
            </div>

            {/* Tabs preview */}
            <Tabs
              tabs={[
                { label: "Tab 1", content: <p>Content for Tab 1</p> },
                { label: "Tab 2", content: <p>Content for Tab 2</p> },
                { label: "Tab 3", content: <p>Content for Tab 3</p> },
              ]}
              theme={{
                activeBg: "#7C3AED",
                inactiveBg: "#f3f3f3",
                text: "#111111",
                border: "#7C3AED",
              }}
            />
          </div>
        </section>

        {/* PROGRESS DEMO */}
        <section id="progress" className="mb-8">
          <div className="glass-card border border-white/10 p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Progress</h3>
              <Link
                href="/preview/progress"
                className="text-sm text-blue-400 underline"
              >
                Open preview
              </Link>
            </div>

            {/* Progress preview */}
            <div className="space-y-4 mb-4">
              <Progress value={65} showLabel />
              <Progress value={80} variant="gradient" showLabel />
              <Progress value={45} variant="striped" animated showLabel />
            </div>
          </div>
        </section>

        {/* PAGINATION DEMO */}
        <section id="pagination" className="mb-8">
          <div className="glass-card border border-white/10 p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Pagination</h3>
              <Link
                href="/preview/pagination"
                className="text-sm text-blue-400 underline"
              >
                Open preview
              </Link>
            </div>

            {/* Pagination preview */}
            <div className="mb-4">
              <Pagination
                currentPage={currentPage}
                totalPages={10}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </section>
        <section>
          {/* INPUT DEMO */}
          <div className="glass-card border border-white/10 p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Input</h3>
              <Link
                href="/preview/input"
                className="text-sm text-blue-400 underline"
              >
                Open preview
              </Link>
            </div>

            {/* Input preview */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Enter text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
