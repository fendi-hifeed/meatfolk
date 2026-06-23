import { Handshake, Store, UtensilsCrossed, Leaf } from "lucide-react";

const impacts = [
  {
    icon: Handshake,
    title: "Untuk Peternak",
    description:
      "Harga beli yang adil dan pendampingan praktik ternak modern.",
  },
  {
    icon: Store,
    title: "Untuk Mitra Bisnis",
    description:
      "Kepastian pasokan, konsistensi kualitas, dan margin yang kompetitif.",
  },
  {
    icon: UtensilsCrossed,
    title: "Untuk Konsumen",
    description:
      "Akses ke daging premium yang aman, sehat, dan lezat.",
  },
  {
    icon: Leaf,
    title: "Untuk Masa Depan",
    description:
      "Praktik produksi yang meminimalkan limbah (zero-waste approach).",
  },
];

export function Impact() {
  return (
    <section
      className="py-16 md:py-24 bg-surface-container-lowest px-margin-mobile md:px-margin-desktop border-t border-outline-variant/30"
      id="impact"
    >
      <div className="max-w-max-width mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-headline-lg text-headline-lg md:text-headline-lg text-on-background">
            Dampak yang Kami Ciptakan
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 max-w-2xl mx-auto">
            Membangun ekosistem yang berkelanjutan dari hulu ke hilir.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((impact, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto bg-surface-container rounded-full flex items-center justify-center mb-4">
                <impact.icon className="text-primary text-3xl" size={28} />
              </div>
              <h4 className="font-title-md text-title-md text-on-background mb-2">
                {impact.title}
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {impact.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
