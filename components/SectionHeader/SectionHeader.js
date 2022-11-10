import React, { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import style from "./SectionHeader.module.css";
import HeaderTransition from "./SectionHeaderTransition";
import { GridChild, GridContainer } from "../Grid/Grid";

const SectionHeader = ({ title, name }) => {
	const headerLink = `${name}HeaderLink`;

	const headerBg = `${name}HeaderBg`;

	useEffect(() => {
		HeaderTransition(name, headerLink, headerBg);
	}, [name, headerLink, headerBg]);

	return (
		<div className={style.headerBar}>
			<div
				id={`${name}HeaderBg`}
				className={`bgMainTransparent ${style.headerBarBg}`}></div>
			<GridContainer>
				<GridChild colSpan={12}>
					<div className={style.headerBarFlex}>
						<h1 className={`textMain textP1 textBold ${style.sectionTitle}`}>
							{title}—{/* <span className="textAccent">—</span> */}
						</h1>
						<a
							href="#showcase"
							id={`${name}HeaderLink`}
							className={`link textP2 textMain textLink ${style.topLink}`}>
							Back to top
						</a>
					</div>
				</GridChild>
			</GridContainer>
		</div>
	);
};

export default SectionHeader;
