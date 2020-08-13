import React from 'react'

const Footer = props => {
return(
<footer className="w3-center w3-black w3-padding-64 w3-opacity w3-hover-opacity-off">
    <a href="#home" className="w3-button w3-light-grey"><i className="fa fa-arrow-up w3-margin-right"></i>To the top</a>
    <div className="w3-xlarge w3-section ">
        <a className="fa fa-facebook-official w3-hover-opacity spacing" href="https://www.facebook.com/jonoorayner"></a>
        <a className="fa fa-instagram w3-hover-opacity spacing" href="https://www.instagram.com/equineutopia/"></a>
        <i className="fa fa-snapchat w3-hover-opacity spacing"></i>
         {/* <i className="fa fa-pinterest-p w3-hover-opacity"></i>
         <i className="fa fa-twitter w3-hover-opacity"></i>
         <i className="fa fa-linkedin w3-hover-opacity"></i> */}
    </div>
    <p>Powered by <a href="#" title="W3.CSS" target="_blank" className="w3-hover-text-green">SilverBack Development</a></p>
</footer>
)
}

export default Footer                   