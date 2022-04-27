import React from "react";
import style from "./ImageCard.module.css";

const ImageCard = ({ children }) => {
	return (
		<div className={`bgDeep ${style.imgCardSection}`}>
			<div className={`${style.imgCardInner}`}>{children}</div>
		</div>
	);
};

export default ImageCard;
