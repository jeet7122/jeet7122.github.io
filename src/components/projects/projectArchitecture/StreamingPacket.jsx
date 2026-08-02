import { motion } from "framer-motion";

export default function StreamingPacket({
                                            from,
                                            to,
                                            color,
                                            delay = 0,
                                            duration = 0.9,
                                            repeatDelay = 1.2,
                                        }) {
    return (
        <motion.rect
            width="16"
            height="8"
            rx="4"
            fill={color}
            filter="url(#packetGlow)"
            initial={{
                x: from.x - 8,
                y: from.y - 4,
                opacity: 0,
            }}
            animate={{
                x: [from.x - 8, to.x - 8],
                y: [from.y - 4, to.y - 4],
                opacity: [0, 1, 1, 0],
            }}
            transition={{
                duration,
                delay,
                repeat: Infinity,
                repeatDelay,
                ease: "linear",
            }}
        />
    );
}