// src/components/experience/ExperienceItem.jsx
export default function ExperienceItem({ item, itemRef }) {
    return (
        <div className="relative pl-6 pb-12 mt-10 last:pb-0">
            {/* POSITION MARKER: This is the anchor point for the blue ball.
          It's invisible but placed exactly where the ball should center.
      */}
            <span
                ref={itemRef}
                className="absolute -left-[8.5px] top-2 w-1 h-1 opacity-0 pointer-events-none"
            />

            <div className="group">
                <h3 className="text-2xl font-semibold text-white group-hover:text-indigo-400 transition-colors">
                    {item.title}
                </h3>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 font-mono text-sm">
                    <p className="text-indigo-400">{item.type}</p>
                    <p className="text-gray-500">{item.period}</p>
                </div>

                <p className="mt-4 text-gray-300 leading-relaxed">
                    {item.description}
                </p>

                <ul className="mt-4 space-y-2">
                    {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-start text-gray-400 text-sm">
                            <span className="mr-2 text-indigo-500">•</span>
                            {h}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}