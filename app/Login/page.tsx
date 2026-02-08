import { FcGoogle } from "react-icons/fc";
import { IoArrowBackOutline, IoPersonOutline } from "react-icons/io5";
import Link from "next/link";

export default function Login() {
    return (
        <main className="flex items-center justify-center bg-[#09090b] font-sans min-h-screen relative overflow-hidden">

            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-zinc-500/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-zinc-700/5 blur-[120px] rounded-full" />

            <div className="relative bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-2xl p-8 w-[24rem] flex flex-col items-center gap-5">

                <div className="w-full flex items-center justify-between mb-2">
                    <Link
                        href="/"
                        className="p-2.5 rounded-full bg-zinc-800/50 hover:bg-zinc-700/50 text-zinc-400 hover:text-white transition-all border border-white/5"
                        title="Go Back"
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
                        Welcome Back
                    </h1>
                    <p className="text-[13px] text-zinc-500">
                        Enter your credentials to continue
                    </p>
                </div>

                <div className="w-full space-y-3">
                    <input
                        type="text"
                        placeholder="Username"
                        className="w-full px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500/50 focus:border-zinc-500/50 transition-all text-sm"
                    />
                    <div className="space-y-1.5">
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500/50 focus:border-zinc-500/50 transition-all text-sm"
                        />
                        <div className="w-full text-right px-1">
                            <Link href="/ForgetPassword" className="text-[12px] text-zinc-500 hover:text-zinc-300 transition-colors">
                                Forgot Password?
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="w-full space-y-3">
                    <button
                        disabled
                        className="w-full py-3 rounded-2xl bg-zinc-100/50 text-black/50 font-semibold text-sm transition-all shadow-lg shadow-white/5 cursor-not-allowed"
                    >
                        Sign In
                    </button>

                    <Link href="/Dashboard" className="w-full py-3 rounded-2xl bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10 font-medium flex items-center justify-center gap-2.5 text-sm transition-all active:scale-[0.98]">
                        <IoPersonOutline className="w-4 h-4" />
                        Continue as Guest
                    </Link>

                    <div className="flex items-center gap-3 my-2">
                        <div className="h-[1px] flex-1 bg-white/5" />
                        <span className="text-[11px] text-zinc-600 uppercase tracking-widest font-medium">Or</span>
                        <div className="h-[1px] flex-1 bg-white/5" />
                    </div>

                    <button className="w-full py-3 rounded-2xl bg-transparent hover:bg-white/5 text-zinc-300 border border-white/10 font-medium flex items-center justify-center gap-2.5 text-sm transition-all active:scale-[0.98]">
                        <FcGoogle className="w-5 h-5" />
                        Google Account
                    </button>
                </div>

                <p className="text-zinc-500 text-[13px]">
                    New here?{" "}
                    <Link href="/Registration" className="text-zinc-300 hover:text-white transition-colors font-medium underline underline-offset-4 decoration-zinc-700">
                        Create an account
                    </Link>
                </p>
            </div>
        </main>
    );
}