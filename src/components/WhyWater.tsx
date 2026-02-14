"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function WhyWater() {
    return (
        <section className="py-24 bg-white" id="why-water">
            <div className="container px-5">
                {/* Standardized Header matching Focus Areas */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-[var(--brand-black)]"
                    >
                        Why Water Matters
                    </motion.h2>
                </div>

                <div className="w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-[#F9FAFB] rounded-[3rem] p-10 md:p-20 border border-gray-200 shadow-sm relative overflow-hidden group"
                    >
                        {/* Decorative background accent */}
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--primary-blue)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[var(--primary-blue)]/10 transition-colors duration-700" />

                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 text-lg md:text-xl lg:text-2xl leading-[1.6] text-[var(--brand-black)] font-medium">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="md:pr-8"
                            >
                                <p>
                                    Water challenges today are less about <span className="text-[var(--primary-blue)] font-bold">physical scarcity</span> <br className="hidden xl:block" />
                                    and more about how water is <span className="text-[var(--primary-blue)] font-bold">governed, financed, and sustained</span>.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="md:border-l-2 md:border-gray-200 md:pl-12 lg:pl-16"
                            >
                                <p>
                                    Systems fail not because solutions are <span className="text-[var(--primary-blue)] font-bold">unknown</span>, <br className="hidden xl:block" />
                                    but because <span className="text-[var(--primary-blue)] font-bold">institutions and long-term management</span> are weak.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="lg:border-l-2 lg:border-gray-200 lg:pl-16 md:col-span-2 lg:col-span-1"
                            >
                                <p>
                                    Addressing water access requires <span className="text-[var(--primary-blue)] font-bold">strengthening the systems</span> <br className="hidden xl:block" />
                                    that deliver, manage, and protect water – not only <span className="text-[var(--primary-blue)] font-bold">building infrastructure</span>.
                                </p>
                            </motion.div>
                        </div>

                        <div className="mt-20 pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-center items-center gap-6 group/link relative z-10">
                            <Link
                                href="/why-water"
                                className="text-[var(--primary-blue)] font-bold text-lg inline-flex items-center gap-3"
                            >
                                <span className="group-hover/link:translate-x-1 transition-transform inline-block">→</span> Explore Why Water Matters
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
