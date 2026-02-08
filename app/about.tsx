import { IoBicycleOutline, IoChatbubblesOutline, IoShirtOutline, IoNewspaperOutline } from "react-icons/io5";

export default function About() {
    const features = [
        {
            title: "Community & Chat",
            desc: "Connect with street culture fans in real-time.",
            icon: <IoChatbubblesOutline className="w-6 h-6" />,
        },
        {
            title: "Character & Bike Info",
            desc: "Deep dive into Jay Jo's specs and crew stats.",
            icon: <IoBicycleOutline className="w-6 h-6" />,
        },
        {
            title: "Style & Outfits",
            desc: "Break down the iconic Wind Breaker aesthetics.",
            icon: <IoShirtOutline className="w-6 h-6" />,
        },
        {
            title: "Latest Topics",
            desc: "Stay updated with chapter theories and news.",
            icon: <IoNewspaperOutline className="w-6 h-6" />,
        },
    ];

    return (
        <main className="bg-[#09090b] font-sans py-24 px-6 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-500/5 via-transparent to-transparent pointer-events-none" />

            <section className="container mx-auto max-w-8xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    <div className="space-y-8">
                        <div className="space-y-4">
                            <span className="text-zinc-500 text-sm uppercase tracking-[0.4em] font-bold">The Project</span>
                            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-white leading-tight">
                                About the <br />
                                <span className="text-zinc-500">Wind Breaker Hub</span>
                            </h2>
                        </div>

                        <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                            <p>
                                Inspired by Jo Yongseok's legendary manhwa, the <span className="text-white">Wind Breaker Hub</span> is a digital sanctuary for readers, riders, and street culture enthusiasts.
                            </p>
                            <p>
                                Whether you’re here to analyze cycling mechanics or draw inspiration from the high-tension street fashion, we’ve built a space that keeps the motion and passion of the series alive.
                            </p>
                            <button className="px-8 py-4 bg-zinc-100 hover:bg-white text-black font-bold rounded-2xl transition-all active:scale-95 text-sm uppercase tracking-widest">
                                Join the Crew
                            </button>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                        {features.map((feature, idx) => (
                            <div
                                key={idx}
                                className="group p-8 rounded-[2.5rem] bg-zinc-900/40 backdrop-blur-md border border-white/5 hover:border-white/10 transition-all duration-500"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-zinc-300 mb-6 group-hover:bg-zinc-100 group-hover:text-black transition-all duration-500">
                                    {feature.icon}
                                </div>
                                <h3 className="text-white font-semibold text-xl mb-2">{feature.title}</h3>
                                <p className="text-zinc-500 text-sm leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>

                <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                    <div>
                        <p className="text-zinc-600 text-xs uppercase tracking-widest mb-2 font-bold">Project Goal</p>
                        <p className="text-zinc-400 max-w-sm">Elevating the community experience for the global Wind Breaker fanbase.</p>
                    </div>

                </div>
            </section>
        </main>
    );
}