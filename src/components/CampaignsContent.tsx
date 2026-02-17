"use client";

import { motion } from "framer-motion";

export default function CampaignsContent() {
    return (
        <section className="py-24 bg-white">
            <div className="container">
                {/* Intro Narrative */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center mb-24"
                >
                    <p className="text-xl text-[var(--text-gray)] leading-relaxed">
                        Our campaigns are designed to explore critical water challenges, convene stakeholders, and support approaches that strengthen sustainable and equitable water systems.
                    </p>
                </motion.div>

                {/* 1. Water Governance for Equity */}
                <section className="mb-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[var(--brand-black)]">1. Water Governance for Equity</h2>
                            <p className="text-[var(--text-gray)] text-lg leading-relaxed mb-8">
                                Sustainable water access depends not only on infrastructure, but on the institutions, incentives, and management systems that support it. This campaign examines how governance frameworks, financing models, and accountability mechanisms shape reliable and inclusive service delivery.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="bg-[var(--brand-black)] text-white p-10 md:p-14 rounded-3xl relative overflow-hidden group shadow-2xl"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary-blue)] opacity-10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:opacity-20 transition-opacity" />
                            <h4 className="text-[var(--primary-blue)] font-bold uppercase tracking-widest text-xs mb-6">Featured Initiative</h4>
                            <h3 className="text-2xl font-bold mb-6">Coastal Water Access Demonstration Initiative</h3>
                            <p className="text-white/70 mb-8 leading-relaxed italic">
                                Pairng small-scale infrastructure investments with sustainable management arrangements in coastal communities.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Exploring models for long-term O&M",
                                    "Strengthening local accountability",
                                    "Understanding financing & affordability",
                                    "Generating practical lessons for replication"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-sm font-medium">
                                        <div className="w-1.5 h-1.5 bg-[var(--primary-blue)] rounded-full shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </section>

                {/* 2. Protecting Natural Water Capital */}
                <section className="mb-32 py-24 border-y border-gray-100">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-[var(--brand-black)]">2. Protecting Natural Water Capital</h2>
                        <p className="text-[var(--text-gray)] text-lg leading-relaxed">
                            Water security is inseparable from the health of the natural systems that sustain it. This campaign promotes stewardship of groundwater, watersheds, and ecological resources.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            "Support sustainable resource management",
                            "Integrate environmental & delivery perspectives",
                            "Encourage long-term resilience in planning",
                            "Bridge scientific understanding with practice"
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[var(--primary-blue)] transition-all group"
                            >
                                <div className="w-10 h-10 bg-[var(--primary-blue)]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[var(--primary-blue)] transition-colors">
                                    <span className="text-[var(--primary-blue)] font-bold group-hover:text-white transition-colors">{idx + 1}</span>
                                </div>
                                <p className="text-[var(--brand-black)] font-bold leading-snug">{item}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* 3. Water Systems Learning & Innovation */}
                <section className="mb-32">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-[var(--brand-black)]">3. Water Systems Learning & Innovation</h2>
                        <p className="text-[var(--text-gray)] text-lg">
                            Addressing complex water challenges requires continuous learning and the exchange of ideas across disciplines and generations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {/* Africa Water Prize */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="p-10 md:p-14 bg-white border-2 border-[var(--primary-blue)]/20 rounded-3xl shadow-xl hover:shadow-2xl transition-all h-full flex flex-col"
                        >
                            <h3 className="text-3xl font-bold text-[var(--brand-black)] mb-6">Africa Water Prize</h3>
                            <p className="text-[var(--text-gray)] mb-8 flex-grow">
                                Recognising initiatives, practitioners, and institutions contributing to improved water stewardship across the continent.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Highlight practical innovations & leadership",
                                    "Encourage knowledge-sharing across regions",
                                    "Elevate solutions that strengthen equity"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3 text-sm font-bold text-[var(--brand-black)]">
                                        <span className="text-[var(--primary-blue)] font-black">✓</span>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Africa Junior Water Prize */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="p-10 md:p-14 bg-[var(--primary-blue)] text-white rounded-3xl shadow-xl hover:shadow-2xl transition-all h-full flex flex-col"
                        >
                            <h3 className="text-3xl font-bold mb-6">Africa Junior Water Prize</h3>
                            <p className="text-white/80 mb-8 flex-grow">
                                Engaging young people in addressing water challenges, encouraging curiosity, innovation, and early leadership.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Inspire the next generation of water thinkers",
                                    "Promote awareness of sustainable management",
                                    "Build long-term capacity for stewardship"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3 text-sm font-bold">
                                        <span className="text-white font-black">✓</span>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* How We Engage */}
                <section className="py-24 bg-[var(--brand-black)] rounded-[3rem] px-10 md:px-20 text-white relative overflow-hidden mb-32">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-blue)]/10 to-transparent" />
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-12 text-center underline decoration-[var(--primary-blue)] underline-offset-8">How We Engage</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-16">
                            {[
                                "Convening stakeholders for dialogue",
                                "Producing applied insights & discussion papers",
                                "Supporting pilot and demonstration initiatives",
                                "Bridging global research with local practice",
                                "Encouraging collaboration across institutions"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-6">
                                    <div className="w-12 h-12 rounded-full border border-[var(--primary-blue)] flex items-center justify-center shrink-0">
                                        <span className="text-[var(--primary-blue)] font-black text-xl">→</span>
                                    </div>
                                    <p className="text-lg font-medium text-white/90">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Collaborate With Us */}
                <section className="text-center py-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="max-w-2xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-[var(--brand-black)]">Collaborate With Us</h2>
                        <p className="text-[var(--text-gray)] text-lg mb-12">
                            We welcome partnerships with organisations, researchers, practitioners, and supporters interested in advancing sustainable water systems through evidence-informed engagement.
                        </p>
                        <a
                            href="mailto:hello@awordaboutwater.org"
                            className="btn-pill bg-[var(--primary-blue)] text-white px-12 py-5 text-xl font-bold shadow-2xl hover:scale-105 transition-all"
                        >
                            Start a Conversation
                        </a>
                    </motion.div>
                </section>
            </div>
        </section>
    );
}
