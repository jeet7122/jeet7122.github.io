import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const lines = [
    "$ initialize_connection",
    "",
    "Loading engineering profile...",
    "Projects ............. ✓",
    "Experience ........... ✓",
    "Education ............ ✓",
    "Skills ............... ✓",
    "",
    "Ready to build together.",
];

export default function Terminal() {
    const [visibleLines, setVisibleLines] = useState([]);

    useEffect(() => {
        let index = 0;

        setVisibleLines([]);

        const interval = setInterval(() => {
            if (index >= lines.length) {
                clearInterval(interval);
                return;
            }

            setVisibleLines((prev) => [...prev, lines[index]]);
            index++;
        }, 250);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 30,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.25,
            }}
            transition={{
                duration: 0.6,
            }}
            className="mx-auto mt-24 max-w-5xl overflow-hidden rounded-3xl border border-[var(--border)] bg-[#0F172A] shadow-xl"
        >
            {/* Window Bar */}

            <div className="flex items-center gap-2 border-b border-slate-700 bg-slate-900 px-5 py-4">

                <span className="h-3 w-3 rounded-full bg-red-500" />

                <span className="h-3 w-3 rounded-full bg-yellow-500" />

                <span className="h-3 w-3 rounded-full bg-green-500" />

                <span className="ml-4 text-sm text-slate-400">
                    terminal
                </span>

            </div>

            {/* Terminal */}

            <div className="min-h-[280px] space-y-2 p-8 font-mono text-sm">

                {visibleLines.map((line, index) => (

                    <motion.div
                        key={index}
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                    >
                        {line?.startsWith("$") ? (
                            <span className="text-emerald-400">
                                {line}
                            </span>
                        ) : (
                            <span className="text-slate-300">
                                {line}
                            </span>
                        )}
                    </motion.div>

                ))}

                {/* Cursor */}

                <motion.span
                    animate={{
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 1,
                    }}
                    className="inline-block h-5 w-2 bg-emerald-400"
                />

            </div>

        </motion.div>
    );
}