"use client";

import { motion } from "framer-motion";

export default function WhoWeAre() {
    return (
        <section className="py-24 bg-white" id="who-we-are">
            <div className="container px-5">
                {/* Content Narrative */}
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-6"
                        >
                            <p className="text-xl font-bold text-[var(--brand-black)] leading-relaxed">
                                A Word About Water is a licensed non-governmental organization committed to advancing water justice, informed advocacy, and sustainable water systems.
                            </p>
                            <p className="text-[var(--text-gray)] leading-relaxed">
                                We were founded on a clear understanding that water challenges are not only technical problems — they are governance, equity, institutional, and knowledge problems. Across the world, significant investments continue to be made in water infrastructure, yet millions of people remain unserved or underserved because systems fail to prioritise inclusion, accountability, and long-term sustainability.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="space-y-6"
                        >
                            <p className="text-[var(--text-gray)] leading-relaxed italic border-l-4 border-[var(--primary-blue)] pl-6 py-2 bg-[var(--primary-blue)]/5 rounded-r-xl">
                                Evidence from the World Bank and other development institutions consistently shows that weak governance, fragmented institutions, and poor policy design are among the leading reasons water services fail to deliver equitable outcomes.
                            </p>
                            <p className="text-[var(--text-gray)] leading-relaxed">
                                A Word About Water positions itself at this intersection — where evidence, advocacy, and lived experience meet. At A Word About Water, we are building a credible platform that strengthens understanding, informs decision-making, and supports pathways toward fair and lasting water outcomes.
                            </p>
                        </motion.div>
                    </div>

                    {/* How We Work Section */}
                    <div className="mt-24 pt-24 border-t border-[var(--primary-blue)]/10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="lg:col-span-5"
                            >
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                    How We Work: A Research-Informed, Action-Oriented Organisation
                                </h2>
                                <p className="text-[var(--text-gray)] leading-relaxed text-lg">
                                    From its inception, A Word About Water has been shaped by a commitment to research, learning, and practical execution — not advocacy alone.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="lg:col-span-7 space-y-8"
                            >
                                <div>
                                    <h4 className="text-[var(--brand-black)] font-bold mb-4 flex items-center gap-3">
                                        <div className="w-1.5 h-6 bg-[var(--primary-blue)] rounded-full" />
                                        Evidence-Based Foundation
                                    </h4>
                                    <p className="text-[var(--text-gray)] mb-4">Our work is informed by academic and applied research across key areas:</p>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                                        {[
                                            "Water governance and regulation",
                                            "Access, affordability, and equity",
                                            "Institutional and policy design",
                                            "Innovation in water service delivery",
                                            "Community participation in water systems"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-[var(--text-gray)]">
                                                <span className="text-[var(--primary-blue)] font-bold">·</span> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-[var(--primary-blue)]/5 p-8 rounded-2xl border border-[var(--primary-blue)]/10">
                                    <h4 className="text-[var(--brand-black)] font-bold mb-4">Operational Role of Research</h4>
                                    <ul className="space-y-4">
                                        {[
                                            { title: "Diagnose", desc: "Root causes of water inequality beyond surface symptoms" },
                                            { title: "Design", desc: "Interventions responding to real institutional and community constraints" },
                                            { title: "Support", desc: "Implementation, monitoring, and learning across water initiatives" },
                                            { title: "Strengthen", desc: "Advocacy grounded in credible evidence for policymakers" }
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <span className="text-[var(--primary-blue)] font-black">→</span>
                                                <p className="text-[var(--text-gray)]">
                                                    <span className="text-[var(--brand-black)] font-bold">{item.title}:</span> {item.desc}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Ecosystem for Impact Section */}
                    <div className="mt-24 pt-24 border-t border-[var(--primary-blue)]/10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center max-w-3xl mx-auto mb-16"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Building an Ecosystem for Impact</h2>
                            <p className="text-[var(--text-gray)] text-lg">
                                We actively seek to collaborate with a diverse range of partners to connect ideas, actors, and resources that strengthen water systems.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            {[
                                "Community-based organisations",
                                "Researchers & Academic Institutions",
                                "Technology & Service Providers",
                                "NGOs & Development Partners",
                                "Public Institutions & Utilities",
                                "Water Entrepreneurs"
                            ].map((partner, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-6 bg-white border border-[var(--primary-blue)]/10 rounded-xl text-center flex flex-col items-center justify-center hover:shadow-lg hover:border-[var(--primary-blue)]/30 transition-all duration-300 group"
                                >
                                    <div className="text-[var(--brand-black)] font-bold text-sm leading-tight group-hover:text-[var(--primary-blue)] transition-colors">
                                        {partner}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mt-16 text-center max-w-4xl mx-auto"
                        >
                            <p className="text-[var(--text-gray)] leading-relaxed italic">
                                Through these partnerships, we support pilot projects, learning-oriented implementation, and scalable solutions that align evidence, policy, and practice. Our ambition is not to operate in isolation, but to connect ideas, actors, and resources in ways that strengthen water systems and improve outcomes on the ground.
                            </p>
                        </motion.div>
                    </div>

                    {/* Vision Statement - Classic Grounded Design */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-24 p-12 md:p-16 bg-[var(--brand-black)] rounded-2xl text-center relative overflow-hidden border border-[var(--primary-blue)]/20 shadow-2xl max-w-3xl mx-auto"
                    >
                        <div className="relative z-10">
                            <span className="text-[var(--primary-blue)] font-bold uppercase tracking-[0.3em] text-xs mb-8 block">Our Vision</span>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl text-white font-medium leading-relaxed max-w-4xl mx-auto italic underline decoration-[var(--primary-blue)]/30 underline-offset-8">
                                “A world where access to safe, affordable water is recognised and realised as a fundamental human right.”
                            </h3>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
