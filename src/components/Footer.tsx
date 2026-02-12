"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-navy text-white py-24">
            <div className="container px-5">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Column 1: About */}
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-8">
                            <img
                                src="https://img1.wsimg.com/isteam/ip/a4404514-38e7-479f-b2e9-fa9671d3fbe3/A%20Word%20About%20Water%20Logo.png/:/rs=w:104,h:104,cg:true,m/cr=w:104,h:104/qt=q:95"
                                alt="A Word About Water Logo"
                                className="h-16 w-auto"
                            />
                            <span className="text-xl font-bold tracking-tight text-white uppercase">
                                A Word About Water
                            </span>
                        </Link>
                        <p className="text-white/80 text-sm leading-relaxed mb-8">
                            Every drop counts — so does every voice. Together, we can ensure that the next word about water is a word of hope, justice, and life.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Placeholders */}
                            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[var(--primary-blue)] transition-colors cursor-pointer text-white">f</div>
                            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[var(--primary-blue)] transition-colors cursor-pointer text-white">t</div>
                            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[var(--primary-blue)] transition-colors cursor-pointer text-white">i</div>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-8 text-white">Quick Links</h4>
                        <ul className="flex flex-col gap-4 text-white/80 text-sm">
                            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="#impact" className="hover:text-white transition-colors">Our Impact</Link></li>
                            <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Impact Areas */}
                    <div>
                        <h4 className="text-lg font-bold mb-8 text-white">Impact Areas</h4>
                        <ul className="flex flex-col gap-4 text-white/80 text-sm">
                            <li>Safe Water</li>
                            <li>Sanitation</li>
                            <li>Education</li>
                            <li>Environment</li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-8 text-white">Contact Us</h4>
                        <ul className="flex flex-col gap-4 text-white/80 text-sm">
                            <li>Email: info@awordaboutwater.org</li>
                            <li>Phone: +1 234 567 890</li>
                            <li>Address: Rural Wash Project Hubs, Global</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-20 pt-10 text-center text-gray-500 text-xs">
                    <p>&copy; {new Date().getFullYear()} Drop of Water. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
