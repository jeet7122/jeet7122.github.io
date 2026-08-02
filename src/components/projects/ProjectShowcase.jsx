import { AnimatePresence, motion } from "framer-motion";

import ProjectInfo from "./ProjectInfo";
import ProjectArchitecture from "./ProjectArchitecture/ProjectArchitecture";

export default function ProjectShowcase({ project }) {
    return (
        <div className="mt-12">

            <AnimatePresence mode="wait">

                <motion.div
                    key={project.id}
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    exit={{
                        opacity: 0,
                        y: -20,
                    }}
                    transition={{
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                        overflow-hidden
                        rounded-[32px]
                        border
                        border-[var(--border)]
                        bg-white
                        shadow-sm
                    "
                >
                    <div
                        className="h-1.5"
                        style={{
                            background: project.accent,
                        }}
                    />

                    <div
                        className="
                            grid
                            gap-14
                            p-10
                            lg:grid-cols-[1.15fr_.85fr]
                            lg:items-center
                        "
                    >

                        {/* Left */}

                        <ProjectInfo
                            project={project}
                        />

                        {/* Right */}

                        <ProjectArchitecture
                            project={project}
                        />

                    </div>

                </motion.div>

            </AnimatePresence>

        </div>
    );
}