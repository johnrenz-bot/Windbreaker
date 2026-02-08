import { Amiri_Quran } from "next/font/google";
import './globals.css';
import Image from "next/image";
import About from "./about";
import Service from "./service";
import Style from "./style";
import Footer from "./footer";
import Header from "./components/Header";

const amiri = Amiri_Quran({
  weight: "400",
  subsets: ["arabic"],
  variable: "--font-amiri",
});

export default function Home() {
  return (
    <>
      <Header />

      <main className="relative  flex items-center justify-center bg-[#09090b] overflow-hidden px-6 pt-20">
        
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-zinc-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-zinc-700/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-5 flex flex-col gap-6 order-2 lg:order-1">
            <div className="space-y-2">
              <span className="text-zinc-500 text-sm uppercase tracking-[0.3em] font-medium">Ace of Hummingbird</span>
              <h1 className={`${amiri.variable} font-amiri text-7xl md:text-8xl text-white leading-tight`}>
                Jahyeon Jo
              </h1>
            </div>
            
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-lg border-l border-zinc-800 pl-6">
              A junior at Sunny High School and former student council president. 
              Known as the silent ace of the <span className="text-white">Humming Bird Crew</span>, 
              redefining the thrill of the street.
            </p>

            <div className="flex gap-4 pt-4">
              <button className="px-8 py-4 bg-zinc-100 hover:bg-white text-black font-bold rounded-2xl transition-all active:scale-95">
                Explore Crew
              </button>
              <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl transition-all">
                View Style
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center relative order-1 lg:order-2">
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent z-10 h-full w-full" />
            <Image
              src="/image/jayjo.png"
              alt="Jay Jo"
              width={450}
              height={600}
              className="object-contain hover:scale-105 transition-transform duration-700 grayscale-[20%] hover:grayscale-0"
              priority
            />
          </div>

          <div className="lg:col-span-3 hidden lg:flex flex-col justify-center items-center gap-8 order-3">
             <div className="p-4 bg-zinc-900/50 backdrop-blur-md border border-white/5 rounded-[2rem] rotate-3 hover:rotate-0 transition-all duration-500 shadow-2xl">
                <Image
                  src="/image/breaker.png"
                  alt="Breaker"
                  width={280}
                  height={350}
                  className="object-contain rounded-2xl opacity-80"
                />
             </div>
             <div className="text-center">
                <p className="text-zinc-600 text-xs uppercase tracking-widest font-bold">Wind Breaker </p>
                <div className="h-20 w-[1px] bg-gradient-to-b from-zinc-800 to-transparent mx-auto mt-4" />
             </div>
          </div>

        </div>
      </main>

      <About />
      <Service />
      <Style />
      <Footer />
    </>
  );
}
