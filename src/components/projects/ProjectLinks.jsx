import { ArrowUpRight, Github } from "lucide-react";

export default function ProjectLinks({
                                         github,
                                         demo,
                                     }) {
    return (
        <div className="mt-10 flex flex-wrap gap-4">

            {/* GitHub */}

            <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-[var(--border)]
                    bg-[var(--bg-secondary)]
                    px-5
                    py-3
                    font-medium
                    text-[var(--text-primary)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[var(--accent)]
                    hover:shadow-md
                "
            >
                <Github size={18} />

                Source Code
            </a>

            {/* Live Demo */}

            {demo && (
                <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        bg-[var(--accent)]
                        px-5
                        py-3
                        font-medium
                        text-white
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:bg-[var(--accent-hover)]
                        hover:shadow-md
                    "
                >
                    Live Demo

                    <ArrowUpRight size={18} />
                </a>
            )}

        </div>
    );
}