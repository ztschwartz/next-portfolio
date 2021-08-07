import React, {useEffect} from 'react'
/* import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Image from 'next/image' */
import { gsap } from "gsap/dist/gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import CaseStudyStyles from '../../styles/CaseStudy.module.css'
import Navbar from '../../components/Navbar.js'
import SectionHeader from '../../components/SectionHeader.js'





const CaseStudyPage = () => {

    const scrollOnRender = () =>{
        document.documentElement.style.scrollBehavior = 'auto'

        window.scroll({
        top: 0
        });

        document.documentElement.style.scrollBehavior = 'smooth'
    }

    useEffect(() => {
    
        const pageRendered =() => {
            setTimeout((scrollOnRender()), 300)
        }

        gsap.from(".navAni", {
          ease: "power3.out",
          delay: 0.3,
          opacity: 0,
          stagger: 0.12,
          duration: 0.8,
          y: -32,
          /* onComplete: ScrollTrigger.refresh() */
      });
    
      gsap.from(".fadeAni", {
          ease: "power3.out",
          opacity: 0,
          stagger: 0.12,
          delay: 0.2,
          duration: 0.8,
          y: 28,
          /* onComplete: ScrollTrigger.refresh() */
      });
    
      }, [])


    return (
        <div className={CaseStudyStyles.caseStudyPage}>
            <Navbar />
            <div className={CaseStudyStyles.showcase}>
                <div className="container">
                    <h1 className="mainText textHeadline2" >Case Study Page</h1>
                </div>
            </div>
        </div>
    )
}

export default CaseStudyPage