import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import HomeStyles from "../styles/Home.module.css";
import PageTransition from "../animations/PageTransition";
import Navbar from "../components/Navbar/Navbar.js";
import SectionHeader from "../components/SectionHeader/SectionHeader.js";
import CaseStudyCard from "../components/CaseStudyCard/CaseStudyCard.js";
import postData from "../posts/post.json";
import Footer from "../components/Footer/Footer.js";

gsap.registerPlugin(ScrollTrigger);

export default function Home({ loaded, loaderView }) {
	const postString = JSON.stringify(postData);

	const postObject = JSON.parse(postString);

	const scrollTriggerFresh = () => ScrollTrigger.refresh();

	useEffect(() => {
		PageTransition();
	}, []);

	return (
		<>
			<Head></Head>
			<div className={HomeStyles.homePage}>
				<Navbar type="home" />
				<div className={`${HomeStyles.showcase}`} id="showcase">
					<div className="container">
						{/*  <h1 className={`textHeadline1Medium textMain fadeAni ${HomeStyles.showcaseHeadline}`}><span className={`fadeAni ${HomeStyles.showcaseMainHeadline}`}>Hey there—I’m Zack. I’m a passionate </span><span className={`fadeAni ${HomeStyles.showcaseHeadline}`}>product designer & developer currently </span><span className={`fadeAni ${HomeStyles.showcaseHeadline}`}>based in St. Louis, Missouri.</span></h1> */}
						<h1
							className={`textH1 textRegular textSoft fadeAni ${HomeStyles.showcaseHeadlineGroup}`}>
							<span className={`fadeAni ${HomeStyles.showcaseMainHeadline}`}>
								<span className="textMain textMedium">
									Hey there—I’m&nbsp;Zack
									<span className={`textAccent`}>. </span>
								</span>
								I’m a passionate product designer & developer currently based in
								St. Louis, Missouri. I’ve spent the last 4 years utilizing
								design and technology to solve complex human&nbsp;problems.
							</span>
						</h1>
					</div>
				</div>
				<div className="fadeAni">
					<div className={HomeStyles.work} id="work">
						<SectionHeader title="My work" name="work" />
						<div className={HomeStyles.workContent}>
							<div className="container">
								<div className="grid">
									<div className="col-12">
										<CaseStudyCard
											postData={postData[0]}
											title={postObject[0].title}
											subtitle={postObject[0].subtitle}
											slug={postObject[0].meta.slug}
											img={postObject[0].featureImg}
										/>
									</div>
									<div className="col-6">
										<CaseStudyCard
											postData={postData[1]}
											title={postObject[1].title}
											subtitle={postObject[1].subtitle}
											slug={postObject[1].meta.slug}
											img={postObject[1].featureImg}
										/>
									</div>
									<div className="col-6">
										<CaseStudyCard
											postData={postData[2]}
											title={postObject[2].title}
											subtitle={postObject[2].subtitle}
											slug={postObject[2].meta.slug}
											img={postObject[2].featureImg}
										/>
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
										<p className="textMain textP1 textRegular">
											I’m Zack Schwartz, a developer-turned-product designer
											currently solving problems for small businesses at RYSE
											Digital. I enjoy applying the design process to complex
											problems and carving out interesting and usesful
											solutions.
										</p>
										<p className="textMain textP1 textRegular">
											I started my career 4 years ago as a freelance front-end
											web developer. I focused on deliving well developed sites
											to small businesses. After a while though, I quickly
											realized that a perfectly engineered product was useless
											if the product itself wasn’t well thought through during
											the design process. As I learned more about how a great
											product is designed, the importance of design became clear
											and I found myself gravitating towards the process of
											researching, iterating, and validating. Now I consider
											myself a designer who uses code as a tool to build
											prototypes for quicker iterations and better end products.
										</p>
										<p className="textMain textP1 textRegular">
											My background in devleopment has given me a unique
											perspective on the developer-designer relationship that
											has shaped my skills and interests. I do my best work in
											the gap between these two disciplines. Specifically, I’m
											interested in design systems, prototyping, and UI
											engineering.
										</p>
										<p className="textMain textP1 textRegular">
											When I’m not thinking about design, you can find me either
											trying to perfect my pour-over routine, looking for a new
											tech youtube video to watch, or...
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={HomeStyles.contact} id="contact">
						<SectionHeader title="Contact me" name="contact" />
						<div className="container">
							<div className={`grid sectionContent`}>
								<div className="col-6--6 contentSection">
									<div className="textSection">
										<p className="textMain textP1 textRegular">
											If you have any questions or just want to talk about
											design, I&apos;m not a hard guy to get in touch with. Just
											send me an email or DM me on social media
										</p>
										<p className="textMain textP1 textRegular">
											I could talk for hours about design, development, or any
											of my other hobbies.
										</p>
									</div>
									<div className="textRow">
										<div className="imgSection">
											<Image
												className={HomeStyles.aboutImg}
												src="/img/about-img.png"
												alt="A photo of Zachary Schwartz"
												width={500}
												height={500}
												layout="responsive"
												placeholder="blur"
												blurDataURL="/img/about-imgblur.png"
											/>
										</div>
										<div className="textSection">
											<div className="textGroup">
												<p className="textMain textP2 textBold">Email</p>
												<a href="#" className="textMain link textP2">
													hello@zacktschwartz.com
												</a>
											</div>
											<div className="textGroup">
												<p className="textMain textP2 textBold">Twitter—</p>
												<a href="#" className="textMain link textP2">
													@zacktschwartz
												</a>
											</div>
											<div className="textGroup">
												<p className="textMain textP2 textBold">LinkedIn—</p>
												<a href="#" className="textMain link textP2">
													zacktschwartz
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<Footer />
				</div>
			</div>
		</>
	);
}
