import { motion } from "framer-motion";
import React from "react";

export function AnimatedText({ children, className = "", delay = 0 }) {
    // Flatten children into a string while preserving inline spans
    const text =
        typeof children === "string"
            ? children
            : React.Children.map(children, (child) =>
                typeof child === "string" ? child : child.props.children
            ).join("");

    const letters = text.split("");

    return (
        <motion.span
            className={`inline-block ${className} whitespace-pre-wrap`}
            initial="hidden"
            animate="visible"
            variants={{
                visible: {
                    transition: { staggerChildren: 0.02, delayChildren: delay },
                },
            }}
        >
            {letters.map((char, index) => (
                <motion.span
                    key={index}
                    variants={{
                        hidden: { opacity: 0, y: 4 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.12, ease: "linear" }}
                    className="inline-block"
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.span>
    );
}
