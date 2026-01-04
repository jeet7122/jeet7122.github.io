// src/components/ui/ProjectCard.jsx

export default function ProjectCard({ project, onOpen }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:bg-gray-850 transition">
        {project.img_src !== "null" ? (
            <div>
                <img src={project.img_src} alt="project" />
            </div>
        ) : (<div></div>)}
      <h3 className="text-xl font-bold text-white">{project.title}</h3>
      <p className="text-sm text-blue-400 mt-1">{project.type}</p>

      <p className="text-gray-400 mt-3 line-clamp-3">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs bg-gray-800 text-gray-300 border border-gray-700 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-3 mt-6">
        <button
          onClick={() => onOpen(project)}
          className="px-4 py-2 rounded-md border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-black transition"
        >
          View Details
        </button>
        <a
          href={project.repo}
          target="_blank"
          className="px-4 py-2 rounded-md border border-gray-600 text-gray-300 hover:bg-gray-700 transition"
        >
          Source Code
        </a>
      </div>
    </div>
  );
}
