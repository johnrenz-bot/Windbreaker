import React from "react";
import { 
  IoFlashOutline, 
  IoBicycleOutline, 
  IoTrophyOutline, 
  IoChatbubbleEllipsesOutline,
  IoCompassOutline,
  IoBookmarkOutline,
  IoAddOutline,
  IoPeopleOutline,
  IoSkullOutline,
  IoLocationOutline,
  IoTrendingUpOutline
} from "react-icons/io5";

export default function UserDashboard() {
  const userStats = [
    { label: "My Rank", value: "Unranked", detail: "Complete 1 ride", icon: <IoTrophyOutline /> },
    { label: "Stamina", value: "0%", detail: "Resting", icon: <IoFlashOutline /> },
    { label: "Gear Level", value: "LV. 0", detail: "No bike set", icon: <IoBicycleOutline /> },
  ];

  return (
    <div className="w-full space-y-10 animate-in fade-in duration-700 no-scrollbar pb-20">
      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .text-outline { -webkit-text-stroke: 1px #3f3f46; color: transparent; }
      `}} />

      <section className="relative p-10 rounded-[3rem] bg-zinc-900/40 border border-white/5 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <IoSkullOutline className="text-9xl text-white" />
        </div>
        
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
              <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">Status: New Recruit</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic leading-none">
              START YOUR <br /> <span className="text-outline">JOURNEY</span>
            </h1>
            <p className="text-zinc-500 max-w-md leading-relaxed italic text-sm">
              The streets are waiting. Connect your hardware or sync with a crew to begin your ascent through the ranks.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 justify-center md:justify-start">
              <button className="px-6 py-3 bg-white text-black font-black rounded-2xl text-xs uppercase tracking-widest transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
                <IoAddOutline className="text-lg" /> Setup Bike
              </button>
              <button className="px-6 py-3 bg-white/5 hover:bg-white/10 text-zinc-400 font-bold rounded-2xl text-xs uppercase tracking-widest transition-all border border-white/5">
                Browse Crews
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full md:w-auto">
            {userStats.map((stat, i) => (
              <div key={i} className="p-6 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/5 flex flex-col items-center text-center group hover:border-blue-500/30 transition-all">
                <div className="text-zinc-600 text-2xl mb-2 group-hover:text-blue-400 transition-colors">{stat.icon}</div>
                <h4 className="text-xl font-bold text-zinc-400">{stat.value}</h4>
                <p className="text-[10px] text-zinc-600 uppercase font-black tracking-widest mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="space-y-6">
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                <IoTrendingUpOutline className="text-zinc-500 w-5 h-5" />
                <h3 className="text-lg font-bold text-white uppercase tracking-tighter">Street Credits</h3>
              </div>
              <span className="text-xs font-bold text-zinc-600 tracking-tighter">0 / 1000 XP</span>
            </div>
            <div className="p-8 rounded-[2.5rem] bg-zinc-900/20 border border-white/5 relative overflow-hidden group">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <h4 className="text-white font-bold italic">Level 0</h4>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Next: Novice Rider</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-white/10 italic group-hover:text-white/20 transition-colors">INITIATING</span>
                </div>
              </div>
              <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                <div className="h-full w-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-2 px-2">
              <IoLocationOutline className="text-zinc-500 w-5 h-5" />
              <h3 className="text-lg font-bold text-white uppercase tracking-tighter">Last Session Area</h3>
            </div>
            <div className="relative h-64 rounded-[2.5rem] bg-white/[0.02] border border-white/5 overflow-hidden flex items-center justify-center group">
              <div className="absolute inset-0 opacity-20 grayscale transition-all group-hover:opacity-30 group-hover:scale-105" 
                   style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              <div className="relative z-10 text-center">
                <div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center mx-auto mb-3 shadow-2xl">
                  <IoLocationOutline className="text-zinc-600" />
                </div>
                <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">No GPS Data Found</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-6">
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                <IoChatbubbleEllipsesOutline className="text-zinc-500 w-5 h-5" />
                <h3 className="text-lg font-bold text-white tracking-tighter">Local Hub</h3>
              </div>
              <span className="text-[10px] font-black text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded tracking-tighter uppercase animate-pulse">Live</span>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-white/5 backdrop-blur-md border border-white/10 flex flex-col items-center text-center relative overflow-hidden">
              <div className="w-16 h-16 rounded-full bg-black/40 flex items-center justify-center mb-4 border border-white/5 group-hover:border-white/20 transition-all">
                <IoPeopleOutline className="text-zinc-700 w-8 h-8" />
              </div>
              <h4 className="text-sm font-bold text-white italic">Ghost Town?</h4>
              <p className="text-[11px] text-zinc-500 mt-2 leading-relaxed">
                You haven't joined a district chat yet. Find your neighborhood crew to see real-time updates.
              </p>
              <button className="mt-8 w-full py-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700 text-white text-[10px] font-black uppercase tracking-[0.2em] transition-all border border-white/5">
                Join District Chat
              </button>
            </div>
          </div>

          <div className="p-8 rounded-[2.5rem] bg-black/40 border border-white/5 relative group overflow-hidden">
            <div className="absolute -right-4 -bottom-4 opacity-5 transform rotate-12 transition-transform group-hover:rotate-0">
              <IoBookmarkOutline className="text-8xl text-white" />
            </div>
            <div className="flex items-center gap-2 mb-6">
              <IoBookmarkOutline className="text-zinc-700 w-4 h-4" />
              <span className="text-[10px] font-bold text-zinc-700 uppercase tracking-widest">Maintenance Guides</span>
            </div>
            <div className="space-y-3">
              <div className="flex gap-3 items-center opacity-40">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex-shrink-0" />
                <div className="space-y-1.5 w-full">
                  <div className="h-2 w-full bg-white/5 rounded-full" />
                  <div className="h-2 w-1/2 bg-white/5 rounded-full" />
                </div>
              </div>
              <div className="flex gap-3 items-center opacity-20">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex-shrink-0" />
                <div className="space-y-1.5 w-full">
                  <div className="h-2 w-2/3 bg-white/5 rounded-full" />
                </div>
              </div>
            </div>
            <p className="text-[10px] text-zinc-800 italic mt-6 font-bold uppercase tracking-widest">Empty Archives</p>
          </div>

          <div className="p-6 rounded-3xl bg-gradient-to-br from-red-900/10 to-transparent border border-red-900/20">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-red-500/10">
                <IoSkullOutline className="text-red-500" />
              </div>
              <div>
                <h5 className="text-[10px] font-black text-red-500 uppercase tracking-widest">Wanted Level</h5>
                <p className="text-xs text-zinc-600">No heat detected in your area.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}