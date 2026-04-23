export const projects = [
    {
        "title": "Code Execution Platform – Distributed Code Submission & Evaluation System",
        "stack": [
            "Java",
            "Spring Boot",
            "Node.js",
            "Express.js",
            "Docker",
            "Kafka",
            "MongoDB",
            "Redis",
            "Microservices",
            "REST APIs",
            "Distributed Systems",
            "Code Sandboxing"
        ],
        "repo": "https://github.com/jeet7122/code_execution_platform",
        "description": "A LeetCode-style distributed code execution platform designed to securely run user-submitted code, evaluate it against test cases, and return real-time results. The system emphasizes scalability, isolation, and reliable execution using containerized environments and event-driven processing.",
        "details": [
            "Designed a secure code execution pipeline using Docker containers to isolate user-submitted code and prevent system-level interference.",
            "Built a submission service to accept code, language, and problem metadata, triggering asynchronous evaluation workflows.",
            "Implemented Kafka-based event-driven architecture to decouple submission handling from execution workers.",
            "Developed distributed worker services to execute code against multiple test cases in parallel, improving evaluation speed.",
            "Implemented execution time limits and memory constraints to prevent infinite loops and resource abuse.",
            "Stored submission results, execution logs, and verdicts (AC, WA, TLE, RE) in PostgreSQL for auditability and analytics.",
            "Used Redis for caching frequently accessed problems and reducing database load.",
            "Designed extensible judge logic supporting multiple programming languages (Java, Python, C++).",
            "Built failure-safe retry mechanisms for execution jobs to ensure reliability under high load.",
            "Focused on scalability, fault isolation, and real-world competitive programming system design."
        ],
        "img_src": "imgs/code_execution_platform.png",
        "role_focus": "Distributed Systems, Code Execution Engine, Microservices Architecture, Docker Isolation, Event-Driven Processing"
    },
    {
        "title": "StreamFlow – Microservices-Based Video Streaming Platform",
        "stack": [
            "Java",
            "Spring Boot",
            "Apache Kafka",
            "PostgreSQL",
            "Redis",
            "JWT Authentication",
            "API Gateway",
            "Microservices",
            "Event-Driven Architecture",
            "Docker"
        ],
        "repo": "https://github.com/jeet7122/streaming_platform",
        "description": "A scalable backend system for a video streaming platform built using microservices architecture. The platform supports video uploads, user interactions, and real-time event processing using Kafka, demonstrating production-grade backend design patterns similar to YouTube or Netflix systems.",
        "details": [
            "Architected a microservices-based backend including API Gateway, User Service (JWT auth), Video Service, Like Service, and Comment Service.",
            "Implemented secure authentication and authorization using JWT, enabling protected user-specific operations.",
            "Designed Video Service to handle video metadata, upload workflows, and streaming-related operations.",
            "Used Apache Kafka for event-driven communication between services (e.g., video uploads, likes, comments).",
            "Built Like and Comment services with eventual consistency using asynchronous Kafka consumers.",
            "Implemented API Gateway to centralize routing, authentication, and request filtering across services.",
            "Used PostgreSQL for persistent storage and Redis for caching frequently accessed data.",
            "Designed scalable service-to-service communication with clear event contracts to prevent tight coupling.",
            "Containerized all services using Docker to simulate production-like distributed environments.",
            "Focused on scalability, modularity, and real-world system design aligned with modern streaming platforms."
        ],
        "img_src": "imgs/video_streaming_platform.png",
        "role_focus": "Microservices Architecture, Event-Driven Systems, Kafka Integration, Backend Engineering, Scalable System Design"
    },

    {
        "title": "Schedule Processing System – Real-Time Conflict Detection Engine",
        "stack": [
            "Next.js",
            "TypeScript",
            "JSON Processing",
            "Data Validation",
            "Algorithm Design",
            "Real-Time UI",
            "Frontend Architecture"
        ],
        "repo": "https://github.com/jeet7122/hackathon-it-stclair",
        "description": "A real-time schedule processing system built under a 4-hour hackathon constraint, designed to ingest heterogeneous datasets, validate data integrity, and detect scheduling conflicts efficiently. The project demonstrates rapid problem-solving, algorithm design, and robust data handling under time pressure.",
        "details": [
            "🏆 Won 1st place at St. Clair IT Club Hackathon 2026, competing against multiple teams within a 4-hour build window.",
            "Engineered a type-safe data ingestion pipeline to process and normalize 3 distinct JSON schemas (classes, exams, timetables).",
            "Implemented validation logic to detect null values, malformed timestamps, and schema inconsistencies before processing.",
            "Designed a conflict detection algorithm that analyzed 500+ schedule entries in under 200ms with zero missed conflicts.",
            "Built structured error aggregation to surface all validation issues in a single pass, improving debugging efficiency by ~40%.",
            "Delivered a responsive calendar UI that visualizes conflicts and provides actionable feedback to users in real time."
        ],
        "img_src": "imgs/hackathon.png",
        "role_focus": "Hackathon Winner Project 🏆, Data Processing, Real-Time Systems, Rapid Prototyping, Frontend Engineering"
    },
    {
        "title": "ScanForge – Distributed Code Scanning Platform",
        "stack": [
            "Java",
            "Spring Boot",
            "Apache Kafka",
            "WebSockets",
            "Docker",
            "Next.js",
            "Event-Driven Architecture",
            "Microservices",
            "Distributed Systems",
            "Real-Time Processing"
        ],
        "repo": "https://github.com/jeet7122/scanforge-ai",
        "description": "ScanForge is a distributed code scanning platform designed to process files asynchronously using Kafka-based event pipelines and deliver real-time scan results. The system demonstrates scalable microservices architecture, low-latency processing, and reliable event handling with idempotent guarantees.",
        "details": [
            "Architected an event-driven microservices system using Apache Kafka to decouple file ingestion, analysis, and result delivery.",
            "Implemented idempotent Kafka producers and consumer-side deduplication to ensure safe retries and eliminate duplicate processing.",
            "Achieved sub-2-second end-to-end scan feedback for 95% of requests by removing synchronous bottlenecks and enabling parallel execution.",
            "Scaled system to handle 10+ concurrent file scans using Kafka consumer groups for horizontal workload distribution.",
            "Designed real-time communication layer using WebSockets to stream scan progress updates, eliminating polling overhead.",
            "Defined strict Kafka message schemas as inter-service contracts, preventing integration regressions across distributed services.",
            "Containerized all services using Docker for consistent local and production-like environments.",
            "Focused on scalability, fault tolerance, and clean separation of concerns across microservices."
        ],
        "img_src": "imgs/scanforge_project.png",
        "role_focus": "Distributed Systems, Event-Driven Architecture, Kafka Integration, Idempotent Processing, Microservices Design"
    },
    {
        "title": "CloudVault – Personal Cloud Storage with Distributed Upload Pipeline",
        "stack": [
            "Java",
            "Spring Boot",
            "Apache Kafka",
            "PostgreSQL",
            "Redis",
            "Docker",
            "REST APIs",
            "Chunked File Upload",
            "Event-Driven Architecture",
            "Distributed Systems",
            "Oracle VM Instance"
        ],
        "repo": "https://personal-cloud-storage-two.vercel.app",
        "description": "CloudVault is a backend-focused personal cloud storage system designed to support large file uploads using chunked transfer, Kafka-based event streaming, and distributed processing. The project demonstrates scalable backend architecture, reliable upload pipelines, and cloud-style storage workflows similar to real-world systems like Google Drive or Dropbox.",
        "details": [
            "Designed a chunked file upload system allowing large files to be split into parts and uploaded reliably.",
            "Used Apache Kafka to publish upload events and process file chunks asynchronously.",
            "Implemented worker consumers to merge file chunks and finalize uploads without blocking the main API.",
            "Stored file metadata and upload state in PostgreSQL for consistency and recovery support.",
            "Used Redis for temporary upload session tracking and fast state lookup.",
            "Built REST APIs for upload start, chunk transfer, completion, and file retrieval.",
            "Designed the system using event-driven architecture to simulate real cloud storage pipelines.",
            "Containerized services using Docker to run API, Kafka, Redis, and DB together.",
            "Focused on scalability, fault tolerance, and distributed processing patterns.",
            "Optimized backend to support concurrent uploads from multiple users."
        ],
        "img_src": "imgs/cloudVault_project.png",
        "role_focus": "Distributed Systems, Event-Driven Architecture, Kafka Integration, Backend Infrastructure, Cloud Storage Design"
    },
    {
        "title": "ModuPro – Multi-Tenant Store Management SaaS",
        "stack": [
            "Next.js (App Router)",
            "TypeScript",
            "Tailwind CSS",
            "PostgreSQL + Drizzle ORM",
            "Clerk Authentication",
            "Multi-Tenant Architecture",
            "Role-Based Access Control (RBAC)",
            "Backend-for-Frontend (BFF) Architecture",
            "Server Actions & API Routes",
            "Scalable Modular Design"
        ],
        "repo": "https://modu-pro-5nl3.vercel.app",
        "description": "ModuPro is a multi-tenant SaaS platform that allows stores and businesses to self-register and manage their operations through isolated, role-based dashboards. Built with a Backend-for-Frontend (BFF) architecture, the platform ensures secure tenant isolation, scalable data modeling, and a highly customizable foundation for growing businesses.",
        "details": [
            "Designed and implemented a multi-tenant SaaS architecture where each store can self-register and operate in an isolated tenant environment.",
            "Built a secure onboarding flow allowing businesses to create their own workspace with automated tenant provisioning.",
            "Implemented role-based access control (RBAC) to support Admin, Staff, and User roles within each tenant.",
            "Used a Backend-for-Frontend (BFF) pattern to tailor server-side logic and data responses per role and tenant.",
            "Developed tenant-aware database schemas using Drizzle ORM to ensure strict data isolation across stores.",
            "Integrated Clerk authentication with custom role and tenant context enforcement.",
            "Created admin dashboards for store owners to manage users, roles, settings, and business modules.",
            "Designed modular system components to enable future feature expansion without impacting existing tenants.",
            "Implemented protected routes and server actions to prevent cross-tenant data access.",
            "Focused on scalability, maintainability, and clean architecture suitable for production-grade SaaS systems.",
            "Optimized UI with Tailwind CSS for responsiveness and consistency across tenant dashboards."
        ],
        "img_src": "imgs/modu_pro.png",
        "role_focus": "Full-Stack SaaS Development, Multi-Tenant System Design, Backend-for-Frontend Architecture, Database Modeling, Security & Access Control"
    },
    {
        "title": "JobFlow – Distributed Job Processing & Workflow Engine",
        "stack": [
            "Java",
            "Spring Boot",
            "PostgreSQL",
            "Redis",
            "REST APIs",
            "Distributed Locking",
            "Worker Queue Architecture",
            "Event-Driven Design",
            "Concurrency Control",
            "Microservice-Oriented Design"
        ],
        "repo": "https://github.com/jeet7122/job-flow",
        "description": "JobFlow is a backend-focused distributed job processing engine designed to handle asynchronous workflows using worker-based execution. The system supports reliable task scheduling, concurrency-safe processing, and scalable background job execution, making it suitable for real-world enterprise workloads.",
        "details": [
            "Designed and implemented a distributed job processing architecture using workers that consume tasks asynchronously from a queue.",
            "Implemented concurrency-safe job execution using distributed locking mechanisms to prevent duplicate processing.",
            "Built REST APIs for job creation, tracking, and lifecycle management.",
            "Developed worker polling logic capable of handling parallel execution across multiple instances.",
            "Used Redis for caching, locking, and fast state coordination between workers.",
            "Implemented retry strategies and failure-safe execution flow for resilient background processing.",
            "Designed scalable database schemas for job states, execution metadata, and processing history.",
            "Focused on clean layered architecture and separation of concerns for maintainability and scalability.",
            "Applied event-driven thinking to decouple job producers from processing workers.",
            "Optimized system for extensibility so new job types can be added with minimal changes."
        ],
        "img_src": "imgs/job-flow.png",
        "role_focus": "Backend System Design, Distributed Processing, Concurrency Control, Queue-Based Architecture, Scalable Spring Boot Development"
    },
    {
        "title": "API Gateway – Redis Token Bucket Rate Limiting Infrastructure",
        "stack": [
            "Java",
            "Spring Boot",
            "Spring Security",
            "JWT Authentication",
            "Redis",
            "Token Bucket Rate Limiting",
            "Distributed Systems",
            "Docker",
            "REST APIs",
            "Gateway Middleware Architecture"
        ],
        "repo": "https://github.com/jeet7122/api-gateway-with-limiter",
        "description": "A backend infrastructure project implementing a lightweight API Gateway with JWT authentication and Redis-backed token bucket rate limiting. The system demonstrates distributed traffic control, gateway middleware design, and scalable request management patterns used in production backend platforms.",
        "details": [
            "Designed and implemented an API Gateway architecture using Spring Boot to centralize authentication, request filtering, and traffic control.",
            "Built a Redis-backed token bucket rate limiting system to protect APIs from abuse and regulate request throughput.",
            "Implemented user-based rate limiting with IP fallback to ensure fair usage across authenticated and anonymous clients.",
            "Developed a JWT authentication filter integrated with Spring Security to validate tokens and secure protected endpoints.",
            "Designed a filter-chain request pipeline to enforce security and traffic policies before requests reach application logic.",
            "Stored token bucket state in Redis using distributed data structures to support consistent throttling across multiple gateway instances.",
            "Implemented structured API error responses for rate limit violations and authentication failures.",
            "Exposed monitoring endpoints to inspect rate limit state including remaining tokens and refill configuration.",
            "Dockerized the application with Docker Compose to run the API gateway alongside Redis in an isolated container environment.",
            "Applied modular architecture and separation of concerns for maintainability and extensibility."
        ],
        "img_src": "imgs/api_gateway_project.png",
        "role_focus": "Backend Infrastructure Engineering, Distributed Rate Limiting, API Gateway Architecture, Redis Integration, Security & Traffic Control"
    },
    {
        "title": "Jessica's WebApp – Client-Focused Business Platform",
        "stack": [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Spring Boot",
            "PostgreSQL",
            "Authentication & Authorization",
            "CMS Architecture",
            "Admin Dashboard",
            "Responsive Web Design"
        ],
        "repo": "https://github.com/jeet7122/client-project-development-repo",
        "description": "Jessica’s WebApp is a real-client business platform built to manage content, user interactions, and business operations through a scalable full-stack architecture. The project combines frontend usability with backend extensibility, featuring admin-level controls and production-oriented design decisions.",
        "details": [
            "Developed a full-stack client-facing web application tailored to real business requirements and workflows.",
            "Built a responsive frontend using Next.js and Tailwind CSS focused on clean UX and professional branding.",
            "Implemented secure authentication and role-based access for admin and client operations.",
            "Designed and developed an admin dashboard for managing content, business data, and platform settings.",
            "Structured backend APIs using Spring Boot following clean architecture principles.",
            "Created CMS-like functionality allowing dynamic updates without redeployment.",
            "Integrated form handling and backend validation for reliable user submissions.",
            "Ensured scalability by separating presentation, business logic, and data layers.",
            "Focused on production-ready code quality, maintainability, and future extensibility.",
            "Collaborated with real client requirements to deliver practical, business-driven features."
        ],
        "img_src": "imgs/jessica_webapp.png",
        "role_focus": "Full-Stack Development, Client Project Delivery, Backend API Design, Admin Panel Development, Scalable Architecture"
    },
    {
        "title": "Resinique Artistry – Custom Resin Art & Jewelry Platform",
        "stack": [
            "Next.js (App Router)",
            "TypeScript",
            "Tailwind CSS",
            "PostgreSQL + Drizzle ORM",
            "Clerk Authentication",
            "Server Actions & API Routes",
            "Discord Webhooks",
            "Responsive UI/UX Design"
        ],
        "repo": "https://resinique-artistry.shop",
        "description": "A full-stack e-commerce and showcase platform built for a resin art brand, enabling users to explore handcrafted resin jewelry and décor while supporting made-to-order customizations such as flower preservation and personalized resin pieces.",
        "details": [
            "Designed and developed a modern, responsive storefront showcasing resin jewelry, frames, wall clocks, and flower preservation artworks.",
            "Implemented product listing and detail pages using dynamic routing and server components for optimal performance and SEO.",
            "Built a custom order workflow allowing users to submit personalized requests with descriptions, contact details, and customization ideas.",
            "Integrated authentication using Clerk to enable user-specific interactions such as interest tracking and future order management.",
            "Developed a scalable database schema with Drizzle ORM to manage products, images, categories, and custom order submissions.",
            "Created skeleton loaders and smooth UI states to enhance perceived performance during data fetching.",
            "Implemented conditional UI behavior where unauthenticated users are prompted to sign in before expressing interest or placing custom orders.",
            "Focused on clean UI/UX with Tailwind CSS, emphasizing visual storytelling for handcrafted art products."
        ],
        "img_src": "imgs/resinique_project.png",
        "role_focus": "Full-Stack Development, E-commerce Architecture, Database Design, Authentication, UI/UX Engineering"
    },
    {
        "title": "Decision_Replay_Engine - AI-Powered Decision Analysis Platform",
        "stack": [
            "Next.js (App Router)",
            "TypeScript",
            "Tailwind CSS",
            "Clerk Authentication",
            "Stripe Payments",
            "PostgreSQL (Neon)",
            "Drizzle ORM",
            "OpenAI API"
        ],
        "repo": "https://decision-replay-engine.vercel.app",
        "description": "An AI-driven decision intelligence platform that helps users log, analyze, and replay past decisions to understand reasoning patterns and improve future outcomes. The system combines structured data capture with AI-generated insights to turn decision-making into a measurable and improvable process.",
        "details": [
            "Designed a decision lifecycle system allowing users to record context, options, confidence levels, and reasoning for every decision.",
            "Implemented AI-powered decision analysis to generate insights, highlight cognitive patterns, and suggest alternative perspectives.",
            "Built a secure, subscription-based access model using Stripe, enabling gated AI usage and usage-based limits.",
            "Integrated Clerk authentication to manage user identity, session handling, and protected dashboard routes.",
            "Developed a replay and outcome tracking mechanism to compare original decisions against real-world results over time.",
            "Created a responsive dashboard with interactive visual components to track decision history, confidence trends, and outcome accuracy.",
            "Engineered scalable backend logic using Drizzle ORM and PostgreSQL to ensure type-safe queries and reliable data persistence.",
            "Optimized UX flows to minimize friction in decision logging while maintaining structured, high-quality data input."
        ],
        "img_src": "imgs/decision_replay_engine_project.png",
        "role_focus": "Full-Stack Product Engineering, AI Integration, Subscription Systems, Data Modeling, UX-Centered Design"
    },
    {
        "title": "Explain-My-Errors - Next.js Error Analysis Platform",
        "stack": ["Next.js", "TypeScript", "Gemini AI [Model 2.5 Flash]", "Server-Side Rendering (SSR)", "Async Communication", "Database Indexing", "Hashing"],
        "repo": "https://error-normalizer.vercel.app",
        "description": "A high-performance error analysis tool that leverages Gemini 2.0 Flash to explain code errors in real-time. Built with Next.js SSR for SEO and speed, the app features an optimized storage layer that utilizes input hashing and indexing for lightning-fast database lookups and error deduplication.",
        "details": [
            "Implemented Next.js Server-Side Rendering (SSR) to ensure fast initial page loads and improved SEO for public error logs.",
            "Integrated Gemini 2.0 Flash API to provide instant, context-aware explanations for complex stack traces and debugging logs.",
            "Developed a dual-storage strategy saving errors in raw text and SHA-256 hash formats to enable O(1) deduplication and quick database lookups.",
            "Optimized database performance by creating composite indexes on User IDs and Input Hashes, significantly reducing query latency for returning users.",
            "Architected an asynchronous communication flow to handle high-volume API requests without blocking the main UI thread.",
            "Utilized TypeScript for end-to-end type safety, ensuring robust data handling between the Gemini API and the frontend components."
        ],
        "img_src": "imgs/error_normalizer_project.png",
        "role_focus": "Fullstack Engineering, Performance Optimization, Database Architecture, AI Integration"
    },
    {
        "title": "Store-Mate (Desktop POS System)",
        "stack": ["JavaFX", "MySQL", "JDBC", "DAO", "Performance Tuning"],
        "repo": "https://github.com/jeet7122/Store-Mate",
        "description": "Desktop Point-of-Sale built in JavaFX, featuring product management, supplier modules, sales transactions, inventory tracking, and real-time UI dashboards.",
        "details": [
            "Optimized database interaction code, reducing reload time for 4 critical endpoints from 3-4 seconds to approx 500ms.",
            "Implemented a modular DAO (Data Access Object) architecture with JDBC for clean separation of concerns.",
            "Developed Purchase & Inventory modules with supplier binding and dynamic transaction charts.",
            "Designed and enforced the development path, allocating and distributing tasks among team members."
        ],
        "img_src": "imgs/storemate_project.png",
        "role_focus": "Performance Optimization, Leadership, Full-Stack"
    },
    {
        "title": "URL-Shrink-It - Full Stack URL Management Platform",
        "stack": ["Java", "Neon DB", "Spring Boot", "Spring Security", "React", "JWT"],
        "repo": "https://urlshrinkit.store",
        "description": "Production-ready URL management platform focused on secure backend APIs, authentication, analytics, and scalable data handling.",
        "details": [
            "Designed and implemented RESTful backend services using Spring Boot for URL creation, redirection, and analytics tracking.",
            "Optimized database queries and API response handling, reducing response time for high-traffic endpoints from 3–4 seconds to approximately 500 milliseconds.",
            "Implemented JWT-based authentication and authorization using Spring Security to protect backend endpoints.",
            "Designed normalized relational database schemas in PostgreSQL (NeonDB) to ensure data integrity and scalability.",
            "Implemented pagination and sorting using Spring Data JPA to efficiently manage large user datasets.",
            "Deployed the backend on Render with environment-based configuration and secure database connectivity."
        ],
        "img_src": "imgs/shrinkit_project.png",
        "role_focus": "Backend Architecture, Performance Optimization, API Design"
    },
    {
        "title": "AI Research Assistant - Chrome Extension",
        "stack": ["Java", "Gemini AI [Model 2.5 Flash]", "Spring Boot", "Spring WebFlux", "Manifest.json", "Vanilla JS", "Chrome Extension APIs"],
        "repo": "https://github.com/jeet7122/AI-RESEARCH-ASSISTANT-UI",
        "description": "Lightweight Chrome extension for summarizing text and web pages. Users interact via the extension, which stores notes locally in Chrome Storage, while backend API calls are handled asynchronously using Spring WebFlux. No individual API keys or databases are required.",
        "details": [
            "Developed asynchronous backend services using Spring WebFlux to handle summarization requests efficiently.",
            "Integrated Gemini AI model for fast text summarization and content processing.",
            "Built Chrome extension using Vanilla JS to manage DOM interactions, handle user notes, and store them in Chrome local storage.",
            "Optimized frontend-backend communication with asynchronous API calls, reducing latency and improving user experience.",
            "Deployed backend on Render with environment-based configuration, ensuring 24x7 availability."
        ],
        "img_src": "imgs/aiass_project.png",
        "role_focus": "Fullstack Development, Asynchronous API Integration, Chrome Extension Implementation"
    }
]