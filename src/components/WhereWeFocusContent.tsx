"use client";

import { motion } from "framer-motion";

const focusAreas = [
    {
        title: "1. Water Access",
        intro: "Access to safe, reliable, and affordable water remains deeply unequal across communities — particularly in rural areas, informal settlements, and climate-vulnerable regions.",
        points: [
            "Barriers to equitable service delivery",
            "Affordability and reliability challenges",
            "Institutional and governance factors affecting access",
            "Community participation in water system design"
        ],
        practice: [
            "Supporting and learning from pilot initiatives that improve water access",
            "Exploring inclusive and innovative delivery models",
            "Strengthening understanding of why access gaps persist"
        ],
        goal: "Our goal is to contribute to water systems that serve people equitably and reliably, not just technically."
    },
    {
        title: "2. Advocacy and Public Awareness",
        intro: "Water outcomes are shaped by decisions — political, institutional, and social. We focus on advocacy to ensure that water challenges are visible and understood.",
        points: [
            "Elevating community voices and lived experiences",
            "Translating evidence into accessible narratives",
            "Contributing to policy dialogue and public debate",
            "Promoting water as a matter of justice and dignity"
        ],
        practice: null, // Custom implementation for advocacy
        goal: "Advocacy, for us, is evidence-based and constructive — aimed at improving understanding, accountability, and long-term outcomes."
    },
    {
        title: "3. Water Sustainability and Resilience",
        intro: "Climate change and environmental degradation are placing increasing pressure on water resources worldwide. Water systems must be environmentally sustainable and socially inclusive.",
        points: [
            "Sustainable water resource management",
            "Climate-resilient water systems",
            "Protection of water sources and ecosystems",
            "Community awareness around conservation"
        ],
        practice: null,
        goal: "By promoting sustainable practices and long-term thinking, we aim to support water systems that can withstand future shocks and stresses."
    },
    {
        title: "4. Research, Learning & Innovation",
        intro: "Research and learning underpin everything we do. We focus on generating and applying knowledge to strengthen water action.",
        points: [
            "Applied research on governance and equity",
            "Learning from pilot projects and partnerships",
            "Translating research into practical insights for policy",
            "Exploring innovation in service delivery and technology"
        ],
        practice: null,
        goal: "Through research and innovation, we aim to improve how water challenges are understood and support scalable, context-appropriate solutions."
    }
];

export default function WhereWeFocusContent() {
    return (
        <section className="py-24 bg-white">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center mb-24"
                >
                    <p className="text-xl text-[var(--text-gray)] leading-relaxed">
                        At A Word About Water, our focus areas reflect where evidence, advocacy, and collaboration can drive meaningful and lasting change. While we are a growing organisation, our work is intentionally structured to address both immediate challenges and long-term systemic issues.
                    </p>
                </motion.div>

                <div className="space-y-32">
                    {focusAreas.map((area, idx) => (
                        <div key={idx} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                            <motion.div
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className={idx % 2 !== 0 ? 'lg:order-2' : ''}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[var(--brand-black)]">{area.title}</h2>
                                <p className="text-[var(--text-gray)] text-lg leading-relaxed mb-8">{area.intro}</p>

                                <div className="space-y-4 mb-8">
                                    <h4 className="text-sm uppercase tracking-widest text-[var(--primary-blue)] font-extrabold">Key Focus Points</h4>
                                    <ul className="space-y-3">
                                        {area.points.map((point, pIdx) => (
                                            <li key={pIdx} className="flex items-start gap-3 text-[var(--brand-black)] font-medium">
                                                <div className="w-1.5 h-1.5 bg-[var(--primary-blue)] rounded-full mt-2 shrink-0" />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className={`bg-gray-50 p-10 md:p-14 rounded-3xl border border-gray-100 ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}
                            >
                                {area.practice && (
                                    <div className="mb-10">
                                        <h4 className="text-[var(--brand-black)] font-bold mb-6 flex items-center gap-3">
                                            <div className="w-6 h-[2px] bg-[var(--primary-blue)]" />
                                            In Practice
                                        </h4>
                                        <ul className="space-y-4">
                                            {area.practice.map((item, iIdx) => (
                                                <li key={iIdx} className="text-[var(--text-gray)] flex items-start gap-3">
                                                    <span className="text-[var(--primary-blue)]">→</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                <div className={`p-8 bg-white rounded-2xl border-l-4 border-[var(--primary-blue)] shadow-sm`}>
                                    <p className="text-[var(--brand-black)] font-bold leading-relaxed italic">
                                        “{area.goal}”
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
