import React from 'react'
import Link from 'next/link'
import NavStyles from '../styles/components/Navbar.module.css'

const NavLogo = () => {
    return (
        <Link scroll={false} href="/">
            <a  className={`navAni ${NavStyles.homeNavLogoSection}`}>
                {/* <svg className={`accentFill ${NavStyles.navLogo}`} viewBox="0 0 168 96" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 45.3903C0 46.27 1.05411 46.7211 1.69048 46.1137L44.6503 5.10658C45.3944 4.3963 46.3835 4 47.4122 4H60.5616C61.0127 4 61.2332 4.55022 60.9069 4.86168L1.2381 61.8182C0.447374 62.573 0 63.6185 0 64.7116V92C0 94.2091 1.79086 96 4 96H76C78.2091 96 80 94.2091 80 92V50.6097C80 49.73 78.9459 49.2789 78.3095 49.8863L35.3497 90.8934C34.6056 91.6037 33.6165 92 32.5878 92H19.4384C18.9873 92 18.7668 91.4498 19.0931 91.1383L78.7619 34.1818C79.5526 33.427 80 32.3815 80 31.2884V4C80 1.79086 78.2091 0 76 0H4C1.79086 0 0 1.79086 0 4V45.3903ZM168 45.3903C168 46.27 166.946 46.7211 166.31 46.1137L123.35 5.10658C122.606 4.3963 121.616 4 120.588 4H107.438C106.987 4 106.767 4.55022 107.093 4.86168L166.762 61.8182C167.553 62.573 168 63.6185 168 64.7116V92C168 94.2091 166.209 96 164 96H92C89.7909 96 88 94.2091 88 92V50.6097C88 49.73 89.0541 49.2789 89.6905 49.8863L132.65 90.8934C133.394 91.6037 134.384 92 135.412 92H148.562C149.013 92 149.233 91.4498 148.907 91.1383L89.2381 34.1818C88.4474 33.427 88 32.3815 88 31.2884V4C88 1.79086 89.7909 0 92 0H164C166.209 0 168 1.79086 168 4V45.3903Z"/>
                </svg> */}
                <svg className={`accentFill ${NavStyles.navLogo}`} viewBox="0 0 85 44" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 24.3158L19.2857 3H27.2857L0 33.1579V42C0 43.1046 0.895447 44 2 44H40V19.6842L20.7143 41H12.7143L40 10.8421V0H2C0.895447 0 0 0.895416 0 2V24.3158ZM85 24.3158L65.7143 3H57.7143L85 33.1579V42C85 43.1046 84.1046 44 83 44H45V19.6842L64.2857 41H72.2857L45 10.8421V0H83C84.1046 0 85 0.895416 85 2V24.3158Z"/>
                </svg>
            </a>
        </Link>
    )
}

export default NavLogo
