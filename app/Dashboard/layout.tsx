import React from "react";
import {
  IoHomeOutline,
  IoChatbubblesOutline,
  IoBicycleOutline,
  IoShirtOutline,
  IoNewspaperOutline,
  IoSearchOutline,
  IoSettingsOutline,
  IoNotificationsOutline,
  IoPersonCircleOutline,
  IoInformationCircleOutline,
  IoLogOutOutline,
  IoArrowBackOutline
} from "react-icons/io5";

import Link from "next/link";

const features = [
  { title: "Home", icon: <IoHomeOutline className="w-5 h-5" /> },
  { title: "Community & Chat", icon: <IoChatbubblesOutline className="w-5 h-5" /> },
  { title: "Character & Bike Info", icon: <IoBicycleOutline className="w-5 h-5" /> },
  { title: "Style & Outfits", icon: <IoShirtOutline className="w-5 h-5" /> },
  { title: "Latest Topics", icon: <IoNewspaperOutline className="w-5 h-5" /> },
  { title: "About Project", icon: <IoInformationCircleOutline className="w-5 h-5" /> },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-[#080a0c] bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-slate-900 via-[#0B0E11] to-black text-zinc-400 font-sans overflow-hidden">

      <aside className="w-72 bg-white/5 backdrop-blur-2xl border-r border-white/10 flex flex-col p-6 z-20">
        <div className="flex items-center gap-3 mb-12 px-2">
          <div className="w-10 h-10 bg-gradient-to-br from-white to-zinc-400 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            <span className="text-black font-black italic text-xl">W</span>
          </div>
          <div className="leading-none">
            <h1 className="text-lg font-bold text-white tracking-tight">Wind Breaker</h1>
            <span className="text-[10px] text-zinc-500 uppercase tracking-[0.3em] font-black">Digital Hub</span>
          </div>
        </div>

        <nav className="flex-1 space-y-2">
          {features.map((item, idx) => (
            <button
              key={idx}
              className={`w-full flex items-center gap-4 p-3.5 rounded-2xl transition-all duration-300 group border border-transparent
                ${idx === 0
                  ? 'bg-white/10 border-white/10 text-white shadow-xl shadow-black/20'
                  : 'hover:bg-white/5 hover:border-white/5 hover:text-white'}`}
            >
              <span className={`flex items-center justify-center w-6 transition-colors ${idx === 0 ? 'text-blue-400' : 'text-zinc-500 group-hover:text-blue-400'}`}>
                {item.icon}
              </span>
              <span className="text-sm font-semibold tracking-wide">{item.title}</span>
            </button>
          ))}
        </nav>

        <div className="mt-auto space-y-4">
          <button className="w-full flex items-center gap-4 p-3.5 rounded-2xl transition-all duration-300 group border border-transparent hover:bg-red-500/10 text-zinc-500 hover:text-red-400">
            <span className="flex items-center justify-center w-6">
              <IoLogOutOutline className="w-5 h-5" />
            </span>
            <Link href="/Login" className="text-sm font-semibold tracking-wide">Sign Out</Link>
          </button>

          <div className="p-4 bg-white/5 border border-white/5 rounded-[2rem] backdrop-blur-md">
            <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-2 px-2">Status</p>
            <div className="flex items-center gap-2 px-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
              <span className="text-xs text-emerald-500 font-medium tracking-tight">Crew Server Online</span>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col relative">
        <header className="h-20 bg-white/[0.02] backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-10 z-10">
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-xs font-bold tracking-widest text-zinc-500 hover:text-white transition-colors group">
              <IoArrowBackOutline className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              BACK
            </button>

            <div className="h-8 w-[1px] bg-white/10" />

            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 flex items-center justify-center shadow-lg">
                <IoPersonCircleOutline className="w-7 h-7 text-zinc-500" />
              </div>
              <div>
                <p className="text-[10px] text-zinc-600 font-black uppercase tracking-widest leading-none mb-1">Authenticated As</p>
                <h2 className="text-sm font-bold text-white tracking-wide">Guest Rider</h2>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="relative group">
              <IoSearchOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-blue-400 transition-colors" />
              <input
                type="text"
                placeholder="Search database..."
                className="bg-white/5 border border-white/5 rounded-2xl py-2.5 pl-12 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-white/20 focus:bg-white/[0.08] transition-all w-64 placeholder:text-zinc-600 text-white"
              />
            </div>

            <div className="flex items-center bg-white/5 rounded-2xl border border-white/5 p-1">
              <button className="p-2 hover:bg-white/5 rounded-xl transition-colors relative">
                <IoNotificationsOutline className="w-5 h-5 text-zinc-400" />
                <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
              </button>
              <button className="p-2 hover:bg-white/5 rounded-xl transition-colors">
                <IoSettingsOutline className="w-5 h-5 text-zinc-400" />
              </button>
            </div>
          </div>
        </header>

        <section className="relative flex-1 overflow-y-auto no-scrollbar scroll-smooth p-10">
          <div className="fixed top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none -z-10" />
          <div className="fixed bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto w-full">
            {children}
          </div>
        </section>
      </main>
    </div>
  );
}