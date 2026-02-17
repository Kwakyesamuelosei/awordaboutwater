"use client";

import { motion } from "framer-motion";

const actionSections = [
    {
        title: "Partner With Us",
        description: "We collaborate with organisations working to strengthen water systems through research, dialogue, and applied learning. We welcome partnerships with NGOs, utilities, academic institutions, and development actors.",
        cta: "Start a Conversation",
        href: "mailto:hello@awordaboutwater.org",
        theme: "dark"
    },
    {
        title: "Share Insights and Practice",
        description: "We invite practitioners and researchers to contribute perspectives, case studies, and lessons that advance understanding of sustainable water service delivery.",
        cta: "Submit an Idea",
        href: "mailto:hello@awordaboutwater.org",
        theme: "light"
    },
    {
        title: "Stay Informed",
        description: "Follow our insights, publications, and sector opportunities to remain connected to evolving discussions on water governance and sustainability.",
        cta: "Follow on LinkedIn",
        href: "https://www.linkedin.com/company/a-word-about-water/",
        theme: "blue"
    },
    {
        title: "Support Evidence-Based Water Work",
        description: "Support enables research, dialogue, and initiatives that strengthen sustainable water systems. If you are interested in supporting this work, we welcome a conversation.",
        cta: "Learn About Supporting",
        href: "#donate", // Assuming donate section on homepage or a new page
        theme: "outline"
    }
];

export default function TakeActionContent() {
    return (
        <section className="py-24 bg-white">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {actionSections.map((section, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className={`p-10 md:p-14 rounded-3xl flex flex-col h-full shadow-lg transition-transform hover:-translate-y-2 duration-300 ${section.theme === 'dark' ? 'bg-[var(--brand-black)] text-white' :
                                    section.theme === 'blue' ? 'bg-[var(--primary-blue)] text-white shadow-blue-200' :
                                        section.theme === 'outline' ? 'bg-white border-2 border-[var(--primary-blue)] text-[var(--brand-black)]' :
                                            'bg-gray-50 border border-gray-100 text-[var(--brand-black)]'
                                }`}
                        >
                            <h3 className="text-2xl md:text-3xl font-bold mb-6">{section.title}</h3>
                            <p className={`${section.theme === 'dark' || section.theme === 'blue' ? 'text-white/80' : 'text-[var(--text-gray)]'
                                } text-lg leading-relaxed mb-10 flex-grow`}>
                                {section.description}
                            </p>
                            <div>
                                <a
                                    href={section.href}
                                    className={`btn-pill text-center w-full md:w-auto px-10 py-4 font-bold text-sm uppercase tracking-widest transition-all ${section.theme === 'dark' ? 'bg-[var(--primary-blue)] text-white shadow-[#2FA4DD]/20' :
                                            section.theme === 'blue' ? 'bg-white text-[var(--primary-blue)]' :
                                                section.theme === 'outline' ? 'bg-[var(--primary-blue)] text-white shadow-[#2FA4DD]/20' :
                                                    'bg-[var(--brand-black)] text-white shadow-black/20'
                                        }`}
                                >
                                    {section.cta}
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-24 text-center max-w-3xl mx-auto p-12 bg-gray-50 rounded-[2rem] border border-gray-100 shadow-inner"
                >
                    <p className="text-[var(--text-gray)] leading-relaxed italic text-lg">
                        “Improving water outcomes is not a solo journey. It requires the convergence of global research, local practice, and a shared commitment to water justice.”
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
