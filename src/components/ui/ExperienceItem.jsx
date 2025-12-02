export default function ExperienceItem({ item, itemRef }) {
  return (
    <div className="relative pl-6 pb-8">
      {/* POSITION MARKER: This element is now invisible but provides the reference point (top-1) 
          for the moving blue ball. We remove all styling like w-5 h-5 bg-white border. */}
      <span
        ref={itemRef}
        // Use minimal size and opacity to make it invisible but ensure the ref works.
        className="absolute -left-[8.5px] top-1 w-1 h-1 opacity-0"
      />
      <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
      <p className="text-sm text-indigo-400 mt-1">{item.type}</p>
      <p className="text-gray-500 text-sm mt-1">{item.period}</p>
      <p className="mt-3 text-gray-300">{item.description}</p>
      <ul className="mt-3 text-gray-400 space-y-1 list-disc list-inside">
        {item.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>{" "}
    </div>
  );
}
