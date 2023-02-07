import React from "react";
import "./footer.css"


class Footer extends React.Component {
    render() {

        return (



<footer>
    <div id="footer-container">
        <div><img id="footer-logo" src={require("./IMG/logo.png")} alt="logo" /></div>
        <div id="container-copy-right">
            <p className="copy-right">Equal Opportunity Housing for apartments for rent.</p>
            <p className="copy-right">Copyright© 2023 Abdelmajied Abu Suliman</p>
        </div>
        <div>
            <div className="services-contact-container">
                <h2>Services</h2>
                <a href="./#">Rent</a>
                <a href="./#">Buy</a>
                <a href="./#">Sell</a>
            </div>
        </div>
        <div>
            <div className="services-contact-container">
                <h2>Contact us</h2>
                <a href="./#">abdelmajied.abusuliman@gmail.com</a>
                <a href="./#">+962 7 7807 9497</a>
                <div id="social-media">
                    <a href="./#"><i className="fa-brands fa-facebook"></i></a>
                    <a href="./#"><i className="fa-brands fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </div>

</footer>

)
}
}

export default Footer;