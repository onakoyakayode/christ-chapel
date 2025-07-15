"use client";

import { useEffect, useState } from "react";
import VersePopup from "./VersePopup";

interface VerseData {
  verse: string;
  reference: string;
}

export default function VerseWrapper({ verse, reference }: VerseData) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  if (!show) return null;

  return <VersePopup verse={verse} reference={reference} />;
}
