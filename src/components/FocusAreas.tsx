"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const focusAreas = [
    {
        title: "Water Access & Equity",
        icon: "💧",
        description: "Championing universal access and equitable distribution to ensure no community is left behind in water security."
    },
    {
        title: "Governance & Accountability",
        icon: (
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
        description: "Strengthening institutional transparency and holding decision-makers accountable for sustainable water management."
    },
    {
        title: "Sustainability & Resilience",
        icon: "🌏",
        description: "Building resilient water systems that withstand climate shocks and remain sustainable for future generations."
    },
    {
        title: "Research, Learning & Innovation",
        icon: (
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.628.281a2 2 0 11-.854-3.848 1.5 1.5 0 01.33-.033 6.013 6.013 0 003.546-1.129l.942-.628a2 2 0 112.218 3.327l-1.922.879a2 2 0 00-1.097 2.328l.153.765a2 2 0 002.119 1.576l2.12-.106a2 2 0 001.691-1.491l.135-.54z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 3v4a1 1 0 01-1 1H5m14 0h-2a1 1 0 01-1-1V3" />
            </svg>
        ),
        description: "Driving evidence-based advocacy through longitudinal research and innovative water-management technologies."
    }
];

export default function FocusAreas() {
    return (
        <section className="py-24 bg-[var(--background-light)]" id="focus-areas">
            <div className="container px-5">
                <div className="flex flex-col items-center mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-[var(--brand-black)]"
                    >
                        Our Focus Areas
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {focusAreas.map((area, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-transparent hover:border-[var(--primary-blue)] transition-all duration-300 group"
                        >
                            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                {area.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-[var(--brand-black)]">
                                {area.title}
                            </h3>
                            <p className="text-[var(--text-gray)] text-sm leading-relaxed">
                                {area.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        href="/where-we-focus"
                        className="btn-pill border-2 border-[var(--primary-blue)] text-[var(--primary-blue)] hover:bg-[var(--primary-blue)] hover:text-white"
                    >
                        Learn More About Where We Focus
                    </Link>
                </div>
            </div>
        </section>
    );
}
