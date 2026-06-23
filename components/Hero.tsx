import Image from "next/image";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";

export function Hero() {
  return (
    <header className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-surface-container-low">
      <div className="absolute inset-0 z-0">
        <Image
          alt="Premium beef cuts on a wooden board"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoD63ZmDv8g_TZEQdCLZ37qweXK51RnEkRY6ZuUH2WYDHD2rc_pqufc0Z4gcQyHH1vAkA4xMotrbeTBBYwkjtiLCj8LCKuEcBe8De02ga98xs1lZd0xe_zyRMn7W9cnQBLHrSxDOaFKVGJQZo-I2UotGdrU--ysh4-wWWdFrIzJFFf2qiYqHsjTh_lhrfQ3wbWXsReV4b39aVsV_J-B2oSi7wKVJxHiuEub4ejus2P5yLY_c40aR-Wo4Fri-gSa7ZYv1kXiQRT28I"
          fill
          className="object-cover opacity-90 mix-blend-multiply"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
      </div>
      <div className="relative z-10 w-full max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-20">
        <div className="max-w-2xl">
          <Badge variant="secondary" className="mb-6 uppercase tracking-wider">
            Crafted by Farmers
          </Badge>
          <h1 className="font-display-xl text-display-xl md:text-[64px] md:leading-[72px] text-on-background mb-6">
            Setiap Potongan Daging Memiliki Cerita
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl">
            Bukan hanya tentang rasa yang lezat, tetapi tentang peternak yang
            merawat ternaknya dengan sepenuh hati, memastikan kualitas terbaik
            sampai ke meja makan Anda.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg">Belanja Sekarang</Button>
            <Button variant="outline" size="lg">
              Menjadi Mitra
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
