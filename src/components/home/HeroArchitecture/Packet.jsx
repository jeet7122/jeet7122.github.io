import { motion } from "framer-motion";
import { packetTypes } from "./packetConfig";
import { nodePositions } from "./nodePositions";

export default function Packet({
                                   type,
                                   from,
                                   to,
                                   delay = 0,
                                   repeat = Infinity,
                                   repeatDelay = 1.2,
                               }) {
    const packet = packetTypes[type];

    if (!packet) {
        console.error(`Unknown packet type: ${type}`);
        return null;
    }

    const start = nodePositions[from];
    const end = nodePositions[to];

    if (!start || !end) {
        console.error(`Unknown node: ${from} -> ${to}`);
        return null;
    }

    return (
        <motion.rect
            width="14"
            height="8"
            rx="4"
            fill={packet.color}
            filter="url(#packetGlow)"
            initial={{
                x: start.x - 7,
                y: start.y - 4,
                opacity: 0,
            }}
            animate={{
                x: [start.x - 7, end.x - 7],
                y: [start.y - 4, end.y - 4],
                opacity: [0, 1, 1, 0],
            }}
            transition={{
                duration: packet.duration,
                delay,
                repeat,
                repeatDelay,
                ease: "linear",
            }}
        />
    );
}