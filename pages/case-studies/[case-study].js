import React, { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import style from "../../styles/CaseStudy.module.css";
import { client, fetchContentfulData } from "../../utils/contentful-client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import PageTransition from "../../animations/PageTransition";
import Navbar from "../../components/Navbar/Navbar.js";
import ImageCard from "../../components/ImageCard/ImageCard.js";
import Footer from "../../components/Footer/Footer.js";
import Section from "../../components/Section/Section";
import GridContainer from "../../components/GridContainer/GridContainer";

export const getStaticPaths = async (context) => {
	const cmsCaseStudies = await fetchContentfulData().then((data) => data);
	const paths = cmsCaseStudies.items.map((post) => ({
		params: { "case-study": post.fields.slug },
	}));
	// const paths = postData.map((post) => ({
	// 	params: { "case-study": post.meta.slug },
	// }));

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const cmsData = await fetchContentfulData().then((data) => data);

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
			<div className="col-6--6 contentSection">
				<div className="textSection">
					<p className="textP1 textMain">{children}</p>
				</div>
			</div>
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
				<div className="container">
					<div className={`grid ${style.showcaseContent}`}>
						<div className={`col-6 ${style.showcaseMain}`}>
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
						</div>
						<div className={`col-6 fadeAni ${style.showcaseMeta}`}>
							<p
								className={`textMain textP2 textMedium bgDeep ${style.showcaseTag}`}>
								Date: {postContent.fields.year}
							</p>
							<div className={`${style.showcaseTags}`}>
								{postContent.fields.tags.map((tag) => (
									<p
										key={tag}
										className={`textMain textP2 bgDeep ${style.showcaseTag}`}>
										{tag}
									</p>
								))}
							</div>
						</div>
						<div className={`col-12 fadeAni`}>
							<ImageCard>
								<Image
									layout="fill"
									objectFit="contain"
									src={`https:${postContent.fields.featureImage.fields.file.url}`}
									alt="Ambassador App Phone Mockup"
								/>
							</ImageCard>
						</div>
					</div>
				</div>
			</div>
			{postContent.fields.bodySection.map((section) => (
				<Section
					key={section.fields.sectionId}
					title={section.fields.name}
					id={section.fields.sectionId}>
					<GridContainer offset={true}>
						{documentToReactComponents(
							section.fields.sectionContent,
							renderOptions
						)}
					</GridContainer>
				</Section>
			))}
			<Footer />
		</div>
	);
};

export default CaseStudyPage;
