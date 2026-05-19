"use client";

import React, { useState, useMemo } from "react";
import { CreativeFilter } from "./CreativeFilter";
import { VideoCard } from "./VideoCard";
import { PhotoCard } from "./PhotoCard";
import { CreativeModal } from "./CreativeModal";
import EmptyState from "@/components/ui/EmptyState";
import { videos } from "@/data/videos";
import { photos } from "@/data/photos";
import type { Video, Photo, VideoCategory, PhotoCategory } from "@/types";

export type CreativeType = "videos" | "photos";
export type CreativeCategory = VideoCategory | PhotoCategory;

interface CreativeItem {
  id: string;
  title: string;
  type: CreativeType;
}

const VIDEO_CATEGORIES: VideoCategory[] = ["Cinematic", "Commercial", "Event", "Short Film", "Motion Graphics"];
const PHOTO_CATEGORIES: PhotoCategory[] = ["Portrait", "Landscape", "Event", "Street", "Product"];

export function CreativeClient() {
  const [activeType, setActiveType] = useState<CreativeType>("videos");
  const [currentCategory, setCurrentCategory] = useState<CreativeCategory | null>(null);
  const [selectedItem, setSelectedItem] = useState<CreativeItem | null>(null);

  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const categories = activeType === "videos" ? VIDEO_CATEGORIES : PHOTO_CATEGORIES;

  const filteredContent = useMemo(() => {
    if (activeType === "videos") {
      return currentCategory
        ? videos.filter((v) => v.category === currentCategory)
        : videos;
    } else {
      return currentCategory
        ? photos.filter((p) => p.category === currentCategory)
        : photos;
    }
  }, [activeType, currentCategory]);

  const handleSelectVideo = (video: Video) => {
    setSelectedVideo(video);
    setSelectedItem({ id: video.id, title: video.title, type: "videos" });
  };

  const handleSelectPhoto = (photo: Photo) => {
    setSelectedPhoto(photo);
    setSelectedItem({ id: photo.id, title: photo.title, type: "photos" });
  };

  const handleClose = () => {
    setSelectedItem(null);
    setSelectedVideo(null);
    setSelectedPhoto(null);
  };

  return (
    <>
      <section className="py-12">
        {/* Type Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => {
              setActiveType("videos");
              setCurrentCategory(null);
            }}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              activeType === "videos"
                ? "bg-foreground text-background"
                : "border border-border hover:bg-muted"
            }`}
          >
            Videografi
          </button>
          <button
            onClick={() => {
              setActiveType("photos");
              setCurrentCategory(null);
            }}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              activeType === "photos"
                ? "bg-foreground text-background"
                : "border border-border hover:bg-muted"
            }`}
          >
            Fotografi
          </button>
        </div>

        {/* Filter */}
        <CreativeFilter
          categories={categories}
          currentCategory={currentCategory}
          onChangeCategory={setCurrentCategory}
        />

        {/* Content Grid */}
        {filteredContent.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeType === "videos"
              ? (filteredContent as Video[]).map((video) => (
                  <VideoCard
                    key={video.id}
                    video={video}
                    onClick={() => handleSelectVideo(video)}
                  />
                ))
              : (filteredContent as Photo[]).map((photo) => (
                  <PhotoCard
                    key={photo.id}
                    photo={photo}
                    onClick={() => handleSelectPhoto(photo)}
                  />
                ))}
          </div>
        ) : (
          <EmptyState
            itemLabel={activeType === "videos" ? "video" : "foto"}
            onReset={() => setCurrentCategory(null)}
          />
        )}
      </section>

      <CreativeModal
        video={selectedVideo}
        photo={selectedPhoto}
        onClose={handleClose}
      />
    </>
  );
}
