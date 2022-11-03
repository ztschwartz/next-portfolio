import React from "react";
import Link from "next/link";
import LogoIcon from "../LogoIcon.js";
import style from "./Footer.module.css";
import { GridContainer, GridChild } from "../Grid/Grid.js";

const Footer = () => {
	return (
		<footer className={`${style.footer} bgDeep`}>
			<div className={style.contentSection}>
				<GridContainer className={style.footerMain}>
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
				</GridContainer>
				<GridContainer>
					<GridChild colSpan={12} className={`${style.infoSection}`}>
						<LogoIcon />
						<p className="textP2  textSoft textMedium">
							<span className={style.infoSectionText}>
								©2022&nbsp;Zachary&nbsp;Schwartz.
							</span>{" "}
							<span>All&nbsp;rights&nbsp;reserved.</span>
						</p>
					</GridChild>
				</GridContainer>
			</div>
		</footer>
	);
};

export default Footer;
