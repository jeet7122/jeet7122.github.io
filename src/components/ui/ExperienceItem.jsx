import { Icon } from "@iconify/react";

export default function ExperienceItem({ item, itemRef }) {
    return (
        <div className="relative mt-10 pb-12 pl-6 last:pb-0">

            {/* Timeline Marker */}

            <span
                ref={itemRef}
                className="pointer-events-none absolute -left-[8.5px] top-2 h-1 w-1 opacity-0"
            />

            <div className="group">

                {/* Header */}

                <div className="flex items-start gap-4">

                    {/* Logo */}

                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-white shadow-sm">

                        {item.logoType === "image" ? (
                            <img
                                src={item.logo}
                                alt={item.title}
                                className={`${item.logoClassName} h-auto object-contain`}
                            />
                        ) : (
                            <Icon
                                icon={item.logo}
                                className={item.logoClassName}
                            />
                        )}

                    </div>

                    {/* Title */}

                    <div>

                        <h3 className="text-2xl font-semibold text-[var(--text-primary)] transition-colors group-hover:text-indigo-500">
                            {item.title}
                        </h3>

                        <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 font-mono text-sm">

                            <p className="text-indigo-500">
                                {item.type}
                            </p>

                            <p className="text-[var(--text-muted)]">
                                {item.period}
                            </p>

                        </div>

                    </div>

                </div>

                {/* Description */}

                <p className="mt-5 leading-relaxed text-[var(--text-secondary)]">
                    {item.description}
                </p>

                {/* Highlights */}

                <ul className="mt-5 space-y-2">

                    {item.highlights.map((highlight) => (

                        <li
                            key={highlight}
                            className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                        >

                            <span className="mt-[2px] text-indigo-500">
                                •
                            </span>

                            <span>
                                {highlight}
                            </span>

                        </li>

                    ))}

                </ul>

            </div>

        </div>
    );
}