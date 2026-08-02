export default function Node({
                                 title,
                                 subtitle,
                                 color,
                                 text = "dark",
                                 className = "",
                                 borderColor = "white",
                             }) {
    return (
        <div
            className={`
                absolute
                w-44
                rounded-2xl
                border
                ${borderColor}
                bg-${color}
                px-5
                py-4
                shadow-lg
                ${className}
            `}
        >
            <div className="flex items-center gap-2 mb-2">
                <div
                    className={`h-2.5 w-2.5 rounded-full ${
                        text === "light"
                            ? "bg-white/80"
                            : "bg-emerald-500"
                    }`}
                />

                <span
                    className={`font-semibold ${
                        text === "light"
                            ? "text-white"
                            : "text-slate-800"
                    }`}
                >
                    {title}
                </span>
            </div>

            <p
                className={`text-sm ${
                    text === "light"
                        ? "text-white/80"
                        : "text-slate-500"
                }`}
            >
                {subtitle}
            </p>
        </div>
    );
}