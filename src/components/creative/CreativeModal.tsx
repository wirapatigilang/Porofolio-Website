"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Badge from "@/components/ui/Badge";
import type { Video, Photo } from "@/types";

interface CreativeModalProps {
  video?: Video | null;
  photo?: Photo | null;
  onClose: () => void;
}

export function CreativeModal({ video, photo, onClose }: CreativeModalProps) {
  const isOpen = video !== null || photo !== null;

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
      return () => {
        document.removeEventListener("keydown", handleEscape);
        document.body.style.overflow = "unset";
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-lg bg-background border border-border"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-background/80 hover:bg-muted border border-border transition-colors"
            aria-label="Close modal"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Video Content */}
          {video && (
            <div className="p-6 md:p-8">
              {/* Video Embed */}
              <div className="relative w-full aspect-video mb-6 rounded-lg overflow-hidden bg-muted">
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Video Info */}
              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    {video.title}
                  </h2>
                  <p className="text-muted-foreground">{video.description}</p>
                </div>

                {/* Metadata */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">
                      Kategori
                    </p>
                    <Badge variant={video.category}>{video.category}</Badge>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">
                      Tahun
                    </p>
                    <p className="text-foreground">{video.year}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">
                      Peran
                    </p>
                    <p className="text-foreground">{video.role}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">
                      Tools
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {video.tools.map((tool) => (
                        <Badge key={tool} variant="default" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* External Link */}
                <a
                  href={video.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground text-background hover:opacity-90 transition-opacity font-medium mt-4"
                >
                  Tonton di Platform Asli
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          )}

          {/* Photo Content */}
          {photo && (
            <div className="p-6 md:p-8">
              {/* Full Resolution Image */}
              <div className="relative w-full mb-6 rounded-lg overflow-hidden bg-muted">
                <Image
                  src={photo.fullSrc}
                  alt={photo.alt}
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 90vw"
                  priority
                />
              </div>

              {/* Photo Info */}
              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    {photo.title}
                  </h2>
                  <p className="text-muted-foreground">{photo.alt}</p>
                </div>

                {/* Metadata */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">
                      Kategori
                    </p>
                    <Badge variant={photo.category}>{photo.category}</Badge>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">
                      Tahun
                    </p>
                    <p className="text-foreground">{photo.year}</p>
                  </div>
                </div>

                {/* Download Link */}
                <a
                  href={photo.fullSrc}
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground text-background hover:opacity-90 transition-opacity font-medium mt-4"
                >
                  Download Resolusi Tinggi
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
