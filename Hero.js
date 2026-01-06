function Hero() {
    // Simulated Animated Numbers
    const [stats, setStats] = React.useState({ roas: 0, cost: 0, conversion: 0 });

    React.useEffect(() => {
        const duration = 2000;
        const steps = 60;
        const interval = duration / steps;
        let step = 0;

        const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            
            // Ease out function
            const ease = 1 - Math.pow(1 - progress, 3);
            
            setStats({
                roas: (4.5 * ease).toFixed(1),
                cost: (0.10 * ease).toFixed(2),
                conversion: (3.5 * ease).toFixed(1)
            });

            if (step >= steps) clearInterval(timer);
        }, interval);

        return () => clearInterval(timer);
    }, []);

    return (
        <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20" data-name="hero" data-file="components/Hero.js">
            {/* Left: Text */}
            <div className="flex-1 text-center lg:text-left z-10">
                <div className="inline-block px-3 py-1 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                    <span className="text-[var(--primary-neon)] text-xs font-bold tracking-wider uppercase">Data-Driven Performance</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 text-white">
                    Stop Guessing. <br/>
                    <span className="text-gradient">Start Scaling. 🚀</span>
                </h1>
                <p className="text-xl text-[var(--text-muted)] mb-8 max-w-2xl mx-auto lg:mx-0">
                    We turn Ad Spend into Revenue using Data-Driven Funnels on Meta, Google & TikTok. No fluff, just ROI.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                    <button onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})} className="btn-neon">
                        Launch Campaign <span className="opacity-70 text-xs ml-1">(Setup FREE)</span>
                    </button>
                    <button onClick={() => document.getElementById('performance').scrollIntoView({behavior: 'smooth'})} className="btn-glass flex items-center justify-center gap-2 group">
                        <span>View Live Results</span>
                        <div className="icon-arrow-right group-hover:translate-x-1 transition-transform"></div>
                    </button>
                </div>
                <div className="text-sm text-gray-500 flex items-center justify-center lg:justify-start gap-2">
                    <div className="icon-shield-check text-[var(--primary-neon)]"></div>
                    Trusted by 50+ Brands | $1M+ Ad Spend Managed
                </div>
            </div>

            {/* Right: Visual Dashboard */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none relative perspective-1000">
                {/* Floating Elements */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-[var(--primary-neon)] rounded-full blur-[60px] opacity-20 animate-pulse"></div>
                
                {/* Main Dashboard Card */}
                <div className="glass-panel rounded-2xl p-6 relative animate-float transform rotate-y-12">
                    <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="text-xs font-mono text-gray-400">LIVE CAMPAIGN VIEW</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                            <div className="text-xs text-gray-400 mb-1">Total ROAS</div>
                            <div className="text-3xl font-bold text-[var(--primary-neon)] flex items-end gap-2">
                                {stats.roas}X
                                <div className="icon-trending-up text-sm mb-1"></div>
                            </div>
                        </div>
                        <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                            <div className="text-xs text-gray-400 mb-1">Conv. Rate</div>
                            <div className="text-3xl font-bold text-white">
                                {stats.conversion}%
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center">
                                    <div className="icon-facebook text-blue-400 text-sm"></div>
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-white">Retargeting_Q1</div>
                                    <div className="text-xs text-gray-400">Meta Ads</div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-sm font-bold text-[var(--primary-neon)]">$0.10</div>
                                <div className="text-[10px] text-gray-500">CPR</div>
                            </div>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5 opacity-80">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded bg-pink-500/20 flex items-center justify-center">
                                    <div className="icon-instagram text-pink-400 text-sm"></div>
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-white">Lookalike_1%</div>
                                    <div className="text-xs text-gray-400">Instagram</div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-sm font-bold text-[var(--primary-neon)]">$0.14</div>
                                <div className="text-[10px] text-gray-500">CPR</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -left-6 glass-panel p-4 rounded-xl flex items-center gap-3 animate-float animation-delay-400">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30">
                        <div className="icon-badge-check text-[var(--primary-neon)]"></div>
                    </div>
                    <div>
                        <div className="text-xs text-gray-400">Campaign Status</div>
                        <div className="text-sm font-bold text-white">Optimization Active</div>
                    </div>
                </div>
            </div>
        </section>
    );
}