import { motion } from "framer-motion";

export default function ContactHeader() {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 30,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.3,
            }}
            transition={{
                duration: 0.6,
            }}
            className="mx-auto max-w-3xl text-center"
        >
            {/* Availability */}

            <div
                className="
                    mb-6
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-emerald-200
                    bg-emerald-50
                    px-4
                    py-2
                "
            >
                <span className="h-2 w-2 rounded-full bg-emerald-500" />

                <span className="text-sm font-medium text-emerald-700">
                    Open to Full-Time Software Engineering Opportunities
                </span>
            </div>

            {/* Heading */}

            <h2 className="text-5xl font-bold tracking-tight text-[var(--text-primary)] md:text-6xl">
                Let's Engineer What's Next.
            </h2>

            {/* Description */}

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
                I'm currently seeking Software Engineer, Backend Engineer, and AI Engineer
                opportunities where I can contribute to building scalable backend systems,
                distributed platforms, and AI-powered applications.
                <br />
                <br />
                If my work aligns with what your team is building, I'd love to connect.
            </p>
        </motion.div>
    );
}