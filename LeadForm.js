function LeadForm() {
    const [status, setStatus] = React.useState('idle');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');
        // Simulate API call
        setTimeout(() => {
            setStatus('success');
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 px-4 relative" data-name="lead-form" data-file="components/LeadForm.js">
            <div className="max-w-2xl mx-auto glass-panel p-8 md:p-12 rounded-3xl border border-white/10">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-white mb-2">Ready to Scale?</h2>
                    <p className="text-gray-400">Get your free audit and strategy session.</p>
                </div>

                {status === 'success' ? (
                    <div className="text-center py-12 animate-float">
                        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <div className="icon-check text-4xl text-green-500"></div>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Application Received!</h3>
                        <p className="text-gray-400">We'll be in touch within 24 hours.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                            <input type="text" required className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--primary-neon)] transition-colors" placeholder="John Doe" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Website URL</label>
                            <input type="url" required className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--primary-neon)] transition-colors" placeholder="https://example.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Monthly Ad Budget</label>
                            <select className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--primary-neon)] transition-colors appearance-none">
                                <option>$1,000 - $5,000</option>
                                <option>$5,000 - $10,000</option>
                                <option>$10,000 - $50,000</option>
                                <option>$50,000+</option>
                            </select>
                        </div>
                        <button type="submit" disabled={status === 'submitting'} className="w-full btn-neon flex items-center justify-center gap-2">
                            {status === 'submitting' ? (
                                <>
                                    <div className="icon-loader animate-spin"></div>
                                    Processing...
                                </>
                            ) : (
                                'Get Free Ad Audit'
                            )}
                        </button>
                    </form>
                )}
            </div>

            {/* Floating WhatsApp Widget */}
            <div className="fixed bottom-6 right-6 z-50">
                <button className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                    <div className="icon-message-circle text-white text-2xl"></div>
                </button>
            </div>
        </section>
    );
}