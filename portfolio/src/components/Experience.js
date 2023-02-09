import React from 'react'
import { DataExperience } from './Data'


function Experience() {

    const returnDataExperience = DataExperience.map((level=>{
        return (
            <div className="my-experience">
                <h4>{level.position}</h4>
                <div className="flex-container">
                    <p>Rukei Office</p>
                    <p>09/2019-10/2021</p>
                </div>
                <p><span className="job-description">Description of the job: </span>
                </p><ul>
                    <li>Calculate the quantities of materials.</li>
                    <li>Supervise workers and managing resources.</li>
                    <li>Design using engineering software.</li>
                </ul>
                <p />
            </div>
        )
    }))

  return (
    <div>
        <section id="experience">
        <br />
        <br />
        <br />
        <div className="main-sections">Experience</div>
        <div className="flex-container" id="flex-container-column">
            {returnDataExperience}
        </div>
        </section>
    </div>
  )
}

export default Experience
