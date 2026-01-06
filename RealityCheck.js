function RealityCheck() {
    const cards = [
        {
            icon: 'icon-trending-down',
            title: 'Vanity Metrics',
            pain: 'They focus on Likes.',
            solution: 'We focus on Sales & ROI.',
            color: 'text-red-400'
        },
        {
            icon: 'icon-wallet',
            title: 'High Fixed Fees',
            pain: 'They charge fixed retainers.',
            solution: 'We charge 10% of spend.',
            color: 'text-orange-400'
        },
        {
            icon: 'icon-eye-off',
            title: 'No Transparency',
            pain: 'They hide detailed reports.',
            solution: 'We give you a live dashboard.',
            color: 'text-yellow-400'
        }
    ];

    return (
        <section id="reality-check" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" data-name="reality-check" data-file="components/RealityCheck.js">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Is Your Current Agency <span className="text-red-500">Burning Your Money?</span></h2>
                <p className="text-[var(--text-muted)]">Most agencies profit whether you win or lose. We changed that.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {cards.map((card, idx) => (
                    <div key={idx} className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors border border-red-500/10 hover:border-red-500/30 group">
                        <div className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                            <div className={`${card.icon} text-2xl ${card.color}`}></div>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-white">{card.title}</h3>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-gray-400 text-sm">
                                <div className="icon-x text-red-500"></div>
                                <span className="line-through">{card.pain}</span>
                            </div>
                            <div className="flex items-center gap-2 text-[var(--primary-neon)] font-medium">
                                <div className="icon-check text-[var(--primary-neon)]"></div>
                                <span>{card.solution}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}