import Image from "next/image";
import { BLOCKS } from "@contentful/rich-text-types";
import ImageCard from "../components/ImageCard/ImageCard";

export const textRender = {
	renderNode: {
		// eslint-disable-next-line react/display-name
		[BLOCKS.PARAGRAPH]: (node, children) =>
			children != "" && (
				<p className="textP1 textSoft textMedium">{children}</p>
			),
		// eslint-disable-next-line react/display-name
		[BLOCKS.HEADING_4]: (node, children) =>
			children != "" && (
				<h4 className="textMain textH2 textMedium">{children}</h4>
			),
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

export const videoRender = {
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
