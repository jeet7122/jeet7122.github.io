import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import ContentSection from "../layout/ContentSection.jsx";

const techStack = [
    { name: "Java", icon: "logos:java" },
    { name: "Spring Boot", icon: "logos:spring-icon" },
    { name: "Kafka", icon: "simple-icons:apachekafka" },
    { name: "TypeScript", icon: "logos:typescript-icon" },
    { name: "JavaScript", icon: "logos:javascript" },
    { name: "Node.js", icon: "logos:nodejs" },
    { name: "SQL", icon: "carbon:sql" },
    { name: "MongoDB", icon: "logos:mongodb-icon" },
    { name: "Docker", icon: "logos:docker-icon" },
    { name: "K8s", icon: "logos:kubernetes" },
    { name: "Oracle", icon: "logos:oracle" },
    { name: "AWS", icon: "logos:aws" },
    { name: "REST APIs", icon: "mdi:api" },
    { name: "Microservices", icon: "mdi:cube-outline" },
    { name: "React", icon: "logos:react" },
    { name: "Next.js", icon: "logos:nextjs-icon" },
    { name: "Linux", icon: "logos:linux-tux" },
    { name: "Git", icon: "logos:git-icon" },
    { name: "GitHub", icon: "logos:github-icon" },
];

export default function Technologies() {
    return (
        <ContentSection className="py-20 relative" title="Technologies" id="technology">
            <div className="container">

                {/* Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    {techStack.map((tech, i) => (
                        <motion.div
                            key={i}
                            whileHover={{
                                rotateX: 8,
                                rotateY: -8,
                                scale: 1.05,
                            }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                            className="group relative"
                        >

                            {/* Card */}
                            <div className="relative h-32 rounded-2xl bg-white border border-gray-200 shadow-md
                              flex flex-col items-center justify-center gap-3
                              transition-all duration-300
                              group-hover:shadow-2xl group-hover:-translate-y-2"
                            >

                                {/* Glow effect */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-200/20 to-blue-200/20 opacity-0 group-hover:opacity-100 transition" />

                                {/* Icon */}
                                <Icon icon={tech.icon} className={tech.name==="Oracle" ? "text-xl" : "text-4xl"} />

                                {/* Name */}
                                <p className="text-sm font-semibold text-gray-700">
                                    {tech.name}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </ContentSection>
    );
}