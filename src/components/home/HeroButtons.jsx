import {
    ArrowRight,
    Download,
    Github,
} from "lucide-react";

export default function HeroButtons() {
    return (
        <div className="mt-8">

            <div className="flex flex-wrap items-center gap-5">

                <a
                    href="#projects"
                    className="
                        group
                        inline-flex
                        items-center
                        gap-3
                        rounded-2xl
                        bg-[var(--text-primary)]
                        px-8
                        py-4
                        font-semibold
                        shadow-lg
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:shadow-xl
                        hover:bg-[var(--accent)]
                    "
                >
                    <span className='text-white/70'>
                        Explore Projects
                    </span>
                    <ArrowRight
                        size={18}
                        className="
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                            text-white
                        "
                    />
                </a>

            </div>

            <div className="mt-8 flex flex-wrap gap-8">

                <a
                    href="/Jeet_Resume_SDE.pdf"
                    download
                    className="
                        group
                        inline-flex
                        items-center
                        gap-2
                        text-base
                        font-medium
                        text-[var(--text-secondary)]
                        transition-colors
                        hover:text-[var(--accent)]
                    "
                >
                    <Download
                        size={18}
                        className="
                            transition-transform
                            group-hover:-translate-y-0.5
                        "
                    />

                    Download Resume
                </a>

                <a
                    href="https://github.com/yourgithub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        group
                        inline-flex
                        items-center
                        gap-2
                        text-base
                        font-medium
                        text-[var(--text-secondary)]
                        transition-colors
                        hover:text-[var(--accent)]
                    "
                >
                    <Github
                        size={18}
                        className="
                            transition-transform
                            group-hover:rotate-6
                        "
                    />

                    GitHub
                </a>

            </div>

        </div>
    );
}