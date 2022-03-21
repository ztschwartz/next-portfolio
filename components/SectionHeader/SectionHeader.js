import React, { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import HeaderStyles from "./SectionHeader.module.css";
import HeaderTransition from "./SectionHeaderTransition";

const SectionHeader = ({ title, name }) => {
	const headerLink = `${name}HeaderLink`;

	const headerBg = `${name}HeaderBg`;

	useEffect(() => {
		HeaderTransition(name, headerLink, headerBg);
	}, []);

	return (
		<div className={HeaderStyles.headerBar}>
			<div
				id={`${name}HeaderBg`}
				className={`bgMainTransparent ${HeaderStyles.headerBarBg}`}></div>
			<div className="container">
				<div className={HeaderStyles.headerBarFlex}>
					<h1 className="textMain textP1 textBold">
						{title}
						<span className="textAccent">.</span>
					</h1>
					<a
						href="#showcase"
						id={`${name}HeaderLink`}
						className="link textP2 textMain textLink">
						Back to top
					</a>
				</div>
			</div>
		</div>
	);
};

export default SectionHeader;
