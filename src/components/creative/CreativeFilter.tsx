"use client";

import React, { useState, useRef, useEffect } from "react";
import type { VideoCategory, PhotoCategory } from "@/types";

type CreativeCategory = VideoCategory | PhotoCategory;

interface CreativeFilterProps {
  categories: CreativeCategory[];
  currentCategory: CreativeCategory | null;
  onChangeCategory: (category: CreativeCategory | null) => void;
}

interface UnderlinePosition {
  left: number;
  width: number;
}

export function CreativeFilter({
  categories,
  currentCategory,
  onChangeCategory,
}: CreativeFilterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const [underlinePos, setUnderlinePos] = useState<UnderlinePosition>({ left: 0, width: 0 });

  const updateUnderlinePosition = (categoryKey: string | null) => {
    const key = categoryKey ?? "all";
    const button = buttonRefs.current.get(key);
    
    if (button && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const buttonRect = button.getBoundingClientRect();
      
      setUnderlinePos({
        left: buttonRect.left - containerRect.left,
        width: buttonRect.width,
      });
    }
  };

  // Update underline position on mount and when category changes
  useEffect(() => {
    updateUnderlinePosition(currentCategory);
  }, [currentCategory]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      updateUnderlinePosition(currentCategory);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentCategory]);

  return (
    <div className="mb-8">
      <div 
        ref={containerRef}
        className="relative flex flex-wrap gap-6 pb-3 border-b border-border"
      >
        {/* Animated Underline */}
        <div
          ref={underlineRef}
          className="absolute bottom-0 h-0.5 bg-foreground transition-all duration-300 ease-out rounded-full"
          style={{
            left: `${underlinePos.left}px`,
            width: `${underlinePos.width}px`,
          }}
        />

        {/* All Button */}
        <button
          ref={(el) => {
            if (el) buttonRefs.current.set("all", el);
          }}
          onClick={() => onChangeCategory(null)}
          className="relative px-1 py-2 font-medium text-foreground/60 hover:text-foreground transition-colors duration-200"
        >
          Semua
        </button>

        {/* Category Buttons */}
        {categories.map((category) => (
          <button
            key={category}
            ref={(el) => {
              if (el) buttonRefs.current.set(category, el);
            }}
            onClick={() => onChangeCategory(category)}
            className="relative px-1 py-2 font-medium text-foreground/60 hover:text-foreground transition-colors duration-200"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
