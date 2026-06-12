export default function ProjectCard({ project, onOpen }) {
    const primaryFocus = project.role_focus?.split(",")[0]?.trim();
    const topHighlights = project.stack?.slice(0, 3) || [];

    return (
        <div className="card rounded-xl p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-4 hover:border-yellow-400 h-full flex flex-col">
            {project.img_src !== "null" && (
                <div className="overflow-hidden rounded-lg mb-4">
                    <img
                        src={project.img_src}
                        className="h-44 w-full object-cover transition-transform duration-500 hover:scale-105"
                        alt={project.title}
                    />
                </div>
            )}

            {primaryFocus && (
                <div className="mb-3">
          <span className="inline-block px-3 py-1 text-[11px] font-semibold tracking-wide uppercase rounded-full bg-green-500/15 text-black border border-blue-400/20">
            {primaryFocus}
          </span>
                </div>
            )}

            <h3 className="text-xl font-bold font-sans text-white leading-snug">
                {project.title}
            </h3>

            <p className="text-gray-300 mt-3 text-sm leading-6 line-clamp-3">
                {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
                {topHighlights.map((tag) => (
                    <span
                        key={tag}
                        className="px-2.5 py-1 text-xs rounded-md bg-purple-200  text-gray-700 border border-white/10"
                    >
            {tag}
          </span>
                ))}
            </div>

            <div className="mt-auto pt-6 flex gap-3">
                <button
                    onClick={() => onOpen(project)}
                    className="px-4 py-2 rounded-md border border-blue-500 text-blue-300 hover:bg-blue-500 hover:text-black transition font-medium"
                >
                    View Architecture
                </button>

                <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-md border border-gray-600 text-gray-300 hover:bg-gray-700 transition font-medium"
                >
                    Source / Live
                </a>
            </div>
        </div>
    );
}