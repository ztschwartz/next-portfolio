import React, { useEffect , useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Image from 'next/image'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import HomeStyles from '../styles/Home.module.css'
import Navbar from '../components/Navbar.js'
import SectionHeader from '../components/SectionHeader.js'
import CaseStudyCard from '../components/CaseStudyCard.js'
import postData from '../posts/post.json'
import Footer from '../components/Footer'

gsap.registerPlugin(ScrollTrigger);

export default function Home({loaded , loaderView}) {

  const postString = JSON.stringify(postData)

  const postObject = JSON.parse(postString)

  const scrollTriggerFresh = () => ScrollTrigger.refresh();

  
  useEffect(() => {
    window.requestAnimationFrame( () => {

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
        y: 32,
        onComplete: scrollTriggerFresh
    });
  })
  }, [])


  return (
    <div className={HomeStyles.homePage}>
      <Navbar type='home' />
      <div className={`${HomeStyles.showcase}`} id="showcase">
        <div className="container">
          {/*  <h1 className={`textHeadline1Medium textMain fadeAni ${HomeStyles.showcaseHeadline}`}><span className={`fadeAni ${HomeStyles.showcaseMainHeadline}`}>Hey there—I’m Zack. I’m a passionate </span><span className={`fadeAni ${HomeStyles.showcaseHeadline}`}>product designer & developer currently </span><span className={`fadeAni ${HomeStyles.showcaseHeadline}`}>based in St. Louis, Missouri.</span></h1> */}
          <h1 className={`textH1 textRegular textSoft fadeAni ${HomeStyles.showcaseHeadlineGroup}`}>
            <span className={`fadeAni ${HomeStyles.showcaseMainHeadline}`}><span className="textMedium textMain">Hey there—I’m&nbsp;Zack<span className={`textAccent`}>.</span></span><br className={HomeStyles.showcaseBr} /> I’m a passionate </span>
            <span className={`fadeAni ${HomeStyles.showcaseHeadline}`}>product designer & developer currently </span>
            <span className={`fadeAni ${HomeStyles.showcaseHeadline}`}>based in St. Louis, Missouri.</span>
          </h1>
        </div>
      </div>
      <div className="fadeAni">
        <div className={HomeStyles.work} id="work">
          <SectionHeader title="My work" name="work"  />
          <div className={HomeStyles.workContent}>
            <div className="container">
              <div className="grid">
                <div className="col-12">
                  <CaseStudyCard postData={postData[0]} title={postObject[0].title} subtitle={postObject[0].subtitle} slug={postObject[0].meta.slug} img={ postObject[0].featureImg } />
                </div>
                <div className="col-6">
                  <CaseStudyCard postData={postData[1]} title={postObject[1].title} subtitle={postObject[1].subtitle} slug={postObject[1].meta.slug} img={postObject[1].featureImg} />
                </div>
                <div className="col-6">
                  <CaseStudyCard postData={postData[2]} title={postObject[2].title} subtitle={postObject[2].subtitle} slug={postObject[2].meta.slug} img={postObject[2].featureImg} />
                </div>
              </div>
              {/* <div className="sectionDividerWrapper">
                <div className="bgDeep sectionDivider">
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className={HomeStyles.about} id="about">
          <SectionHeader title="About me" name="about" />
          <div className="container">
            <div className={`grid sectionContent ${HomeStyles.aboutContent}`}>
              <div className="col-6--6 contentSection">
                <div className="textSection">
                  <p className="textSoft textH6 textRegular">I’m a developer-turned-product designer with 4 years of experience utilizing design and technology to solve complex problems. I value craft and approach all of my work with a deep curiosity. </p>
                  <p className="textSoft textH6 textRegular">My specific interests are interaction design, user experience, and closing the gap between design and engineering.</p>
                  <p className="textSoft textH6 textRegular">I started my career as a freelance web developer and shortly found a passion for design. In 2018, I founded a RYSE Digtial, a boutique agency that helps small businesses thrive thorugh design and strategy.</p>
                </div>
                <div className="textSection">
                  <p className="textMain textH6 textBold">My design principles</p>
                  <p className="textSoft textH6 textRegular">I started my career as a freelance web developer and shortly found a passion for design. In 2018, I founded a RYSE Digtial, a boutique agency that helps small businesses thrive thorugh design and strategy.</p>

                  <div className="textRow">
                    <div className="textGroup">
                      <p className="textMain textP2 textBold">Solve problems</p>
                      <p className="textSoft textP2">I started my career as a freelance web developer and shortly found a passion for design. In 2018, I founded a RYSE Digtial, a boutique agency that helps small businesses thrive thorugh design and strategy.</p>
                    </div>
                    <div className="textGroup">
                      <p className="textMain textP2 textBold">Be intentional</p>
                      <p className="textSoft textP2">gh design and strategy.</p>
                    </div>
                  </div>
                  <div className="textRow">
                    <div className="textGroup">
                      <p className="textMain textP2 textBold">Communicate</p>
                      <p className="textSoft textP2">I started my career as a freelance web developer and shortly found a passion for design. In 2018, I founded a RYSE Digtial, a boutique agency that helps small businesses thrive thorugh design and strategy.</p>
                    </div>
                    <div className="textGroup">
                      <p className="textMain textP2 textBold">Don’t be afraid to be wrong</p>
                      <p className="textSoft textP2">I started my career as a freelance web developer and shortly found a passion for design. In 2018, I founded a RYSE Digtial, a boutique agency that helps small businesses thrive thorugh design and strategy.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="sectionDividerWrapper">
              <div className="bgDeep sectionDivider">
              </div>
            </div> */}
          </div>
        </div>
        <div className={HomeStyles.contact} id="contact">
          <SectionHeader title="Contact me" name="contact" />
          <div className="container">
            <div className={`grid sectionContent`}>
              <div className="col-6--6 contentSection">
                <div className="textSection">
                    <p className="textMain textH6 textRegular">If you have any questions or just want to talk about design, I&apos;m not a hard guy to get in touch with. Just send me an email or DM me on social media</p>
                    <p className="textMain textH6 textRegular">I could talk for hours about design, development, or any of my other hobbies.</p>
                  </div>
                  <div className="textRow">
                  <div className="imgSection">
                      <Image className={HomeStyles.aboutImg} src="/img/about-img.png" alt="A photo of Zachary Schwartz" width={500} height={500} layout="responsive" placeholder="blur" blurDataURL="/img/about-imgblur.png" />
                    </div>
                    <div className="textSection">
                      <div className="textGroup">
                        <p className="textMain textP3 textBold">Email</p>
                        <a href="#" className="textMain link textP3">hello@zacktschwartz.com</a>
                      </div>
                      <div className="textGroup">
                        <p className="textMain textP3 textBold">Twitter—</p>
                        <a href="#" className="textMain link textP3">@zacktschwartz</a>
                      </div>
                      <div className="textGroup">
                        <p className="textMain textP3 textBold">LinkedIn—</p>
                        <a href="#" className="textMain link textP3">zacktschwartz</a>
                      </div>
                    </div>
                    
                  </div>
                </div>
            
              {/* <div className="col-6--6 contentSection">
                <div className="textSection">
                  <p className="textMain textH6">If you have any questions or just want to talk about design, I'm not a hard guy to get in touch with. Just send me an email or dm me on social media</p>
                  <p className="textMain textH6">I could talk for hours about design, development, or any of my other hobbies.</p>
                </div>
              </div>
              <div className="contentSection col-6--6">
                <div className="grid">
                  <div className="col-6 textSection">
                    <div>
                      <p className="textMain textP2 textBold">Email</p>
                      <p className="textMain link textP2">hello@zacktschwartz.com</p>
                    </div>
                    <div>
                      <p className="textMain textP2 textBold">Twitter—</p>
                      <p className="textMain link textP2">@zacktschwartz</p>
                    </div>
                    <div>
                      <p className="textMain textP2 textBold">LinkedIn—</p>
                      <p className="textMain link textP2">zacktschwartz</p>
                    </div>
                  </div>
                  <div className="col-6 imgSection">
                    <Image className={HomeStyles.aboutImg} src="/img/about-img.png" alt="A photo of Zachary Schwartz" width={500} height={500} layout="responsive" placeholder="blur" blurDataURL="/img/about-imgblur.png" />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
