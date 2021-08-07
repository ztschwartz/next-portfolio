import React from 'react'
import HeaderStyles from '../styles/components/SectionHeader.module.css'

const SectionHeader = ({ title, name }) => {

    return (
        <div className={HeaderStyles.headerBar}>
            <div id={`${name}HeaderBg`} className={`transparentOverlay ${HeaderStyles.headerBarBg}`}>

            </div>
            <div className="container">
                <div className={HeaderStyles.headerBarFlex}>
                    <h1 className="mainText textSubtitle">
                        {title}<span className="accentText">.</span>
                    </h1>
                    <a href="#home-showcase" id={`${name}HeaderLink`} className="textMain textLink">
                        Back to top
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SectionHeader
