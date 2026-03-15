import React, {useState} from "react";
import Header from "./components/Header";
import HomeHero from "./components/Hero";
import ContentSection from "./components/layout/ContentSection";
import ProjectsSection from "./components/sections/ProjectSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import {Github, GithubIcon, Linkedin, Mail} from "lucide-react";
import AnimatedSection from "./utils/AnimatedSection.jsx";
import {AnimatedText} from "./utils/AnimatedText.jsx";
import CoffeeBackground from "./components/CoffeeBackground.jsx";
import ContactForm from "./components/sections/ContactForm.jsx";

export default function App() {
    const [step, setStep] = useState(0);

    return (
        <div className="min-h-screen">
            <CoffeeBackground withSteam />
            <Header/>
            <main>
                <HomeHero/>
                <AnimatedSection>
                    <ContentSection id="about" title="About Me" className="section">
                        <div className="max-w-6xl text-gray-300 space-y-6 text-lg leading-relaxed">
                            <p>
                                <AnimatedText
                                    isVisible={step >= 0}
                                    isActive={step === 0}
                                    onComplete={() => setStep(1)}
                                >
                                    I am a backend-focused software engineer passionate about building scalable,
                                    reliable systems that solve real-world problems. While I enjoy working across
                                    the stack, my core focus is on backend engineering :- designing clean APIs,
                                    asynchronous workflows, and maintainable architectures. I build modern interfaces
                                    with React, Next.js and Tailwind CSS, while developing
                                    scalable backend services using Java, Spring Boot, and Node.js.
                                </AnimatedText>
                            </p>

                            <p>
                                <AnimatedText isVisible={step >= 1}
                                              isActive={step === 1}
                                              onComplete={() => setStep(2)}>
                                    I enjoy designing systems that handle real workloads from backend automation
                                    workflows to distributed job processing and data-driven applications. Whether
                                    building internal tools or production-facing systems, I focus on performance,
                                    reliability, and clean separation of responsibilities across services.
                                </AnimatedText>
                            </p>

                            <p>
                                <AnimatedText isVisible={step >= 2} isActive={step === 2}>
                                    Beyond coding, I am deeply interested in backend architecture, scalability
                                    patterns, and building software with long-term maintainability in mind.I continuously explore system design concepts, asynchronous processing,
                                    and modern engineering practices to build solutions that are dependable and easy to evolve.
                                </AnimatedText>
                            </p>
                        </div>
                    </ContentSection>
                </AnimatedSection>


                <AnimatedSection>
                    <ProjectsSection/>
                </AnimatedSection>
                <AnimatedSection>
                    <ExperienceSection/>
                </AnimatedSection>
                <ContentSection
                    id="contact"
                    title="Get in Touch"
                    className="text-gray-300 bg-green-500/20"
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
        </div>
    );
}
