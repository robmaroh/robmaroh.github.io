import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800"
    >
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
        >
          RM
        </motion.div>
        
        <div className="flex items-center gap-6">
          <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/robmaroh?tab=repositories" target="_blank" rel="noopener noreferrer" 
            className="hover:text-purple-400 transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/marlatt-robertallen" target="_blank" rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:marlatt.robertallen@gmail.com"
            className="hover:text-purple-400 transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </nav>
    </motion.header>
  );
}