"use client";

import { useEffect, useState } from "react";
import VersePopup from "./VersePopup";

interface VerseData {
  verse: string;
  reference: string;
}

export default function VerseFetcher() {
  const [verseData, setVerseData] = useState<VerseData | null>(null);

  useEffect(() => {
    fetch("https://beta.ourmanna.com/api/v1/get/?format=json")
      .then((res) => res.json())
      .then((data) => {
        setVerseData({
          verse: data.verse.details.text,
          reference: data.verse.details.reference,
        });
      })
      .catch((err) => console.error("Failed to fetch verse:", err));
  }, []);

  if (!verseData) return null;

  return <VersePopup verse={verseData.verse} reference={verseData.reference} />;
}
