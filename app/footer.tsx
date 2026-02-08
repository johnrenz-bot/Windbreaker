"use client"; // <--- Add this at the very top

import Link from "next/link";
import { IoLogoInstagram, IoLogoTwitter, IoLogoGithub, IoArrowUpOutline } from "react-icons/io5";

export default function Footer() {
    const scrollToTop = () => {

        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="w-full bg-[#09090b] border-t border-white/5 pt-5 pb-4 font-sans">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
                    
                    <div className="space-y-6 max-w-sm">
                        <img
                            src="/Image/logo/white.png"
                            alt="WindBreaker Logo"
                            className="w-32 h-auto opacity-90"
                        />
                        <p className="text-zinc-500 text-sm leading-relaxed">
                            The ultimate digital sanctuary for the Wind Breaker community. 
                            Built for the riders, the readers, and the street culture enthusiasts.
                        </p>
                        <div className="flex gap-4">
                            {[<IoLogoInstagram />, <IoLogoTwitter />, <IoLogoGithub />].map((icon, idx) => (
                                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-zinc-100 hover:text-black transition-all duration-300">
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Platform</h4>
                            <ul className="space-y-2 text-zinc-500 text-sm">
                                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                                <li><Link href="/service" className="hover:text-white transition-colors">Services</Link></li>
                                <li><Link href="/style" className="hover:text-white transition-colors">Aesthetics</Link></li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Community</h4>
                            <ul className="space-y-2 text-zinc-500 text-sm">
                                <li><Link href="/Registration" className="hover:text-white transition-colors">Join Crew</Link></li>
                                <li><Link href="/Login" className="hover:text-white transition-colors">Sign In</Link></li>
                                <li><a href="#" className="hover:text-white transition-colors">Forum</a></li>
                            </ul>
                        </div>
                        <button 
                            type="button"
                            onClick={scrollToTop}
                            className="hidden sm:flex w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 items-center justify-center text-white hover:bg-zinc-100 hover:text-black transition-all group"
                        >
                            <IoArrowUpOutline className="group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-zinc-600 text-[12px] uppercase tracking-widest">
                        &copy; {new Date().getFullYear()} Wind Breaker Hub. Built by fans for fans.
                    </p>
                    <div className="flex gap-8 text-[11px] text-zinc-600 uppercase tracking-tighter">
                        <a href="#" className="hover:text-zinc-400">Privacy Policy</a>
                        <a href="#" className="hover:text-zinc-400">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}