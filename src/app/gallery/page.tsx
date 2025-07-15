"use client";

import { useState } from "react";
import { GalleryCategories } from "@/components/gallery-categories";
import { GalleryCarousel } from "@/components/gallery-carousel";
import { galleryData, type GalleryCategory } from "@/lib/gallery-data";
import { GallerySection } from "@/components/gallery-section";

export default function GalleryPage() {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] =
    useState<GalleryCategory | null>(null);

  const handleCategoryClick = (category: GalleryCategory) => {
    setSelectedCategory(category);
    setIsCarouselOpen(true);
  };

  return (
    <section className="py-12 md:py-24 lg:py-32 lg:px-24 animate-fade-in">
      <div className=" px-4 md:px-6 lg:px-10">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Our Photo Gallery
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore moments from our services, events, and community gatherings,
            organized by category.
          </p>
        </div>
        {/* <GalleryCategories
          categories={galleryData}
          onCategoryClick={handleCategoryClick}
        />

        {selectedCategory && (
          <GalleryCarousel
            open={isCarouselOpen}
            onOpenChange={setIsCarouselOpen}
            images={selectedCategory.images}
            categoryName={selectedCategory.category}
            initialIndex={0} // Always start from the first image when opening a category
          />
        )} */}
        <GallerySection />
      </div>
    </section>
  );
}
