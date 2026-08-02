import { motion } from "framer-motion";
import TypingLine from "./TypingLine";

export default function TerminalCommand({ command, output }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <p style={{
                color: "#fffff1",
            }}>
                $ {command}
            </p>

            <div className="mt-4 space-y-2">
                {output.map((line, index) => (
                    <TypingLine
                        key={line}
                        delay={index * 0.15}
                    >
                        {line}
                    </TypingLine>
                ))}
            </div>
        </motion.div>
    );
}