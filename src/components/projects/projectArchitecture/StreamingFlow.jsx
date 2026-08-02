import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    Bot,
    Boxes,
    Database,
    Server,
    Workflow,
} from "lucide-react";

import StreamingPacket from "./StreamingPacket";
import { traffic } from "./streamingConfig";

const nodes = [
    {
        id: "api",
        title: "API Gateway",
        subtitle: "Routing & Security",
        icon: Workflow,
        left: 260,
        top: 0,
    },
    {
        id: "video",
        title: "Video Management Service",
        subtitle: "Spring Boot",
        icon: Bot,
        left: 260,
        top: 120,
    },
    {
        id: "kafka",
        title: "Kafka",
        subtitle: "Event Streaming",
        icon: Boxes,
        left: 120,
        top: 300,
    },
    {
        id: "postgres",
        title: "PostgreSQL",
        subtitle: "Persistence",
        icon: Database,
        left: 400,
        top: 300,
    },
    {
        id: "worker",
        title: "Background Worker",
        subtitle: "Async Processing",
        icon: Server,
        left: 260,
        top: 490,
    },
];

const phases = [
    ["api"],
    ["ai"],
    ["kafka", "postgres"],
    ["worker"],
];

export default function StreamingFlow() {
    const [phase, setPhase] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setPhase((prev) => (prev + 1) % phases.length);
        }, 900);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative mx-auto flex h-[540px] w-[520px] items-center justify-center">

            <div className="relative h-[580px] w-[520px]">

                <Connections activeNodes={phases[phase]} />

                <svg
                    className="absolute inset-0 h-full w-full pointer-events-none"
                    viewBox="0 0 520 580"
                    fill="none"
                >
                    {traffic.map((flow, index) => (
                        <StreamingPacket
                            key={index}
                            {...flow}
                        />
                    ))}

                    <defs>
                        <filter id="packetGlow">
                            <feGaussianBlur
                                stdDeviation="5"
                                result="blur"
                            />

                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                </svg>

                {nodes.map((node) => (
                    <FlowNode
                        key={node.id}
                        {...node}
                        active={phases[phase].includes(node.id)}
                    />
                ))}

            </div>

        </div>
    );
}

function Connections({ activeNodes }) {
    const lines = [
        {
            from: "api",
            x1: 260,
            y1: 70,
            x2: 260,
            y2: 120,
        },
        {
            from: "ai",
            x1: 235,
            y1: 205,
            x2: 150,
            y2: 300,
        },
        {
            from: "ai",
            x1: 285,
            y1: 205,
            x2: 370,
            y2: 300,
        },
        {
            from: "kafka",
            x1: 150,
            y1: 375,
            x2: 235,
            y2: 490,
        },
        {
            from: "postgres",
            x1: 370,
            y1: 375,
            x2: 285,
            y2: 490,
        },
    ];

    return (
        <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 520 580"
            fill="none"
        >
            {lines.map((line, index) => (
                <motion.line
                    key={index}
                    {...line}
                    animate={{
                        stroke: activeNodes.includes(line.from)
                            ? "#F97316"
                            : "#D1D5DB",
                        strokeWidth: activeNodes.includes(line.from)
                            ? 2.5
                            : 1.5,
                    }}
                    transition={{
                        duration: 0.3,
                    }}
                />
            ))}
        </svg>
    );
}

function FlowNode({
                      left,
                      top,
                      icon: Icon,
                      title,
                      subtitle,
                      active,
                  }) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                scale: active ? 1.03 : 1,
                borderColor: active
                    ? "#F97316"
                    : "#E5E7EB",
                boxShadow: active
                    ? "0 12px 28px rgba(249,115,22,.18)"
                    : "0 2px 8px rgba(17,24,39,.05)",
            }}
            transition={{
                duration: 0.3,
            }}
            className="
                absolute
                w-48
                -translate-x-1/2
                rounded-2xl
                border
                bg-white
                px-5
                py-4
            "
            style={{
                left,
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
                        bg-orange-100
                    "
                >
                    <Icon
                        size={18}
                        className="text-orange-600"
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