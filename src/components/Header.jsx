import React, { useState } from "react";
import { Menu, X, Home, User, Code, Briefcase, Mail } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Projects", href: "#projects", icon: Code },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const id = href.substring(1);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm border-b border-gray-800 shadow-xl">
      <div className="container flex justify-between items-center h-20">
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, "#home")}
          className="text-2xl font-bold tracking-tight text-indigo-400 flex items-center group"
        >
          <span className="text-3xl mr-1">J</span>
          <span className="group-hover:text-indigo-400 transition-colors duration-300 text-red-900">
            Thakkar.
          </span>
        </a>

        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-lime-900 hover:text-indigo-400 transition duration-150 ease-in-out font-medium relative group"
            >
              {link.name}
              <span className="absolute left-0 bottom[-4px] w-full h-0.5 bg-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-gray-900 hover:text-indigo-400 p-2 rounded-md transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-green-500/20 border-t border-gray-800 shadow-inner">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-800 hover:text-indigo-400 transition duration-150 ease-in-out"
              >
                <link.icon size={20} />
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
