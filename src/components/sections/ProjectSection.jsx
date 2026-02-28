import { useState, useRef} from "react";
import { projects } from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";
import ProjectModal from "../ui/ProjectModel";
import ContentSection from "../layout/ContentSection";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ProjectsSection() {
    const [selected, setSelected] = useState(null);
    const { ref: inViewRef, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const containerRef = useRef(null);

    // Parent container variants to handle the staggering of children
    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15, // Delay between each card moving
                delayChildren: 0.3,    // Initial wait time
            },
        },
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            // Instead of absolute positioning, we use transform to center them
            // These values are "best guess" percentages; for pixel perfect centering,
            // we'd use a more complex ref-based calc, but % is smoother for grids.
            y: 100,
            rotate: -5,
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 70,
                damping: 12,
                mass: 0.8
            },
        },
    };

    return (
        <ContentSection id="projects" title="Shipped Projects" className="bg-green-500/20">
            <div ref={containerRef} className="w-full">
                <motion.div
                    ref={inViewRef}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-10"
                >
                    {projects.map((p) => (
                        <motion.div
                            key={p.title}
                            variants={cardVariants}
                            // 'layout' ensures the transition is smooth if the grid reflows
                            layout
                            style={{ originX: 0.5, originY: 0.5 }}
                        >
                            <ProjectCard project={p} onOpen={setSelected} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <ProjectModal project={selected} onClose={() => setSelected(null)} />
        </ContentSection>
    );
}