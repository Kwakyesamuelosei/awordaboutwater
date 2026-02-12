"use client";

import { motion } from "framer-motion";

const achievements = [
    { title: "Completed Projects", value: "140+" },
    { title: "Communities Served", value: "85k+" },
    { title: "Schools reached", value: "450+" },
    { title: "Active Volunteers", value: "1,200+" }
];

export default function Achievements() {
    return (
        <section className="py-24 bg-[var(--primary-blue)] text-white">
            <div className="container px-5">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    {achievements.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-5xl md:text-6xl font-bold mb-4">{item.value}</div>
                            <div className="text-sm md:text-base font-medium uppercase tracking-widest opacity-80">
                                {item.title}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
