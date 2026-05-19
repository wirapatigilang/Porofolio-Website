import React from "react";
import Image from "next/image";
import Badge from "@/components/ui/Badge";
import type { Photo } from "@/types";

interface PhotoCardProps {
  photo: Photo;
  onClick: () => void;
}

export function PhotoCard({ photo, onClick }: PhotoCardProps) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer rounded-lg overflow-hidden bg-muted border border-border hover:border-foreground transition-all hover:shadow-lg"
    >
      {/* Image */}
      <div className="relative w-full aspect-square overflow-hidden bg-muted">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
            </svg>
          </div>
        </div>
        {/* Category Badge */}
        <div className="absolute top-3 right-3">
          <Badge variant={photo.category}>{photo.category}</Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {photo.title}
        </h3>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{photo.category}</span>
          <span>{photo.year}</span>
        </div>
      </div>
    </div>
  );
}
