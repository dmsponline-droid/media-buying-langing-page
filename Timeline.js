function Timeline() {
    const steps = [
        { title: 'Audit & Strategy', desc: 'We analyze your past data and build a roadmap.', icon: 'icon-search' },
        { title: 'Creative & Setup', desc: 'We design high-converting ads and setup tracking.', icon: 'icon-palette' },
        { title: 'Launch & A/B Test', desc: 'We go live and test multiple angles rapidly.', icon: 'icon-rocket' },
        { title: 'Scale & Optimize', desc: 'We cut losers and scale winners to the moon.', icon: 'icon-chart-bar' }
    ];

    return (
        <section className="py-20 px-4 max-w-7xl mx-auto" data-name="timeline" data-file="components/Timeline.js">
            <h2 className="text-3xl font-bold text-center mb-16 text-white">How We Scale You</h2>
            <div className="relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-[var(--secondary-purple)] to-[var(--accent-cyan)] opacity-30 -translate-y-1/2 z-0"></div>

                <div className="grid md:grid-cols-4 gap-8 relative z-10">
                    {steps.map((step, i) => (
                        <div key={i} className="text-center group">
                            <div className="w-16 h-16 mx-auto bg-[var(--bg-deep)] border-2 border-[var(--secondary-purple)] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative">
                                <div className={`${step.icon} text-2xl text-white`}></div>
                                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[var(--primary-neon)] text-black font-bold flex items-center justify-center text-xs">
                                    {i + 1}
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                            <p className="text-sm text-gray-400">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}