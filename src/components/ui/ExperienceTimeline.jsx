// src/components/experience/ExperienceTimeline.jsx
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ExperienceItem from "./ExperienceItem";

export default function ExperienceTimeline({ items }) {
    const containerRef = useRef(null);

    // Create stable refs for the ball-tracking logic
    const [itemRefs] = useState(() =>
        items.map(() => ({ current: null }))
    );

    const [ballYPosition, setBallYPosition] = useState(0);

    // Initialize ball position
    useEffect(() => {
        if (itemRefs[0]?.current && containerRef.current) {
            const containerTop = containerRef.current.getBoundingClientRect().top + window.scrollY;
            const firstMarkerTop = itemRefs[0].current.getBoundingClientRect().top + window.scrollY;
            setBallYPosition(firstMarkerTop - containerTop);
        }
    }, [itemRefs, items.length]);

    // Scroll Tracking Logic
    useEffect(() => {
        const handleScroll = () => {
            const container = containerRef.current;
            if (!container) return;

            const containerRect = container.getBoundingClientRect();
            const containerTop = containerRect.top + window.scrollY;

            const itemPositions = itemRefs.map(ref => {
                if (!ref.current) return null;
                const rect = ref.current.getBoundingClientRect();
                return (rect.top + window.scrollY) - containerTop;
            }).filter(pos => pos !== null);

            if (itemPositions.length === 0) return;

            const timelineScrollY = window.scrollY - containerTop + (window.innerHeight / 3);

            let activeIndex = 0;
            for (let i = 0; i < itemPositions.length; i++) {
                if (timelineScrollY > itemPositions[i]) {
                    activeIndex = i;
                }
            }

            let newY = itemPositions[activeIndex];

            // Interpolate between points for smooth movement
            if (activeIndex < itemPositions.length - 1) {
                const startY = itemPositions[activeIndex];
                const endY = itemPositions[activeIndex + 1];
                const progress = (timelineScrollY - startY) / (endY - startY);
                if (progress > 0 && progress < 1) {
                    newY = startY + progress * (endY - startY);
                }
            }

            setBallYPosition(newY);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [itemRefs, items.length]);

    return (
        <section ref={containerRef} className="relative pl-8  px-4 py-6 max-w-4xl mx-auto">
            {/* Vertical Rail */}
            <div className="absolute left-0 top-0 w-[2px] bg-gray-800 h-full" />

            {/* The Moving Active Ball */}
            <motion.div
                className="absolute -left-[7px] w-4 h-4 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.8)] z-10"
                style={{ top: ballYPosition }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />

            {items.map((item, index) => (
                <motion.div
                    key={item.title + index}
                    initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-10% 0px" }}
                    transition={{
                        duration: 0.8,
                        delay: 0.1,
                        ease: [0.21, 0.47, 0.32, 0.98]
                    }}
                >
                    <ExperienceItem
                        item={item}
                        itemRef={itemRefs[index]}
                    />
                </motion.div>
            ))}
        </section>
    );
}