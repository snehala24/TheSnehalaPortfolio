import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 relative overflow-hidden bg-primary">
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">
                        Let's <span className="text-gradient">Connect</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-12">
                        Currently available for freelance projects and open to full-time opportunities.
                        If you have a project in mind or just want to say hi, feel free to reach out!
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-16">
                        <a
                            href="mailto:snehalaanand24@gmail.com"
                            className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white hover:bg-accent hover:border-accent transition-all group"
                        >
                            <Mail className="group-hover:scale-110 transition-transform" />
                            <span>Email Me</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/snehala-anandkumar-376b1b276"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all group"
                        >
                            <Linkedin className="group-hover:scale-110 transition-transform" />
                            <span>LinkedIn</span>
                        </a>
                        <a
                            href="https://github.com/snehala24"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white hover:bg-gray-800 hover:border-gray-800 transition-all group"
                        >
                            <Github className="group-hover:scale-110 transition-transform" />
                            <span>GitHub</span>
                        </a>
                    </div>

                    <footer className="text-gray-500 text-sm border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p>© 2026 Snehala A. All rights reserved.</p>
                        <p className="text-gray-600">Designed & Built by <span className="text-gray-400">Snehala A</span></p>
                    </footer>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
