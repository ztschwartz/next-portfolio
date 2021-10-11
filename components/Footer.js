import React from 'react'
import Link from 'next/link'
import LogoIcon from './LogoIcon.js'
import Styles from '../styles/components/Footer.module.css'



const Footer = () => {
    return (
        <footer className={`bgDeep ${Styles.footer}`}>
            <div className="container">
                <div className="grid">
                    <div className={`col-4 ${Styles.contactSection}`}>
                        <h3 className="textMain textP2 textBold ">Get in touch</h3>
                        <div className={Styles.linksListSection}>
                            <a className="textP3 link textSoft">hello@zacktschwartz.com</a>
                            <a className="textP3 link textSoft">Message me on LinkedIn</a>
                            <a className="textP3 link textSoft">Message me on Polywork</a>
                        </div>
                    </div>
                    <div className={`col-6 ${Styles.infoSection}`}>
                        <h3 className="textMain textP2 textBold">Website designed and developed by Zack Schwartz.</h3>
                        <p className="textP2 textSoft">Site developed using Next.js</p>
                    </div>
                    <div className={`col-3 ${Styles.sitemapSection}`}>
                        <h3 className="textMain textP2 textBold">Sitemap</h3>
                        <div className={Styles.linksListSection}>
                            <Link scroll={false} href="/">
                                <a className="textP3 link textSoft">Introduction</a>
                            </Link>
                            <Link scroll={false} href="/#work">
                                <a className="textP3 link textSoft">Work</a>
                            </Link>
                            <Link scroll={false} href="/#about">
                                <a className="textP3 link textSoft">About</a>
                            </Link>
                            <Link scroll={false} href="/#contact">
                                <a className="textP3 link textSoft">Contact</a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={Styles.logoSection}>
                    <LogoIcon />
                </div>
            </div>
        </footer>
    )
}

export default Footer
