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
                                    I am a software developer with a passion for building clean,
                                    practical, and user-focused solutions.<span> I specialize in full-stack
                                    development</span>, creating intuitive interfaces with technologies like{" "}
                                    <span className="text-blue-400">React, </span>
                                    <span className="text-amber-400/70">Next.js </span>and
                                    <span className="text-cyan-300"> Tailwind CSS</span>, while
                                    delivering scalable backend systems using{" "}
                                    <span className="text-orange-400">Java</span> and{" "}
                                    <span className="text-green-400">Node.js</span>.
                                </AnimatedText>
                            </p>

                            <p>
                                <AnimatedText isVisible={step >= 1}
                                              isActive={step === 1}
                                              onComplete={() => setStep(2)}>
                                    I enjoy transforming real-world problems into functional
                                    applications. Whether it’s a point-of-sale interface built with{" "}
                                    <span className="text-blue-300">JavaFX</span> or a data dashboard
                                    powered by <span className="text-yellow-400">MySQL</span>, I focus
                                    on performance, maintainability, and long-term usability.
                                </AnimatedText>
                            </p>

                            <p>
                                <AnimatedText isVisible={step >= 2} isActive={step === 2}>
                                    Beyond code, I have a strong foundation in system architecture,
                                    UI/UX thinking, and building projects with real business value. I'm
                                    constantly exploring modern tools—design patterns, component
                                    libraries, data visualization, and deployment strategies—to refine
                                    my craft and deliver products that make a difference.
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
                    className= "text-gray-300">
                    <div className="max-w-lg mx-auto space-y-4 text-gray-300">
                        <p className="font-sans font-semibold text-lg leading-relaxed tracking-wide text-gray-100">
                            I'm always <span className="text-blue-400">excited to connect</span> with
                            <span className="text-pink-400"> like-minded professionals</span>, explore
                            <span className="text-purple-400"> potential collaborations</span>, or discuss
                            <span className="text-green-400"> opportunities</span> that align with my skills and
                            interests.
                            Whether you have a <span className="text-yellow-400">project in mind</span>, a
                            <span className="text-red-400"> role to discuss</span>, or just want to say
                            <span className="text-teal-400"> hello</span>, feel free to reach out—I’d love to hear from
                            you!
                        </p>
                        <a
                            href="mailto:jeetthakkar2612@gmail.com"
                            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
                        >
                            Connect
                        </a>
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
