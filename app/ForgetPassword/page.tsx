import { IoArrowBackOutline, IoMailOutline } from "react-icons/io5";
import Link from "next/link";

export default function ForgetPassword() {
    return (
        <main className="flex items-center justify-center bg-[#09090b] font-sans min-h-screen relative overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-zinc-500/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-zinc-700/5 blur-[120px] rounded-full" />

            <div className="relative bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-2xl p-8 w-[24rem] flex flex-col items-center gap-6">

                <div className="w-full flex items-center justify-between mb-2">
                    <Link
                        href="/Login"
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

                <div className="text-center space-y-2">
                    <h1 className="text-2xl font-semibold tracking-tight text-white">
                        Reset Password
                    </h1>
                    <p className="text-[13px] text-zinc-500 px-4">
                        Enter your email address and we'll send you a link to reset your password.
                    </p>
                </div>

                <form className="w-full space-y-5">
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-500 group-focus-within:text-white transition-colors">
                            <IoMailOutline className="w-5 h-5" />
                        </div>
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500/50 transition-all text-sm"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 rounded-2xl bg-zinc-100 hover:bg-white text-black font-semibold text-sm transition-all shadow-lg shadow-white/5 active:scale-[0.98]"
                    >
                        Send Reset Link
                    </button>
                </form>

                <div className="text-center">
                    <p className="text-zinc-500 text-[13px]">
                        Remembered your password?{" "}
                        <Link href="/Login" className="text-zinc-300 hover:text-white transition-colors font-medium underline underline-offset-4 decoration-zinc-700">
                            Back to Login
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
}