"use client";

import { motion } from "framer-motion";

const impactAreas = [
    { title: "Safe Water", icon: "💧", description: "Providing clean and accessible water sources." },
    { title: "Sanitation", icon: "🚽", description: "Improving community hygiene facilities." },
    { title: "Education", icon: "📚", description: "Empowering through knowledge and training." },
    { title: "Environment", icon: "🌱", description: "Protecting and restoring water ecosystems." },
    { title: "Partnership", icon: "🤝", description: "Collaborating for sustainable development." }
];

export default function WhatWeDo() {
    return (
        <section className="py-24 bg-white" id="mission">
            <div className="container">
                <div className="text-center mb-16">
                    <span className="text-[var(--primary-blue)] font-bold tracking-widest uppercase text-sm mb-4 block">
                        Our Impact Areas
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary-blue)]">
                        What We Do
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                    {impactAreas.map((area, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 border-2 border-[var(--primary-blue)] rounded-2xl text-center hover:bg-[var(--primary-blue)] hover:text-white transition-all duration-300 group"
                        >
                            <div className="text-5xl mb-6 group-hover:scale-125 transition-transform duration-300">
                                {area.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors duration-300">
                                {area.title}
                            </h3>
                            <p className="text-sm opacity-80 group-hover:text-white/90 transition-colors duration-300">
                                {area.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
