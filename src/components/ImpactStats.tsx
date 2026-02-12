"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const Counter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView) {
            let start = 0;
            const end = value;
            const totalSteps = 60;
            const increment = end / totalSteps;
            const stepTime = (duration * 1000) / totalSteps;

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start * 10) / 10);
                }
            }, stepTime);

            return () => clearInterval(timer);
        }
    }, [inView, value, duration]);

    return <span ref={ref}>{count}</span>;
};

export default function ImpactStats() {
    return (
        <section className="py-24 bg-white" id="impact">
            <div className="container">
                <h2 className="section-title">Why Water?</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center">
                    {/* Stat 1: Water Drop Graphic */}
                    <div className="flex flex-col items-center text-center">
                        <div className="relative w-48 h-48 mb-6">
                            <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-[var(--primary-blue)] stroke-2">
                                <path d="M50,5 C50,5 20,40 20,70 A30,30 0 1,0 80,70 C80,40 50,5 50,5 Z" />
                            </svg>
                            <motion.div
                                initial={{ height: 0 }}
                                whileInView={{ height: "40%" }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="absolute bottom-[10%] left-[20%] right-[20%] bg-[var(--primary-blue)] rounded-b-full overflow-hidden"
                                style={{
                                    clipPath: "path('M50,5 C50,5 20,40 20,70 A30,30 0 1,0 80,70 C80,40 50,5 50,5 Z')",
                                    bottom: "10px"
                                }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-4xl font-bold text-[var(--primary-blue)]">
                                    <Counter value={40} />%
                                </span>
                            </div>
                        </div>
                        <h3 className="text-xl mb-4">Lack access to basic sanitation</h3>
                        <p className="text-sm">In rural communities we serve.</p>
                    </div>

                    {/* Stat 2 */}
                    <div className="flex flex-col items-center text-center">
                        <div className="text-7xl font-bold text-[var(--primary-blue)] mb-6">
                            <Counter value={52.6} />%
                        </div>
                        <h3 className="text-xl mb-4">Water Coverage</h3>
                        <p className="text-sm">Increase in sustainable water access across project areas.</p>
                    </div>

                    {/* Stat 3 */}
                    <div className="flex flex-col items-center text-center">
                        <div className="text-7xl font-bold text-[var(--primary-blue)] mb-6">
                            <Counter value={68.2} />%
                        </div>
                        <h3 className="text-xl mb-4">Hygienic Practice</h3>
                        <p className="text-sm">Communities practicing safe hygiene and sanitation.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
