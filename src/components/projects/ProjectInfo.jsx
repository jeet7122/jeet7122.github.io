import TechStack from "./TechStack";
import ProjectLinks from "./ProjectLinks";

export default function ProjectInfo({ project }) {
    return (
        <div>

            {/* Category */}

            <span
                className="inline-flex rounded-full px-4 py-2 text-sm font-semibold"
                style={{
                    background: `${project.accent}15`,
                    color: project.accent,
                }}
            >
                {project.category}
            </span>

            {/* Title */}

            <h3 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-[var(--text-primary)]">
                {project.title}
            </h3>

            {/* Tagline */}

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
                {project.tagline}
            </p>

            {/* Problem + Solution */}

            <div className="mt-10 grid gap-5 lg:grid-cols-2">

                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">

                    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-amber-700">
                        Problem
                    </p>

                    <p className="text-sm leading-7 text-[var(--text-secondary)]">
                        {project.problem}
                    </p>

                </div>

                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">

                    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-emerald-700">
                        Solution
                    </p>

                    <p className="text-sm leading-7 text-[var(--text-secondary)]">
                        {project.solution}
                    </p>

                </div>

            </div>

            {/* Bottom */}

            <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1fr]">

                {/* Highlights */}

                <div>

                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                        Key Highlights
                    </p>

                    <div className="space-y-3">

                        {project.highlights.map((item) => (

                            <div
                                key={item}
                                className="flex items-start gap-3"
                            >

                                <div
                                    className="mt-2 h-2 w-2 rounded-full"
                                    style={{
                                        backgroundColor: "aqua"
                                    }}
                                />

                                <p className="text-sm leading-7 text-[var(--text-secondary)]">
                                    {item}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

                {/* Tech */}

                <TechStack
                    technologies={project.technologies}
                />

            </div>

            {/* Buttons */}

            <ProjectLinks
                github={project.github}
                demo={project.demo}
            />

        </div>
    );
}