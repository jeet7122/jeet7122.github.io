import { motion } from "framer-motion";
import HeroButtons from "./HeroButtons";

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const item = {
    hidden: {
        opacity: 0,
        y: 24,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function HeroIntro() {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-3xl"
        >
            <motion.p
                variants={item}
                className="
                    mb-5
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.28em]
                    text-[var(--accent)]
                "
            >
                Software Engineer
            </motion.p>

            <motion.h1
                variants={item}
                className="
                    text-5xl
md:text-6xl
xl:text-7xl
leading-[0.95]
tracking-[-0.05em]
                    text-[var(--text-primary)]
                "
            >
                Building
                <br />

                <span className="text-gradient">
                    scalable systems
                </span>

                <br />

                that people rely on.
            </motion.h1>

            <motion.p
                variants={item}
                className="
                    mt-8
                    max-w-xl
                    text-xl
                    leading-9
                    text-[var(--text-secondary)]
                "
            >
                Backend Software Engineer specializing in distributed
                systems, cloud-native architecture, and AI-powered
                applications. I build production-ready software that is
                scalable, maintainable, and designed for real-world impact.
            </motion.p>

            <motion.div variants={item}>
                <HeroButtons />
            </motion.div>
        </motion.div>
    );
}