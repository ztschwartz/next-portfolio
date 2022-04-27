import React from "react";
import * as style from "./ContentSection.module.css";
import GridContainer from "../GridContainer/GridContainer";

export const TextContent = ({ children }) => {
	return (
		<div
			className={`col-6--6 textMain textP1 textRegular ${style.textContent}`}>
			{children}
		</div>
	);
};

export const ContentSection = ({ children }) => {
	return (
		<GridContainer offset={true}>
			<div className="contentSection">{children}</div>
		</GridContainer>
	);
};
