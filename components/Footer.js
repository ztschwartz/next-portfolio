import React from "react";
import Link from "next/link";
import LogoIcon from "./LogoIcon.js";
import Styles from "../styles/components/Footer.module.css";

const Footer = () => {
	return (
		<footer className={`bgDeep ${Styles.footer}`}>
			<div className="container">
				<div className="grid">
					<div className={`col-4 ${Styles.contactSection}`}>
						<LogoIcon />
					</div>
					<div className={`col-6 ${Styles.infoSection}`}>
						<h3 className="textMain textP2 textBold">
							Website designed and developed by Zack Schwartz.
						</h3>
						<p className="textP2 textSoft">Site developed using Next.js</p>
					</div>
					<div className={`col-3 ${Styles.contactSection}`}>
						<h3 className="textMain textP2 textBold ">Get in touch</h3>
						<div className={Styles.linksListSection}>
							<a className="textP3 link textSoft">hello@zacktschwartz.com</a>
							<a className="textP3 link textSoft">Message me on LinkedIn</a>
							<a className="textP3 link textSoft">Message me on Polywork</a>
						</div>
					</div>
				</div>
				<div className={Styles.logoSection}></div>
			</div>
		</footer>
	);
};

export default Footer;
