"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((prev) => prev + 1);
  }, [pathname]);

  return (
    <div key={key} className="animate-fade-in-delayed">
      {children}
    </div>
  );
}
