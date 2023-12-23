import Image from "next/image";
import JCCMascot from "@/public/JCC-Mascot.svg";

export default function Page() {
  return (
    <section className="min-h-screen text-white flex flex-col items-center justify-center bg-hero-basketball bg-cover bg-center">
      <h1 className="mb-3 md:text-5xl">Juega Como Campeon</h1>
      <p>Bilingual Sports Academy</p>
      <p>Athletics | Education | Character | Growth</p>
      <Image src={JCCMascot} alt="" className="md:h-80" />
      <p className="max-w-5xl w-5/6 text-3xl font-light italic text-center">
        JCC expands life opportunities for disadvantaged Dominican Republic
        children through programs in Sports, Math & English and
        Character-building.
      </p>
      <button>Donate</button>
    </section>
  );
}
