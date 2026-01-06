function Navbar() {
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0B0E14]/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`} data-name="navbar" data-file="components/Navbar.js">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                    <div className="w-8 h-8 rounded bg-gradient-to-br from-[var(--secondary-purple)] to-[var(--accent-cyan)] flex items-center justify-center text-white font-bold text-lg">
                        D
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white">Digital Mix</span>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    <a onClick={() => scrollToSection('reality-check')} className="nav-link">Strategy</a>
                    <a onClick={() => scrollToSection('platforms')} className="nav-link">Platforms</a>
                    <a onClick={() => scrollToSection('performance')} className="nav-link">Live Results</a>
                    <a onClick={() => scrollToSection('pricing')} className="nav-link">Pricing</a>
                </div>

                <button onClick={() => scrollToSection('contact')} className="hidden md:block px-5 py-2 rounded-full bg-gradient-to-r from-[var(--secondary-purple)] to-[var(--accent-cyan)] text-white font-medium text-sm hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/20">
                    Get Free Ad Audit
                </button>

                <div className="md:hidden text-white">
                    <div className="icon-menu text-2xl"></div>
                </div>
            </div>
        </nav>
    );
}