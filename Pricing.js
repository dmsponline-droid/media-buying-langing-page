function Pricing() {
    return (
        <section id="pricing" className="py-24 relative" data-name="pricing" data-file="components/Pricing.js">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">The "Killer Offer"</h2>
                    <p className="text-[var(--text-muted)] text-lg">We only grow when you grow.</p>
                </div>

                <div className="glass-panel rounded-3xl p-8 md:p-12 border border-[var(--primary-neon)]/30 relative overflow-hidden">
                    {/* Ribbon */}
                    <div className="absolute top-0 right-0 bg-[var(--primary-neon)] text-black text-xs font-bold px-4 py-2 rounded-bl-xl">
                        POPULAR CHOICE
                    </div>

                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-bold text-white mb-2">The Growth Partner Model</h3>
                        <div className="text-5xl font-bold text-[var(--primary-neon)] mb-2">10% <span className="text-xl text-white font-normal">of Ad Spend</span></div>
                        <p className="text-gray-400">No hidden fees. No long-term contracts.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-10">
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="icon-circle-check text-[var(--primary-neon)] mt-1"></div>
                                <div>
                                    <div className="font-bold text-white">Campaign Setup: FREE</div>
                                    <div className="text-sm text-gray-400">Limited time offer (Value $2000)</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="icon-circle-check text-[var(--primary-neon)] mt-1"></div>
                                <div>
                                    <div className="font-bold text-white">Service Fee</div>
                                    <div className="text-sm text-gray-400">Just 10% of monthly ad spend</div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="icon-circle-check text-[var(--primary-neon)] mt-1"></div>
                                <div>
                                    <div className="font-bold text-white">Tax Benefit</div>
                                    <div className="text-sm text-gray-400">Save 15% Meta Tax (Agency Account)</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="icon-circle-check text-[var(--primary-neon)] mt-1"></div>
                                <div>
                                    <div className="font-bold text-white">Full Tracking Setup</div>
                                    <div className="text-sm text-gray-400">Pixel + CAPI + GA4 included</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <button onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})} className="btn-neon w-full md:w-auto text-lg px-12">
                            Claim This Offer Now
                        </button>
                        <p className="mt-4 text-xs text-gray-500">Only 3 spots left for this month.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}