import { motion } from "framer-motion";

export default function TypingLine({ children, delay = 0 }) {
    return (
        <motion.p
            initial={{
                opacity: 0,
                x: -8,
            }}
            animate={{
                opacity: 1,
                x: 0,
            }}
            transition={{
                delay,
                duration: 0.25,
            }}
            style={{
                color: "#fffff1",
            }}
        >
            {children}
        </motion.p>
    );
}