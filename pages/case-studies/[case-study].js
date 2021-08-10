import React, {useEffect} from 'react'
import { useRouter } from 'next/router'
/* import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Image from 'next/image' */
import { gsap } from "gsap/dist/gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import CaseStudyStyles from '../../styles/CaseStudy.module.css'
import Navbar from '../../components/Navbar.js'
import SectionHeader from '../../components/SectionHeader.js'
import postData from '../../posts/post.json'





const CaseStudyPage = () => {

    const postString = JSON.stringify(postData)

    const postObject = JSON.parse(postString)

    const router = useRouter();

    const postPath = router.asPath;

    const post = postPath.replace('/case-studies/', '')

    console.log(post);

    const scrollTriggerFresh = () => ScrollTrigger.refresh();



    useEffect(() => {

        gsap.from(".navAni", {
          ease: "power3.out",
          delay: 0.3,
          opacity: 0,
          stagger: 0.12,
          duration: 1,
          y: -32,
          onComplete: scrollTriggerFresh
      });
    
      gsap.from(".fadeAni", {
          ease: "power3.out",
          opacity: 0,
          stagger: 0.12,
          delay: 0.2,
          duration: 1,
          y: 28,
          onComplete: scrollTriggerFresh
      });
    
      }, [])


    return (
        <div className={CaseStudyStyles.caseStudyPage}>
            <Navbar />
            <div className={CaseStudyStyles.showcase}>
                <div className="container">
                    <h1 className="mainText textHeadline2 fadeAni" >Case Study Page</h1>
                </div>
            </div>
        </div>
    )
}

export default CaseStudyPage