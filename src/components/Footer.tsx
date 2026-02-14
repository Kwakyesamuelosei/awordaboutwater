"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const [year, setYear] = useState<number | null>(null);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="bg-navy text-white py-24">
            <div className="container px-5">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Column 1: About */}
                    <div className="md:col-span-1">
                        <Link href="/" className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-8" id="footer-logo">
                            <Image
                                src="https://img1.wsimg.com/isteam/ip/a4404514-38e7-479f-b2e9-fa9671d3fbe3/A%20Word%20About%20Water%20Logo.png/:/rs=w:104,h:104,cg:true,m/cr=w:104,h:104/qt=q:95"
                                alt="A Word About Water Logo"
                                width={104}
                                height={104}
                                className="h-16 w-auto"
                            />
                            <div className="text-center md:text-left flex flex-col gap-1">
                                <span className="text-2xl font-black tracking-tighter text-white uppercase block">
                                    A Word About Water
                                </span>
                                <div className="space-y-0.5">
                                    <span className="text-sm font-bold tracking-widest text-white/60 block">
                                        One Word Can Change Everything.
                                    </span>
                                    <span className="text-base font-semibold text-[var(--primary-blue)] block leading-tight">
                                        Let&apos;s Make It About Water
                                    </span>
                                </div>
                            </div>
                        </Link>
                        <p className="text-white/80 text-sm leading-relaxed mb-8 text-center md:text-left max-w-sm mx-auto md:mx-0">
                            Every drop counts — so does every voice. Together, we can ensure that the next word about water is a word of hope, justice, and life.
                        </p>
                        <div className="flex justify-center md:justify-start gap-4">
                            {/* Social Placeholders with improved tap targets */}
                            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-[var(--primary-blue)] transition-colors cursor-pointer text-white">f</div>
                            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-[var(--primary-blue)] transition-colors cursor-pointer text-white">t</div>
                            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-[var(--primary-blue)] transition-colors cursor-pointer text-white">i</div>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="text-center md:text-left">
                        <h4 className="text-lg font-bold mb-8 text-white">Quick Links</h4>
                        <ul className="flex flex-col gap-4 text-white/80 text-sm">
                            <li><Link href="/" className="hover:text-white transition-colors py-2 block md:inline">Home</Link></li>
                            <li><Link href="#about" className="hover:text-white transition-colors py-2 block md:inline">About Us</Link></li>
                            <li><Link href="#impact" className="hover:text-white transition-colors py-2 block md:inline">Our Impact</Link></li>
                            <li><Link href="#contact" className="hover:text-white transition-colors py-2 block md:inline">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Impact Areas */}
                    <div className="text-center md:text-left">
                        <h4 className="text-lg font-bold mb-8 text-white">Impact Areas</h4>
                        <ul className="flex flex-col gap-4 text-white/80 text-sm">
                            <li className="py-1">Safe Water</li>
                            <li className="py-1">Sanitation</li>
                            <li className="py-1">Education</li>
                            <li className="py-1">Environment</li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div className="text-center md:text-left">
                        <h4 className="text-lg font-bold mb-8 text-white">Contact Us</h4>
                        <ul className="flex flex-col gap-4 text-white/80 text-sm px-4 md:px-0">
                            <li className="py-1">Email: info@awordaboutwater.org</li>
                            <li className="py-1">Phone: +1 234 567 890</li>
                            <li className="py-1 text-balance">Address: Rural Wash Project Hubs, Global</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-20 pt-10 text-center text-gray-500 text-xs">
                    <p>&copy; {year || "..."} A Word About Water. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
