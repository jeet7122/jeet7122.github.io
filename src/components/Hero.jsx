import React, {useState, useEffect} from "react";
import {Zap, ArrowRight, CornerRightUp} from "lucide-react";
import {Icon} from "@iconify/react";
import {motion, AnimatePresence} from "framer-motion";
import {ProfileAvatar} from "./ProfileAvatar.jsx";

const heroSkills = [
    {name: "React", color: "text-blue-400", icon: <Icon icon="logos:react"/>},
    {name: "JavaFX", color: "text-white", icon: "▲"},
    {name: "Tailwind", color: "text-cyan-400", icon: <Icon icon="logos:tailwindcss-icon"/>},
    {name: "Java", color: "text-blue-500", icon: <Icon icon="logos:java"/>},
    {name: "Node.js", color: "text-green-500", icon: <Icon icon="logos:nodejs-icon"/>},
    {name: "MYSQL", color: "text-yellow-500", icon: <Icon icon="logos:mysql-icon"/>},
    {name: "Next.js", color: "text-white/60", icon: <Icon icon="logos:nextjs-icon"/>},
    {name: "TypeScript", color: "text-blue-600", icon: <Icon icon="logos:typescript-icon"/>},
];

// Text animation variants
const textContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

const textItem = {
    hidden: {opacity: 0, y: 16},
    show: {
        opacity: 1,
        y: 0,
        transition: {duration: 0.6, ease: "easeOut"},
    },
};

export default function HomeHero() {
    const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(
            () => setCurrentSkillIndex((i) => (i + 1) % heroSkills.length),
            3000
        );
        return () => clearInterval(interval);
    }, []);

    const currentSkill = heroSkills[currentSkillIndex];

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const id = href.substring(1);
        document.getElementById(id)?.scrollIntoView({behavior: "smooth"});
    };

    return (
        <section id="home" className="pt-24 lg:min-h-[85vh] flex items-start bg-background">
            <motion.div
                initial={{opacity: 0, y: 24}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.7, ease: "easeOut"}}
                className="w-full"
            >
                <div className="container grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* LEFT */}
                    <div className="order-2 lg:order-1 space-y-8 lg:col-span-8 text-center lg:text-left">
                        <motion.div
                            variants={textContainer}
                            initial="hidden"
                            animate="show"
                            className="space-y-4"
                        >
                            <motion.h1
                                variants={textItem}
                                className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight"
                            >
                                Hi, I'm{" "}
                                <span className="text-indigo-400">Jeet Thakkar</span>.
                            </motion.h1>

                            <motion.h2
                                variants={textItem}
                                className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-gray-400 flex justify-center lg:justify-start items-center space-x-3"
                            >
                                <Zap className="w-6 h-6 text-indigo-400"/>
                                <span>Software Developer</span>
                            </motion.h2>
                            <motion.div
                                variants={textItem}
                                className="flex justify-center lg:justify-start"
                            >
                                <div
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-indigo-800 text-sm font-medium">
                                    🏆 1st Place - ST. Clair IT CLUB Hackathon Winner - 2026
                                    <span className="text-gray-400 hidden sm:inline">
            (Built real-time system in 4 hours)
        </span>
                                </div>
                            </motion.div>

                            <motion.p
                                variants={textItem}
                                className="text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0"
                            >
                                Backend-focused engineer building distributed, event-driven systems with a focus on performance, scalability, and real-time processing.
                            </motion.p>
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                            variants={textContainer}
                            initial="hidden"
                            animate="show"
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <motion.a
                                variants={textItem}
                                href="#contact"
                                onClick={(e) => scrollToSection(e, "#contact")}
                                whileHover={{scale: 1.04}}
                                whileTap={{scale: 0.96}}
                                className="text-white/70 inline-flex items-center justify-center px-8 py-3 rounded-xl shadow-lg btn-primary focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
                            >
                                Hire Me!
                                <CornerRightUp className="ml-2 w-4 h-4"/>
                            </motion.a>

                            <motion.a
                                variants={textItem}
                                href="/$Jeet_Resume_SDE.pdf"
                                download="Jeet-Thakkar-Resume.pdf"
                                whileHover={{scale: 1.04}}
                                whileTap={{scale: 0.96}}
                                className="inline-flex items-center justify-center px-8 py-3 rounded-xl border border-indigo-400 text-indigo-400 hover:bg-indigo-900 hover:text-white focus:ring-4 focus:ring-indigo-400 focus:ring-opacity-50"
                            >
                                Download Resume
                                <ArrowRight className="ml-2 w-4 h-4"/>
                            </motion.a>
                        </motion.div>

                        {/* Skill Rotator */}
                        <div
                            className="mt-8 pt-4 border-t border-gray-800 flex flex-wrap gap-4 justify-center lg:justify-start">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentSkill.name}
                                    initial={{opacity: 0, y: 10, scale: 0.95}}
                                    animate={{opacity: 1, y: 0, scale: 1}}
                                    exit={{opacity: 0, y: -10, scale: 0.95}}
                                    transition={{duration: 0.4}}
                                    className={`flex items-center space-x-2 p-3 rounded-full bg-gray-800 shadow-xl border-2 border-indigo-500/50 ${currentSkill.color}`}
                                >
                                    <span className="text-xl">{currentSkill.icon}</span>
                                    <span className="font-mono text-sm font-semibold">
                    {currentSkill.name}
                  </span>
                                </motion.div>
                            </AnimatePresence>

                            <span className="text-sm font-medium text-gray-500 self-center">
                ... and more.
              </span>
                        </div>
                    </div>
                    {/* RIGHT */}
                    <div className="order-1 lg:order-2 lg:col-span-4 flex justify-center lg:justify-end mt-10 lg:mt-0">
                        <motion.div
                            initial={{opacity: 0, scale: 0.96}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{delay: 0.2, duration: 0.6, ease: "easeOut"}}
                            className="relative"
                        >
                            <ProfileAvatar src="imgs/jeet.png" alt="Profile Picture" initials="JT"/>
                        </motion.div>
                    </div>

                </div>
            </motion.div>
        </section>
    );
}
