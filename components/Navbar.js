import React from 'react'
import NavLogo from './NavLogo.js'
import NavStyles from '../styles/components/Navbar.module.css'

const Navbar = ( ) => {
    return (
    <nav className={NavStyles.navbar}>
        <div className="container">
            <div className={NavStyles.navFlex}>
                <NavLogo />
                <div className={NavStyles.navLinks}>
                    <a href="#work" className={`link textLink navAni ${NavStyles.navLink}`}>Work</a>
                    <a href="#about" className={`link textLink navAni ${NavStyles.navLink}`}>About</a>
                    <a href="#contact" className={`link textLink navAni ${NavStyles.navLink}`}>Contact</a>
                </div>
            </div>
        </div>
    </nav>
    )
}

export default Navbar
