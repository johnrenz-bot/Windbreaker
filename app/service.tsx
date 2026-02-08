import Image from "next/image";
import { IoChevronForward } from "react-icons/io5";

export default function Service() {
  const services = [
    "Interactive Character Profiles",
    "Technical Bike Specifications",
    "Streetwear & Outfit Guides",
    "Real-time Fan Community Chat",
    "Chapter Discussion Hubs"
  ];

  return (
    <main className="relative min-h-screen bg-[#09090b] font-sans flex items-center overflow-hidden">
      
      {/* Background Image Layer with Gradient Overlay */}
      <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full opacity-40 lg:opacity-60">
        <div className="absolute inset-0 bg-gradient-to-r from-[#09090b] via-[#09090b]/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-[#09090b] z-10" />
        <Image
          src="/Image/sabbath.jpg"
          alt="Wind Breaker Scene"
          fill
          className="object-cover grayscale"
          priority
        />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl">
          
          <div className="space-y-4 mb-12">
            <span className="text-zinc-500 text-sm uppercase tracking-[0.4em] font-bold">Our Ecosystem</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
              Services & <br />
              <span className="text-zinc-600">Core Features</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
                We’ve engineered a platform where the adrenaline of the race meets digital interaction. From technical gear breakdowns to global community threads.
              </p>
              
              <div className="flex flex-col gap-2">
                {services.map((item, index) => (
                  <div 
                    key={index}
                    className="group flex items-center justify-between py-4 border-b border-white/5 hover:border-white/20 transition-all cursor-default"
                  >
                    <span className="text-zinc-300 group-hover:text-white group-hover:translate-x-2 transition-all duration-300 font-medium text-lg">
                      {item}
                    </span>
                    <IoChevronForward className="text-zinc-600 group-hover:text-white transition-colors" />
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block relative group">
                <div className="absolute -inset-4 bg-zinc-500/10 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-duration-500" />
                <div className="relative p-8 rounded-[3rem] bg-zinc-900/50 backdrop-blur-xl border border-white/10 space-y-6">
                    <div className="h-2 w-12 bg-zinc-100 rounded-full" />
                    <h3 className="text-2xl font-bold text-white">Adrenaline Driven</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        Dive into interactive features, engage with other fans, and get inspiration from the world of Wind Breaker. Every module is designed for performance.
                    </p>
                    <button className="w-full py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl transition-all font-bold uppercase tracking-widest text-xs">
                        Enter Dashboard
                    </button>
                </div>
            </div>

          </div>
        </div>
      </div>

      {/* Subtle Bottom Accent */}
      <div className="absolute bottom-10 left-6 flex items-center gap-4">
        <div className="w-12 h-[1px] bg-zinc-800" />
        <span className="text-zinc-600 text-[10px] uppercase tracking-[0.5em]">Engineered for Riders</span>
      </div>

    </main>
  );
}