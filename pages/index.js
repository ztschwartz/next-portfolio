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
      <Navbar />
      <div className={`${HomeStyles.showcase}`} id="showcase">
        <div className="container">
          {/*  <h1 className={`textHeadline1Medium mainText fadeAni ${HomeStyles.showcaseHeadline}`}><span className={`fadeAni ${HomeStyles.showcaseMainHeadline}`}>Hey there—I’m Zack. I’m a passionate </span><span className={`fadeAni ${HomeStyles.showcaseHeadline}`}>product designer & developer currently </span><span className={`fadeAni ${HomeStyles.showcaseHeadline}`}>based in St. Louis, Missouri.</span></h1> */}
          <h1 className={`textHeadline1 softText fadeAni ${HomeStyles.showcaseHeadlineGroup}`}>
          <span className={`fadeAni ${HomeStyles.showcaseMainHeadline}`}><span className={`mainText`}>Hey there—I’m&nbsp;Zack<span className={`accentText`}>.</span><br className={HomeStyles.showcaseBr} /></span> I’m a passionate </span>
          <span className={`fadeAni ${HomeStyles.showcaseHeadline}`}>product designer & developer currently </span>
          <span className={`fadeAni ${HomeStyles.showcaseHeadline}`}>based in St. Louis, Missouri.</span>
          </h1>
        </div>
      </div>
      <div className="fadeAni">
        <div className={HomeStyles.work} id="work">
          <SectionHeader title="MY WORK" name="work"  />
          <div className={HomeStyles.workContent}>
            <div className="container">
              <div className="grid">
                <div className="col-12">
                  <CaseStudyCard postData={postData[0]} title={postObject[0].title} subtitle={postObject[0].subtitle} slug={postObject[0].meta.slug} img={ postObject[0].featureImg } />
                </div>
                <div className="col-5">
                <CaseStudyCard postData={postData[1]} title={postObject[1].title} subtitle={postObject[1].subtitle} slug={postObject[1].meta.slug} img={postObject[1].featureImg} />
                </div>
                <div className="col-7">
                  <CaseStudyCard postData={postData[2]} title={postObject[2].title} subtitle={postObject[2].subtitle} slug={postObject[2].meta.slug} img={postObject[2].featureImg} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={HomeStyles.about} id="about">
          <SectionHeader title="ABOUT ME" name="about" />
          <div className="container">
            <div className={`grid sectionContent ${HomeStyles.aboutContent}`}>
              <div className="col-6--6 contentGroup">
                <div className="textGroup">
                  <p className="mainText textBody1">Hey again, I’m Zack Schwartz. Recently I’ve been particularly passionate about the design process and the communication between designers and developers.</p>
                  <p className="mainText textBody1">Hey again, I’m Zack Schwartz. Recently I’ve been particularly passionate about the design process and the communication between designers and developers.</p>
                  <p className="mainText textBody1">Hey again, I’m Zack Schwartz. Recently I’ve been particularly passionate about the design process and the communication between designers and developers.</p>
                </div>
                <div className="textGroup">
                  <p className="mainText textTitleMedium">Hey again, I’m Zack Schwartz. Recently I’ve been particularly passionate about the design process and the communication between designers and developers.</p>
                  <p className="mainText textBody1">Hey again, I’m Zack Schwartz. Recently I’ve been particularly passionate about the design process and the communication between designers and developers. Hey again, I’m Zack Schwartz. Recently I’ve been particularly passionate about the design process and the communication between designers and developers.</p>
                  <p className="mainText textBody1">Hey again, I’m Zack Schwartz. Recently I’ve been particularly passionate about the design process and the communication between designers and developers.</p>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={HomeStyles.contact} id="contact">
          <SectionHeader title="CONTACT ME" name="contact" />
          <div className="container">
            <div className={`grid sectionContent`}>
              <div className="col-6--6 contentGroup">
                <div className="textGroup">
                  <p className="mainText textBody1">Hey again, I’m Zack Schwartz. Recently I’ve been particularly passionate about the design process and the communication between designers and developers. Hey again, I’m Zack Schwartz. Recently I’ve been particularly passionate about the design process and the communication between designers and developers.</p>
                  <p className="mainText textBody1">Hey again, I’m Zack Schwartz. Recently I’ve been particularly passionate about the design process and the communication between designers and developers.</p>
                </div>
              </div>
              <div className="contentGroup col-6--6">
                <div className="grid">
                  <div className="col-6 textGroup">
                    <div>
                      <p className="mainText textSubtitle">Email</p>
                      <p className="link textLink ">hello@zacktschwartz.com</p>
                    </div>
                    <div>
                      <p className="mainText textSubtitle">Twitter—</p>
                      <p className="link textLink">@zacktschwartz</p>
                    </div>
                    <div>
                      <p className="mainText textSubtitle">LinkedIn—</p>
                      <p className="link textLink ">zacktschwartz</p>
                    </div>
                  </div>
                  <div className="col-6 imgGroup">
                    <Image className={HomeStyles.aboutImg} src="/img/about-img.png" alt="A photo of Zachary Schwartz" width={500} height={500} layout="responsive" placeholder="blur" blurDataURL="/img/about-imgblur.png" />
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
