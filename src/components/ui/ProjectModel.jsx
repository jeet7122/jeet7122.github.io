export default function ProjectModel({ project, onClose }) {
    if (!project) return null;

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50
                    flex items-start sm:items-center justify-center
                    overflow-y-auto p-4">

            <div className="bg-secondary border border-gray-800 rounded-lg p-6
                      w-full max-w-3xl max-h-[90vh] overflow-y-auto">
                {project.img_src !== "null" ? (
                    <div>
                        <img src={project.img_src} alt="project image" className='mb-5 h-85 rounded-lg' />
                </div>): (<div></div>) }

                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    {project.title}
                </h2>

                <p className="text-sm text-blue-400 mt-1">{project.type}</p>

                <p className="text-gray-900 mt-4">{project.description}</p>

                <ul className="mt-6 text-red-900 space-y-2 list-disc list-inside">
                    {project.details.map((d) => (
                        <li key={d}>{d}</li>
                    ))}
                </ul>

                <div className="flex justify-end gap-3 mt-8">
                    <a
                        href={project.repo}
                        target="_blank"
                        className="px-4 py-2 rounded-md bg-gray-800 text-gray-200"
                    >
                        Source Code
                    </a>
                    <button
                        className="px-4 py-2 rounded-md bg-blue-500 text-black font-semibold"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}
