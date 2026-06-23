import { Sprout, ShieldCheck, Award } from "lucide-react";

const features = [
  {
    icon: Sprout,
    title: "Bersumber dari Peternak Terpercaya",
    description:
      "Kemitraan langsung dengan peternak lokal yang menerapkan standar kesejahteraan hewan yang tinggi.",
  },
  {
    icon: ShieldCheck,
    title: "Halal & Tersertifikasi",
    description:
      "Terjamin halal oleh MUI dan memiliki sertifikasi NKV (Nomor Kontrol Veteriner) untuk keamanan pangan.",
  },
  {
    icon: Award,
    title: "Kualitas Konsisten",
    description:
      "Proses seleksi ketat (grading) untuk memastikan setiap potongan memiliki marbling dan tekstur optimal.",
  },
];

export function WhyUs() {
  return (
    <section
      className="py-16 md:py-24 bg-surface-container-lowest px-margin-mobile md:px-margin-desktop"
      id="why-us"
    >
      <div className="max-w-max-width mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-2 block">
            Keunggulan Kami
          </span>
          <h2 className="font-headline-lg text-headline-lg md:text-headline-lg text-on-background">
            Mengapa Kami Hadir:{" "}
            <br className="hidden md:block" />
            Ketika Kualitas Menjadi Prioritas
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-surface rounded-2xl p-6 md:p-8 border border-outline-variant hover:shadow-md transition-shadow duration-300 group"
            >
              <div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-container group-hover:text-on-primary transition-colors duration-300">
                <feature.icon size={24} />
              </div>
              <h3 className="font-title-md text-title-md text-on-background mb-3">
                {feature.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
