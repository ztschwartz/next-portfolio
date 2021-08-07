import React, { useEffect , useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Image from 'next/image'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import homeStyles from '../styles/Home.module.css'
import Navbar from '../components/Navbar.js'
import SectionHeader from '../components/SectionHeader.js'
import Loader from '../components/Loader.js'
import CaseStudyCard from '../components/CaseStudyCard.js'
import postData from '../posts/post.json'

gsap.registerPlugin(ScrollTrigger);

export default function Home({loaded , loaderView}) {

  const postString = JSON.stringify(postData)

  const postObject = JSON.parse(postString)


/*   const [loaded, setLoaded] = useState(false); */



  

  /* useEffect(() => {
    
    gsap.from(".navAni", {
      ease: "power3.out",
      delay: 0.3,
      opacity: 0,
      stagger: 0.12,
      duration: 1,
      y: -32,
      onComplete: ScrollTrigger.refresh()
  });

  gsap.from(".fadeAni", {
      ease: "power3.out",
      opacity: 0,
      stagger: 0.12,
      delay: 0.2,
      duration: 0.8,
      y: 28,
      onComplete: ScrollTrigger.refresh()
  });

  }, []) */



  return (
    <div className={homeStyles.homePage}>
        {(loaderView ? <Loader loaded={loaded} />: null)}
        <Navbar />
        <div className={homeStyles.showcase} id="showcase">
          <div className="container">
            <h1 className={`textHeadline1 textMain fadeAni ${homeStyles.showcaseHeadline}`}><span className={`fadeAni ${homeStyles.showcaseHeadline}`}>Hey there—I’m Zack. I’m a passionate </span><span className={`fadeAni ${homeStyles.showcaseHeadline}`}>product designer & developer currently </span><span className={`fadeAni ${homeStyles.showcaseHeadline}`}>based in St. Louis, Missouri.</span></h1>
          </div>
        </div>
        <div className="fadeAni">
          <div className={homeStyles.work} id="work">
            <SectionHeader title="My work" />
            <div className={homeStyles.work}>
              <div className="container">
                <div className="grid">
                  <div className="col-6">
                    <CaseStudyCard title={postObject[0].title} subtitle={postObject[0].subtitle} slug={postObject[0].slug} img={`/../${ postObject[0].featureImg }`} />
                  </div>
                  <div className="col-6">
                  <CaseStudyCard title={postObject[1].title} subtitle={postObject[1].subtitle} slug={postObject[1].slug} img={`/../${ postObject[1].featureImg }`} />
                  </div>
                  <div className="col-12">
                    <CaseStudyCard  title={postObject[2].title} subtitle={postObject[2].subtitle} slug={postObject[2].slug} img={`/../${ postObject[2].featureImg }`} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={homeStyles.about} id="about">
            <SectionHeader title="About me" />
            <div className="container">
            </div>
          </div>
        </div>
    </div>
  )
}
