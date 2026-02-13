"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const philosophyPillars = [
    {
        title: "Governance over Scarcity",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
        description: "Water challenges today are less about physical scarcity and more about how water is governed, financed, and sustained."
    },
    {
        title: "Institutional Frameworks",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        description: "Systems fail not because solutions are unknown, but because institutions and long-term management are weak."
    },
    {
        title: "Systems Strengthening",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        description: "Addressing water access requires strengthening the systems that deliver, manage and protect water — not only infrastructure."
    }
];

export default function WhyWater() {
    return (
        <section className="py-24 bg-white" id="why-water">
            <div className="container px-5">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-[var(--primary-blue)] font-bold tracking-widest uppercase text-sm mb-4 block"
                    >
                        The Advocacy Shift
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-[var(--brand-black)]"
                    >
                        Why Water Matters
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {philosophyPillars.map((pillar, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group p-8 bg-gray-50 rounded-2xl border-t-4 border-[var(--primary-blue)] hover:bg-white hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="text-[var(--primary-blue)] mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                {pillar.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[var(--brand-black)] mb-4">
                                {pillar.title}
                            </h3>
                            <p className="text-[var(--text-gray)] leading-relaxed font-medium">
                                {pillar.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Link
                            href="/why-water"
                            className="btn-pill border-2 border-[var(--primary-blue)] text-[var(--primary-blue)] hover:bg-[var(--primary-blue)] hover:text-white"
                        >
                            Learn More About Why Water Matters
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
