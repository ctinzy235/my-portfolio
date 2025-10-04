import Image from "next/image";
import styles from "./page.module.css";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <section id="home">
        <div className={styles.mainContainer} >
          <div className={styles.image}>
            <Image
              src="/images/my-pic.png"
              alt="Profile Picture"
              width={806}
              height={852}
            />
          </div>
          <div className={styles.intro}>
            <h1 className="title">
              <span className={styles.titleHighlight}>My</span> <br /> Portfolio
            </h1>
            <div>
              <p className={styles.description}>
                I'm a passionate developer with experience in building
                web applications using modern technologies. <br />Welcome to my portfolio
                website!
              </p>
            </div>
            <div className={styles.socialLinks}>
              <a
                href="https://github.com/ctinzy235"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.facebook.com/ctinzy235"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                href="https://linkedin.com/in/caothiyenvy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/ctinzy235"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
            <div className={styles.btn}>
              <Link href="#about" scroll={true} className={styles.buttonLink}>
                Explore little me
              </Link>
            </div>
          </div>



        </div>
      </section>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}



