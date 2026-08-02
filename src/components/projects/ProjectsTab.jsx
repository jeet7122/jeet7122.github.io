import { motion } from "framer-motion";

export default function ProjectTabs({
                                        projects,
                                        selectedProject,
                                        onSelect,
                                    }) {
    return (
        <div className="mt-14 flex flex-wrap gap-4">

            {projects.map((project) => {

                const isActive =
                    selectedProject.id === project.id;

                return (

                    <button
                        key={project.id}
                        onClick={() => onSelect(project)}
                        className="
        relative
        w-72
        overflow-hidden
        rounded-2xl
        border
        px-6
        py-5
        text-left
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-md
    "
                        style={{
                            borderColor: isActive
                                ? project.accent
                                : "var(--border)",
                        }}
                    >

                        {isActive && (

                            <motion.div
                                layoutId="activeProjectTab"
                                className="absolute inset-0"
                                style={{
                                    background: `${project.accent}15`,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 320,
                                    damping: 30,
                                }}
                            />

                        )}

                        <div className="relative z-10">

                            <p
                                className="text-sm font-semibold"
                                style={{
                                    color: isActive
                                        ? project.accent
                                        : "var(--text-primary)",
                                }}
                            >
                                {project.title}
                            </p>

                            <p
                                className="mt-1 text-xs"
                                style={{
                                    color: "var(--text-muted)",
                                }}
                            >
                                {project.category}
                            </p>

                        </div>

                    </button>

                );

            })}

        </div>
    );
}