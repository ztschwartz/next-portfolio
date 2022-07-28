import React, { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import style from "../../styles/CaseStudy.module.css";
import * as contentful from "contentful";
import { client, fetchContentfulData } from "../../utils/contentful-client";
import {
	textRender,
	oneImagePerRowRender,
	twoImagePerRowRender,
} from "../../utils/contentful-render-options";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import PageTransition from "../../animations/PageTransition";
import Navbar from "../../components/Navbar/Navbar.js";
import ImageCard from "../../components/ImageCard/ImageCard.js";
import Footer from "../../components/Footer/Footer.js";
import Section from "../../components/Section/Section";
import { GridChild, GridContainer } from "../../components/Grid/Grid";

export const getStaticPaths = async (context) => {
	const client = contentful.createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
	});

	const cmsCaseStudies = await fetchContentfulData(client).then((data) => data);
	const paths = cmsCaseStudies.items.map((post) => ({
		params: { "case-study": post.fields.slug },
	}));
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const client = contentful.createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
	});

	const cmsData = await fetchContentfulData(client).then((data) => data);

	const postParams = context.params;

	const postPath = postParams["case-study"];

	const postArray = cmsData.items.filter(
		(post) => post.fields.slug === postPath
	);

	const postContent = postArray[0];

	return {
		props: { postPath, cmsData, postContent },
	};
};

const CaseStudyPage = ({ postPath, cmsData, postContent }) => {
	const [currentPage, setCurrentPage] = useState();
	const [postState, setPostState] = useState("");

	useEffect(() => {
		PageTransition();
		setCurrentPage(postContent.fields.order);
	}, [postContent.fields.order]);

	return (
		<div className={style.caseStudyPage}>
			<Navbar currentPage={currentPage} cmsData={cmsData} />
			<div id="showcase" className={style.showcase}>
				<GridContainer className={style.showcaseContent}>
					<GridChild colSpan={6} className={style.showcaseMain}>
						<div className={`${style.showcaseHeadlineGroup}`}>
							<h1 className="textMain textH1 textBold fadeAni">
								{postContent.fields.title}
							</h1>
							<h3 className="textSoft textH1 textRegular fadeAni">
								{postContent.fields.subtitle}
							</h3>
						</div>
						<p className="textMain textP1 textRegular fadeAni">
							{postContent.fields.description}
						</p>
					</GridChild>
					<GridChild colSpan={6} className={`fadeAni ${style.showcaseMeta}`}>
						<p
							className={`textSoft textP2 textMedium bgDeep ${style.showcaseTag}`}>
							Year: {postContent.fields.year}
						</p>
						<div className={`${style.showcaseTags}`}>
							{postContent.fields.tags.map((tag) => (
								<p
									key={tag}
									className={`textSoft textP2 textMedium bgDeep ${style.showcaseTag}`}>
									{tag}
								</p>
							))}
						</div>
					</GridChild>
					<GridChild colStart={1} colSpan={12} className="fadeAni">
						<ImageCard>
							<Image
								layout="fill"
								objectFit="contain"
								src={`https:${postContent.fields.featureImage.fields.file.url}`}
								alt="Ambassador App Phone Mockup"
							/>
						</ImageCard>
					</GridChild>
				</GridContainer>
			</div>
			{postContent.fields.bodySection.map((section) => (
				<Section
					key={section.fields.sectionId}
					title={section.fields.name}
					id={section.fields.sectionId}>
					<GridContainer wrapperType="contentWrapper" offset={true}>
						{section.fields.contentSection.map((innerSection) =>
							innerSection.fields.hasOwnProperty("textContent") ? (
								<GridChild wrapperType="textWrapper" colStart={5} colSpan={8}>
									{documentToReactComponents(
										innerSection.fields.textContent,
										textRender
									)}
								</GridChild>
							) : innerSection.fields.hasOwnProperty("imageContent") ? (
								<GridChild
									innerGrid={true}
									wrapperType="textWrapper"
									colSpan={12}>
									{innerSection.fields.imagesPerRow > 1
										? documentToReactComponents(
												innerSection.fields.imageContent,
												twoImagePerRowRender
										  )
										: documentToReactComponents(
												innerSection.fields.imageContent,
												oneImagePerRowRender
										  )}
								</GridChild>
							) : null
						)}
					</GridContainer>
				</Section>
			))}
			<Footer />
		</div>
	);
};

export default CaseStudyPage;
