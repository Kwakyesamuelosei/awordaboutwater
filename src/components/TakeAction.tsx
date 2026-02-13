"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TakeAction() {
    return (
        <section className="py-32 relative overflow-hidden text-white" id="take-action">
            {/* Immersive Background */}
            <div className="absolute inset-0 z-0">
                <div
                    className="w-full h-full bg-cover bg-center ken-burns scale-110"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1518173946687-a4c8a07d7e3e?q=80&w=2000&auto=format&fit=crop')"
                    }}
                />

                {/* Advanced Multi-layered Overlays */}
                <div className="absolute inset-0 bg-[#02172C]/70 z-10" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#02172C] via-transparent to-[var(--primary-blue)]/30 z-10" />

                {/* Animated Wave Elements */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 opacity-30">
                    <svg className="relative block w-[calc(100%+1.3px)] h-[150px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#FFFFFF" fillOpacity="0.1"></path>
                    </svg>
                </div>

                {/* Mesh Gradient Blurs (Moving) */}
                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[var(--primary-blue)]/20 rounded-full blur-[120px] z-10"
                />
                <motion.div
                    animate={{
                        x: [0, -40, 0],
                        y: [0, 50, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[100px] z-10"
                />

                {/* Floating "Bubbles" */}
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-white/10 rounded-full blur-sm z-10"
                        style={{
                            width: Math.random() * 100 + 50,
                            height: Math.random() * 100 + 50,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0.1, 0.4, 0.1],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            delay: i * 2,
                        }}
                    />
                ))}
            </div>

            <div className="container px-5 relative z-30">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-5xl mx-auto p-10 md:p-20 rounded-[2.5rem] bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group"
                >
                    {/* Inner Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    <div className="relative z-10">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-[var(--primary-blue)] font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-8 block"
                        >
                            Mobilize With Us
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-5xl md:text-7xl font-bold mb-10 leading-[1.1] tracking-tight"
                        >
                            Every Word Counts. <br />
                            <span className="bg-gradient-to-r from-[var(--primary-blue)] to-cyan-400 bg-clip-text text-transparent">
                                Every Drop Counts.
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl md:text-2xl text-white/70 mb-16 leading-relaxed max-w-3xl font-light"
                        >
                            Join our network of researchers, advocates, and policymakers working to transform water governance. Together, we can ensure a sustainable and just water future for all.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex flex-wrap gap-8"
                        >
                            <Link
                                href="/take-action"
                                className="group/btn px-10 py-5 rounded-full bg-[var(--primary-blue)] text-white font-bold transition-all duration-300 shadow-[0_10px_30px_rgba(47,164,221,0.3)] hover:shadow-[0_15px_40px_rgba(47,164,221,0.5)] hover:-translate-y-2 flex items-center gap-3"
                            >
                                Get Involved
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                            <Link
                                href="/partnership"
                                className="px-10 py-5 rounded-full border-2 border-white/20 text-white font-bold hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 block md:inline-block"
                            >
                                Partner With Us
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
