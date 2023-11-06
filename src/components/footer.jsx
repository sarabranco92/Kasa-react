import React from 'react'
import logo from "../assets/logo-footer.png"
import "../styles/App.css";

function Footer() {
    return (
        <footer className='footer'>
            <div className='img_footer'><img src={logo} alt='Logo de bas de page' /></div>
            <div className='slogan-footer'><p>© 2020 Kasa. All rights reserved</p></div>
        </footer>
    )
}

export default Footer