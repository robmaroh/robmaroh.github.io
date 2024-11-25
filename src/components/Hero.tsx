import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-purple-500/20 shadow-lg shadow-purple-500/10">
              <img
                src="https://www.freeiconspng.com/img/2394?auto=format&fit=crop&q=80&w=300&h=300"
                alt="Robert Allen Marlatt"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 to-transparent pointer-events-none" />
          </motion.div>

          <div className="text-center md:text-left">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6 space-y-2"
            >
              <h1 className="text-5xl md:text-7xl font-bold">
                Hello, I'm
              </h1>
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Robert Allen</span>
              </h1>
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Marlatt</span>
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-400 mb-12 max-w-2xl"
            >
              A recent university graduate looking for a career in Computer Science.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center md:justify-start gap-4"
            >
              <a href="#projects" 
                className="px-8 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors"
              >
                View My Work
              </a>
              <a href="#contact" 
                className="px-8 py-3 border-2 border-purple-500 text-purple-400 rounded-full hover:bg-purple-500 hover:text-white transition-colors"
              >
                Contact Me
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 0.5, 
            delay: 0.6,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.2
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="text-purple-400" size={32} />
        </motion.div>
      </div>
    </section>
  );
}