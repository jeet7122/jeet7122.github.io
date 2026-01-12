"use client";

import { motion } from "framer-motion";
import React from "react";

export function AnimatedText({
                                 children,
                                 className = "",
                                 isVisible = true,   // show/hide
                                 isActive = false,   // animate now?
                                 onComplete,
                                 stagger = 0.02,
                                 letterDuration = 0.12,
                             }) {
    const text =
        typeof children === "string"
            ? children
            : React.Children.toArray(children)
                .map((child) =>
                    typeof child === "string" ? child : child.props?.children ?? ""
                )
                .join("");

    const letters = String(text).split("");

    // If it's visible but not active anymore, just render fully visible (no animation)
    if (isVisible && !isActive) {
        return <span className={`whitespace-pre-wrap ${className}`}>{text}</span>;
    }

    // If not visible yet, keep it hidden (takes space if inside <p>, but text won't show)
    // You can alternatively return null if you don't want any layout space.
    if (!isVisible) {
        return <span className={`whitespace-pre-wrap ${className}`} />;
    }

    // Active: animate letter-by-letter
    return (
        <motion.span
            className={`inline-block ${className} whitespace-pre-wrap`}
            initial="hidden"
            animate="visible"
            variants={{
                visible: { transition: { staggerChildren: stagger } },
            }}
            onAnimationComplete={() => {
                if (typeof onComplete === "function") onComplete();
            }}
        >
            {letters.map((char, index) => (
                <motion.span
                    key={index}
                    className="inline-block"
                    variants={{
                        hidden: { opacity: 0, y: 4 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: letterDuration, ease: "linear" }}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.span>
    );
}
