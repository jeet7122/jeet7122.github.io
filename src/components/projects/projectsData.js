export const projects = [
    {
        id: "resume-optimizer",

        architecture: "resume",

        category: "Generative AI",

        title: "AI-Powered Resume Optimizer",

        tagline:
            "LLM-powered resume analysis using vector search and Retrieval-Augmented Generation.",

        problem:
            "Improve contextual resume evaluation and automate resume scoring by combining semantic search with Large Language Models.",

        solution:
            "Built vector search pipelines using pgvector, embeddings, LangChain, and LLM-powered workflows to retrieve relevant context, evaluate resumes, perform gap analysis, and generate actionable recommendations.",

        highlights: [
            "Vector search with pgvector and embeddings",
            "Semantic search for contextual retrieval",
            "LLM-powered resume scoring",
            "Automated gap analysis and recommendations",
        ],

        technologies: [
            {
                name: "Python",
                icon: "logos:python",
            },
            {
                name: "FastAPI",
                icon: "logos:fastapi-icon",
            },
            {
                name: "PostgreSQL",
                icon: "logos:postgresql",
            },
            {
                name: "pgvector",
                icon: "mdi:database-search",
            },
            {
                name: "LangChain",
                icon: "simple-icons:langchain",
            },
            {
                name: "OpenAI",
                icon: "simple-icons:openai",
            },
            {
                name: "Gemini",
                icon: "simple-icons:googlegemini",
            },
            {
                name: "Docker",
                icon: "logos:docker-icon",
            },
        ],

        github: "https://github.com/jeet7122/ats_resume_intelligence_platform",

        demo: null,
    },

    {
        id: "video-streaming",

        architecture: "streaming",

        category: "Distributed Systems",

        title: "Video Streaming Platform",

        tagline:
            "Scalable microservices platform with asynchronous event-driven communication.",

        problem:
            "Design a scalable video streaming platform capable of secure communication across distributed microservices while maintaining reliability and fault tolerance.",

        solution:
            "Designed a microservices-based architecture using Java, Spring Boot, PostgreSQL, Apache Kafka, JWT Authentication, and API Gateway with asynchronous event-driven communication.",

        highlights: [
            "Microservices architecture",
            "Apache Kafka event pipelines",
            "JWT Authentication & API Gateway",
            "Reliable distributed communication",
        ],

        technologies: [
            {
                name: "Java",
                icon: "logos:java",
            },
            {
                name: "Spring Boot",
                icon: "logos:spring-icon",
            },
            {
                name: "PostgreSQL",
                icon: "logos:postgresql",
            },
            {
                name: "Apache Kafka",
                icon: "logos:apache-kafka",
            },
            {
                name: "Docker",
                icon: "logos:docker-icon",
            },
            {
                name: "JWT",
                icon: "mdi:shield-check",
            },
        ],

        github: "https://github.com/jeet7122/streaming_platform",

        demo: null,
    },

    {
        id: "claim-review",

        architecture: "claim",

        category: "AI Agents",

        title: "AI Claim Review Agent",

        tagline:
            "Production-style multimodal AI agent for insurance claim triage.",

        problem:
            "Automate insurance claim triage by analyzing conversations, uploaded evidence, policy documents, and user history while improving transparency and decision quality.",

        solution:
            "Developed a multimodal AI agent using FastAPI, LangChain, Retrieval-Augmented Generation (RAG), Vision AI, and LLMs with explainable AI workflows and Responsible AI safeguards.",

        highlights: [
            "Multimodal AI Agent",
            "Explainable AI workflows",
            "Prompt injection detection",
            "Responsible AI safeguards",
        ],

        technologies: [
            {
                name: "Python",
                icon: "logos:python",
            },
            {
                name: "FastAPI",
                icon: "logos:fastapi-icon",
            },
            {
                name: "LangChain",
                icon: "simple-icons:langchain",
            },
            {
                name: "Gemini",
                icon: "simple-icons:googlegemini",
            },
            {
                name: "OpenAI",
                icon: "simple-icons:openai",
            },
            {
                name: "Vision AI",
                icon: "mdi:image-search",
            },
        ],

        github: "https://github.com/jeet7122/hackerrank-orchestrate-hackathon-2026",

        demo: null,
    },
];