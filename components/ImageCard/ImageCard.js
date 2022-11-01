import React from "react";
import style from "./ImageCard.module.css";
import { GridChild } from "../Grid/Grid";

const ImageCard = ({
	children,
	sectionPadding,
	colSpan,
	colStart,
	objectFit,
}) => {
	return (
		<GridChild
			colSpan={colSpan}
			colStart={colStart}
			className={sectionPadding && style.sectionPadding}>
			<div
				className={`bgDeep ${style.imgCardSection} ${
					objectFit === "cover" ? style.objectFitCover : style.objectFitContain
				}`}>
				<div className={`${style.imgCardInner}`}>{children}</div>
			</div>
		</GridChild>
	);
};

export default ImageCard;
