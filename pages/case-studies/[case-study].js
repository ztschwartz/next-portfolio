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
// import GridContainer from "../../components/GridContainer/GridContainer";
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

const renderOptions = {
	renderNode: {
		// eslint-disable-next-line react/display-name
		[BLOCKS.PARAGRAPH]: (node, children) => (
			<GridChild colSpan={8} colStart={5}>
				<p className="textP1 textMain">{children}</p>
			</GridChild>
		),
		// [BLOCKS.PARAGRAPH]: (node, children) => (
		// 	<GridChild colSpan={8} colStart={5}>
		// 		<p className="textP1 textMain">{children}</p>
		// 	</GridChild>
		// ),
		// eslint-disable-next-line react/display-name
		[BLOCKS.EMBEDDED_ASSET]: (node, children) => (
			<ImageCard sectionPadding={true} colSpan={12}>
				<Image
					layout="fill"
					objectFit="contain"
					src={`https:${node.data.target.fields.file.url}`}
					alt="Ambassador App Phone Mockup"
				/>
			</ImageCard>
		),
	},
};

const CaseStudyPage = ({ postPath, cmsData, postContent }) => {
	const [currentPage, setCurrentPage] = useState();
	const [postState, setPostState] = useState("");

	useEffect(() => {
		PageTransition();
		setCurrentPage(postContent.fields.order);
		console.log(postContent);
	}, []);

	return (
		<div className={style.caseStudyPage}>
			<Navbar currentPage={currentPage} cmsData={cmsData} />
			<div className={style.showcase}>
				<GridContainer className={style.showcaseContent}>
					<GridChild colSpan={6} className={style.showcaseMain}>
						<div className={`${style.showcaseHeadlineGroup}`}>
							<h1 className="textMain textH1 textMedium fadeAni">
								{postContent.fields.title}
							</h1>
							<h1 className="textMain textH1 textMedium fadeAni">
								{postContent.fields.subtitle}
								<span className="textAccent">.</span>
							</h1>
						</div>
						<p className="textMain textP1 fadeAni">
							{postContent.fields.description}
						</p>
					</GridChild>
					<GridChild colSpan={6} className={`fadeAni ${style.showcaseMeta}`}>
						<p
							className={`textMain textP2 textMedium bgDeep borderSoft ${style.showcaseTag}`}>
							Year: {postContent.fields.year}
						</p>
						<div className={`${style.showcaseTags}`}>
							{postContent.fields.tags.map((tag) => (
								<p
									key={tag}
									className={`textMain textP2 bgDeep borderSoft ${style.showcaseTag}`}>
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

/* {documentToReactComponents(
							section.fields.sectionContent,
							renderOptions
						)} 
						documentToReactComponents(
								innerSection.fields.textContent,
								renderOptions
							)
						*/
