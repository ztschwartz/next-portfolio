import React from "react";
import Link from "next/link";
import postData from "../../posts/post.json";
import { client, fetchContentfulData } from "../../utils/contentful-client";
import NavbarStyles from "./Navbar.module.css";

const PaginationBtns = ({ currentPage, cmsData }) => {
	const postString = JSON.stringify(postData);
	const postObject = JSON.parse(postString);

	const posts = cmsData.items;
	const arrayLength = posts.length;

	const getNextPage = () => {
		const nextPageNumber = currentPage + 1;

		if (nextPageNumber <= arrayLength) {
			const nextPagePost = posts.filter(
				(post) => post.fields.order === nextPageNumber
			);
			const nextPageSlug = nextPagePost[0].fields.slug;
			const nextPageTitle = nextPagePost[0].fields.title;
			const nextPageSubTitle = nextPagePost[0].fields.subtitle;

			const nextPageText = `${nextPageTitle} ${nextPageSubTitle}`;

			return [nextPageSlug, nextPageText];
		} else {
			const nextPagePost = posts.filter((post) => post.fields.order === 1);
			const nextPageSlug = nextPagePost[0].fields.slug;
			const nextPageTitle = nextPagePost[0].fields.title;
			const nextPageSubTitle = nextPagePost[0].fields.subtitle;

			const nextPageText = `${nextPageTitle} ${nextPageSubTitle}`;

			return [nextPageSlug, nextPageText];
		}
	};

	const getPrevPage = () => {
		const prevPageNumber = currentPage - 1;
		if (prevPageNumber > 0) {
			const nextPagePost = posts.filter(
				(post) => post.fields.order === prevPageNumber
			);
			const prevPageSlug = nextPagePost[0].fields.slug;
			const prevPageTitle = nextPagePost[0].fields.title;
			const prevPageSubTitle = nextPagePost[0].fields.subtitle;

			const prevPageText = `${prevPageTitle} ${prevPageSubTitle}`;

			return [prevPageSlug, prevPageText];
		} else {
			const prevPagePost = posts.filter(
				(post) => post.fields.order === arrayLength
			);
			const prevPageSlug = prevPagePost[0].fields.slug;
			const prevPageTitle = prevPagePost[0].fields.title;
			const prevPageSubTitle = prevPagePost[0].fields.subtitle;

			const prevPageText = `${prevPageTitle} ${prevPageSubTitle}`;

			return [prevPageSlug, prevPageText];
		}
	};

	const [nextPageSlug, nextPageText] = getNextPage();
	const [prevPageSlug, prevPageText] = getPrevPage();

	return (
		<div className={NavbarStyles.paginationSection}>
			<Link
				scroll={false}
				href={`/case-studies/${encodeURIComponent(prevPageSlug)}`}>
				<a
					className={`borderDeep bgDeep navAni ${NavbarStyles.prevPageBtn} ${NavbarStyles.pageBtn}`}>
					<svg
						className="fillAccent"
						viewBox="0 0 16 16"
						xmlns="http://www.w3.org/2000/svg">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M15.9996 0H0.00206878V1.60776C0.00206878 1.93908 0.270657 2.20767 0.601977 2.20767H12.0864C12.1399 2.20767 12.1666 2.27229 12.1288 2.31008L0.234278 14.2046C0.0842719 14.3546 0 14.5581 0 14.7702V16H1.22973C1.44187 16 1.64533 15.9157 1.79533 15.7657L13.6897 3.87127C13.7275 3.83348 13.7922 3.86024 13.7922 3.91369V15.3977C13.7922 15.729 14.0607 15.9976 14.3921 15.9976H15.9998L15.9996 0Z"
						/>
					</svg>
					<p
						className={`textP2 textMain textMedium ${NavbarStyles.pageBtnLabel}`}>
						<span className="textP2 textSoft textRegular">Prev: </span>
						{prevPageText}
					</p>
				</a>
			</Link>
			<Link
				scroll={false}
				href={`/case-studies/${encodeURIComponent(nextPageSlug)}`}>
				<a
					className={`borderDeep bgDeep navAni ${NavbarStyles.nextPageBtn} ${NavbarStyles.pageBtn}`}>
					<p
						className={`textP2 textMain textMedium ${NavbarStyles.pageBtnLabel}`}>
						<span className="textP2 textSoft textRegular">Next: </span>
						{nextPageText}
					</p>
					<svg
						className="fillAccent"
						viewBox="0 0 16 16"
						xmlns="http://www.w3.org/2000/svg">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M15.9996 0H0.00206878V1.60776C0.00206878 1.93908 0.270657 2.20767 0.601977 2.20767H12.0864C12.1399 2.20767 12.1666 2.27229 12.1288 2.31008L0.234278 14.2046C0.0842719 14.3546 0 14.5581 0 14.7702V16H1.22973C1.44187 16 1.64533 15.9157 1.79533 15.7657L13.6897 3.87127C13.7275 3.83348 13.7922 3.86024 13.7922 3.91369V15.3977C13.7922 15.729 14.0607 15.9976 14.3921 15.9976H15.9998L15.9996 0Z"
						/>
					</svg>
				</a>
			</Link>
		</div>
	);
};

export default PaginationBtns;
