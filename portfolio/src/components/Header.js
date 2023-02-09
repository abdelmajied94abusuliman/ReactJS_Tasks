import React from 'react'

function Header() {
  return (
    <div>
      <header>
        <div id="my-logo">
          <a href="#home"><img src={require("./img/logoooooo.png")} alt="My Logo for my website" /></a>
        </div>
        <nav className="flex-container navbar-large-screen">
          <a className="nav-icon" href="#home">Home</a>
          <a className="nav-icon" href="#education">Education</a>
          <a className="nav-icon" href="#experience">Experience</a>
          <a className="nav-icon" href="#projects">Projects</a>
          <a className="nav-icon" href="#skills">Skills</a>
          <a className="nav-icon" href="#contact">Contact with me</a>
          <a className="nav-icon" id="du-en" href="Deutsch/deutsch-index.html">DE</a>
        </nav>
      </header>
    </div>
  )
}

export default Header
