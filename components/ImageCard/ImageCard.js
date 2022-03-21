import React from "react";
import ImageCardStyles from "./ImageCard.module.css";

const ImageCard = ({ children }) => {
	return (
		<div className={`bgDeep ${ImageCardStyles.imgCardSection}`}>
			<div className={`${ImageCardStyles.imgCardInner}`}>{children}</div>
		</div>
	);
};

export default ImageCard;
