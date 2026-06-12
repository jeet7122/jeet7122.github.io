import React, { useState, useEffect } from "react";
import { ArrowRight, CornerRightUp } from "lucide-react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import LottieAvatar from "./ui/LottieAvatar.jsx";

const heroSkills = [
    { name: "React", color: "text-blue-500", icon: <Icon icon="logos:react" /> },
    { name: "Java", color: "text-blue-600", icon: <Icon icon="logos:java" /> },
    { name: "Node.js", color: "text-green-500", icon: <Icon icon="logos:nodejs-icon" /> },
    { name: "Next.js", color: "text-black/70", icon: <Icon icon="logos:nextjs-icon" /> },
];

export default function HomeHero() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const i = setInterval(() => setIndex((p) => (p + 1) % heroSkills.length), 2500);
        return () => clearInterval(i);
    }, []);

    const skill = heroSkills[index];

    return (
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden">

            <div className="container grid lg:grid-cols-12 gap-12 items-center">

                {/* LEFT */}
                <div className="lg:col-span-6 space-y-8 text-center lg:text-left">

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
                    >
                        <span className='text-green-800'>Building Scalable Systems </span><br />
                        <span className="text-yellow-400/70">with Clean Code</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0"
                    >
                        I'm <span className="font-semibold text-gray-900">Jeet Thakkar</span>, a full-stack developer crafting
                        high-performance, distributed systems with real-world impact.
                    </motion.p>

                    {/* Skill badge */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border bg-white shadow-md"
                        >
                            <span className={`text-lg ${skill.color}`}>{skill.icon}</span>
                            <span className="text-sm font-medium text-gray-700">
                                Working with {skill.name}
                            </span>
                        </motion.div>
                    </AnimatePresence>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">

                        <a
                            href="#contact"
                            className="px-6 py-3 rounded-xl bg-indigo-600 text-white shadow-lg hover:shadow-xl hover:scale-[1.03] transition"
                        >
                            Hire Me <CornerRightUp className="inline ml-2 w-4 h-4" />
                        </a>

                        <a
                            href="/Jeet_Resume_SDE.pdf"
                            download
                            className="px-6 py-3 rounded-xl border-3 border-yellow-300 text-gray-700 hover:bg-gray-100 transition"
                        >
                            Resume <ArrowRight className="inline ml-2 w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="lg:col-span-6 flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-4 bg-white/10 shadow-2xl"
                    >
                        <LottieAvatar />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}