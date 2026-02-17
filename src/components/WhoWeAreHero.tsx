"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhoWeAreHero() {
    return (
        <section className="relative h-[60vh] md:h-[65vh] w-full overflow-hidden flex items-center justify-center bg-[var(--brand-black)]">
            {/* Subject-Focused Background Image */}
            <div className="absolute inset-0 z-0">
                {/* Brand Blue Overlay - Consistent with Homepage */}
                <div className="absolute inset-0 bg-[#2FA4DD]/40 z-10" />
                {/* Standardized Dark Gradient for Text Focus */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-20" />
            </div>

            {/* Content Container */}
            <div className="container relative z-20 text-center px-6">
                <div className="max-w-4xl mx-auto">

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8"
                    >
                        One word can change everything. <br className="hidden md:block" />
                        <span className="text-[var(--primary-blue)]">Let’s make it about water.</span>
                    </motion.h1>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="w-24 h-1 bg-[var(--primary-blue)] mx-auto rounded-full"
                    />
                </div>
            </div>
        </section>
    );
}
