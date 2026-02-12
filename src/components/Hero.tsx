"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Ken Burns Background */}
            <div className="absolute inset-0 z-0">
                <div
                    className="w-full h-full bg-cover bg-center ken-burns"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1740741705746-74e6f9b93b4f?fm=jpg&q=60&w=3000&auto=format&fit=crop')"
                    }}
                />
                <div className="absolute inset-0 bg-[#2FA4DD]/40 z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 z-20" />
            </div>

            {/* Content */}
            <div className="container relative z-30 text-center px-5">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-white text-4xl md:text-7xl mb-6 font-bold leading-tight"
                >
                    One Word Ready to Change Everything.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-12 font-medium"
                >
                    Every drop counts — so does every voice. Together, we can ensure that the next word about water is a word of hope, justice, and life.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="flex flex-col md:flex-row gap-4 justify-center items-center"
                >
                    <a href="#donate" className="btn-pill bg-white text-[var(--primary-blue)] w-full md:w-auto text-center">
                        Donate Now
                    </a>
                    <a href="#about" className="btn-pill border-2 border-white text-white hover:bg-white hover:text-[var(--primary-blue)] w-full md:w-auto text-center">
                        Learn More
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
