"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#why-us", label: "Why Us" },
  { href: "#products", label: "Products" },
  { href: "#impact", label: "Impact" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-surface dark:bg-on-background full-width top-0 z-50 sticky border-b border-outline-variant dark:border-on-surface-variant transition-colors duration-300">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 w-full max-w-max-width mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC73MNLTxLcC0SsCnEmnZMKdT3hOYvj1bEq4IdVROP82UtzBf0qcCm6mz5sx-u_OpHBBbdLY0U-wJTmdOMMbpDgoRaoBxnWNAae_pduopNwF0fplrniNgb4wOGy0LY93f6MuO4t9B2eO7_AHVRhqr5ugML3BH-3_4scpuLskknU3ACR0nXOPAW1GvHDNEE45cLMIZ89O8DuLHVBkyI-rlaz2U5652NDbCTUuKxbRT2U3rsmTyxkjQk8BNOvEGGrJBU7a6irxa7yOpM"
            alt="Meatfolk Logo"
            width={40}
            height={40}
            className="h-10 w-auto object-contain"
          />
          <span className="font-headline-lg text-headline-lg font-bold text-primary dark:text-primary-fixed-dim hidden md:block">
            Meatfolk
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-on-surface dark:text-on-surface-variant font-medium hover:text-primary dark:hover:text-primary-fixed-dim transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <Button size="md">Belanja Sekarang</Button>
        </div>

        <button
          className="md:hidden p-2 text-on-surface"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-margin-mobile py-4 space-y-4 bg-surface border-t border-outline-variant">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-on-surface font-medium hover:text-primary transition-colors duration-200 py-2"
            >
              {link.label}
            </Link>
          ))}
          <Button className="w-full mt-4" size="md">
            Belanja Sekarang
          </Button>
        </div>
      </div>
    </nav>
  );
}
