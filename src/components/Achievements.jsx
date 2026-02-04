import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, BookOpen, Medal, Star } from 'lucide-react';

const Achievements = () => {
    const mainAchievements = [
        {
            title: "ABB Hackathon - Finalist",
            icon: <Trophy className="text-yellow-400" size={32} />,
            description: " Recognized for innovative problem-solving in industrial automation challenge.",
            date: "2025 (September)"
        },
        {
            title: "ZONE IX Table Tennis Tournament",
            icon: <Medal className="text-blue-400" size={32} />,
            description: "Winner (Team Captain). Led the team to victory demonstrating leadership and strategy.",
            date: "2025"
        },
        {
            title: "Centies Table Tennis Tournament",
            icon: <Medal className="text-amber-600" size={32} />,
            description: "3rd Place (Team Captain). Demonstrated consistent performance and teamwork.",
            date: "2025"
        }
    ];

    const education = [
        {
            school: "Sri Shakthi Institute of Engineering and Technology",
            degree: "B.Tech Artificial Intelligence and Machine Learning",
            year: "2022 - 2026"
        },
        {
            school: "Sri Chaitanya Techno School",
            degree: "Schooling with Excellence in Academics",
            year: "2020 - 2022"
        }
    ];

    const certifications = [
        "Building GANs and Diffusion Models - LinkedIn Learning",
        "Microsoft Azure Fundamentals - Microsoft Learn"
    ];

    const workshops = [
        "AWS DeepRacer Workshop - 2023",
        "RAMPeX - MLOps Workshop"
    ];

    return (
        <section id="achievements" className="py-20 bg-[#0a0a0a] relative overflow-hidden">
            {/* Decorative Grid */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-gradient">Achievements</span> & Timeline
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left Column: Main Achievements */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                            <Star className="text-accent" /> Highlights
                        </h3>
                        {mainAchievements.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="glass-card p-6 flex items-start gap-4 hover:bg-white/5 transition-colors"
                            >
                                <div className="p-3 bg-white/5 rounded-full">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white">{item.title}</h4>
                                    <p className="text-accent text-sm mb-2">{item.date}</p>
                                    <p className="text-gray-400">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Column: Education, Certs, Workshops */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-card p-6 space-y-6"
                        >
                            <div>
                                <h4 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2 flex items-center gap-2">
                                    <BookOpen size={20} className="text-accent" /> Education
                                </h4>
                                {education.map((edu, idx) => (
                                    <div key={idx} className="mb-4 last:mb-0">
                                        <h5 className="text-white font-medium">{edu.school}</h5>
                                        <div className="flex justify-between text-sm text-gray-400 mt-1">
                                            <span>{edu.degree}</span>
                                            <span>{edu.year}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="glass-card p-6"
                        >
                            <h4 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2 flex items-center gap-2">
                                <Award size={20} className="text-accent" /> Certifications
                            </h4>
                            <ul className="space-y-3">
                                {certifications.map((cert, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-gray-400 text-sm">
                                        <span className="mt-1 w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                                        {cert}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="glass-card p-6"
                        >
                            <h4 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2 flex items-center gap-2">
                                <Trophy size={20} className="text-accent" /> Workshops
                            </h4>
                            <ul className="space-y-3">
                                {workshops.map((ws, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-gray-400 text-sm">
                                        <span className="mt-1 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                                        {ws}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
