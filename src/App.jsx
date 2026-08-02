import React from "react";
import Header from "./components/Header";
import Hero from "./components/home/Hero.jsx";
import ExperienceSection from "./components/sections/ExperienceSection";
import {Github, Linkedin, Mail} from "lucide-react";
import AnimatedSection from "./utils/AnimatedSection.jsx";
import Technologies from "./components/technology/Technology.jsx";
import About from "./components/about/About.jsx";
import Projects from "./components/projects/Project.jsx";
import Contact from "./components/contact/Contact.jsx";

export default function App() {

    return (
        <div className="min-h-screen">
            {/*<GraphPaperBackground>*/}
            <Header/>
            <main>
                <Hero/>
                <About/>
                <AnimatedSection>
                    <Technologies/>
                </AnimatedSection>
                <AnimatedSection>
                    <Projects/>
                </AnimatedSection>
                <AnimatedSection>
                    <ExperienceSection/>
                </AnimatedSection>
                <AnimatedSection>
                    <Contact/>
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
            {/*</GraphPaperBackground>*/}
        </div>
    );
}
