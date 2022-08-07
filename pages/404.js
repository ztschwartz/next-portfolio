import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Flip } from "gsap/dist/Flip";
import style from "../styles/error.module.css";
import * as contentful from "contentful";
import { client, fetchContentfulData } from "../utils/contentful-client";
import PageTransition from "../animations/PageTransition";
import Navbar from "../components/Navbar/Navbar.js";
import Footer from "../components/Footer/Footer.js";
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
	useEffect(() => {
		PageTransition();
	}, []);

	return (
		<>
			<Head></Head>
			<div className={style.errorPage}>
				<Navbar type="home" />
				<div className={`${style.showcase}`} id="showcase">
					<GridContainer className={style.showcaseContent}>
						<GridChild wrapperType="textWrapper" colSpan={12}>
							<h4
								className={`textH3 textRegular textSoft  fadeAni ${style.showcaseMainHeadline}`}>
								404
							</h4>
							<h1
								className={`textH1 textMain textMedium fadeAni ${style.showcaseMainHeadline}`}>
								Oops, looks like this page doesn&apos;t exist
								<span className={`textAccent`}>...</span>
							</h1>
						</GridChild>
						<GridChild colSpan={12}>
							<div className={style.showcaseLinks}>
								<Link href="/">
									<a
										className={`link textP2 textMain fadeAni  ${style.backHomeLink}`}>
										<svg
											className={` ${style.backHomeSvg} fillAccent`}
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg">
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M15.9996 0H0.00206878V1.60776C0.00206878 1.93908 0.270657 2.20767 0.601977 2.20767H12.0864C12.1399 2.20767 12.1666 2.27229 12.1288 2.31008L0.234278 14.2046C0.0842719 14.3546 0 14.5581 0 14.7702V16H1.22973C1.44187 16 1.64533 15.9157 1.79533 15.7657L13.6897 3.87127C13.7275 3.83348 13.7922 3.86024 13.7922 3.91369V15.3977C13.7922 15.729 14.0607 15.9976 14.3921 15.9976H15.9998L15.9996 0Z"
											/>
										</svg>
										Back home
									</a>
								</Link>
							</div>
						</GridChild>
					</GridContainer>
				</div>
				<div className="fadeAni">
					<Footer />
				</div>
			</div>
		</>
	);
}
