import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake, School } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="py-20 relative">
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-gradient">Experience</span> & Volunteering
                    </h2>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                            <HeartHandshake size={120} className="text-accent" />
                        </div>

                        <div className="relative z-10">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Volunteer / Student Mentor</h3>
                                    <h4 className="text-lg text-accent flex items-center gap-2">
                                        <School size={18} /> St. Joseph Matriculation Higher Secondary School
                                    </h4>
                                </div>
                                <span className="mt-2 md:mt-0 px-4 py-1 bg-white/5 rounded-full text-sm text-gray-300 border border-white/10">
                                    2 Years
                                </span>
                            </div>

                            <p className="text-gray-400 leading-relaxed space-y-4">
                                Volunteered to guide students from 5th grade, coaching them both technically and providing emotional mentorship.
                                <br /><br />
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>
                                        <strong className="text-white">Academic Guidance:</strong> Helped students improve their skills in Mathematics and Science, focusing on strengthening their weak areas.
                                    </li>
                                    <li>
                                        <strong className="text-white">Mentorship:</strong> Built strong emotional connections with students, listening to their problems and providing guidance to help them navigate their future.
                                    </li>
                                    <li>
                                        <strong className="text-white">Communication:</strong> Actively treated and communicated with students to solve their personal and academic challenges.
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
