function PerformanceShowcase() {
    const chartRef = React.useRef(null);
    const canvasRef = React.useRef(null);

    React.useEffect(() => {
        if (!canvasRef.current) return;

        const ctx = canvasRef.current.getContext('2d');
        
        // Gradient for chart area
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, 'rgba(0, 255, 148, 0.4)');
        gradient.addColorStop(1, 'rgba(0, 255, 148, 0)');

        if (chartRef.current) {
            chartRef.current.destroy();
        }

        chartRef.current = new ChartJS(ctx, {
            type: 'line',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
                datasets: [{
                    label: 'Revenue Growth',
                    data: [12000, 19000, 15000, 28000, 32000, 48000],
                    borderColor: '#00FF94',
                    backgroundColor: gradient,
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: '#0B0E14',
                    pointBorderColor: '#00FF94',
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(11, 14, 20, 0.9)',
                        titleColor: '#fff',
                        bodyColor: '#00FF94',
                        borderColor: 'rgba(255,255,255,0.1)',
                        borderWidth: 1,
                        padding: 10,
                        displayColors: false,
                    }
                },
                scales: {
                    x: {
                        grid: {
                            display: false,
                            drawBorder: false
                        },
                        ticks: {
                            color: '#94A3B8'
                        }
                    },
                    y: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.05)',
                            drawBorder: false
                        },
                        ticks: {
                            color: '#94A3B8',
                            callback: function(value) {
                                return '$' + value / 1000 + 'k';
                            }
                        }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index',
                },
            }
        });

        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, []);

    const metrics = [
        { label: 'Fashion Client', value: '500% ROAS', sub: 'Scaled from $5k to $25k/mo', icon: 'icon-shirt' },
        { label: 'Education Client', value: '200+ Leads', sub: 'Qualified leads in 30 days', icon: 'icon-graduation-cap' },
        { label: 'Tech Client', value: '-40% CPA', sub: 'Reduced acquisition cost', icon: 'icon-cpu' }
    ];

    return (
        <section id="performance" className="py-20 bg-black/20" data-name="performance" data-file="components/PerformanceShowcase.js">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 flex flex-col md:flex-row items-end justify-between gap-6">
                    <div>
                        <div className="text-[var(--primary-neon)] font-bold mb-2 tracking-wide uppercase text-sm">Real Results</div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Results We Delivered Last Month</h2>
                    </div>
                    <div className="text-[var(--text-muted)] text-sm max-w-md text-right md:text-left">
                        Our proprietary optimization algorithms work 24/7 to ensure your budget is allocated to the highest performing assets.
                    </div>
                </div>

                <div className="glass-panel rounded-2xl p-6 md:p-8 border border-white/10 mb-12">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-xl font-bold text-white">Revenue Growth Trend</h3>
                            <p className="text-sm text-gray-400">Aggregated client performance (Last 6 Weeks)</p>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1 rounded bg-[var(--primary-neon)]/10 border border-[var(--primary-neon)]/20 text-[var(--primary-neon)] text-xs font-bold">
                            <div className="icon-trending-up"></div>
                            <span>+142% vs Previous</span>
                        </div>
                    </div>
                    <div className="h-[300px] w-full">
                        <canvas ref={canvasRef}></canvas>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {metrics.map((m, i) => (
                        <div key={i} className="bg-white/5 rounded-xl p-6 border border-white/5 hover:border-[var(--primary-neon)]/30 transition-colors">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[var(--primary-neon)]">
                                    <div className={m.icon}></div>
                                </div>
                                <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">{m.label}</div>
                            </div>
                            <div className="text-3xl font-bold text-white mb-1">{m.value}</div>
                            <div className="text-sm text-gray-500">{m.sub}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}