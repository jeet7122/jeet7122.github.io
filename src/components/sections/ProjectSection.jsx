import { useState } from "react";
import { projects } from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";
import ProjectModal from "../ui/ProjectModel";
import ContentSection from "../layout/ContentSection";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ProjectsSection() {
    const [selected, setSelected] = useState(null);

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0,
        rootMargin: "100px",
    });

    // Parent animation for stagger effect
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.12,
            },
        },
    };

    // Simpler Safari-safe animation
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 40,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <ContentSection
            id="projects"
            title="Shipped Projects"
            className="bg-blue-400/15 overflow-hidden"
        >
            <div className="w-full">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="
                        grid
                        grid-cols-1
                        md:grid-cols-2
                        lg:grid-cols-3
                        gap-6
                        py-10
                    "
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.title}
                            variants={cardVariants}
                        >
                            <ProjectCard
                                project={project}
                                onOpen={setSelected}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <ProjectModal
                project={selected}
                onClose={() => setSelected(null)}
            />
        </ContentSection>
    );
}