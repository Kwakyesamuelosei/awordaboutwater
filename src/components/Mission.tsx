"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Mission() {
    return (
        <section className="py-24 bg-[var(--background-light)]" id="about">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                            <Image
                                src="https://images.unsplash.com/photo-1601662583487-20630f298aed?auto=format&fit=crop&q=80&w=1000"
                                alt="Children with clean water"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-w-768px) 100vw, 50vw"
                            />
                        </div>
                        {/* Decorative Blue Box */}
                        <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-[var(--primary-blue)] rounded-2xl -z-0 opacity-20" />
                    </motion.div>

                    {/* Text Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-[var(--primary-blue)] font-bold tracking-widest uppercase text-sm mb-4 block">
                            Our Story
                        </span>
                        <h2 className="text-4xl md:text-5xl mb-8 leading-tight font-bold text-[var(--primary-blue)]">
                            Safe and sustainable water <br />
                            for rural communities.
                        </h2>
                        <p className="text-lg text-[var(--text-gray)] mb-8 leading-relaxed">
                            A Word About Water is a dedicated initiative improving the lives of rural communities
                            through research-driven advocacy and sustainable water, sanitation, and hygiene (WASH) actions.
                        </p>
                        <p className="text-lg text-[var(--text-gray)] mb-8 leading-relaxed">
                            By empowering youth and engaging local stakeholders, we create lasting
                            impact that transforms health, education, and economic opportunities for thousands.
                        </p>
                        <div className="flex gap-4">
                            <a href="#impact" id="mission-impact-link" className="btn-pill bg-[var(--primary-blue)] text-white">
                                View Our Impact
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
