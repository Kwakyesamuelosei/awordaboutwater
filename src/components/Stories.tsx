"use client";

import { motion } from "framer-motion";

const stories = [
    {
        title: "Community Water Systems",
        location: "Rural Ethiopia",
        image: "https://images.unsplash.com/photo-1760873059715-7c7cfbe2a2c6?auto=format&fit=crop&q=80&w=800",
        description: "Supporting local communities in developing sustainable water infrastructure through participatory planning."
    },
    {
        title: "School WASH Programs",
        location: "Kajiado, Kenya",
        image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800",
        description: "Transforming educational environments by providing clean water and sanitary facilities for thousands of students."
    },
    {
        title: "Women Empowerment",
        location: "Tanzania",
        image: "https://images.unsplash.com/photo-1709224742360-5210e9a9f43a?auto=format&fit=crop&q=80&w=800",
        description: "Reducing the burden of water collection for women and girls, allowing more time for education and economic activities."
    }
];

export default function Stories() {
    return (
        <section className="py-24 bg-[var(--background-light)]" id="impact">
            <div className="container">
                <div className="text-center mb-16">
                    <span className="text-[var(--primary-blue)] font-bold tracking-widest uppercase text-sm mb-4 block">
                        Our Impact
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary-blue)]">
                        Success Stories
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stories.map((story, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                        >
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={story.image}
                                    alt={story.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-8">
                                <span className="text-[var(--primary-blue)] font-bold text-xs uppercase tracking-widest mb-2 block">
                                    {story.location}
                                </span>
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-[var(--primary-blue)] transition-colors">
                                    {story.title}
                                </h3>
                                <p className="text-[var(--text-gray)] text-sm leading-relaxed mb-6">
                                    {story.description}
                                </p>
                                <a href="#" className="text-[var(--primary-blue)] font-bold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all">
                                    Read Full Story <span>→</span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
