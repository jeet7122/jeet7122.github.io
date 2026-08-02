import { motion } from "framer-motion";
import TechnologyCard from "./TechnologyCard";

export default function TechnologyCategory({ category }) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 20,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.2,
            }}
            transition={{
                duration: 0.45,
            }}
            className="
                rounded-3xl
                border
                border-[var(--border)]
                bg-white
                p-8
                shadow-sm
                transition-all
                duration-300
                hover:shadow-lg
            "
        >
            {/* Category Title */}

            <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                {category.title}
            </h3>

            {/* Divider */}

            <div className="my-5 h-px bg-[var(--border)]" />

            {/* Technologies */}

            <div className="flex flex-wrap gap-3">

                {category.items.map((technology) => (

                    <TechnologyCard
                        key={technology.name}
                        technology={technology}
                    />

                ))}

            </div>

        </motion.div>
    );
}