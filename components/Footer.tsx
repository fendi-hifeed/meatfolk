import Link from "next/link";
import { Instagram } from "lucide-react";

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#why-us", label: "Why Us" },
  { href: "#products", label: "Products" },
  { href: "#impact", label: "Impact" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-surface-container-low dark:bg-on-background border-t border-outline-variant full-width">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-gutter px-margin-mobile md:px-margin-desktop py-10 md:py-12 max-w-max-width mx-auto">
        <div className="col-span-1">
          <span className="font-headline-lg text-headline-lg font-bold text-primary dark:text-primary-fixed-dim block mb-4">
            Meatfolk
          </span>
          <p className="font-label-sm text-label-sm text-on-surface-variant dark:text-surface-variant">
            © 2024 Meatfolk. Crafted by Farmers.
          </p>
        </div>
        <div className="col-span-1 md:col-span-3 flex flex-wrap gap-x-6 md:gap-x-8 gap-y-4 md:justify-end items-start">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-on-surface-variant dark:text-surface-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200 font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary rounded"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://instagram.com/meatfolk.id"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant dark:text-surface-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200 font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary rounded flex items-center gap-1"
          >
            <Instagram size={18} />
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
