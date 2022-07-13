import React from "react";
import Link from "next/link";
import LogoIcon from "../LogoIcon.js";
import style from "./Footer.module.css";
import { GridContainer, GridChild } from "../Grid/Grid.js";

const Footer = () => {
	return (
		<footer className={`${style.footer}`}>
			<GridContainer>
				<GridChild colSpan={6} className={`${style.contactSection}`}>
					<h3 className="textMain textP2 textBold ">Get in touch</h3>
					<div className={style.linksListSection}>
						<a className="textP2 link textSoft">hello@zacktschwartz.com</a>
						<a className="textP2 link textSoft">Message me on LinkedIn</a>
						<a className="textP2 link textSoft">Message me on Polywork</a>
					</div>
				</GridChild>
				<GridChild colSpan={6} className={`${style.infoSection}`}>
					<h3 className="textMain textP2 textBold">
						Website designed and developed by Zack Schwartz.
					</h3>
					<p className="textP2 textSoft">Site developed using Next.js</p>
				</GridChild>
			</GridContainer>
		</footer>
	);
};

export default Footer;
