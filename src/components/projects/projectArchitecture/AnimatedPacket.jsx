import { motion } from "framer-motion";

export default function AnimatedPacket() {
    return (
        <motion.div
            className="absolute
left-1/2
h-2.5
w-6
-translate-x-1/2
rounded-full
bg-violet-500
shadow-[0_0_14px_rgba(124,58,237,.55)]
"
            initial={{
                top: 58,
                opacity: 0,
            }}
            animate={{
                top: [58, 183, 308, 433, 558],
                opacity: [0, 1, 1, 1, 0],
            }}
            transition={{
                duration: 4,
                ease: "linear",
                repeat: Infinity,
            }}
        />
    );
}