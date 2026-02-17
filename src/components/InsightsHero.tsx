"use client";

import { motion } from "framer-motion";

export default function InsightsHero() {
    return (
        <section className="relative h-[60vh] md:h-[65vh] w-full overflow-hidden flex items-center justify-center bg-[var(--brand-black)]">
            {/* Standardized Abstract Backdrop */}
            <div className="absolute inset-0 z-0">
                {/* Brand Blue Overlay - Consistent with Site Template */}
                <div className="absolute inset-0 bg-[#2FA4DD]/30 z-10" />
                {/* Standardized Dark Gradient for Text Focus */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80 z-20" />
            </div>

            {/* Content Container */}
            <div className="container relative z-30 text-center px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
                    >
                        Our <span className="text-[var(--primary-blue)]">Insights</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-white/80 text-lg md:text-2xl font-light tracking-wide max-w-3xl mx-auto leading-relaxed"
                    >
                        Advancing water justice through credible data, analysis, and adaptive learning across four critical thematic areas.
                    </motion.p>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="w-24 h-1 bg-[var(--primary-blue)] mx-auto mt-10 rounded-full"
                    />
                </div>
            </div>
        </section>
    );
}
