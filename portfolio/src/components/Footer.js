import React from 'react'

function Footer() {
  return (
    <div>
            <footer id="contact">
            <br />
            <br />
            <br />
            <div className="grid-container">
                <p>&nbsp;</p>
                <div>
                <a href="https://wa.me/00962778079497" title="Whatsapp"><i className="fa-brands fa-whatsapp links" style={{color: 'rgb(255, 255, 255)'}} /></a> 
                </div>
                <div>
                <a href="mailto:abdelmajied.abusuliman@gmail.com" title="G-Mail"><i className="fa-solid fa-envelope links" style={{color: 'rgb(255, 255, 255)'}} /></a>
                </div>
                <div>
                <a href="https://www.linkedin.com/in/abdelmajied-abusuliman-07a1a8253/" title="Linkedin"><i className="fa-brands fa-linkedin links" style={{color: 'rgb(255, 255, 255)'}} /></a>
                </div>
                <div>
                <a href="https://github.com/abdelmajied94abusuliman" style={{color: 'rgb(255, 255, 255)'}} title="Github"><i className="fa-brands fa-github links" /></a>
                </div>
                <div id="qoutes">If you have any questions, you can use whatsapp or g-mail. And if you want to see my projects you should go to my linkedin or github.</div>
            </div>
            </footer>
    </div>
  )
}

export default Footer
