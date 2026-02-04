import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { title: "About", href: "#about" },
        { title: "Projects", href: "#projects" },
        { title: "Achievements", href: "#achievements" },
        { title: "Contact", href: "#contact" },
    ];

    const socialLinks = [
        { icon: <Github size={20} />, href: "https://github.com/nehala24" },
        { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/snehala-anandkumar-376b1b276" },
        { icon: <Mail size={20} />, href: "mailto:snehalaanand24@gmail.com" },
    ];

    return (
        <nav className="fixed w-full z-50 bg-primary/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <motion.a
                    href="#"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent-glow"
                >

                    TheSnehalaPortfolio
                </motion.a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.title}
                            href={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className="text-gray-300 hover:text-accent transition-colors text-sm uppercase tracking-wider"
                        >
                            {link.title}
                        </motion.a>
                    ))}
                    <div className="flex gap-4 ml-4 border-l border-white/10 pl-4">
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 + (0.1 * index) }}
                                className="text-gray-400 hover:text-accent transition-colors"
                                whileHover={{ scale: 1.1 }}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-300 hover:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-primary border-b border-white/10"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.title}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-300 hover:text-accent transition-colors text-lg"
                                >
                                    {link.title}
                                </a>
                            ))}
                            <div className="flex gap-6 pt-4 border-t border-white/10">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-accent transition-colors"
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
