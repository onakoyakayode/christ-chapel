"use client";

import { useState } from "react";
import { galleryData, GalleryCategory } from "@/lib/gallery-data";
import { GalleryCategories } from "./gallery-categories";
import { GalleryCarousel } from "./gallery-carousel";

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] =
    useState<GalleryCategory | null>(null);
  const [open, setOpen] = useState(false);

  const handleCategoryClick = (category: GalleryCategory) => {
    setSelectedCategory(category);
    setOpen(true);
  };

  return (
    <>
      <GalleryCategories
        categories={galleryData}
        onCategoryClick={handleCategoryClick}
      />

      {selectedCategory && (
        <GalleryCarousel
          open={open}
          onOpenChange={setOpen}
          images={selectedCategory.images}
          categoryName={selectedCategory.category}
        />
      )}
    </>
  );
}
