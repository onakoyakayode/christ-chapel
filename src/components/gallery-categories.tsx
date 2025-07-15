"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import type { GalleryCategory } from "@/lib/gallery-data";

interface GalleryCategoriesProps {
  categories: GalleryCategory[];
  onCategoryClick: (category: GalleryCategory) => void;
}

export function GalleryCategories({
  categories,
  onCategoryClick,
}: GalleryCategoriesProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => (
        <Card
          key={category.category}
          className="overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer py-0"
          onClick={() => onCategoryClick(category)}
        >
          <CardContent className="p-0">
            <div className="relative w-full h-48">
              <Image
                src={
                  category.images[0]?.src ||
                  "/placeholder.svg?height=300&width=400"
                }
                alt={category.images[0]?.alt || category.category}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <span className="text-white text-xl font-bold">
                  {category.category}
                </span>
              </div>
            </div>
            <div className="p-4">
              <CardTitle className="text-lg">{category.category}</CardTitle>
              <CardDescription className="text-sm text-muted-foreground mt-1">
                {category.description}
              </CardDescription>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
