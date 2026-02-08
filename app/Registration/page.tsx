import { FcGoogle } from "react-icons/fc";
import { IoArrowBackOutline } from "react-icons/io5";
import Link from "next/link";

export default function Register() {
    return (
        <main className="flex items-center justify-center bg-[#09090b] font-sans min-h-screen relative overflow-hidden py-10">
            <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-zinc-500/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-zinc-700/5 blur-[120px] rounded-full" />

            <div className="relative bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-2xl p-8 w-[32rem] flex flex-col items-center gap-5">
                
                <div className="w-full flex items-center justify-between mb-2">
                    <Link
                        href="/"
                        className="p-2.5 rounded-full bg-zinc-800/50 hover:bg-zinc-700/50 text-zinc-400 hover:text-white transition-all border border-white/5"
                    >
                        <IoArrowBackOutline className="w-5 h-5" />
                    </Link>
                    <img
                        src="/Image/logo/white.png"
                        alt="Logo"
                        className="w-24 h-auto opacity-90"
                    />
                    <div className="w-10" />
                </div>

                <div className="text-center space-y-1">
                    <h1 className="text-2xl font-semibold tracking-tight text-white">
                        Create Account
                    </h1>
                    <p className="text-[13px] text-zinc-500">
                        Join WindBreaker Journey!
                    </p>
                </div>

                <form className="w-full space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                        <input
                            type="text"
                            placeholder="First Name"
                            className="w-full px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500/50 transition-all text-sm"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="w-full px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500/50 transition-all text-sm"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <input
                            type="date"
                            className="w-full px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10 text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500/50 transition-all text-sm [color-scheme:dark]"
                        />

                        <select 
                            defaultValue="" 
                            className="w-full px-4 py-3 rounded-2xl bg-[#18181b] border border-white/10 text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500/50 transition-all text-sm"
                        >
                            <option value="" disabled>Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>

                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500/50 transition-all text-sm"
                    />

                    <div className="grid grid-cols-2 gap-3">
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500/50 transition-all text-sm"
                        />
                        <input
                            type="password"
                            placeholder="Confirm"
                            className="w-full px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500/50 transition-all text-sm"
                        />
                    </div>

                    <button type="submit" className="w-full py-3 mt-2 rounded-2xl bg-zinc-100 hover:bg-white text-black font-semibold text-sm transition-all shadow-lg shadow-white/5 active:scale-[0.98]">
                        Create Account
                    </button>
                </form>

             
                <p className="text-zinc-500 text-[13px]">
                    Already have an account?{" "}
                    <Link href="/Login" className="text-zinc-300 hover:text-white transition-colors font-medium underline underline-offset-4 decoration-zinc-700">
                        Sign In
                    </Link>
                </p>
            </div>
        </main>
    );
}