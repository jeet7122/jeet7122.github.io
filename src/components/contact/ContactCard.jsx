import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { ArrowUpRight } from "lucide-react";

export default function ContactCard({ contact }) {
    return (
        <motion.a
            href={contact.href}
            target={contact.href.startsWith("http") ? "_blank" : undefined}
            rel={
                contact.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
            }
            whileHover={{
                y: -6,
            }}
            transition={{
                duration: 0.2,
            }}
            className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-[var(--border)]
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:border-indigo-300
                hover:shadow-xl
            "
        >
            {/* Glow */}

            <div
                className="
                    absolute
                    inset-0
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                "
                style={{
                    background:
                        "radial-gradient(circle at top right, rgba(99,102,241,.08), transparent 60%)",
                }}
            />

            <div className="relative flex items-start justify-between">

                {/* Left */}

                <div>

                    {/* Icon */}

                    <div
                        className="
                            flex
                            h-14
                            w-14
                            items-center
                            justify-center
                            rounded-2xl
                            bg-indigo-50
                            transition-transform
                            duration-300
                            group-hover:rotate-6
                            group-hover:scale-110
                        "
                    >
                        <Icon
                            icon={contact.icon}
                            width={28}
                            className="text-indigo-600"
                        />
                    </div>

                    {/* Title */}

                    <h3 className="mt-6 text-xl font-semibold text-[var(--text-primary)]">
                        {contact.title}
                    </h3>

                    {/* Value */}

                    <p className="mt-2 break-all text-[var(--text-secondary)]">
                        {contact.value}
                    </p>

                </div>

                {/* Arrow */}

                <ArrowUpRight
                    size={22}
                    className="
                        text-[var(--text-muted)]
                        transition-all
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                        group-hover:text-indigo-600
                    "
                />

            </div>

        </motion.a>
    );
}