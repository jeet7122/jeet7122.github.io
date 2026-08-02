import { Icon } from "@iconify/react";

export default function TechStack({ technologies }) {
    return (
        <section>

            <p
                className="
                    mb-5
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[var(--accent)]
                "
            >
                Tech Stack
            </p>

            <div className="flex flex-wrap gap-3">

                {technologies.map((tech) => (

                    <div
                        key={tech.name}
                        className="
                            flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-[var(--border)]
                            bg-[var(--bg-secondary)]
                            px-4
                            py-2.5
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-[var(--accent)]
                            hover:shadow-md
                        "
                    >

                        <Icon
                            icon={tech.icon}
                            width={20}
                            height={20}
                        />

                        <span
                            className="
                                text-sm
                                font-medium
                                text-[var(--text-primary)]
                            "
                        >
                            {tech.name}
                        </span>

                    </div>

                ))}

            </div>

        </section>
    );
}