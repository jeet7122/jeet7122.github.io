import { motion } from "framer-motion";

export default function BackgroundGlow() {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">

            {/* Left Glow */}
            <motion.div
                animate={{
                    x: [0, 60, 0],
                    y: [0, -40, 0],
                    scale: [1, 1.15, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
          absolute
          left-0
          -translate-x-1/2
          top-10
          h-[650px]
          w-[650px]
          rounded-full
          bg-indigo-500/12
          blur-[140px]
        "
            />

            {/* Right Glow */}
            <motion.div
                animate={{
                    x: [0, -50, 0],
                    y: [0, 40, 0],
                    scale: [1, 1.12, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
          absolute
          right-0
          -translate-x-1/2
          bottom-0
          h-[600px]
          w-[600px]
          rounded-full
          bg-cyan-400/10
          blur-[150px]
        "
            />

            {/* Center Light */}
            <motion.div
                animate={{
                    opacity: [0.12, 0.22, 0.12],
                    scale: [1, 1.08, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-violet-400/10
          blur-[160px]
        "
            />

            {/* Very Subtle Grid */}
            <div
                className="
          absolute
          inset-0
          opacity-[0.015]
          [background-image:linear-gradient(to_right,#111827_1px,transparent_1px),linear-gradient(to_bottom,#111827_1px,transparent_1px)]
          [background-size:48px_48px]
        "
            />
        </div>
    );
}