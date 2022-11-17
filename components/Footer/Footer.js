import React from "react";
import Link from "next/link";
import LogoIcon from "../LogoIcon.js";
import { client, fetchContentfulData } from "../../utils/contentful-client";
import style from "./Footer.module.css";
import { GridContainer, GridChild } from "../Grid/Grid.js";

const Footer = ({ cmsData }) => {
	return (
		<footer className={`${style.footer} bgDeep`}>
			<div className={style.contentSection}>
				<GridContainer className={style.footerMain}>
					<GridChild colSpan={4} className={`${style.footerCol}`}>
						<h3 className="textMain textP2 textBold">Navigation</h3>
						<div className={style.linksListSection}>
							<Link scroll={false} href="/">
								<a className="textP2 link textSoft textMedium">Home</a>
							</Link>
							<Link
								scroll={false}
								href={`/case-studies/${encodeURIComponent(
									cmsData.items[0].fields.slug
								)}`}>
								<a className="textP2 link textSoft textMedium">
									Case Study: {cmsData.items[0].fields.title}
								</a>
							</Link>
							<Link
								scroll={false}
								href={`/case-studies/${encodeURIComponent(
									cmsData.items[1].fields.slug
								)}`}>
								<a className="textP2 link textSoft textMedium">
									Case Study: {cmsData.items[1].fields.title}
								</a>
							</Link>
						</div>
					</GridChild>

					<GridChild colSpan={4} className={`${style.footerCol}`}>
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
					<GridChild colSpan={4} className={`${style.footerCol}`}>
						<p className="textP2  textSoft textMedium">
							©2022 Zachary Schwartz.
							<br />
							All rights reserved.
						</p>
					</GridChild>
				</GridContainer>
				<GridContainer>
					<GridChild colSpan={12} className={`${style.logoSection}`}>
						<LogoIcon />
					</GridChild>
				</GridContainer>
			</div>
		</footer>
	);
};

export default Footer;
