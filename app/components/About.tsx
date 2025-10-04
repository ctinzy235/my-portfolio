import Image from "next/image";
import "./About.css";

export default function About() {
    return (
        <section id="about" className="about-container">
            <div className="about-content">
                {/* Ảnh bên trái */}
                <div className="about-left">
                    <div className="profile-wrapper">
                        <Image
                            src="/images/img_profile.png"
                            alt="Profile"
                            width={535}
                            height={562}
                            className="profile-img"
                            priority
                        />
                    </div>
                </div>

                {/* Nội dung bên phải */}
                <div className="about-right">
                    <h1 className="about-title">About me</h1>
                    <p>
                        Hello! I'm <span className="highlight">Yen Vy</span>, a recent Information Technology graduate passionate
                        about web development and data-driven solutions.
                    </p>
                    <p>
                        During my studies, I gained experience in{" "}
                        <span className="highlight">
                            front-end development, database design, and programming with Java and Python
                        </span>
                        . I also worked on academic projects that enhanced my problem-solving and collaboration skills.
                    </p>
                    <p>
                        Thank you for visiting my portfolio. I look forward to applying my knowledge, continuing to learn, and
                        contributing to impactful tech projects.
                    </p>

                    <div className="education">
                        <div className="edu-text">
                            <a
                                href="https://www.hcmus.edu.vn/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="edu-link"
                            >
                                University of Science - VNUHCM
                            </a>{" "}
                            | 2021-2025
                            <br />
                            <span>Major: Computer Science (Knowledge Engineering)</span>
                        </div>
                        <div className="edu-logo">
                            <Image
                                src="/images/logo.png" 
                                alt="HCMUS Logo"
                                width={65}
                                height={60}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
