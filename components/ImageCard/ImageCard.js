import React from "react";
import style from "./ImageCard.module.css";
import { GridChild } from "../Grid/Grid";

const ImageCard = ({ children, sectionPadding, colSpan, colStart }) => {
	return (
		<GridChild
			colSpan={colSpan}
			colStart={colStart}
			className={sectionPadding && style.sectionPadding}>
			<div className={`bgDeep ${style.imgCardSection}`}>
				<div className={`${style.imgCardInner}`}>{children}</div>
			</div>
		</GridChild>
	);
};

export default ImageCard;
