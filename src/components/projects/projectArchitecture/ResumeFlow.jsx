import {
    BadgeCheck,
    BrainCircuit,
    Database,
    FileText,
    Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AnimatedPacket from "./AnimatedPacket";

const nodes = [
    {
        title: "Resume",
        subtitle: "PDF Upload",
        icon: FileText,
        top: 5,
    },
    {
        title: "Embeddings",
        subtitle: "Vector Generation",
        icon: BrainCircuit,
        top: 120,
    },
    {
        title: "Vector Search",
        subtitle: "Semantic Retrieval",
        icon: Database,
        top: 240,
    },
    {
        title: "Azure OpenAI",
        subtitle: "LLM Reasoning",
        icon: Sparkles,
        top: 365,
    },
    {
        title: "Recommendations",
        subtitle: "ATS Feedback",
        icon: BadgeCheck,
        top: 480,
    },
];

export default function ResumeFlow() {
    const [activeNode, setActiveNode] = useState(0);

    useEffect(() => {
        let index = 0;

        const timer = setInterval(() => {
            setActiveNode(index);
            index = (index + 1) % nodes.length;
        }, 800);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-[560px] w-[340px]">

            {/* Connections */}

            <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 340 560"
            >
                {[70, 190, 315, 440].map((y) => (
                    <line
                        key={y}
                        x1="170"
                        y1={y}
                        x2="170"
                        y2={y + 75}
                        stroke="#D1D5DB"
                        strokeWidth="1.5"
                    />
                ))}
            </svg>

            <AnimatedPacket />

            {nodes.map((node, index) => (
                <FlowNode
                    key={node.title}
                    {...node}
                    active={activeNode === index}
                />
            ))}

        </div>
    );
}

function FlowNode({
                      top,
                      icon: Icon,
                      title,
                      subtitle,
                      active,
                  }) {
    return (
        <motion.div
            animate={{
                scale: active ? 1.03 : 1,
                borderColor: active
                    ? "#7C3AED"
                    : "#E5E7EB",
                boxShadow: active
                    ? "0 10px 28px rgba(124,58,237,.18)"
                    : "0 2px 8px rgba(17,24,39,.05)",
            }}
            transition={{
                duration: 0.3,
            }}
            className="
                absolute
                left-1/2
                w-56
                -translate-x-1/2
                rounded-2xl
                border
                bg-white
                px-5
                py-4
            "
            style={{
                top,
            }}
        >
            <div className="flex items-center gap-4">

                <div
                    className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        bg-violet-100
                    "
                >
                    <Icon
                        size={18}
                        className="text-violet-600"
                    />
                </div>

                <div>

                    <h4 className="font-semibold text-[var(--text-primary)]">
                        {title}
                    </h4>

                    <p className="text-xs text-[var(--text-muted)]">
                        {subtitle}
                    </p>

                </div>

            </div>
        </motion.div>
    );
}