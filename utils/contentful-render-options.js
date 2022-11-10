import Image from "next/image";
import { BLOCKS } from "@contentful/rich-text-types";
import ImageCard from "../components/ImageCard/ImageCard";

export const textRender = {
	renderNode: {
		// eslint-disable-next-line react/display-name
		[BLOCKS.PARAGRAPH]: (node, children) =>
			children != "" && (
				<p className="textP1 textMain textMedium">{children}</p>
			),
		// eslint-disable-next-line react/display-name
		[BLOCKS.HEADING_4]: (node, children) =>
			children != "" && (
				<h4 className="textMain textH2 textBold">{children}</h4>
			),
	},
};

export const imageCoverRender = {
	renderNode: {
		// eslint-disable-next-line react/display-name
		[BLOCKS.EMBEDDED_ASSET]: (node, children) => (
			<ImageCard objectFit="cover" colSpan={12}>
				<Image
					layout="fill"
					objectFit="cover"
					src={`https:${node.data.target.fields.file.url}`}
					alt="Ambassador App Phone Mockup"
				/>
			</ImageCard>
		),
	},
};

export const imageContainRender = {
	renderNode: {
		// eslint-disable-next-line react/display-name
		[BLOCKS.EMBEDDED_ASSET]: (node, children) => (
			<ImageCard objectFit="contain" colSpan={12}>
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
