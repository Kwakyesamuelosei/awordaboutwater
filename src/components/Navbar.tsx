"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        {
            name: "About Us",
            href: "#",
            dropdown: [
                { name: "Who We Are", href: "#who-we-are" },
                { name: "Why Water", href: "#why-water" },
                { name: "Where We Focus", href: "#where-we-focus" },
                { name: "Our Team", href: "#our-team" },
            ]
        },
        { name: "Our Campaigns", href: "#campaigns" },
        { name: "Take Action", href: "#take-action" },
        { name: "Insights", href: "#insights" },
        { name: "Press Releases", href: "#press" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-white shadow-lg py-3" : "bg-transparent py-5"
                }`}
        >
            <div className="container flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2" id="navbar-logo-link">
                    <Image
                        src="https://img1.wsimg.com/isteam/ip/a4404514-38e7-479f-b2e9-fa9671d3fbe3/A%20Word%20About%20Water%20Logo.png/:/rs=w:104,h:104,cg:true,m/cr=w:104,h:104/qt=q:95"
                        alt="A Word About Water Logo"
                        width={104}
                        height={104}
                        className="h-12 md:h-16 w-auto"
                        priority
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-6 xl:gap-8 font-medium">
                    {navLinks.map((link) => (
                        <div
                            key={link.name}
                            className="relative group h-full"
                            onMouseEnter={() => link.dropdown && setAboutDropdownOpen(true)}
                            onMouseLeave={() => link.dropdown && setAboutDropdownOpen(false)}
                        >
                            <Link
                                href={link.href}
                                className={`text-sm tracking-widest uppercase transition-colors ${scrolled ? "text-[var(--brand-black)] hover:text-[var(--primary-blue)]" : "text-white hover:text-[var(--primary-blue)]"}`}
                            >
                                {link.name}
                                {link.dropdown && <span className="ml-1 text-[8px]">▼</span>}
                            </Link>

                            {/* Dropdown */}
                            {link.dropdown && (
                                <AnimatePresence>
                                    {aboutDropdownOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-lg py-2 overflow-hidden"
                                        >
                                            {link.dropdown.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    className="block px-4 py-2 text-sm text-[var(--brand-black)] hover:bg-gray-50 hover:text-[var(--primary-blue)] transition-colors"
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            )}
                        </div>
                    ))}
                    <Link
                        href="#donate"
                        id="desktop-donate-button"
                        className={`px-8 py-2 rounded-full font-bold transition-all shadow-md uppercase text-sm ${scrolled
                            ? "bg-[var(--brand-black)] text-white hover:bg-[var(--primary-blue)]"
                            : "bg-white text-[var(--brand-black)] hover:bg-[var(--primary-blue)] hover:text-white"
                            }`}
                    >
                        DONATE
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    id="mobile-menu-toggle"
                    className={`lg:hidden text-2xl ${scrolled ? "text-[var(--brand-black)]" : "text-white"}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-white p-5 lg:hidden shadow-xl"
                    >
                        <ul className="flex flex-col gap-4 font-semibold">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-[var(--brand-black)] block"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                    {link.dropdown && (
                                        <ul className="ml-4 mt-2 flex flex-col gap-2">
                                            {link.dropdown.map((subItem) => (
                                                <li key={subItem.name}>
                                                    <Link
                                                        href={subItem.href}
                                                        className="text-[var(--brand-black)] opacity-70 text-sm"
                                                        onClick={() => setMobileMenuOpen(false)}
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                            <li>
                                <Link
                                    href="#donate"
                                    className="bg-[var(--brand-black)] text-white px-6 py-2 rounded-full block text-center mt-2 uppercase text-sm"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    DONATE
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
