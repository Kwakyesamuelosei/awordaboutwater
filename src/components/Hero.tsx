"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative h-[80vh] md:h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Ken Burns Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1740741705746-74e6f9b93b4f?fm=jpg&q=60&w=3000&auto=format&fit=crop"
                    alt="Pristine water surface"
                    fill
                    className="object-cover ken-burns"
                    priority
                />
                <div className="absolute inset-0 bg-[#2FA4DD]/40 z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 z-20" />
            </div>

            {/* Content */}
            <div className="container relative z-30 text-center px-6">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-white text-[1.6rem] xs:text-2xl sm:text-3xl md:text-7xl mb-8 font-extrabold tracking-tighter leading-tight whitespace-nowrap"
                >
                    Evidence · Equity · Water
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-white/90 text-xl font-bold md:text-xl max-w-3xl mx-auto mb-14 leading-relaxed px-2"
                >
                    Advancing water justice through <br className="md:hidden" /> research, advocacy, and action
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="flex justify-center items-center"
                >
                    <a href="#donate" id="hero-donate-button" className="btn-pill bg-white text-[var(--primary-blue)] w-full md:w-auto text-center py-5 text-lg font-bold shadow-2xl">
                        Donate Now
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
                    <div className="w-1 h-3 bg-white/50 rounded-full" />
                </div>
            </div>
        </section>
    );
}
