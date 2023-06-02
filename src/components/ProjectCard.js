import React from "react";
import "../styles/projectCard.css";

/* 
name: name of app
type: kind of project
desc: one sentence desc of app
git: github link
link: kobalt link if its a thing
*/
export default function ProjectCard({
  name,
  sub,
  image,
  desc,
  techUsed,
  git,
  link,
}) {
  return (
    <div className="project-item">
      <img
        style={{ maxWidth: "200px", borderRadius: "31.25px", padding: "10px" }}
        src={image}
        alt=""
      />
      <div className="project-desc">
        <div className="card-header">
          <h2>{name}</h2>
          <p className="subtitle">{sub}</p>
        </div>
        <p>{desc}</p>
        <div className="image-link-container">
          <p>{techUsed}</p>
          {git && (
            <a href={git} target="_blank">
              <img
                className="image-link"
                src="/github.svg"
                alt="github"
                title="View on GitHub"
              />
            </a>
          )}
          {link && (
            <a href={link} target="_blank">
              <img
                className="image-link"
                src="/link.svg"
                alt="link"
                title="Product Page"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
