import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Image from 'next/image'
import { gsap } from "gsap/dist/gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import CaseStudyStyles from '../../styles/CaseStudy.module.css'
import Navbar from '../../components/Navbar.js'
import ImageCard from '../../components/ImageCard.js'
import SectionHeader from '../../components/SectionHeader.js'
import postData from '../../posts/post.json'
import Footer from '../../components/Footer'




export async function getStaticPaths(context) {


    const paths = postData.map((post) => ({
        params: { 'case-study': post.meta.slug },
      }))

    return {
        paths, fallback: false
    }
  }

export async function getStaticProps(context) {


    const postParams = context.params

    const postPath = postParams['case-study']


    return {
        props: {postPath}
    }
  }


  

const CaseStudyPage = ({postPath}) => {

    const [currentPage, setCurrentPage] = useState();

    const postString = JSON.stringify(postData)

    const postObject = JSON.parse(postString)

    const getSpecificPost = () => {

        const postArray = postObject.filter((post) => post.meta.slug === postPath)

        const post = postArray[0]

        

        return post
    }

   


    const scrollTriggerFresh = () => ScrollTrigger.refresh();


    const post = getSpecificPost()

    
    



    
    


    

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

      setCurrentPage(post.meta.order);
    
      }, [])



    return (
        <div className={CaseStudyStyles.caseStudyPage}>
            {/* <Navbar pageNumber={post.meta.order} /> */}
            <Navbar currentPage={currentPage} />
            <div className={CaseStudyStyles.showcase}>
                <div className="container">
                    <div className={`grid ${CaseStudyStyles.showcaseContent}`}>
                        <div className={`col-6 ${CaseStudyStyles.showcaseMain}`}>
                            <div className={`${CaseStudyStyles.showcaseHeadlineGroup}`}>
                                <h1 className="textMain textH3 textRegular fadeAni">{post.title}</h1>
                                <h1 className="textMain textH3 textRegular fadeAni">{post.subtitle}<span className="textAccent">.</span></h1>
                            </div>
                            <p className="textSoft textP2 fadeAni">{post.meta.description}</p>
                        </div>
                        <div className={`col-6 fadeAni ${CaseStudyStyles.showcaseMeta}`}>
                            <p className={`textMain textP2 ${CaseStudyStyles.showcaseDate}`}>{post.meta.date}</p>
                            <div className={`${CaseStudyStyles.showcaseTags}`}>
                                {post.meta.tags.map((tag) => <p key={tag} className={`textSoft textP3 ${CaseStudyStyles.showcaseTag}`}>{tag}</p>)}
                            </div>
                        </div>
                        <div className={`col-12 fadeAni`}>
                            <ImageCard>
                                <Image layout="fill" objectFit="contain" src={`/img/${post.featureImg}`} alt="Ambassador App Phone Mockup" />
                            </ImageCard>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default CaseStudyPage