import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import style from "../styles/Home.module.css";
import { client, fetchContentfulData } from "../utils/contentful-client";
import PageTransition from "../animations/PageTransition";
import Navbar from "../components/Navbar/Navbar.js";
import SectionHeader from "../components/SectionHeader/SectionHeader.js";
import CaseStudyCard from "../components/CaseStudyCard/CaseStudyCard.js";
import postData from "../posts/post.json";
import Footer from "../components/Footer/Footer.js";

gsap.registerPlugin(ScrollTrigger);

export const getStaticProps = async (context) => {
	const cmsData = await fetchContentfulData().then((data) => data);

	const featuredPosts = cmsData.items.slice(0, 2);

	return {
		props: { cmsData, featuredPosts },
	};
};

export default function Home({ loaded, loaderView, cmsData, featuredPosts }) {
	const postString = JSON.stringify(postData);

	const postObject = JSON.parse(postString);

	const scrollTriggerFresh = () => ScrollTrigger.refresh();

	useEffect(() => {
		PageTransition();
	}, []);

	return (
		<>
			<Head></Head>
			<div className={style.homePage}>
				<Navbar type="home" />
				<div className={`${style.showcase}`} id="showcase">
					<div className="container">
						<h1
							className={`textH1 textRegular textSoft fadeAni ${style.showcaseHeadlineGroup}`}>
							<span className={`fadeAni ${style.showcaseMainHeadline}`}>
								<span className="textMain textMedium">
									Hey there—I’m&nbsp;Zack
									<span className={`textAccent`}>. </span>
								</span>
								I’m a passionate product designer & developer currently based in
								St. Louis, Missouri. I’ve spent the last 4 years utilizing
								design and technology to build products & solve problems.
							</span>
						</h1>
					</div>
				</div>
				<div className="fadeAni">
					<div className={style.work} id="work">
						<SectionHeader title="My work" name="work" />
						<div className={style.workContent}>
							<div className="container grid">
								{/* <div className="grid"> */}
								<div className="col-12">
									<CaseStudyCard
										postData={cmsData.items[0]}
										title={cmsData.items[0].fields.title}
										subtitle={cmsData.items[0].fields.subtitle}
										slug={cmsData.items[0].fields.slug}
										img={cmsData.items[0].fields.featureImage.fields.file.url}
									/>
								</div>
								<div className="col-6">
									<CaseStudyCard
										postData={cmsData.items[1]}
										title={cmsData.items[1].fields.title}
										subtitle={cmsData.items[1].fields.subtitle}
										slug={cmsData.items[1].fields.slug}
										img={cmsData.items[1].fields.featureImage.fields.file.url}
									/>
								</div>
								<div className="col-6">
									<CaseStudyCard
										postData={cmsData.items[0]}
										title={cmsData.items[0].fields.title}
										subtitle={cmsData.items[0].fields.subtitle}
										slug={cmsData.items[0].fields.slug}
										img={cmsData.items[0].fields.featureImage.fields.file.url}
									/>
								</div>
								{/* </div> */}
								{/* <div className="sectionDividerWrapper">
                <div className="bgDeep sectionDivider">
                </div>
              </div> */}
							</div>
						</div>
					</div>
					<div className={style.about} id="about">
						<SectionHeader title="About me" name="about" />
						<div className="container">
							<div className={`grid sectionContent ${style.aboutContent}`}>
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
					<div className={style.contact} id="contact">
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
												className={style.aboutImg}
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
