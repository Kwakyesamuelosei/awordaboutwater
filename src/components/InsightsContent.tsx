"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const categories = [
    {
        title: "Systems & Governance",
        description: "Water outcomes are shaped as much by institutions and incentives as by infrastructure. This section examines how governance frameworks, financing models, and accountability mechanisms influence sustainability and equity.",
        url: "/insights/systems-governance",
        accent: "border-l-[var(--primary-blue)]"
    },
    {
        title: "Service Delivery & Practice",
        description: "Delivering water services requires more than installation — it requires sustained operation, maintenance, and performance. We focus on how utilities and rural service models function in reality.",
        url: "/insights/service-delivery",
        accent: "border-l-[var(--brand-black)]"
    },
    {
        title: "Water, Climate & Sustainability",
        description: "Climate variability and environmental pressures increasingly shape water security. We explore how water systems adapt to changing hydrological conditions and build resilience to future shocks.",
        url: "/insights/climate-sustainability",
        accent: "border-l-[var(--primary-blue)]"
    },
    {
        title: "Data, Evidence & Innovation",
        description: "Effective water management depends on credible data, analysis, and adaptive learning. We look at how evidence and innovative monitoring systems inform better responsive water governance.",
        url: "/insights/data-innovation",
        accent: "border-l-[var(--brand-black)]"
    }
];

export default function InsightsContent() {
    return (
        <section className="py-24 bg-white">
            <div className="container">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <p className="text-xl text-[var(--text-gray)] leading-relaxed">
                        At A Word About Water, we believe that evidence is the foundation of effective water action. Our insights are structured across four thematic areas to help stakeholders navigate the complexity of water systems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {categories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className={`group p-10 md:p-14 bg-gray-50 border-l-8 ${category.accent} rounded-r-[2rem] hover:bg-white hover:shadow-2xl transition-all duration-300 flex flex-col`}
                        >
                            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--brand-black)] group-hover:text-[var(--primary-blue)] transition-colors">
                                {category.title}
                            </h3>
                            <p className="text-[var(--text-gray)] text-lg leading-relaxed mb-10 flex-grow">
                                {category.description}
                            </p>
                            <div className="flex items-center justify-between">
                                <Link
                                    href={category.url}
                                    className="text-[var(--primary-blue)] font-bold text-sm uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all"
                                >
                                    Explore Theme <span>→</span>
                                </Link>
                                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--primary-blue)] opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                                    <span className="font-bold">{idx + 1}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Newsletter / Stay Informed Hint */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-24 p-12 bg-[var(--brand-black)] rounded-[3rem] text-center text-white relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-blue)]/20 to-transparent" />
                    <div className="relative z-10">
                        <h4 className="text-2xl font-bold mb-4">Stay Connected to the Evidence</h4>
                        <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                            Follow our latest publications and insights to remain at the forefront of evolving discussions on water governance.
                        </p>
                        <Link
                            href="/take-action"
                            className="btn-pill bg-[var(--primary-blue)] text-white px-10 py-4 font-bold"
                        >
                            Follow Our Insights
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
