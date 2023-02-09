import React from 'react'
import { DataSkills } from './Data'



function SKills() {

  const returnDataSkills = DataSkills.map((skill => {
    return (
      <div className="progress-skills">
        <a href={skill.site}><img className="skills-logo" src={skill.image} alt="Laravel 9" /></a>
        <a href={skill.site} className="anch-decoration"><span className="my-skills">{skill.name}</span></a>
      </div>
    )
  }));

  return (
    <div>
        <section id="skills">
        <br />
        <br />
        <br />
        <div className="main-sections">Skills</div>
        <div id="progress-container">
          {returnDataSkills}
        </div>
      </section>
    </div>
  )
}

export default SKills
