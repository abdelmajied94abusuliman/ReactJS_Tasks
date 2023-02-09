import React from 'react'
import { DataProject } from './Data'


function Projects() {

  const returnDataProjects = DataProject.map((project=>{
    return (
        <div className="my-projects">
          <a href={project.github}><img className="projects-images" src={project.image} alt="for ecommerce website and dashboard using php" /></a>
          <a href={project.github} className="project-name"><h4>{project.type}</h4></a>
          <a href={project.github}>More details</a>
          <p>{project.description}</p>
        </div>
    )
  }))

  return (
    <div>
      <section id="projects">
        <br />
        <br />
        <br />
        <div className="main-sections">Projects</div>
        <div className="grid-container-for-projects">
          {returnDataProjects}
        </div>
      </section>
    </div>
  )
}

export default Projects
