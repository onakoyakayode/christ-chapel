"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import { ThemeSwitcher } from "./Theme-switcher";
import { Menu } from "lucide-react";
import { useState } from "react";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const menuToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="px-4 lg:px-24 lg:h-20 h-15 flex items-center justify-between border-b bg-background relative z-10">
      <Link href="/" className="flex i items-center gap-2">
        {/* <Church className="h-6 w-6 text-primary" /> */}
        <Image
          src="/rccg-logo.png"
          alt="Church Logo"
          width={100}
          height={100}
          className="h-10 w-10 lg:h-12 lg:w-12 object-cover"
        />
        <div className="flex flex-col justify-center">
          <h2 className="text-base lg:text-xl font-bold leading-none">
            Christ Chapel
          </h2>
          <small className="text-[10px] md:text-xs tracking-wider">
            The Covenant Family
          </small>
        </div>
      </Link>
      <nav className="hidden md:flex gap-6">
        <Link
          href="/"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          About Us
        </Link>
        <Link
          href="/sermons"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Sermons
        </Link>
        <Link
          href="/gallery"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Gallery
        </Link>
        <Link
          href="/events"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Events
        </Link>
        <Link
          href="/contact"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Contact
        </Link>
      </nav>

      <ThemeSwitcher />
      <Link href="/give">
        {" "}
        {/* Updated Link for Give Online */}
        <Button className="hidden md:inline-flex h-11 cursor-pointer">
          Give Online
        </Button>
      </Link>

      <Menu onClick={menuToggle} className="flex lg:hidden" />

      {/* Mobile menu toggle would go here */}

      <nav
        className={`${
          isOpen ? "left-0" : "left-[-100%]"
        } transition-left duration-500 ease-in-out delay-100 flex flex-col md:flex gap-10 pt-15 w-full top-15 absolute items-center h-dvh bg-background`}
      >
        <Link
          href="/"
          className="text-sm font-medium hover:underline underline-offset-4"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-sm font-medium hover:underline underline-offset-4"
          onClick={() => setIsOpen(false)}
        >
          About Us
        </Link>
        <Link
          href="/sermons"
          className="text-sm font-medium hover:underline underline-offset-4"
          onClick={() => setIsOpen(false)}
        >
          Sermons
        </Link>
        <Link
          href="/gallery"
          className="text-sm font-medium hover:underline underline-offset-4"
          onClick={() => setIsOpen(false)}
        >
          Gallery
        </Link>
        <Link
          href="/events"
          className="text-sm font-medium hover:underline underline-offset-4"
          onClick={() => setIsOpen(false)}
        >
          Events
        </Link>
        <Link
          href="/contact"
          className="text-sm font-medium hover:underline underline-offset-4"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
        <Link href="/give" onClick={() => setIsOpen(false)}>
          {" "}
          {/* Updated Link for Give Online */}
          <Button className="flex md:inline-flex h-11 cursor-pointer">
            Give Online
          </Button>
        </Link>
      </nav>
    </header>
  );
}
