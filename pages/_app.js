import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import {Transition , SwitchTransition} from 'react-transition-group'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import '../styles/globals.css'
import '../styles/fonts/fonts.css'
import HomePage from './index.js'
import CaseStudyPage from './case-studies/[case-study].js'
/* import HomeStyles from '../styles/Home.module.css'
import CaseStudyStyles from '../styles/CaseStudy.module.css'
import CardStyles from '../styles/components/CaseStudyCard.module.css'
import HeaderStyles from '../styles/components/SectionHeader.module.css' */

function MyApp({ Component, pageProps }) {

  const router = useRouter();

  const enter = (node) => {

    document.documentElement.style.scrollBehavior = 'auto'

    window.scroll({
      top: 0
    });

    document.documentElement.style.scrollBehavior = 'smooth'

    gsap.from(node, {
      ease: "power3.out",
      opacity: 0,
      duration: 0.2,
      onComplete: ScrollTrigger.refresh()
    })
  }
  
  const exiting = (node) => {
    gsap.to(node, {
      ease: "power3.in",
      opacity: 0,
      duration: 0.4,
      y: -24,
      onComplete: ScrollTrigger.refresh()
    })
  }

  const exit = (node) => {
    gsap.to(node, {
      ease: "power3.in",
      opacity: 0.8,
      duration: 0.1
    })
  }
  

  const [loaded, setLoaded] = useState(false);

  const [loaderView, setLoaderView] = useState(true)

  const firstPageLoad = () => {
    setLoaded(true)
    setTimeout(()=>{
      setLoaderView(false)
    }, 300)
  }

  useEffect(() =>{
    firstPageLoad();
  })



  return (
      <SwitchTransition
        mode={"out-in"}
      >
        <Transition 
          timeout={500}
          onEnter={enter}
          onExit={exit}
          onExiting={exiting}
          key={router.route}
          >
            <Component loaded={loaded} loaderView={loaderView} {...pageProps} />
          </Transition>
        </SwitchTransition>
  )
}

export default MyApp
