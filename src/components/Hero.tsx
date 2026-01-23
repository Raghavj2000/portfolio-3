"use client";

import styles from './Hero.module.css';
import { motion } from 'framer-motion';

const Hero = () => {
    const dob = new Date('2001-03-03');
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    // Experience calculation (Start: Aug 2023)
    const startDate = new Date('2023-07-17');
    const diffInMs = today.getTime() - startDate.getTime();
    const experience = (diffInMs / (1000 * 60 * 60 * 24 * 365.25)).toFixed(1);

    return (
        <section className={styles.hero}>
            <div className={styles.bgGlow}></div>

            <div className={`container ${styles.gridContainer}`}>

                {/* Main Intro Card */}
                <motion.div
                    className={`${styles.card} ${styles.introCard}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.span
                        className={styles.greeting}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        Hello, I'm
                    </motion.span>
                    <motion.h1
                        className={styles.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        Raghavendra
                    </motion.h1>
                    <motion.h2
                        className={`gradient-text ${styles.role}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        Frontend Developer
                    </motion.h2>
                    <motion.p
                        className={styles.bio}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        Crafting pixel-perfect, scalable web experiences with a focus on performance and design.
                    </motion.p>
                    <motion.div
                        className={styles.actions}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <a href="#projects" className={styles.primaryBtn}>View Projects</a>
                        <a href="#contact" className={styles.secondaryBtn}>Let's Talk</a>
                    </motion.div>
                </motion.div>

                {/* Stats Card */}
                <motion.div
                    className={`${styles.card} ${styles.statsCard}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <div className={styles.statGroup}>
                        <span className={styles.statValue}>{age}</span>
                        <span className={styles.statLabel}>Years Old</span>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.statGroup}>
                        <span className={styles.statValue}>{experience}</span>
                        <span className={styles.statLabel}>Years Exp.</span>
                    </div>
                </motion.div>

                {/* Tech Stack Card */}
                <motion.div
                    className={`${styles.card} ${styles.techCard}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    <h3 className={styles.cardTitle}>Tech Stack</h3>
                    <div className={styles.techList}>
                        {['React', 'Angular', 'Next.js', 'TypeScript', 'Tailwind'].map((tech, index) => (
                            <motion.span
                                key={tech}
                                className={styles.techItem}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.6 + (index * 0.1), duration: 0.3 }}
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

                {/* Current Status / Location Card */}
                <motion.div
                    className={`${styles.card} ${styles.statusCard}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    <div className={styles.statusIndicator}>
                        <span className={styles.pulse}></span>
                        <span>Open to Work</span>
                    </div>
                    <p className={styles.location}>Based in India 🇮🇳</p>
                </motion.div>

            </div>
        </section>
    );
}

export default Hero;
