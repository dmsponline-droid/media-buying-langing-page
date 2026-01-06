function Footer() {
    return (
        <footer className="bg-black/40 border-t border-white/5 py-12" data-name="footer" data-file="components/Footer.js">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-gradient-to-br from-[var(--secondary-purple)] to-[var(--accent-cyan)] flex items-center justify-center text-white font-bold text-xs">
                        D
                    </div>
                    <span className="text-lg font-bold text-white">Digital Mix</span>
                </div>
                
                <div className="flex gap-6 text-sm text-gray-400">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>

                <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer text-gray-400 hover:text-white">
                        <div className="icon-twitter text-sm"></div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer text-gray-400 hover:text-white">
                        <div className="icon-instagram text-sm"></div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer text-gray-400 hover:text-white">
                        <div className="icon-linkedin text-sm"></div>
                    </div>
                </div>
            </div>
            <div className="text-center text-gray-600 text-xs mt-8">
                &copy; 2026 Digital Mix Agency. All rights reserved.
            </div>
        </footer>
    );
}