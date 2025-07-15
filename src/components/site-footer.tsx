import Link from "next/link";

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo from "../assets/icons/rccg-logo.png";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="flex flex-col gap-4 sm:flex-row py-8 w-full shrink-0 items-center px-4 md:px-6 lg:px-24 border-t bg-muted text-muted-foreground">
      <div className="flex items-center gap-2">
        <Image
          src={Logo}
          alt="Church Logo"
          width={100}
          height={100}
          className="h-12 w-12 object-cover"
        />
        <span className="text-sm font-medium">Christ Chapel Parish</span>
      </div>
      <p className="text-xs text-center sm:text-left">
        &copy; {new Date().getFullYear()} Christ Chapel Parish. All rights
        reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link
          href="/privacy"
          className="text-xs hover:underline underline-offset-4"
        >
          Privacy Policy
        </Link>
        <Link
          href="/terms"
          className="text-xs hover:underline underline-offset-4"
        >
          Terms of Service
        </Link>
        <div className="flex gap-3">
          <Link href="#" aria-label="Facebook">
            <FaFacebook className="h-5 w-5 hover:text-primary transition-colors" />
          </Link>
          <Link href="#" aria-label="Twitter">
            <FaTwitter className="h-5 w-5 hover:text-primary transition-colors" />
          </Link>
          <Link href="#" aria-label="Instagram">
            <FaInstagram className="h-5 w-5 hover:text-primary transition-colors" />
          </Link>
          <Link href="#" aria-label="YouTube">
            <FaYoutube className="h-5 w-5 hover:text-primary transition-colors" />
          </Link>
        </div>
      </nav>
    </footer>
  );
}
