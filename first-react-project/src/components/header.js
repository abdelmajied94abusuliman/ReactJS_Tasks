import React from "react";
import "./header.css";

class Header extends React.Component {
    render(){
        return (
            
            <header id="header-navbar">
                <div id="header-navbar-container">
                    <img src={require('./IMG/logo.png')} alt="logo" id="header-logo" />
                    <div id="header-navbar-middle-tabs">
                        <a className="header-links-to-pages" href="./home.php" >Home</a>
                        <a className="header-links-to-pages" href="./services.php">Services</a>
                        <a className="header-links-to-pages" href="./about_us.php">About us</a>
                        <a className="header-links-to-pages" href="./contact_us.php">Contact us</a>
                        <a className="header-links-to-pages" href="./aqaba-city.php">Aqaba City</a>
                    </div>
                    <div id="header-navbar-users">
                        <a className="header-links-to-pages" href="./register.php" style={{ marginRight: "25px"}}>Register</a>
                        <a className="header-links-to-pages" href="./login.php">Login</a>
                    </div>
                </div>
            </header>
)
}
}

export default Header;