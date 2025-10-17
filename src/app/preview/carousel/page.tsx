"use client";
import Carousel from "@/lib/ui/Carousel";
import { useState } from "react";
import LocalThemeControls from "../../../components/LocalThemeControls";

export default function CarouselPreview() {
  const [theme, setTheme] = useState({
    background: "#f3f3f3",
    indicator: "#7C3AED",
    inactiveIndicator: "#999",
  });

  const slides = [
    <div className="h-48 flex items-center justify-center bg-red-300 text-white text-2xl rounded-xl">
      Slide 1
    </div>,
    <div className="h-48 flex items-center justify-center bg-green-300 text-white text-2xl rounded-xl">
      Slide 2
    </div>,
    <div className="h-48 flex items-center justify-center bg-blue-300 text-white text-2xl rounded-xl">
      Slide 3
    </div>,
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-semibold">Carousel Component</h2>

      <div className="glass-card border border-white/10 p-6 rounded-2xl">
        <Carousel slides={slides} theme={theme} />
      </div>

      <div className="glass-card p-4 rounded-2xl">
        <h4 className="font-semibold mb-3">Customize Carousel Colors</h4>
        <LocalThemeControls
          onChange={(v) =>
            setTheme({
              background: v.background || "#f3f3f3",
              indicator: v.primary || "#7C3AED",
              inactiveIndicator: v.secondary || "#999",
            })
          }
        />
      </div>
    </div>
  );
}
