import { MapPin, Phone, Instagram } from "lucide-react";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";

const retailers = [
  "Borma Toserba Setiabudi",
  "Kedai Nasi Berkah",
  "HiFeed Technoplex",
];

export function Contact() {
  return (
    <section
      className="py-16 md:py-24 bg-surface px-margin-mobile md:px-margin-desktop"
      id="contact"
    >
      <div className="max-w-max-width mx-auto bg-surface-container-low rounded-3xl p-8 md:p-16 border border-outline-variant flex flex-col lg:flex-row gap-10 lg:gap-12 items-start justify-between">
        <div className="w-full lg:w-1/2">
          <h2 className="font-display-xl text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] text-on-background mb-6">
            Mari Bertumbuh Bersama
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
            &quot;Kami Tidak Hanya Menjual Daging... Selamat datang di
            Meatfolk.&quot;
          </p>
          <div className="flex items-center gap-4 mb-8">
            <Button size="lg">Hubungi Kami</Button>
          </div>
          <div className="space-y-3 font-body-md text-body-md text-on-surface-variant">
            <div className="flex items-center gap-2">
              <MapPin size={20} className="text-outline flex-shrink-0" />
              <span>Bandung - Jawa Barat</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={20} className="text-outline flex-shrink-0" />
              <span>0897-1304-418</span>
            </div>
            <div className="flex items-center gap-2">
              <Instagram
                size={20}
                className="text-outline flex-shrink-0"
              />
              <span className="font-bold text-on-background">@meatfolk.id</span>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 bg-surface p-6 md:p-8 rounded-2xl border border-outline-variant shadow-sm">
          <h3 className="font-title-md text-title-md text-on-background mb-6 border-b border-outline-variant pb-4">
            Tersedia Di
          </h3>
          <ul className="space-y-4">
            {retailers.map((retailer, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary-container flex-shrink-0" />
                <span className="font-body-md text-body-md text-on-surface-variant font-medium">
                  {retailer}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-8 pt-6 border-t border-outline-variant flex flex-wrap gap-2">
            <Badge>Halal MUI</Badge>
            <Badge>NKV Certified</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
