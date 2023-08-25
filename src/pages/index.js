import * as React from "react";
import { useRef, useState, useEffect } from "react";
import "../styles/global.css";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  //95 is header height atm
  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 95,
      behavior: "smooth",
    });
  };

  return (
    <div className="container">
      <header>
        <div className="text-socials">
          <h1>Bryce Cullen |</h1>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/bryce-cullen" target="_blank">
              <img
                className="social-icon"
                src="/linkedin.svg"
                alt="linkedin"
                title="LinkedIn"
              ></img>
            </a>
            <a href="/resume.pdf" target="_blank">
              <img
                className="social-icon"
                src="/resume.svg"
                alt="resume"
                title="Resume"
              ></img>
            </a>
          </div>
        </div>
        <div className="links">
          <a onClick={() => scrollToSection(homeRef)}>Home</a>
          <a onClick={() => scrollToSection(aboutRef)}>About</a>
          <a onClick={() => scrollToSection(projectsRef)}>Projects</a>
        </div>
      </header>

      <div ref={homeRef} className="Home">
        <h1>Hello!</h1>
        <p>I'm Bryce, a full-stack software engineer.</p>
        <a onClick={() => scrollToSection(aboutRef)}>A little bit about me</a>
      </div>

      <div ref={aboutRef} className="About">
        <div className="AboutLeft">
          <h1>Who I am</h1>
          <p>
            I graduated with a BS in Computer Science from Virginia Tech in May
            2023. I enjoy building efficient, impactful, and secure software
            solutions for modern day problems. When I'm not coding, I enjoy
            playing volleyball, skiing, and hiking.
          </p>
          <p>
            I am looking to join a team of engineers building innovative
            software.
          </p>
        </div>
        <div className="AboutRight">
          <h1>My Tech Stack</h1>
          <div>
            <p>backend</p>
            <img
              className="lang-logo"
              src="/java.png"
              alt="java"
              title="Java"
            />
            <img className="lang-logo" src="/c.png" alt="c" title="C" />
            <img
              className="lang-logo"
              src="/python.png"
              alt="python"
              title="Python"
            />
          </div>
          <div>
            <p>frontend</p>
            <img
              className="lang-logo"
              src="/html-5.png"
              alt="html"
              title="HTML5"
            />
            <img
              className="lang-logo"
              src="/css-3.png"
              alt="css"
              title="CSS3"
            />
            <img
              className="lang-logo"
              src="/java-script.png"
              alt="js"
              title="JavaScript"
            />
            <img
              className="lang-logo"
              src="/react.png"
              alt="react"
              title="React & React Native"
            />
            <img
              className="lang-logo"
              src="/node.png"
              alt="node"
              title="Node.js"
            />
            <img
              className="lang-logo"
              src="/swift.png"
              alt="swift"
              title="Swift"
            />
            <img
              className="lang-logo"
              src="/laravel.png"
              alt="laravel"
              title="Laravel"
            />
            <img className="lang-logo" src="/php.png" alt="php" title="PHP" />
          </div>
          <div>
            <p>tools</p>
            <img className="lang-logo" src="/sql.png" alt="sql" title="SQL" />
            <img
              className="lang-logo"
              src="/graphql.png"
              alt="graphql"
              title="GraphQL"
            />
            <img className="lang-logo" src="/aws.png" alt="aws" title="AWS" />
            <img
              className="lang-logo"
              src="/git.png"
              alt="git"
              title="Version Control"
            />
          </div>
        </div>
      </div>

      <div ref={projectsRef} className="Projects">
        <h1>Check out some of my projects</h1>
        <div className="project-container">
          <ProjectCard
            name="ProCal"
            sub="iOS app"
            image="/procal.png"
            desc="Find the best calorie per dollar meals at America's favorite restuarants"
            techUsed="Swift, Python, REST API"
            link="https://www.kobaltsoftware.org/procal"
          />
          <ProjectCard
            name="Auto Wizard"
            sub="Website"
            image="/wizard.svg"
            desc="Find engine specifications for any car make and model"
            techUsed="Laravel, PHP, MySQL"
            link="https://youtu.be/02RX7HuC_yQ"
          />
          <ProjectCard
            name="upLift"
            sub="iOS app"
            image="/uplift.png"
            desc="A social media app built for the weight lifting community"
            techUsed="React Native, AWS Amplify, S3, GraphQL"
            git="https://gitlab.cs.vt.edu/brycec23/uplift/"
            link="https://www.kobaltsoftware.org/uplift"
          />
          <ProjectCard
            name="Portfolio"
            sub="Website"
            image="/bclogo.png"
            desc="My web portfolio (this) created from scratch"
            techUsed="React, Gatsby, Javascript, HTML5, CSS"
            git="https://github.com/brycec23/portfolio"
          />
        </div>
      </div>

      <div className="footer">
        <p>Bryce Cullen Copyright 2023</p>
        <a href="https://www.flaticon.com/">Some icons from FlatIcon</a>
      </div>
    </div>
  );
}
