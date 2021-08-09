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
        delay: 0.2,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        y: -32,
        onComplete: scrollTriggerFresh
    });
  
    gsap.from(".fadeAni", {
        ease: "power3.out",
        opacity: 0,
        stagger: 0.12,
        delay: 0.1,
        duration: 0.7,
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

  const aboutBlur = 'iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAAXNSR0IArs4c6QAAAIRlWElmTU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAAigAwAEAAAAAQAAAAgAAAAAZr4WUQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KGV7hBwAAAP5JREFUGBkFwUtOwlAYBtDvXu7FB5Q2agFJnOMARw5cgNtyB+7BLRhJNNGJjjDGaA1REqKCpmgptZa+pKXt7zns7OKctHoLtu2goWtAwTDoP9Du/gF7HQwjUZYS/vwXgjIEQQB7YqGiVMEZg8yX4DxPoagqcjCYd9foHh8BJQnz4xPJIgaP3SmCMIQztdC7vEJtbQVj8wuyLBElGTj9+chmI3gv97h1M5z0nmE89qFu1qHqOviP9U2p59J2p0MJgQ7bTdprVGn0PoTvTsCLms6MJ4NFM4tpLGeLNGcbFcHt8RuKgpcEhV681drBzWkXbX0dWG1iHi9JKFy4jhX+A7v3epVB01aiAAAAAElFTkSuQmCC'



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
              </div>
            </div>
          </div>
          <div className={HomeStyles.about} id="about">
            <SectionHeader title="About me" name="about" />
            <div className="container">
              <div className={`grid sectionContent ${HomeStyles.aboutContent}`}>
                <div className="col-5--7 contentGroup">
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
          <div className={HomeStyles.contact} id="contact">
            <SectionHeader title="Contact me" name="contact" />
            <div className="container">
              <div className={`grid sectionContent ${HomeStyles.aboutContent}`}>
                <div className="col-5--4 contentGroup">
                  <div className="textGroup">
                    <p className="softText textBody1">Hey again, I’m Zack Schwartz. I’m a designer, developer, and problem solver currently living in St. Louis, Missouri. Recently I’ve been particularly passionate about the design process and the communication between designers and developers.</p>
                    <p className="softText textBody1">Hey again, I’m Zack Schwartz. I’m a designer, developer, and problem solver currently living in St. Louis, Missouri. Recently I’ve been particularly passionate about the design process and the communication between designers and developers.</p>
                    <p className="softText textBody1">Hey again, I’m Zack Schwartz. I’m a designer, developer, and problem solver currently living in St. Louis, Missouri. Recently I’ve been particularly passionate about the design process and the communication between designers and developers.</p>
                  </div>
                </div>
                <div className="col-9--3 contentGroup">
                  <div className="imgGroup">
                    <Image className={HomeStyles.aboutImg} src="/img/about-img.png" alt="A photo of Zachary Schwartz" width={500} height={500} layout="responsive" placeholder="blur" blurDataURL="/img/imgblur.png" />
                  </div>
                  <div className="textGroup">
                  <div>
                      <p className="mainText textSubtitle">Email</p>
                      <p className="softText textLink ">hello@zacktschwartz.com</p>
                    </div>
                   <div>
                      <p className="mainText textSubtitle">Twitter—</p>
                      <p className="softText textLink">@zacktschwartz</p>
                    </div>
                    <div>
                      <p className="mainText textSubtitle">LinkedIn—</p>
                      <p className="softText textLink ">zacktschwartz</p>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
