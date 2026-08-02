import { motion } from "framer-motion";

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const item = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const specialties = [
    "Backend Systems",
    "Cloud Native",
    "AI Engineering",
];

export default function AboutIntro() {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="max-w-2xl"
        >
            {/* Label */}

            <motion.p
                variants={item}
                className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]"
            >
                About
            </motion.p>

            {/* Heading */}

            <motion.h2
                variants={item}
                className="text-4xl md:text-5xl font-bold leading-[1.08] tracking-[-0.04em]"
            >
                I build software that is{" "}
                <span className="text-gradient">
                    scalable,
                </span>

                <br />

                reliable,

                <br />

                and ready for production.
            </motion.h2>

            {/* Description */}

            <motion.p
                variants={item}
                className="mt-8 max-w-xl text-lg leading-8 text-[var(--text-secondary)]"
            >
                I specialize in designing scalable backend systems,
                distributed applications, and AI-powered cloud
                solutions using Java, Spring Boot, Azure AI,
                Kafka, PostgreSQL, Docker, and React.

                My focus is building software that remains
                maintainable, resilient, and performant as it grows.
            </motion.p>

            {/* Chips */}

            <motion.div
                variants={item}
                className="mt-10 flex flex-wrap gap-3"
            >
                {specialties.map((item) => (
                    <span
                        key={item}
                        className="
                            rounded-full
                            border
                            border-slate-200
                            bg-white
                            px-5
                            py-2.5
                            text-sm
                            font-medium
                            shadow-sm
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-[var(--accent)]
                            hover:shadow-md
                        "
                    >
                        {item}
                    </span>
                ))}
            </motion.div>
        </motion.div>
    );
}