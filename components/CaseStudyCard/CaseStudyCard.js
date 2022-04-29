import React from "react";
import Link from "next/link";
import style from "./CaseStudyCard.module.css";
import Image from "next/image";
import TTImg from "/public/img/tt-img-test-2.png";

const CaseStudyCard = ({ title, subtitle, slug, img, description }) => {
	return (
		<Link scroll={false} href={`/case-studies/${encodeURIComponent(slug)}`}>
			<a className={`bgDeep borderSoft ${style.caseStudyCard}`}>
				<div className={style.cardImgSection}>
					<Image
						layout="fill"
						objectFit="contain"
						src={`https:${img}`}
						alt="Ambassador App Phone Mockup"
					/>
				</div>
				<div className={style.cardInnerSection}>
					<div className={`bgMainTransparent ${style.cardInner}`}>
						<div className={style.cardInnerContent}>
							<h1 className="textMain textH3 textMedium">
								<span className={style.titleLine}>{title}</span>{" "}
								<span className={style.titleLine}>
									{subtitle}
									<span className="textAccent">.</span>
								</span>
							</h1>
							<p className="textSoft textP2 textRgular">{description}</p>
						</div>
						<div className={`${style.cardInnerLink} borderDeep`}>
							{/* <p className="textMain textBody2">Read the case study</p> */}
							<svg
								className="fillAccent"
								viewBox="0 0 41 41"
								xmlns="http://www.w3.org/2000/svg">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M32.9565 4.85372C33.051 4.75923 32.9841 4.59766 32.8505 4.59766H0.0410156V2.09766C0.0410156 1.26923 0.71259 0.597656 1.54102 0.597656H40.041V39.0977C40.041 39.9261 39.3694 40.5977 38.541 40.5977H36.041V7.78822C36.041 7.65458 35.8794 7.58766 35.785 7.68215L3.45523 40.0119L0.626802 37.1834L32.9565 4.85372Z"
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
