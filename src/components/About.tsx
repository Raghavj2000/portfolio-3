"use client";

import styles from './About.module.css';
import { motion } from 'framer-motion';

export default function About() {
    // Experience calculation (Start: Aug 2023)
    const startDate = new Date('2023-08-01');
    const today = new Date();
    const diffInMs = today.getTime() - startDate.getTime();
    const experience = (diffInMs / (1000 * 60 * 60 * 24 * 365.25)).toFixed(1);

    return (
        <section className={styles.about} id="about">
            <div className="container">
                <motion.div
                    className={styles.grid}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Visual Side */}
                    <div className={styles.visualCol}>
                        <div className={styles.imageCard}>
                            <div className={styles.glow}></div>
                            <div className={styles.codeSnippet}>
                                <pre>
                                    <code>
                                        {`const developer = {
  name: "Raghavendra",
  role: "Frontend Dev",
  skills: ["React", "Next.js"],
  exp: "${experience} Years",
  focus: "Performance",
  hobby: "Gaming 🎮"
};`}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className={styles.contentCol}>
                        <h2 className={`gradient-text ${styles.heading}`}>About Me</h2>

                        <div className={styles.bio}>
                            <p>
                                A detail-oriented <span className={styles.highlight}>Frontend Developer</span> with {experience} years of experience specializing in React.js, Next.js, and Angular.
                            </p>
                            <p>
                                Skilled in building performant web applications using modern frontend patterns, including hooks, context API, and custom hooks. Experienced in state management (Redux) and developing reusable, maintainable UI components.
                            </p>
                            <p>
                                Focused on writing clean, efficient code and following best practices in testing and optimization. Passionate about creating effective tools and contributing to open-source projects.
                            </p>
                            <p>
                                When I'm not coding, I love playing <span className={styles.highlight}>Video Games</span>. My all-time favorites include <strong>Spider-Man</strong>, <strong>FIFA</strong>, and <strong>GTA</strong>.
                            </p>
                        </div>

                        <div className={styles.stats}>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>{experience}+</span>
                                <span className={styles.statLabel}>Years Exp.</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>5+</span>
                                <span className={styles.statLabel}>Projects</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>∞</span>
                                <span className={styles.statLabel}>Passion</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
