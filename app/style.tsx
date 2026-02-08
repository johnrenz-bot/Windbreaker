import { Arbutus } from "next/font/google";
import Image from "next/image";

const arbutus = Arbutus({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-arbutus",
});

export default function Style() {
  const images = [
    { src: "/Image/galery/3.jpg", alt: "Style 3" },
    { src: "/Image/galery/4.jpg", alt: "Style 4" },
    { src: "/Image/galery/5.jpg", alt: "Style 5" },
    { src: "/Image/galery/6.jpg", alt: "Style 6" },
    { src: "/Image/galery/7.jpg", alt: "Style 7" },
    { src: "/Image/galery/8.jpg", alt: "Style 8" },
  ];

  return (
    <main className="flex justify-center items-center min-h-screen bg-[#09090b] font-sans py-20 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zinc-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <section className="w-[97%] max-w-8xl flex flex-col gap-12 min-h-[90vh] relative z-10">
        <div className="w-full flex justify-center">
          <h1 className={`${arbutus.variable} text-6xl md:text-8xl font-bold text-white font-arbutus tracking-widest`}>
            Style <span className="text-zinc-600">Vibes</span>
          </h1>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-6 h-[700px] md:h-[800px]">
          {/* Left Large Column */}
          <div className="md:w-1/4 h-full relative group rounded-[2.5rem] overflow-hidden border border-white/5 transition-transform duration-500 hover:scale-[1.02]">
            <Image
              src="/Image/galery/1.jpg"
              alt="Style 1"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Middle Grid Column */}
          <div className="md:w-1/2 grid grid-cols-2 grid-rows-3 gap-6 h-full">
            {images.map((img, idx) => (
              <div 
                key={idx} 
                className="relative group rounded-[2rem] overflow-hidden border border-white/5 transition-transform duration-500 hover:scale-[1.03]"
              >
                <Image 
                  src={img.src} 
                  alt={img.alt} 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                />
              </div>
            ))}
          </div>

          {/* Right Large Column */}
          <div className="md:w-1/4 h-full relative group rounded-[2.5rem] overflow-hidden border border-white/5 transition-transform duration-500 hover:scale-[1.02]">
            <Image
              src="/Image/galery/2.jpg"
              alt="Style 2"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </section>
    </main>
  );
}