import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import style from "./CaseStudyCard.module.css";
import { gsap } from "gsap/dist/gsap";
import { Flip } from "gsap/dist/Flip";
import { animateToHeight, animateBack } from "../../animations/HeightAnimation";
import Image from "next/image";

const CaseStudyCard = ({ title, subtitle, slug, img, description }) => {
	return (
		<Link scroll={false} href={`/case-studies/${encodeURIComponent(slug)}`}>
			<a className={`bgDeep ${style.caseStudyCard}`}>
				<div className={style.cardImgSection}>
					<Image
						layout="fill"
						objectFit="contain"
						src={`https:${img}`}
						alt="Ambassador App Phone Mockup"
					/>
					{/* <video
						autoPlay
						loop
						className={style.featuredMedia}
						src={`https:${img}`}
						alt="Ambassador App Phone Mockup"></video> */}
				</div>
				<div className={`${style.cardInnerSection}`}>
					<div className={`bgMain ${style.cardInner}`}>
						<div className={`${style.cardInnerContent}`}>
							<h2 className="textMain textH3 textMedium">
								<span className={style.titleLine}>{title} </span>
								&nbsp;
								<span className={style.titleLine}>{subtitle}</span>
							</h2>
						</div>
						<div className={`${style.cardInnerLink} bgSoft`}>
							<svg
								className="strokeMain"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M12 2L22 12M22 12L12 22M22 12H2"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
					</div>
				</div>
			</a>
		</Link>
	);
};

export default CaseStudyCard;
