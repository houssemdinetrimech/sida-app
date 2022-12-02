import React from 'react'

const Footer = () => {
    return (<footer>
        <div className="footer">
        <div className="social"><h2>Contact Us: </h2></div>
            <div className="social"><a title="Send an email to us" href="mailto:houssem19862009@gmail.com"  target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope-o fa-2x"></i></a></div>
            <div className="social"><a title="Go to our twitter page" href="https://twitter.com/houssemdinetrimech"  target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter fa-2x" ></i></a></div>
            <p className="muted footer-text">Designed and Developed Captin <br></br> &copy;&nbsp;2022    Nuit de l'info</p>
        </div> 
    </footer>)
}

export default Footer