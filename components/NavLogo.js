import React from 'react'
import Link from 'next/link'
import NavStyles from '../styles/components/Navbar.module.css'

const NavLogo = () => {
    return (
        <Link scroll={false} href="/">
            <a  className={`navAni ${NavStyles.homeNavLogoSection}`}>
                <svg className={`accentFill ${NavStyles.navLogo}`} viewBox="0 0 125 78" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M125 6C125 2.68629 122.314 0 119 0H6C2.68629 0 0 2.68629 0 6V72C0 75.3137 2.68629 78 6 78H119C122.314 78 125 75.3137 125 72V6ZM38.1905 20L20 40.1053V20C20 18.8954 20.8954 18 22 18H60V27.6923L31.8571 58H41.8095L60 37.8947V60H22C20.8954 60 20 59.1046 20 58V50.3077L48.1429 20H38.1905ZM86.8095 20L105 40.1053V20C105 18.8954 104.105 18 103 18H65V27.6923L93.1429 58H83.1905L65 37.8947V60H103C104.105 60 105 59.1046 105 58V50.3077L76.8571 20H86.8095Z"/>
                </svg>
            </a>
        </Link>
    )
}

export default NavLogo
