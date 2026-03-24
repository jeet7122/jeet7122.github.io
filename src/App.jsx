import React from "react";
import Header from "./components/Header";
import HomeHero from "./components/Hero";
import ContentSection from "./components/layout/ContentSection";
import ProjectsSection from "./components/sections/ProjectSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import {Github, Linkedin, Mail} from "lucide-react";
import AnimatedSection from "./utils/AnimatedSection.jsx";
import ContactForm from "./components/sections/ContactForm.jsx";
import GraphPaperBackground from "./components/layout/GraphPaperBackground.jsx";
import Technologies from "./components/sections/Technologies.jsx";

export default function App() {

    return (
        <div className="min-h-screen">
            <GraphPaperBackground>
            <Header/>
            <main>
                <HomeHero/>
                <AnimatedSection>
                    <ContentSection
                        id="about"
                        title="About Me"
                        className="py-20 relative bg-blue-400/15"
                    >
                        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                            {/* LEFT SIDE — TEXT */}
                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed max-w-xl">

                                <p>
    <span className="font-semibold text-gray-900">
      Backend-focused engineer
    </span>{" "}
                                    building scalable, reliable systems that solve real-world problems.
                                </p>

                                <p>
                                    I specialize in designing{" "}
                                    <span className="font-medium text-gray-900">
      clean APIs, asynchronous workflows
    </span>{" "}
                                    and maintainable architectures that handle real workloads —
                                    from backend automation to distributed processing.
                                </p>

                                <p>
                                    My focus is on{" "}
                                    <span className="font-medium text-gray-900">
      performance, reliability, and scalability
    </span>{" "}
                                    while keeping systems simple, modular, and production-ready.
                                </p>

                                <p>
                                    I continuously explore{" "}
                                    <span className="font-medium text-gray-900">
      system design, distributed systems, and modern engineering practices
    </span>{" "}
                                    to build software that is robust and future-proof.
                                </p>

                            </div>

                            {/* RIGHT SIDE — VISUAL CARDS */}
                            <div className="grid grid-cols-2 gap-4">

                                {/* Card 1 */}
                                <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-xl transition">
                                    <h4 className="text-lg font-semibold text-gray-900">⚡ Performance</h4>
                                    <p className="text-sm text-gray-600 mt-2">
                                        Optimized backend systems & efficient processing
                                    </p>
                                </div>

                                {/* Card 2 */}
                                <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-xl transition">
                                    <h4 className="text-lg font-semibold text-gray-900">🧠 System Design</h4>
                                    <p className="text-sm text-gray-600 mt-2">
                                        Scalable architecture & distributed systems thinking
                                    </p>
                                </div>

                                {/* Card 3 */}
                                <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-xl transition">
                                    <h4 className="text-lg font-semibold text-gray-900">🔄 Async Systems</h4>
                                    <p className="text-sm text-gray-600 mt-2">
                                        Event-driven & real-time processing workflows
                                    </p>
                                </div>

                                {/* Card 4 */}
                                <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-xl transition">
                                    <h4 className="text-lg font-semibold text-gray-900">🚀 Clean Code</h4>
                                    <p className="text-sm text-gray-600 mt-2">
                                        Maintainable, readable, and production-ready systems
                                    </p>
                                </div>

                            </div>

                        </div>
                    </ContentSection>
                </AnimatedSection>

                <AnimatedSection>
                    <Technologies/>
                </AnimatedSection>
                <AnimatedSection>
                    <ProjectsSection/>
                </AnimatedSection>
                <AnimatedSection>
                    <ExperienceSection/>
                </AnimatedSection>
                <AnimatedSection>
                    <ContentSection
                        id="contact"
                        title="Get in Touch"
                        className="text-gray-300 bg-blue-400/15"
                    >
                        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">

                                {/* Left: Text */}
                                <div className="space-y-4 lg:mt-10">
                                    <p className="font-sans font-semibold text-lg leading-relaxed text-gray-100 max-w-xl">
                                        I'm always <span className="text-blue-600">excited to connect</span> with
                                        <span className="text-pink-900"> like-minded professionals</span>, explore
                                        <span className="text-purple-900"> potential collaborations</span>, or discuss
                                        <span className="text-green-700"> opportunities</span> that align with my skills and
                                        interests. Whether you have a <span className="text-yellow-700">project in mind</span>, a
                                        <span className="text-red-600"> role to discuss</span>, or just want to say
                                        <span className="text-teal-700"> hello</span>, feel free to reach out - I’d love to hear from you!
                                    </p>

                                    {/* Optional: small bullet highlights (makes it look premium) */}
                                    <div className="text-sm text-gray-900/80 space-y-2">
                                        <div className="flex items-center gap-2">
                                            <span className="h-2 w-2 rounded-full bg-emerald-400" />
                                            Usually replies within 24 hours
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="h-2 w-2 rounded-full bg-blue-400" />
                                            Open to backend / platform roles & collaborations
                                        </div>
                                    </div>
                                </div>

                                {/* Right: Form */}
                                <div className="w-full lg:flex lg:justify-end">
                                    <div className="w-full max-w-xl">
                                        <ContactForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ContentSection>

                </AnimatedSection>
            </main>

            <footer className="border-t border-gray-800 py-8 text-center text-sm text-gray-500">
                <div className="flex justify-center gap-6 mb-4">
                    <a
                        href="https://github.com/jeet7122"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-red-900 transition-colors"
                    >
                        <Github size={24}/>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/jeet-thakkar-054ba123b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-500 transition-colors"
                    >
                        <Linkedin size={24}/>
                    </a>

                    <a
                        href="mailto:jeetthakkar2612@gmail.com"
                        className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                        <Mail size={24}/>
                    </a>
                </div>

                <p>
                    Copyright &copy; {new Date().getFullYear()} Jeet Thakkar. All rights
                    reserved.
                </p>
            </footer>
            </GraphPaperBackground>
        </div>
    );
}
