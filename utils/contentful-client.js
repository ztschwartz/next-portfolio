import * as contentful from "contentful";

export const fetchContentfulData = async (client) => {
	try {
		const data = await client.getEntries({
			content_type: "caseStudy",
			order: "fields.order",
			include: 5,
		});
		console.log(data);
		return data;
	} catch (error) {
		console.error(error);
	}
};
