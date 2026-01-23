"use client";

import styles from './Blog.module.css';
import { motion } from 'framer-motion';

const posts = [
    {
        title: "Optimizing Webpack for Single-File Output in React Projects",
        excerpt: "A comprehensive guide on how to bundle your React application into a single file specific requirements.",
        date: "Medium",
        link: "https://medium.com/@raghavjayateerth/optimizing-webpack-for-single-file-output-in-react-projects-a-comprehensive-guide-029703822a8f"
    },
    {
        title: "How to Import a Local Font into a React Project",
        excerpt: "Step-by-step tutorial on properly configuring and using custom local fonts in your React applications.",
        date: "Medium",
        link: "https://medium.com/@raghavjayateerth/how-to-import-a-local-font-into-a-react-project-fd14975e38c1"
    }
];

export default function Blog() {
    return (
        <section className={styles.blog} id="blog">
            <div className="container">
                <motion.h2
                    className={styles.heading}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Latest Articles
                </motion.h2>

                <div className={styles.grid}>
                    {posts.map((post, index) => (
                        <motion.a
                            key={index}
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <span className={styles.date}>{post.date}</span>
                            <h3 className={styles.title}>{post.title}</h3>
                            <p className={styles.excerpt}>{post.excerpt}</p>
                            <div className={styles.readMore}>
                                Read Article
                                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
