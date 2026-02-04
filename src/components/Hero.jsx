import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Floating Elements */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <motion.div
                    animate={{
                        y: [-20, 20, -20],
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-10 w-72 h-72 bg-accent/20 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        y: [50, -50, 50],
                        rotate: [0, -20, 20, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-900/20 rounded-full blur-[120px]"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-accent tracking-widest uppercase text-sm mb-4 font-semibold"
                    >
                        Portfolio
                    </motion.h2>

                    <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight">
                        <span className="text-white">Hi, I'm </span>
                        <span className="text-gradient">Snehala A</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed max-w-3xl">
                        AI Engineer building intelligent, scalable systems that solve real-world problems.
                        Specializing in <span className="text-white">Machine Learning</span>, <span className="text-white">Gen AI</span>,
                        and <span className="text-white">Full Stack AI Applications</span>.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mb-8"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                            </span>
                            Looking for AIML / GenAI Intern & Full-time Opportunities
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col md:flex-row gap-4 justify-center"
                    >
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-accent hover:bg-violet-600 text-white rounded-full font-medium transition-all shadow-lg shadow-accent/25"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-full font-medium transition-all backdrop-blur-sm"
                        >
                            Contact Me
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
            >
                <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-2">
                    <div className="w-1 h-3 bg-gray-500 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
