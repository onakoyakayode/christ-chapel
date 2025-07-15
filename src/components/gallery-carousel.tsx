"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import type { GalleryImage } from "@/lib/gallery-data";

interface GalleryCarouselProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  images: GalleryImage[];
  initialIndex?: number;
  categoryName: string;
}

export function GalleryCarousel({
  open,
  onOpenChange,
  images,
  initialIndex = 0,
  categoryName,
}: GalleryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

  // Reset index when modal opens
  useEffect(() => {
    if (open) {
      setCurrentIndex(initialIndex);
      carouselApi?.scrollTo(initialIndex);
    }
  }, [open, initialIndex, carouselApi]);

  // Listen to carousel selection
  useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => {
      setCurrentIndex(carouselApi.selectedScrollSnap());
    };

    carouselApi.on("select", onSelect);
    onSelect(); // Sync immediately

    return () => {
      carouselApi?.off("select", onSelect);
    };
  }, [carouselApi]);

  if (!images || images.length === 0) return null;

  console.log(images);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl h-[90vh] p-0 flex flex-col">
        <DialogHeader className="p-4 pb-0">
          <DialogTitle className="text-center">{categoryName}</DialogTitle>
          <DialogDescription className="text-center sr-only">
            View and swipe through images in {categoryName}.
          </DialogDescription>
        </DialogHeader>

        <div className="flex-grow flex items-center justify-center relative">
          <Carousel
            opts={{
              loop: true,
            }}
            setApi={setCarouselApi}
            className="w-full h-full"
          >
            <CarouselContent className="h-full">
              {images.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="flex items-center justify-center h-full"
                >
                  <div className="relative w-full h-[calc(90vh-100px)] flex items-center justify-center">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" />
          </Carousel>
        </div>

        <div className="p-4 pt-0 text-center text-sm text-muted-foreground">
          {images[currentIndex]?.alt} ({currentIndex + 1} of {images.length})
        </div>
      </DialogContent>
    </Dialog>
  );
}
