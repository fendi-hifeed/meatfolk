import Image from "next/image";

export function About() {
  return (
    <section
      className="py-16 md:py-24 bg-surface px-margin-mobile md:px-margin-desktop"
      id="about"
    >
      <div className="max-w-max-width mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <h2 className="font-headline-lg text-headline-lg md:text-headline-lg text-on-background mb-6">
            Tentang Meatfolk:{" "}
            <br />
            <span className="text-primary-container">
              Dari Peternak untuk Pecinta Makanan
            </span>
          </h2>
          <div className="space-y-4 md:space-y-6 font-body-lg text-body-lg text-on-surface-variant">
            <p>
              Kami percaya bahwa daging berkualitas bermula dari dedikasi di
              peternakan. Meatfolk hadir sebagai jembatan antara peternak
              lokal yang berdedikasi dengan konsumen yang menghargai kualitas
              dan transparansi.
            </p>
            <p>
              Setiap produk kami diproses dengan standar kebersihan tertinggi,
              menjamin kehalalan dan kesegaran yang konsisten. Kami berkomitmen
              untuk membangun ekosistem pangan yang lebih baik, di mana setiap
              pihak, dari peternak hingga konsumen, mendapatkan nilai terbaik.
            </p>
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden shadow-sm border border-outline-variant aspect-[4/3]">
          <Image
            alt="A clean, modern artisanal butchery interior with stainless steel counters, white subway tiles, and butchers in crisp white aprons carefully preparing premium cuts of meat"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAs6eTHPAQPkMKAK9hTzD3N8k1gSQFLD2clupeNkES7NpIyv4hNe7jZ6aB09rlmuHb-MLPklrltwWo3V0mTbZWX9LZIY5ZRmhBGmWVdon_BJ6e1zZzmDm1_eZ-W8hklq1K007Rhnd2XEOhgCQsvWbpA4KmjjE5hErep94r2Jn8MS7AnwIQnN2UNHKvWHnqg88yvSLDcqIsl5naqAjPtfc2V8yoQRQHydmg0QMZEAZqJJZOyfPUrCn6Tr4oM1Fpj8gmg6YBbE4UKGFk"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
