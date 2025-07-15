"use client";

import { MessageCircleX } from "lucide-react";
import { useEffect, useState } from "react";

interface VersePopupProps {
  verse: string;
  reference: string;
}

export default function VersePopup({ verse, reference }: VersePopupProps) {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="animate-fade-in-delay fixed top-16 md:top-auto md:bottom-4 right-3 lg:right-4 z-50 w-full max-w-[16rem] lg:max-w-sm animate-fade-in">
      <div className="bg-background/95 text-foreground p-4 lg:p-6 rounded-lg shadow-lg border border-border text-center dark:bg-muted dark:text-white">
        <h2 className="text-base lg:text-xl font-bold mb-4">
          📖 Verse of the Day
        </h2>
        <p className="italic text-sm lg:text-lg">"{verse}"</p>
        <p className="mt-2 text-xs lg:text-sm text-muted-foreground">
          {reference}
        </p>
        <MessageCircleX
          onClick={closePopup}
          className="absolute top-1 right-2 cursor-pointer"
        />
      </div>
    </div>
  );
}
