"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const insights = [
    {
        date: "Feb 12, 2025",
        title: "Advocacy Brief: The Governance Gap in Rural Water Systems",
        tag: "Research & Analysis",
        image: "https://images.unsplash.com/photo-1760873059715-7c7cfbe2a2c6?auto=format&fit=crop&q=80&w=800"
    },
    {
        date: "Jan 28, 2025",
        title: "Moving Beyond Philanthropy: Financial Sustainability Models",
        tag: "Policy Perspectives",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
    },
    {
        date: "Jan 15, 2025",
        title: "Field Report: Institutional Strengthening in East Africa",
        tag: "Practice & Field Insights",
        image: "https://images.unsplash.com/photo-1620829813552-f4a3590d2ce8?auto=format&fit=crop&q=80&w=800"
    }
];

export default function InsightsPreview() {
    return (
        <section className="py-24 bg-white" id="insights">
            <div className="container px-5">
                <div className="flex flex-col items-center mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-[var(--brand-black)]"
                    >
                        Featured Insights
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    {insights.map((insight, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="relative aspect-[16/10] overflow-hidden rounded-xl mb-6">
                                <Image
                                    src={insight.image}
                                    alt={insight.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-w-768px) 100vw, 33vw"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-[var(--primary-blue)] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                                        {insight.tag}
                                    </span>
                                </div>
                            </div>
                            <span className="text-[var(--text-gray)] text-xs mb-2 block uppercase tracking-wider font-medium">
                                {insight.date}
                            </span>
                            <h3 className="text-xl font-bold text-[var(--brand-black)] group-hover:text-[var(--primary-blue)] transition-colors line-clamp-2">
                                {insight.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        href="/insights"
                        className="btn-pill border-2 border-[var(--primary-blue)] text-[var(--primary-blue)] hover:bg-[var(--primary-blue)] hover:text-white"
                    >
                        Explore All Insights
                    </Link>
                </div>
            </div>
        </section>
    );
}
