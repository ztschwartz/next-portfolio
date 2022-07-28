import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Flip } from "gsap/dist/Flip";
import style from "../styles/Home.module.css";
import * as contentful from "contentful";
import { client, fetchContentfulData } from "../utils/contentful-client";
import PageTransition from "../animations/PageTransition";
import Navbar from "../components/Navbar/Navbar.js";
import SectionHeader from "../components/SectionHeader/SectionHeader.js";
import CaseStudyCard from "../components/CaseStudyCard/CaseStudyCard.js";
import postData from "../posts/post.json";
import Footer from "../components/Footer/Footer.js";
import Section from "../components/Section/Section";
import { GridChild, GridContainer } from "../components/Grid/Grid";

gsap.registerPlugin(ScrollTrigger, Flip);

export const getStaticProps = async (context) => {
	const client = contentful.createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
	});
	const cmsData = await fetchContentfulData(client).then((data) => data);

	const featuredPosts = cmsData.items.slice(0, 2);

	return {
		props: { cmsData, featuredPosts },
	};
};

export default function Home({ loaded, loaderView, cmsData, featuredPosts }) {
	// const postString = JSON.stringify(postData);

	// const postObject = JSON.parse(postString);

	// const scrollTriggerFresh = () => ScrollTrigger.refresh();

	useEffect(() => {
		PageTransition();
	}, []);

	return (
		<>
			<Head>
				<title>Zachary Schwartz | Product Designer & Developer</title>
				<meta description="I’m Zack Schwartz, a developer-turned-product designer currently solving problems for small businesses at RYSE Digital. I enjoy applying the design process to complex problems and carving out interesting and usesful solutions." />
				<meta charSet="utf-8" />
				<meta
					property="og:title"
					content="Zachary Schwartz | Product Designer & Developer"
					key="title"
				/>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
			</Head>
			<div className={style.homePage}>
				<Navbar type="home" />
				<div className={`${style.showcase}`} id="showcase">
					<GridContainer>
						<GridChild colSpan={12}>
							<h1
								className={`textH1 textRegular textSoft fadeAni ${style.showcaseHeadlineGroup}`}>
								<span className={`fadeAni ${style.showcaseMainHeadline}`}>
									<span className="textMain textBold">
										Hey there—I’m&nbsp;Zack
										<span className="textAccent">.</span>{" "}
									</span>
									I’m a passionate product designer & developer currently based
									in St. Louis, Missouri. I’ve spent the last five years
									utilizing design & technology to build products that solve
									complex problems.
								</span>
							</h1>
						</GridChild>
					</GridContainer>
				</div>
				<div className="fadeAni">
					<Section title="About me" id="about">
						<GridContainer offset={true}>
							<GridChild colStart={5} colSpan={8} wrapperType="textWrapper">
								<p className="textMain textP1 textRegular">
									I’m Zack Schwartz, a developer-turned-product designer
									currently solving problems for small businesses at RYSE
									Digital. I enjoy applying the design process to complex
									problems and carving out interesting and usesful solutions.
								</p>
								<p className="textMain textP1 textRegular">
									I started my career 4 years ago as a freelance front-end web
									developer. I focused on deliving well developed sites to small
									businesses. Over time, as I learned more about how a great
									product is designed, the importance of design became clear and
									I found myself gravitating towards the process of researching,
									iterating, and validating. Now I consider myself a designer
									who uses code as a tool to build prototypes for quicker
									iterations and better end products.
								</p>
								<p className="textMain textP1 textRegular">
									My background in devleopment has given me a unique perspective
									on the developer-designer relationship that has shaped my
									skills and interests. I do my best work in the gap between
									these two disciplines. Specifically, I’m interested in design
									systems, prototyping, and UI engineering.
								</p>
								<p className="textMain textP1 textRegular">
									When I’m not thinking about design, you can find me either
									trying to perfect my pour-over routine, looking for a new tech
									youtube video to watch, or...
								</p>
							</GridChild>
						</GridContainer>
					</Section>
					<Section title="Recent work" id="work">
						<div className={style.workContent}>
							<GridContainer>
								<GridChild colSpan={12}>
									<CaseStudyCard
										postData={cmsData.items[0]}
										title={cmsData.items[0].fields.title}
										subtitle={cmsData.items[0].fields.subtitle}
										description={cmsData.items[0].fields.description}
										slug={cmsData.items[0].fields.slug}
										img={cmsData.items[0].fields.featureImage.fields.file.url}
									/>
								</GridChild>
								<GridChild colSpan={12}>
									<CaseStudyCard
										postData={cmsData.items[1]}
										title={cmsData.items[1].fields.title}
										subtitle={cmsData.items[1].fields.subtitle}
										description={cmsData.items[1].fields.description}
										slug={cmsData.items[1].fields.slug}
										img={cmsData.items[1].fields.featureImage.fields.file.url}
									/>
								</GridChild>
							</GridContainer>
						</div>
					</Section>

					<Section title="Contact me" id="contact">
						<GridContainer wrapperType="contentWrapper" offset={true}>
							<GridChild colStart={5} colSpan={8} wrapperType="textWrapper">
								<p className="textMain textP1 textRegular">
									If you have any questions or just want to talk about design,
									I&apos;m not a hard guy to get in touch with. Just send me an
									email or DM me on social media
								</p>
								<p className="textMain textP1 textRegular">
									I could talk for hours about design, development, or any of my
									other hobbies.
								</p>
							</GridChild>
							<GridChild innerGrid={true} colStart={5} colSpan={8}>
								<GridChild colSpan={5}>
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
								</GridChild>
								<GridChild wrapperType="textWrapper" colSpan={7}>
									<div className="textGroup">
										<p className="textMain textP2 textBold">Email:</p>
										<a href="#" className="textMain link textP2">
											hello@zacktschwartz.com
										</a>
									</div>
									<div className="textGroup">
										<p className="textMain textP2 textBold">Twitter:</p>
										<a href="#" className="textMain link textP2">
											@zacktschwartz
										</a>
									</div>
									<div className="textGroup">
										<p className="textMain textP2 textBold">LinkedIn:</p>
										<a href="#" className="textMain link textP2">
											zacktschwartz
										</a>
									</div>
								</GridChild>
							</GridChild>
						</GridContainer>
					</Section>

					<Footer />
				</div>
			</div>
		</>
	);
}
