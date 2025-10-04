// app/projects/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Projects.module.css";

const projects = [
  {
    slug: "learning-english-app",
    title: "Learning English App",
    shortDesc: "A web app that helps Vietnamese learners practice English vocabulary and grammar with interactive exercises.",
    images: ["/images/home_proj1.png"],
    github: "https://github.com/ctinzy235/Learning-English-App",
    demo: "https://youtu.be/51D8reOiny8",
  },
  {
    slug: "nlp-web-app",
    title: "NLP Web App",
    shortDesc: "A Vietnamese NLP web app with text analysis and visualization.",
    images: ["/images/home_proj2.png"],
    github: "https://github.com/ctinzy235/TextAnalyzer-Vietnamese",
    demo: "https://youtu.be/K1Yqx6mqJoY",
  },
  {
    slug: "stuffed-animal-shop",
    title: "Stuffed Animal Shop",
    shortDesc: "An e-commerce website for managing plush toy products, including inventory, orders, and customer data.",
    images: ["/images/home_proj3.jpg"],
    github: "https://github.com/ctinzy235/Plush-Toy-Store-Management-System",
  },
  {
    slug: "pathfinding-project",
    title: "Pathfinding Project",
    shortDesc: "AI Pathfinding Project: Implemented multiple search algorithms in Python to find the shortest path on obstacle maps with graphical visualization.",
    images: ["/images/home_proj4.png"],
    github: "https://github.com/ctinzy235/CsAI",
    demo: "https://youtu.be/Ws_m8yY4JQM",
  },
  {
    slug: "chess-game",
    title: "Chess Game",
    shortDesc: "OOP course project: Developed a console-based Chess game for 2 players in C++ using object-oriented programming principles.",
    images: ["/images/home_proj5.png"],
    github: "https://github.com/ctinzy235/chess-game-project",
    demo: "https://youtu.be/oPbjrh9u29Y",
  },
  
];

export default function ProjectsPage() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <h1 className={styles.title}>Projects</h1>
      <p className={styles.intro}>
        Here are some of my academic projects during my studies, focusing on
        areas such as software development, search algorithms, natural language
        processing (NLP), and API integration. <br />
        These projects allowed me to strengthen my technical foundation and apply theory into real-world
        practice.
      </p>

      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <div key={project.slug} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={project.images[0]}
                alt={project.title}
                width={330}
                height={208}
                className="rounded-lg"
              />
            </div>
            <div className={styles.cardContent}>
            <h2>
              <Link href={`/projects/${project.slug}`}>{project.title}</Link>
            </h2>
            <p>{project.shortDesc}</p>
            <div className={styles.links}>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i> GitHub
              </a>
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <i className="fa-solid fa-up-right-from-square"></i> Live Demo
                </a>
              )}
            </div>
            </div>
          </div>
          
        ))}
      </div>
    </section>
  );
}
