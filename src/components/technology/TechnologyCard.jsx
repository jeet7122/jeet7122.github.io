import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function TechnologyCard({ technology }) {
    return (
        <motion.div
            whileHover={{
                y: -3,
                scale: 1.03,
            }}
            transition={{
                type: "spring",
                stiffness: 350,
                damping: 18,
            }}
            className="
                group
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-[var(--border)]
                bg-[var(--surface)]
                px-4
                py-3
                transition-all
                duration-300
                hover:border-indigo-200
                hover:bg-indigo-50/60
                hover:shadow-md
            "
        >
            {/* Icon */}

            <Icon
                icon={technology.icon}
                className="
                    text-2xl
                    transition-transform
                    duration-300
                    group-hover:scale-110
                "
            />

            {/* Name */}

            <span
                className="
                    text-sm
                    font-medium
                    text-[var(--text-primary)]
                "
            >
                {technology.name}
            </span>

        </motion.div>
    );
}