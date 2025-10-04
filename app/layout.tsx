import type { Metadata } from "next";
import { Open_Sans, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";




const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yen Vy's Portfolio",
  description: "Welcome to my portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
      </head>

      <body className={`${openSans.variable} ${bricolage.variable}`}>
        <nav>
          <div className="nav-container">
            <div className="logo">
              <span>CAO THI YEN VY</span>
            </div>
            <div className="right">

              <div className="links">
                <div className="link">
                  <a href="/">Home</a>
                </div>
                <div className="link">
                  <a href="#about">About</a>
                </div>
                <div className="link">
                  <a href="#skills">Skills</a>
                </div>
                <div className="link">
                  <a href="#projects">Projects</a>
                </div>
                <div className="link">
                  <a href="#contact">Contact</a>
                </div>
              </div>
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
        </nav>

        {children}
        <footer style={{ textAlign: "center", fontSize: "14px", color: "#b6b6b6ff", padding: "16px 0" }}>
          Made with 🤍 by <span className="font-semibold">Yen Vy</span> | © 2025
        </footer>

      </body>
    </html>
  );
}
