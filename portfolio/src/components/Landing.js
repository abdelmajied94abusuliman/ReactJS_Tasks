import React from 'react'

function Landing() {
  return (
    <div>
      <section id="home">
        <h1 className="name-job-objective" id="myname"><span style={{color: 'rgb(177, 142, 0)'}}>Abdelmajied</span> Akram Abu Suliman</h1>
        <div className="name-job-objective" id="JobPosition">FullStack <span style={{color: 'rgb(177, 142, 0)'}}>Web Developer</span></div>
        <a href="https://drive.google.com/file/d/1ssvl9ZDsM7TJWP5_W5Ky1ZN1Kd6Yvz8s/view?usp=sharing" id="call-button">See My CV</a>
        <div className="name-job-objective" id="objective"><span style={{color: 'rgb(177, 142, 0)', fontSize: '60px', fontFamily: '"Courier New", Courier, monospace', fontWeight: 'bold'}}>I</span> have a little experience in web development and my passion is still pushing me towards more and that's why I always try to acquire many skills so that I can grow and provide more for the company I work for.</div>
      </section>
    </div>
  )
}

export default Landing
