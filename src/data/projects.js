export const projects = [
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
    },
    {
        "title": "Let_Us_Connect - Project Collaboration Hub",
        "stack": ["Next.js", "TypeScript", "Tailwind CSS", "Role-Based Access Control (RBAC)", "SMTP/Mailto Integration", "Database Management"],
        "repo": "https://letusconnect-st.vercel.app",
        "description": "A centralized networking platform designed for developers to showcase project ideas and find collaborators. The platform features a moderated submission workflow where an admin dashboard manages project visibility, ensuring high-quality content for the community of viewers.",
        "details": [
            "Architected a multi-role user system with dedicated views for Admins (moderation) and Viewers (collaboration).",
            "Implemented an Admin Approval Workflow to vet project submissions, allowing for the approval or rejection of posts before they go live.",
            "Integrated seamless collaboration triggers by mapping user profiles to direct email communication and GitHub repository links.",
            "Designed a project showcase UI that highlights project overviews, technical goals, and development roadmaps to attract relevant contributors.",
            "Built a responsive project discovery feed using Next.js, optimizing for fast navigation and clear calls-to-action (CTA) for collaboration.",
            "Developed secure form handling with TypeScript to manage project metadata, including repository validation and contact information."
        ],
        "img_src": "imgs/ltc_project.png",
        "role_focus": "Product Engineering, Workflow Automation, RBAC Implementation, UI/UX Design"
    },
]