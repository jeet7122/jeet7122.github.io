import { useState } from "react";

import { projects } from "./projectsData";

import ProjectTabs from "./ProjectsTab";
import ProjectShowcase from "./ProjectShowcase";

export default function Projects() {

    const [selectedProject, setSelectedProject] = useState(projects[0]);

    return (
        <section
            id="projects"
            className="relative"
        >
            <div className="container">

                {/* Heading */}

                <div className="max-w-3xl">

                    <p
                        className="
                            text-sm
                            font-semibold
                            uppercase
                            tracking-[0.3em]
                            text-[var(--accent)]
                        "
                    >
                        Featured Projects
                    </p>

                    <h2
                        className="
                            mt-5
                            text-4xl
                            font-bold
                            leading-tight
                            tracking-tight
                            md:text-5xl
                        "
                    >
                        Engineering software for{" "}
                        <span className="text-gradient">
                            distributed systems and AI.
                        </span>
                    </h2>

                    <p
                        className="
                            mt-6
                            max-w-2xl
                            text-lg
                            leading-8
                            text-[var(--text-secondary)]
                        "
                    >
                        A selection of projects showcasing backend engineering,
                        cloud-native development, distributed systems, and
                        Generative AI.
                    </p>

                </div>

                {/* Project Selector */}

                <div className='w-full flex justify-center'>
                    <ProjectTabs
                        projects={projects}
                        selectedProject={selectedProject}
                        onSelect={setSelectedProject}
                    />
                </div>

                 Showcase

                <ProjectShowcase
                    project={selectedProject}
                />

            </div>
        </section>
    );
}