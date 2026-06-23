import Image from "next/image";
import { CheckCircle, Package, Snowflake, Scissors } from "lucide-react";
import { Button } from "./ui/Button";

const features = [
  {
    icon: Scissors,
    text: "Potongan khusus sesuai permintaan (Custom Cuts)",
  },
  {
    icon: Package,
    text: "Kemasan vakum premium untuk kesegaran tahan lama",
  },
  {
    icon: Snowflake,
    text: "Pengiriman cold-chain yang termonitor",
  },
];

export function Products() {
  return (
    <section
      className="py-16 md:py-24 bg-surface px-margin-mobile md:px-margin-desktop overflow-hidden"
      id="products"
    >
      <div className="max-w-max-width mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-surface-container-low rounded-[2rem] transform -rotate-3 z-0" />
            <Image
              alt="Premium packaged meat products for retail and HORECA"
              src="/hero-products.png"
              width={600}
              height={400}
              className="relative z-10 w-full h-auto rounded-2xl shadow-sm border border-outline-variant"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="font-headline-lg text-headline-lg md:text-headline-lg text-on-background mb-6">
              Produk Kami & Join Kemitraan
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
              Layanan penyediaan produk protein dan daging yang disesuaikan dengan
              kebutuhan distributor, retailer, dan sektor Horeca (Hotel,
              Restoran, Kafe). Kami menawarkan solusi supply chain yang andal
              dan berkualitas.
            </p>
            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <feature.icon
                    size={20}
                    className="text-primary-container mt-1 flex-shrink-0"
                  />
                  <span className="font-body-md text-body-md text-on-surface-variant">
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>
            <Button variant="secondary" size="lg">
              Jelajahi Katalog B2B
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
