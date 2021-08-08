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
import Loader from '../components/Loader.js'
import CaseStudyCard from '../components/CaseStudyCard.js'
import postData from '../posts/post.json'

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
        duration: 0.8,
        y: -32,
        onComplete: scrollTriggerFresh
    });
  
    gsap.from(".fadeAni", {
        ease: "power3.out",
        opacity: 0,
        stagger: 0.12,
        delay: 0.2,
        duration: 0.8,
        y: 28,
        onComplete: scrollTriggerFresh
    });
  
    gsap.from("#workHeaderLink", {
        scrollTrigger:{
            trigger: "#work",
            start: "top top",
            toggleActions: "play none none reverse"
        },
        display: "none",
        duration: 0.3,
        ease: "Power2.easeOut",
        opacity: 0,
        x: 24
    });
  
    gsap.to("#workHeaderBg", {
        scrollTrigger:{
            trigger: "#work",
            start: "top top",
            toggleActions: "play none none reverse"
        },
        opacity: 1,
        duration: 0.2,
        ease: "Power2.easeOut"
    });

    gsap.from("#aboutHeaderLink", {
      scrollTrigger:{
          trigger: "#about",
          start: "top top",
          toggleActions: "play none none reverse"
      },
      display: "none",
      duration: 0.3,
      ease: "Power2.easeOut",
      opacity: 0,
      x: 24
  });

  gsap.to("#aboutHeaderBg", {
      scrollTrigger:{
          trigger: "#about",
          start: "top top",
          toggleActions: "play none none reverse"
      },
      opacity: 1,
      duration: 0.2,
      ease: "Power2.easeOut"
  });
  
  gsap.from("#contactHeaderLink", {
    scrollTrigger:{
        trigger: "#contact",
        start: "top top",
        toggleActions: "play none none reverse"
    },
    display: "none",
    duration: 0.3,
    ease: "Power2.easeOut",
    opacity: 0,
    x: 24
  });

  gsap.to("#contactHeaderBg", {
      scrollTrigger:{
          trigger: "#contact",
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
    <div className={HomeStyles.homePage}>
        {(loaderView ? <Loader loaded={loaded} />: null)}
        <Navbar />
        <div className={HomeStyles.showcase} id="showcase">
          <div className="container">
            <h1 className={`textHeadline1 mainText fadeAni ${HomeStyles.showcaseHeadline}`}><span className={`fadeAni ${HomeStyles.showcaseHeadline}`}>Hey there—I’m Zack. I’m a passionate </span><span className={`fadeAni ${HomeStyles.showcaseHeadline}`}>product designer & developer currently </span><span className={`fadeAni ${HomeStyles.showcaseHeadline}`}>based in St. Louis, Missouri.</span></h1>
          </div>
        </div>
        <div className="fadeAni">
          <div className={HomeStyles.work} id="work">
            <SectionHeader title="My work" name="work"  />
            <div className={HomeStyles.work}>
              <div className="container">
                <div className="grid">
                  <div className="col-6">
                    <CaseStudyCard postData={postData[0]} title={postObject[0].title} subtitle={postObject[0].subtitle} slug={postObject[0].meta.slug} img={ postObject[0].featureImg } />
                  </div>
                  <div className="col-6">
                  <CaseStudyCard postData={postData[1]} title={postObject[1].title} subtitle={postObject[1].subtitle} slug={postObject[1].meta.slug} img={postObject[1].featureImg} />
                  </div>
                  <div className="col-12">
                    <CaseStudyCard postData={postData[2]} title={postObject[2].title} subtitle={postObject[2].subtitle} slug={postObject[2].meta.slug} img={postObject[2].featureImg} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={HomeStyles.about} id="about">
            <SectionHeader title="About me" name="about" />
            <div className="container">
              <div className={`grid sectionContent ${HomeStyles.aboutContent}`}>
                <div className="col-6--6 contentGroup">
                  <div className="textGroup">
                    <p className="softText textBody1">Hey again, I’m Zack Schwartz. I’m a designer, developer, and problem solver currently living in St. Louis, Missouri. Recently I’ve been particularly passionate about the design process and the communication between designers and developers.</p>
                    <p className="softText textBody1">Hey again, I’m Zack Schwartz. I’m a designer, developer, and problem solver currently living in St. Louis, Missouri. Recently I’ve been particularly passionate about the design process and the communication between designers and developers.</p>
                    <p className="softText textBody1">Hey again, I’m Zack Schwartz. I’m a designer, developer, and problem solver currently living in St. Louis, Missouri. Recently I’ve been particularly passionate about the design process and the communication between designers and developers.</p>
                  </div>
                  <div className="textGroup">
                    <p className="mainText textSubtitle">My design principles.</p>
                    <p className="softText textBody1">Hey again, I’m Zack Schwartz. I’m a designer, developer, and problem solver currently living in St. Louis, Missouri. Recently I’ve been particularly passionate about the design process and the communication between designers and developers.</p>
                  </div>
                  <div className="textGroup">
                    <p className="mainText textTitle">Start with a well defined problem.</p>
                    <p className="softText textBody1">Hey again, I’m Zack Schwartz. I’m a designer, developer, and problem solver currently living in St. Louis, Missouri. Recently I’ve been particularly passionate about the design process and the communication between designers and developers.</p>
                    <p className="softText textBody1">Hey again, I’m Zack Schwartz. I’m a designer, developer, and problem solver currently living in St. Louis, Missouri. Recently I’ve been particularly passionate about the design process and the communication between designers and developers.</p>
                  </div>
                  <div className="textGroup">
                    <p className="mainText textTitle">Start with a well defined problem.</p>
                    <p className="softText textBody1">Hey again, I’m Zack Schwartz. I’m a designer, developer, and problem solver currently living in St. Louis, Missouri. Recently I’ve been particularly passionate about the design process and the communication between designers and developers.</p>
                    <p className="softText textBody1">Hey again, I’m Zack Schwartz. I’m a designer, developer, and problem solver currently living in St. Louis, Missouri. Recently I’ve been particularly passionate about the design process and the communication between designers and developers.</p>
                  </div>
                  <div className="textGroup">
                    <p className="mainText textTitle">Start with a well defined problem.</p>
                    <p className="softText textBody1">Hey again, I’m Zack Schwartz. I’m a designer, developer, and problem solver currently living in St. Louis, Missouri. Recently I’ve been particularly passionate about the design process and the communication between designers and developers.</p>
                    <p className="softText textBody1">Hey again, I’m Zack Schwartz. I’m a designer, developer, and problem solver currently living in St. Louis, Missouri. Recently I’ve been particularly passionate about the design process and the communication between designers and developers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={HomeStyles.about} id="contact">
            <SectionHeader title="Contact me" name="contact" />
            <div className="container">
              <div className={`grid sectionContent ${HomeStyles.aboutContent}`}>
                <div className="col-6--6 contentGroup">
                  <div className="textGroup">
                    <p className="softText textBody1">Hey again, I’m Zack Schwartz. I’m a designer, developer, and problem solver currently living in St. Louis, Missouri. Recently I’ve been particularly passionate about the design process and the communication between designers and developers.</p>
                    <p className="softText textBody1">Hey again, I’m Zack Schwartz. I’m a designer, developer, and problem solver currently living in St. Louis, Missouri. Recently I’ve been particularly passionate about the design process and the communication between designers and developers.</p>
                    <p className="softText textBody1">Hey again, I’m Zack Schwartz. I’m a designer, developer, and problem solver currently living in St. Louis, Missouri. Recently I’ve been particularly passionate about the design process and the communication between designers and developers.</p>
                  </div>
                  <div className="textGroup">
                    <p className="mainText textSubtitle">My design principles.</p>
                    <p className="softText textBody1">Hey again, I’m Zack Schwartz. I’m a designer, developer, and problem solver currently living in St. Louis, Missouri. Recently I’ve been particularly passionate about the design process and the communication between designers and developers.</p>
                  </div>
                  <div className="textGroup">
                    <p className="mainText textTitle">Start with a well defined problem.</p>
                    <p className="softText textBody1">Hey again, I’m Zack Schwartz. I’m a designer, developer, and problem solver currently living in St. Louis, Missouri. Recently I’ve been particularly passionate about the design process and the communication between designers and developers.</p>
                    <p className="softText textBody1">Hey again, I’m Zack Schwartz. I’m a designer, developer, and problem solver currently living in St. Louis, Missouri. Recently I’ve been particularly passionate about the design process and the communication between designers and developers.</p>
                  </div>
                  <div className="textGroup">
                    <p className="mainText textTitle">Start with a well defined problem.</p>
                    <p className="softText textBody1">Hey again, I’m Zack Schwartz. I’m a designer, developer, and problem solver currently living in St. Louis, Missouri. Recently I’ve been particularly passionate about the design process and the communication between designers and developers.</p>
                    <p className="softText textBody1">Hey again, I’m Zack Schwartz. I’m a designer, developer, and problem solver currently living in St. Louis, Missouri. Recently I’ve been particularly passionate about the design process and the communication between designers and developers.</p>
                  </div>
                  <div className="textGroup">
                    <p className="mainText textTitle">Start with a well defined problem.</p>
                    <p className="softText textBody1">Hey again, I’m Zack Schwartz. I’m a designer, developer, and problem solver currently living in St. Louis, Missouri. Recently I’ve been particularly passionate about the design process and the communication between designers and developers.</p>
                    <p className="softText textBody1">Hey again, I’m Zack Schwartz. I’m a designer, developer, and problem solver currently living in St. Louis, Missouri. Recently I’ve been particularly passionate about the design process and the communication between designers and developers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
