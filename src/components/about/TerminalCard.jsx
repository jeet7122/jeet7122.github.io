import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TerminalCommand from "./TerminalCommand";
import { terminalCommands } from "./terminalCommands";

export default function TerminalCard() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % terminalCommands.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{
                opacity: 0,
                x: 40,
            }}
            whileInView={{
                opacity: 1,
                x: 0,
            }}
            viewport={{
                once: true,
                amount: 0.4,
            }}
            transition={{
                duration: 0.7,
            }}
            className="
                overflow-hidden
                rounded-[28px]
                border
                border-slate-700
                bg-[#0B1120]
                shadow-2xl
            "
        >
            {/* Header */}

            <div
                className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-slate-800
                    px-6
                    py-4
                "
            >
                <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>

                <span className="text-xs tracking-widest uppercase text-slate-500">
                    portfolio.dev
                </span>
            </div>

            {/* Body */}

            <div
                className="
                    relative
                    h-[340px]
                    overflow-hidden
                    p-8
                    font-mono
                "
            >
                <AnimatePresence mode="wait">
                    <TerminalCommand
                        key={current}
                        command={terminalCommands[current].command}
                        output={terminalCommands[current].output}
                    />
                </AnimatePresence>

                {/* Blinking Cursor */}

                <motion.span
                    animate={{
                        opacity: [1, 0, 1],
                    }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                    }}
                    className="
                        relative
                        top-1
                        text-emerald-400
                    "
                >
                    █
                </motion.span>
            </div>
        </motion.div>
    );
}