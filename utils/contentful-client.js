import * as contentful from "contentful";

export const fetchContentfulData = async () => {
	try {
		const data = await client.getEntries({
			content_type: "caseStudy",
			order: "fields.order",
		});
		console.log(data);
		return data;
	} catch (error) {
		console.error(error);
	}
};

export const client = contentful.createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});
