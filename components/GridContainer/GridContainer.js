import React from "react";
import * as style from "./GridContainer.module.css";

const GridContainer = ({ children, offset }) => {
	return (
		<div
			className={`${style.gridContainer} ${
				offset ? style.offsetContent : null
			}`}>
			{children}
		</div>
	);
};

export default GridContainer;
