"use client";

import { motion } from "framer-motion";

const stats = [
    { value: "2.2 Billion", label: "Lack access to safely managed drinking water", source: "UNICEF & WHO" },
    { value: "3.5 Billion", label: "Lack safely managed sanitation services", source: "UNICEF & WHO" },
    { value: "1 Million+", label: "Preventable deaths annually from unsafe water", source: "World Health Organization" },
    { value: "700+", label: "Children under five die every day from water-linked diseases", source: "UNICEF" },
    { value: "200 Million", label: "Hours spent daily by women and girls collecting water", source: "UNICEF & World Bank" },
    { value: "40%", label: "Global population already experiencing water scarcity", source: "UN-Water" },
];

export default function WhyWaterContent() {
    return (
        <section className="py-24 bg-white">
            <div className="container">
                {/* The Scale of the Crisis */}
                <div className="mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">The Scale of the Global Water Crisis</h2>
                        <p className="text-[var(--text-gray)] text-lg">
                            Authoritative global institutions paint a stark picture of the challenges facing billions today.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="p-8 bg-gray-50 rounded-2xl border-l-4 border-[var(--primary-blue)] shadow-sm hover:shadow-md transition-all"
                            >
                                <div className="text-3xl font-bold text-[var(--brand-black)] mb-2">{stat.value}</div>
                                <p className="text-[var(--text-gray)] mb-4 font-medium">{stat.label}</p>
                                <div className="text-[10px] uppercase tracking-widest text-[var(--primary-blue)] font-bold">{stat.source}</div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="mt-12 text-center max-w-4xl mx-auto p-8 bg-[var(--primary-blue)]/5 rounded-2xl italic text-[var(--text-gray)]"
                    >
                        International development organizations consistently document how inadequate water access entrenches poverty, undermines health systems, weakens education outcomes, and deepens inequality — particularly for women, children, and marginalised communities.
                    </motion.div>
                </div>

                {/* Why the Problem Persists */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[var(--brand-black)]">Why the Problem Persists</h2>
                        <p className="text-[var(--text-gray)] text-lg leading-relaxed mb-6">
                            Despite decades of global commitments, progress remains slow and uneven because water challenges are deeply systemic. Research by the World Bank, UNDP, and leading water NGOs highlight recurring drivers:
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Fragmented governance & weak institutions",
                                "Inequitable service delivery between urban and rural areas",
                                "Affordability barriers even where infrastructure exists",
                                "Policy decisions disconnected from community realities",
                                "Increasing climate stress from floods and droughts"
                            ].map((driver, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-[var(--brand-black)] font-medium">
                                    <div className="w-2 h-2 bg-[var(--primary-blue)] rounded-full" />
                                    {driver}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bg-[var(--brand-black)] p-12 rounded-3xl text-white relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary-blue)] opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <h3 className="text-2xl font-bold mb-6 text-[var(--primary-blue)]">Beyond Engineering</h3>
                        <p className="text-xl leading-relaxed font-light italic">
                            “Too often, water is treated as a narrow engineering problem. In reality, it is a political, economic, social, and institutional challenge.”
                        </p>
                    </motion.div>
                </div>

                {/* Why Now */}
                <div className="pt-24 border-t border-gray-100 text-center max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold mb-10 text-[var(--brand-black)]"
                    >
                        Why Now
                    </motion.h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
                        {["Public Health", "Food Security", "Energy Systems", "Climate Resilience", "Economic Productivity"].map((item, idx) => (
                            <div key={idx} className="p-4 bg-white border border-gray-200 rounded-xl text-sm font-bold text-[var(--brand-black)] hover:border-[var(--primary-blue)] transition-colors">
                                {item}
                            </div>
                        ))}
                    </div>
                    <div className="space-y-6 text-left text-[var(--text-gray)] leading-relaxed text-lg">
                        <p>
                            Yet progress toward Sustainable Development Goal 6 — Clean Water and Sanitation for All by 2030 is significantly off track, according to the United Nations. Without accelerated, better-informed action, hundreds of millions of people will remain without safe water for decades.
                        </p>
                        <p className="text-[var(--brand-black)] font-bold border-l-4 border-[var(--primary-blue)] pl-6 py-4 bg-gray-50 rounded-r-xl">
                            This moment demands stronger evidence, inclusive governance, and credible advocacy — connecting research with lived experience and practical action.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
