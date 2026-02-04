import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Brain, Terminal, Server, Cpu } from 'lucide-react';

const About = () => {
    const skills = {
        technical: [
            "Machine Learning", "Gen AI", "LLM(Ops)", "MLOps",
            "NLP", "Computer Vision", "SQL"
        ],
        tools: [
            "Git", "AWS", "GCP", "Docker", "REST API",
            "PyTorch", "TensorFlow", "FastAPI", "N8N"
        ],
        soft: [
            "Leadership", "Communication", "Adaptability",
            "Problem Solving", "Collaboration"
        ]
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="about" className="py-20 relative bg-[#0a0a0a]">
            {/* Decorative background blur */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        About <span className="text-gradient">Me</span>
                    </h2>
                    <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
                        I am an AI Engineer with a strong grounding in machine learning theory and system-level implementation.
                        Experienced in designing data workflows, training and evaluating models, and integrating AI components into production environments.
                        My focus is on building reliable, efficient, and scalable AI systems that solve real-world problems with measurable impact.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Technical Skills */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="glass-card p-8 hover:border-accent/30 transition-colors"
                    >
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6 text-accent">
                            <Brain size={24} />
                        </div>
                        <h3 className="text-2xl font-bold mb-6 text-white">Technical</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.technical.map((skill) => (
                                <motion.span
                                    key={skill}
                                    variants={itemVariants}
                                    className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 border border-white/5 hover:border-accent/50 transition-colors"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Tools */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="glass-card p-8 hover:border-accent/30 transition-colors"
                    >
                        <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 text-blue-400">
                            <Terminal size={24} />
                        </div>
                        <h3 className="text-2xl font-bold mb-6 text-white">Tools & Frameworks</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.tools.map((skill) => (
                                <motion.span
                                    key={skill}
                                    variants={itemVariants}
                                    className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 border border-white/5 hover:border-blue-500/50 transition-colors"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Soft Skills */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="glass-card p-8 hover:border-accent/30 transition-colors"
                    >
                        <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 text-purple-400">
                            <Cpu size={24} />
                        </div>
                        <h3 className="text-2xl font-bold mb-6 text-white">Soft Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.soft.map((skill) => (
                                <motion.span
                                    key={skill}
                                    variants={itemVariants}
                                    className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 border border-white/5 hover:border-purple-500/50 transition-colors"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
