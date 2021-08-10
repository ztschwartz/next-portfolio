import React, {useEffect} from 'react'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import HeaderStyles from '../styles/components/SectionHeader.module.css'

const SectionHeader = ({ title, name }) => {

    const headerLink = `${name}HeaderLink`

    const headerBg = `${name}HeaderBg`

    useEffect(() => {
        window.requestAnimationFrame( () => {

          gsap.from(`#${headerLink}`, {
              scrollTrigger:{
                  trigger: `#${name}`,
                  start: "top top",
                  toggleActions: "play none none reverse"
              },
              display: "none",
              duration: 0.3,
              ease: "Power2.easeOut",
              opacity: 0,
              x: 24
          });
        
          gsap.to(`#${headerBg}`, {
              scrollTrigger:{
                  trigger: `#${name}`,
                  start: "top top",
                  toggleActions: "play none none reverse"
              },
              opacity: 1,
              duration: 0.2,
              ease: "Power2.easeOut"
          });
      
          })
    }, [])
    

    return (
        <div className={HeaderStyles.headerBar}>
            <div id={`${name}HeaderBg`} className={`transparentOverlay ${HeaderStyles.headerBarBg}`}>

            </div>
            <div className="container">
                <div className={HeaderStyles.headerBarFlex}>
                    <h1 className="mainText textSubtitle">
                        {title}<span className="accentText">.</span>
                    </h1>
                    <a href="#showcase" id={`${name}HeaderLink`} className="mainText textLink">
                        Back to top
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SectionHeader
