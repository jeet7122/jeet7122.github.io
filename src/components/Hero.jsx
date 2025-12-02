import React, { useState, useEffect } from 'react'
import { Zap, ArrowRight, CornerRightUp } from 'lucide-react'
import { Icon } from '@iconify/react';

const heroSkills = [
{ name: 'React', color: 'text-blue-400', icon: '⚛️' },
{ name: 'JavaFX', color: 'text-white', icon: '▲' },
{ name: 'Tailwind', color: 'text-cyan-400', icon: '🎨' },
{ name: 'Java', color: 'text-blue-500', icon: <Icon icon="logos:java" />},
{ name: 'Node.js', color: 'text-green-500', icon: '🟢' },
{ name: 'MYSQL', color: 'text-yellow-500', icon: <Icon icon="logos:mysql"/>},
]

export default function HomeHero() {
    const [currentSkillIndex, setCurrentSkillIndex] = useState(0)


    useEffect(() => {
    const interval = setInterval(() => setCurrentSkillIndex((s) => (s + 1) % heroSkills.length), 3000)
    return () => clearInterval(interval)
    }, [])

    const currentSkill = heroSkills[currentSkillIndex]


    const scrollToSection = (e, href) => {
    e.preventDefault()
    const id = href.substring(1)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
    <section id="home" className="pt-24 min-h-screen flex items-center bg-gray-950">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-8 text-center lg:text-left">
                <div className="space-y-4">
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight">Hi, I'm <span className="text-indigo-400">Jeet Thakkar</span>.</h1>
                    <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-gray-400 flex justify-center lg:justify-start items-center space-x-3">
                        <Zap className="w-6 h-6 text-indigo-400" />
                        <span>Software Engineer</span>
                    </h2>
                </div>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0">
                Relentless self-taught developer, passionate about crafting high-performance <span className="font-semibold text-indigo-300">Java</span> solutions,
                and driven to grow rapidly in the tech industry</p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center lg:justify-start">
                    <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50">
                    Hire Me!
                    <CornerRightUp className="ml-2 w-4 h-4" />
                    </a>


                    <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="inline-flex items-center justify-center px-8 py-3 border border-indigo-400 text-base font-medium rounded-xl text-indigo-400 hover:bg-indigo-900 transition duration-300 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:ring-opacity-50">
                    Available for collaborations
                    <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                </div>
                <div className="mt-8 pt-4 border-t border-gray-800 flex flex-wrap gap-4 justify-center lg:justify-start">
                    <div className={`flex items-center space-x-2 p-3 rounded-full bg-gray-800 shadow-xl border-2 border-indigo-500/50 transform transition-all duration-700 ease-in-out animate-pulse-fade ${currentSkill.color}`}>
                        <span className="text-xl">{currentSkill.icon}</span>
                        <span className="font-mono text-sm font-semibold">{currentSkill.name}</span>
                    </div>
                    <span className="text-sm font-medium text-gray-500 self-center">... and more.</span>
                </div>
            </div>
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-indigo-900/50 p-2 border-4 border-indigo-500/50 shadow-[0_0_40px_rgba(99,102,241,0.5)] transition-all duration-500 hover:shadow-[0_0_60px_rgba(99,102,241,0.8)]">
                    <img src="/src/assets/imgs/profile2.png" alt="Profile" className="object-contain w-full h-full rounded-full transition-transform duration-500 hover:scale-105" onError={(e)=>{e.target.onerror=null; e.target.src='https://placehold.co/320x320/2563eb/ffffff?text=Profile+Photo'}} />
                    <div className="absolute inset-0 rounded-full border-4 border-dashed border-indigo-400 opacity-30 animate-spin-slow"></div>
                </div>
            </div>
        </div>
    </section>
    )}

