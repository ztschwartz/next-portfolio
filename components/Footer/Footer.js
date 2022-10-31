import React from "react";
import Link from "next/link";
import LogoIcon from "../LogoIcon.js";
import style from "./Footer.module.css";
import { GridContainer, GridChild } from "../Grid/Grid.js";

const Footer = () => {
	return (
		<footer className={`${style.footer} bgDeep`}>
			<GridContainer className={style.contentSection}>
				<GridChild colSpan={4} className={`${style.navigationSection}`}>
					<h3 className="textMain textP2 textBold">Navigation</h3>
					<div className={style.linksListSection}>
						<a className="textP2 link textSoft textMedium">Introduction</a>
						<a className="textP2 link textSoft textMedium">Work</a>
						<a className="textP2 link textSoft textMedium">About</a>
						<a className="textP2 link textSoft textMedium">Contact</a>
					</div>
				</GridChild>
				<GridChild colSpan={4} className={`${style.caseStudiesSection}`}>
					<h3 className="textMain textP2 textBold">Case Studies</h3>
					<div className={style.linksListSection}>
						<p className="textP2 textSoft textMedium">Coming Soon</p>
					</div>
				</GridChild>
				<GridChild colSpan={4} className={`${style.contactSection}`}>
					<h3 className="textMain textP2 textBold">Contact</h3>
					<div className={style.linksListSection}>
						<a className="textP2 link textSoft textMedium">
							hello@zacktschwartz
						</a>
						<a className="textP2 link textSoft textMedium">
							Message me on LinkedIn
						</a>
						<a className="textP2 link textSoft textMedium">
							Message me on Polywork
						</a>
					</div>
				</GridChild>
				<GridChild colSpan={12} className={`${style.infoSection}`}>
					<LogoIcon />
					<p className="textP2 textSoft textMedium">
						©2022 Zachary Schwartz. All rights reserved.
					</p>
				</GridChild>
			</GridContainer>
		</footer>
	);
};

export default Footer;
