import React, { useState } from "react";
import { Menu, X, Home, User, Code, Briefcase, Mail, Cpu } from "lucide-react";

const navLinks = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Technologies", href: "#technology", icon: Cpu  },
    { name: "Projects", href: "#projects", icon: Code },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: Mail },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const id = href.substring(1);
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
    };

    return (
        <header className="sticky top-4 z-50 flex justify-center mb-10 md:mb-0">

            {/* NAV CONTAINER */}
            <div className="w-[95%] max-w-6xl bg-white/60 flex items-center justify-between h-18 px-6 rounded-2xl backdrop-blur-xl border-3 border-orange-200 pulse shadow-lg">

                {/* LOGO */}
                <a
                    href="#home"
                    onClick={(e) => scrollToSection(e, "#home")}
                    className="text-lg font-bold text-gray-900 tracking-tight"
                >
                    <span className="text-indigo-600">J.</span>Thakkar
                </a>

                {/* DESKTOP NAV */}
                <nav className="hidden md:flex items-center justify-center p-2">
                    <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 backdrop-blur border-1 border-blue-300 shadow-md animate-pulse-fade">

                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="relative px-4 py-2 text-sm font-medium text-gray-700 rounded-full transition-all duration-300 group"
                            >
                                {/* Hover Background */}
                                <span className="absolute inset-0 rounded-full bg-indigo-100 opacity-0 group-hover:opacity-100 transition duration-300"></span>

                                {/* Text */}
                                <span className="relative z-10 group-hover:text-indigo-600">
                  {link.name}
                </span>
                            </a>
                        ))}

                    </div>
                </nav>

                {/* MOBILE BUTTON */}
                <button
                    className="md:hidden text-gray-900 hover:text-indigo-600 p-2 rounded-md transition"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* MOBILE MENU */}
            {isOpen && (
                <div className="md:hidden absolute top-20 w-[95%] max-w-6xl bg-white/90 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-xl">
                    <div className="px-4 py-4 space-y-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-800 hover:bg-indigo-50 hover:text-indigo-600 transition"
                            >
                                <link.icon size={18} />
                                <span className="font-medium">{link.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}