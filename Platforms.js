function Platforms() {
    const platforms = [
        { name: 'Meta Ads', icon: 'icon-facebook', color: 'text-blue-500' },
        { name: 'Google Ads', icon: 'icon-search', color: 'text-green-500' }, // Using search as proxy
        { name: 'TikTok', icon: 'icon-video', color: 'text-pink-500' }, // Using video as proxy
        { name: 'LinkedIn', icon: 'icon-linkedin', color: 'text-blue-400' },
        { name: 'Pinterest', icon: 'icon-pin', color: 'text-red-500' } // Using pin proxy if needed, or just layout
    ];

    return (
        <section id="platforms" className="py-16 border-y border-white/5" data-name="platforms" data-file="components/Platforms.js">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="text-gray-400 mb-8 font-medium">Omnichannel Strategy for Maximum Reach</p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Using simple text/icon combos to represent logos cleanly without external images */}
                    {platforms.map((p, i) => (
                        <div key={i} className="flex items-center gap-2 group cursor-default">
                            <div className={`${p.icon} text-2xl ${p.color} transition-colors`}></div>
                            <span className="text-xl font-bold text-white group-hover:text-white transition-colors">{p.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}