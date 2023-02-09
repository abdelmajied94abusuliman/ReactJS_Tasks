import React from 'react'
import { DataEducation } from './Data'

function Education() {
  
  const returnDataEducation = DataEducation.map((stage=>{
    return (
      <div className="stages-education" id={stage.id}><i className="fa-sharp fa-solid fa-graduation-cap font-awesome" /><br />{stage.place}<br /> <span>{stage.date}</span></div>     
    )
  }))


  return (
    <div>
      <section id="education">
        <br />
        <br />
        <br />
        <div className="main-sections">Education</div>
        <div className="flex-container" id="container-my-education-stages">
            {returnDataEducation}      
        </div>
      </section>
    </div>
  )
}

export default Education
