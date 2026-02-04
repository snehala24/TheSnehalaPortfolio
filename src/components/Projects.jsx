import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers, Code2 } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Retail Customer Journey Agent",
            tech: ["FastAPI", "Redis", "PostgreSQL", "Docker", "Agentic Framework", "Groq"],
            description: "Developed modular services for recommendations, inventory, payments, and order management, enabling intelligent, human-like retail assistance.",
            link: "https://github.com/snehala24/Retail-Customer-Jounery-Agent",
            color: "from-purple-500 to-indigo-500"
        },
        {
            title: "CaptionCloud",
            tech: ["Google Cloud Vision API", "Gemini LLM", "Firestore", "Artifact Registry", "Cloud Functions"],
            description: "AI-powered web app that analyzes uploaded images to detect objects and generate natural, human-like captions using Google Cloud Vision and Gemini.",
            link: "https://github.com/snehala24/CaptionCloud",
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "RepoSage - AI Repo Insight Tool",
            tech: ["FastAPI", "Gemini 1.5 Flash", "Streamlit", "FAISS", "LangChain", "GitPython"],
            description: "Instantly understand any public GitHub repository by asking questions in natural language. Uses RAG for deep code insights.",
            link: "https://github.com/snehala24/RepoSage-An-AI-Powered-GitHub-Repository-Insight-Tool",
            color: "from-emerald-500 to-teal-500"
        },
        {
            title: "RoomMakeover.AI",
            tech: ["YOLOv8", "FastAPI", "Docker", "AWS (EC2, ECR)", "GitHub Actions", "Gemini API"],
            description: "AI-based interior design assistant that transforms room images into personalized makeover plans based on style and budget.",
            link: "https://github.com/snehala24/RoomMakeover-AI",
            color: "from-orange-500 to-amber-500"
        },
        {
            title: "Fake News Detection",
            tech: ["Python", "NewsAPI", "NLTK", "Scikit-learn", "TF-IDF", "Logistic Regression"],
            description: "Real-time machine learning system classifying live news articles as real or fake, fetching content dynamically via NewsAPI.",
            link: "#", // User mentioned project but didn't provide link in list, assuming it might be local or added later, but usually better to have one. The user prompt did NOT explicitly give a link for Fake News, only description. Wait, looking closer at prompt... Ah, only list was provided. I will check if a link exists or leave blank. The user prompt listed the project title but only description. 
            // REVIEW: User text says "FAKE-NEWS-DETECTION" then describes it. No URL provided in the block unlike others.
            // Wait, I should double check user prompt block.
            // There is "FAKE-NEWS-DETECTION ...". No URL like github.com/...
            // I will use a placeholder or '#'
            color: "from-red-500 to-pink-500"
        },
        {
            title: "Human Pose Estimation",
            tech: ["Python", "OpenCV", "Mediapipe", "Streamlit"],
            description: "Real-time pose detection application using Deep Learning to analyze body movements and exercise form for sports.",
            link: "https://github.com/snehala24/HUMAN_POSE_ESTIMATION_FOR_SPORTS",
            color: "from-violet-500 to-fuchsia-500"
        }
    ];

    return (
        <section id="projects" className="py-20 bg-secondary relative">
            {/* Background Elements */}
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Showcasing innovative AI solutions, from Computer Vision to GenAI Agents.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group glass-card overflow-hidden hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full"
                        >
                            <div className={`h-2 bg-gradient-to-r ${project.color}`} />

                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-6">
                                    <Code2 className="text-gray-400 group-hover:text-white transition-colors" size={28} />
                                    <div className="flex gap-4">
                                        {project.link !== "#" && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-400 hover:text-accent transition-colors p-2 hover:bg-white/5 rounded-full"
                                                title="View Code on GitHub"
                                            >
                                                <Github size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 mt-auto">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="text-xs font-mono text-accent/80 bg-accent/5 px-2 py-1 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
