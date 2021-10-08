import React from 'react'
import LogoIcon from './LogoIcon.js'
import NavStyles from '../styles/components/Navbar.module.css'
import PaginationBtns from './PaginationBtns.js';

const Navbar = ({type , currentPage}) => {


    const pageType = type;



    return (
    <nav className={NavStyles.navbar}>
        <div className="container">
            <div className={NavStyles.navFlex}>
                <LogoIcon />
                {(pageType === 'home' ?
                    <div className={NavStyles.navLinks}>
                        <a href="#work" className={`link textP3 textMain navAni ${NavStyles.navLink}`}>Work</a>
                        <a href="#about" className={`link textP3 navAni textMain ${NavStyles.navLink}`}>About</a>
                        <a href="#contact" className={`link textP3 navAni textMain ${NavStyles.navLink}`}>Contact</a>
                    </div>
                :
                <PaginationBtns currentPage={currentPage} />)}
            </div>
        </div>
    </nav>
    )
}

export default Navbar
