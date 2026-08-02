import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    Menu,
    X,
    Home,
    User,
    Cpu,
    Code,
    Briefcase,
    Mail,
} from "lucide-react";

const navLinks = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Technologies", href: "#technology", icon: Cpu },
    { name: "Projects", href: "#projects", icon: Code },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: Mail },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (e, href) => {
        e.preventDefault();

        const id = href.substring(1);

        document
            .getElementById(id)
            ?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });

        setIsOpen(false);
    };

    return (
        <header className="sticky top-6 z-50 flex justify-center">

            {/* Floating Navbar */}

            <div
                className="
                    flex
                    h-16
                    w-[95%]
                    max-w-7xl
                    items-center
                    justify-between
                    rounded-full
                    border
                    border-[var(--border)]
                    bg-white/80
                    px-6
                    backdrop-blur-2xl
                    shadow-sm
                "
            >

                {/* Logo */}

                <a
                    href="#home"
                    onClick={(e) => scrollToSection(e, "#home")}
                    className="
                        text-xl
                        font-bold
                        tracking-tight
                        text-[var(--text-primary)]
                        transition-colors
                        hover:text-[var(--accent)]
                    "
                >
                    <span className="text-[var(--accent)]">
                        J.
                    </span>{" "}
                    Thakkar
                </a>

                {/* Desktop Navigation */}

                <nav className="hidden md:flex items-center gap-2">

                    {navLinks.map((link) => (

                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="
                                rounded-full
                                px-4
                                py-2
                                text-sm
                                font-medium
                                text-[var(--text-secondary)]
                                transition-all
                                duration-200
                                hover:bg-slate-100
                                hover:text-[var(--accent)]
                            "
                        >
                            {link.name}
                        </a>

                    ))}

                </nav>

                {/* Mobile Button */}

                <button
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="
                        rounded-full
                        p-2
                        text-[var(--text-primary)]
                        transition-colors
                        hover:bg-slate-100
                        md:hidden
                    "
                    aria-label="Toggle navigation"
                >
                    {isOpen ? (
                        <X size={22} />
                    ) : (
                        <Menu size={22} />
                    )}
                </button>

            </div>

            {/* Mobile Menu */}

            <AnimatePresence>

                {isOpen && (

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -10,
                            scale: 0.98,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                        }}
                        exit={{
                            opacity: 0,
                            y: -10,
                            scale: 0.98,
                        }}
                        transition={{
                            duration: 0.2,
                        }}
                        className="
                            absolute
                            top-20
                            w-[95%]
                            max-w-7xl
                            rounded-3xl
                            border
                            border-[var(--border)]
                            bg-white/90
                            p-4
                            shadow-xl
                            backdrop-blur-2xl
                            md:hidden
                        "
                    >

                        <nav className="flex flex-col">

                            {navLinks.map((link) => {

                                const Icon = link.icon;

                                return (

                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) =>
                                            scrollToSection(e, link.href)
                                        }
                                        className="
                                            flex
                                            items-center
                                            gap-3
                                            rounded-2xl
                                            px-4
                                            py-3
                                            text-[var(--text-secondary)]
                                            transition-all
                                            duration-200
                                            hover:bg-slate-100
                                            hover:text-[var(--accent)]
                                        "
                                    >

                                        <Icon size={18} />

                                        <span className="font-medium">
                                            {link.name}
                                        </span>

                                    </a>

                                );
                            })}

                        </nav>

                    </motion.div>

                )}

            </AnimatePresence>

        </header>
    );
}