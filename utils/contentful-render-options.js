import Image from "next/image";
import { BLOCKS } from "@contentful/rich-text-types";
import { GridChild } from "../components/Grid/Grid";
import ImageCard from "../components/ImageCard/ImageCard";

export const textRender = {
	renderNode: {
		// eslint-disable-next-line react/display-name
		[BLOCKS.PARAGRAPH]: (node, children) =>
			children != "" ? <p className="textP1 textMain">{children}</p> : null,
		// eslint-disable-next-line react/display-name
		[BLOCKS.HEADING_1]: (node, children) =>
			children != "" ? (
				<h3 className="textMain textH3 textBold">{children}</h3>
			) : null,
	},
};

export const oneImagePerRowRender = {
	renderNode: {
		// eslint-disable-next-line react/display-name
		[BLOCKS.EMBEDDED_ASSET]: (node, children) => (
			<ImageCard colSpan={12}>
				<Image
					layout="fill"
					objectFit="contain"
					src={`https:${node.data.target.fields.file.url}`}
					alt="Ambassador App Phone Mockup"
				/>
			</ImageCard>
		),
	},
};

export const twoImagePerRowRender = {
	renderNode: {
		// eslint-disable-next-line react/display-name
		[BLOCKS.EMBEDDED_ASSET]: (node, children) => (
			<ImageCard colSpan={6}>
				<Image
					layout="fill"
					objectFit="contain"
					src={`https:${node.data.target.fields.file.url}`}
					alt="Ambassador App Phone Mockup"
				/>
			</ImageCard>
		),
	},
};
