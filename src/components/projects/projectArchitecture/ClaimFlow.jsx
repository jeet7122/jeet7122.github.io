import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
    BadgeCheck,
    Bot,
    Database,
    FileText,
    ScanEye,
    ShieldAlert,
    Workflow,
} from "lucide-react";

const nodes = [
    {
        id: "claim",
        title: "Claim",
        subtitle: "Images & Details",
        icon: FileText,
        left: 260,
        top: 0,
        accent: {
            bg: "bg-slate-100",
            text: "text-slate-700",
            border: "#64748B",
            glow: "rgba(100,116,139,.18)",
        },
    },

    {
        id: "vision",
        title: "Vision AI",
        subtitle: "OCR + Analysis",
        icon: ScanEye,
        left: 260,
        top: 110,
        accent: {
            bg: "bg-indigo-100",
            text: "text-indigo-600",
            border: "#4F46E5",
            glow: "rgba(79,70,229,.18)",
        },
    },

    {
        id: "orchestrator",
        title: "Agent Orchestrator",
        subtitle: "Tool Routing",
        icon: Workflow,
        left: 260,
        top: 225,
        accent: {
            bg: "bg-violet-100",
            text: "text-violet-600",
            border: "#7C3AED",
            glow: "rgba(124,58,237,.18)",
        },
    },

    {
        id: "policy",
        title: "Policy DB",
        subtitle: "Coverage Rules",
        icon: Database,
        left: 90,
        top: 370,
        accent: {
            bg: "bg-sky-100",
            text: "text-sky-600",
            border: "#0284C7",
            glow: "rgba(2,132,199,.18)",
        },
    },

    {
        id: "llm",
        title: "LLM",
        subtitle: "Reasoning",
        icon: Bot,
        left: 260,
        top: 370,
        accent: {
            bg: "bg-fuchsia-100",
            text: "text-fuchsia-600",
            border: "#C026D3",
            glow: "rgba(192,38,211,.18)",
        },
    },

    {
        id: "fraud",
        title: "Fraud Engine",
        subtitle: "Risk Detection",
        icon: ShieldAlert,
        left: 430,
        top: 370,
        accent: {
            bg: "bg-orange-100",
            text: "text-orange-600",
            border: "#EA580C",
            glow: "rgba(234,88,12,.18)",
        },
    },

    {
        id: "decision",
        title: "Claim Decision",
        subtitle: "Explainable AI",
        icon: BadgeCheck,
        left: 260,
        top: 535,
        accent: {
            bg: "bg-emerald-100",
            text: "text-emerald-600",
            border: "#059669",
            glow: "rgba(5,150,105,.18)",
        },
    },
];
const phases = [
    ["claim"],
    ["vision"],
    ["orchestrator"],
    ["policy", "llm", "fraud"],
    ["decision"],
];
export default function ClaimFlow() {
    const [phase, setPhase] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setPhase((prev) => (prev + 1) % phases.length);
        }, 900);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative mx-auto flex h-[620px] w-[520px] items-center justify-center">

            {/* Drawing Canvas */}

            <div className="relative h-[620px] w-[520px]">

                {/* Connections */}

                <Connections
                    activeNodes={phases[phase]}
                />

                {/* Traffic Layer */}

                <svg
                    className="absolute inset-0 h-full w-full pointer-events-none"
                    viewBox="0 0 520 620"
                    fill="none"
                >

                    {/* Claim → Vision */}

                    <ClaimPacket
                        from={{ x: 260, y: 70 }}
                        to={{ x: 260, y: 110 }}
                        color="#64748B"
                        delay={0}
                    />

                    {/* Vision → Agent */}

                    <ClaimPacket
                        from={{ x: 260, y: 180 }}
                        to={{ x: 260, y: 225 }}
                        color="#4F46E5"
                        delay={0.8}
                    />

                    {/* Agent → Policy */}

                    <ClaimPacket
                        from={{ x: 260, y: 295 }}
                        to={{ x: 90, y: 370 }}
                        color="#0284C7"
                        delay={1.6}
                    />

                    {/* Agent → LLM */}

                    <ClaimPacket
                        from={{ x: 260, y: 295 }}
                        to={{ x: 260, y: 370 }}
                        color="#C026D3"
                        delay={1.6}
                    />

                    {/* Agent → Fraud */}

                    <ClaimPacket
                        from={{ x: 260, y: 295 }}
                        to={{ x: 430, y: 370 }}
                        color="#EA580C"
                        delay={1.6}
                    />

                    {/* Policy → Decision */}

                    <ClaimPacket
                        from={{ x: 90, y: 445 }}
                        to={{ x: 260, y: 535 }}
                        color="#059669"
                        delay={2.6}
                    />

                    {/* LLM → Decision */}

                    <ClaimPacket
                        from={{ x: 260, y: 445 }}
                        to={{ x: 260, y: 535 }}
                        color="#059669"
                        delay={2.6}
                    />

                    {/* Fraud → Decision */}

                    <ClaimPacket
                        from={{ x: 430, y: 445 }}
                        to={{ x: 260, y: 535 }}
                        color="#059669"
                        delay={2.6}
                    />

                    <defs>

                        <filter id="packetGlow">

                            <feGaussianBlur
                                stdDeviation="5"
                                result="blur"
                            />

                            <feMerge>

                                <feMergeNode in="blur"/>

                                <feMergeNode in="SourceGraphic"/>

                            </feMerge>

                        </filter>

                    </defs>

                </svg>

                {/* Nodes */}

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
        // Claim → Vision
        {
            from: "claim",
            x1: 260,
            y1: 70,
            x2: 260,
            y2: 110,
        },

        // Vision → Agent
        {
            from: "vision",
            x1: 260,
            y1: 180,
            x2: 260,
            y2: 225,
        },

        // Agent → Policy
        {
            from: "orchestrator",
            x1: 235,
            y1: 295,
            x2: 120,
            y2: 370,
        },

        // Agent → LLM
        {
            from: "orchestrator",
            x1: 260,
            y1: 295,
            x2: 260,
            y2: 370,
        },

        // Agent → Fraud
        {
            from: "orchestrator",
            x1: 285,
            y1: 295,
            x2: 400,
            y2: 370,
        },

        // Policy → Decision
        {
            from: "policy",
            x1: 120,
            y1: 445,
            x2: 235,
            y2: 535,
        },

        // LLM → Decision
        {
            from: "llm",
            x1: 260,
            y1: 445,
            x2: 260,
            y2: 535,
        },

        // Fraud → Decision
        {
            from: "fraud",
            x1: 400,
            y1: 445,
            x2: 285,
            y2: 535,
        },
    ];

    return (
        <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 520 620"
            fill="none"
        >
            {lines.map((line, index) => (

                <motion.line
                    key={index}
                    x1={line.x1}
                    y1={line.y1}
                    x2={line.x2}
                    y2={line.y2}
                    animate={{
                        stroke: activeNodes.includes(line.from)
                            ? "#7C3AED"
                            : "#D1D5DB",

                        strokeWidth: activeNodes.includes(line.from)
                            ? 2.5
                            : 1.5,

                        opacity: activeNodes.includes(line.from)
                            ? 1
                            : 0.65,
                    }}
                    transition={{
                        duration: 0.3,
                    }}
                />

            ))}
        </svg>
    );
}

function ClaimPacket({
                         from,
                         to,
                         color,
                         delay = 0,
                         duration = 0.75,
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

function FlowNode({
                      left,
                      top,
                      icon: Icon,
                      title,
                      subtitle,
                      accent,
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
                    ? accent.border
                    : "#E5E7EB",
                boxShadow: active
                    ? `0 12px 28px ${accent.glow}`
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
                    className={`
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        ${accent.bg}
                    `}
                >
                    <Icon
                        size={18}
                        className={accent.text}
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