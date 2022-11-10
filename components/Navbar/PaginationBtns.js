import React from "react";
import Link from "next/link";

import { client, fetchContentfulData } from "../../utils/contentful-client";
import NavbarStyles from "./Navbar.module.css";

const PaginationBtns = ({ currentPage, cmsData }) => {
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
					className={`bgSoft navAni ${NavbarStyles.prevPageBtn} ${NavbarStyles.pageBtn}`}>
					<svg
						className="strokeMain"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M12 2L22 12M22 12L12 22M22 12H2"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
					<p
						className={`textP2 textWhite textMedium ${NavbarStyles.pageBtnLabel}`}>
						<span className="textP2 textWhite textMedium">Prev: </span>
						{prevPageText}
					</p>
				</a>
			</Link>
			<Link
				scroll={false}
				href={`/case-studies/${encodeURIComponent(nextPageSlug)}`}>
				<a
					className={`bgSoft navAni ${NavbarStyles.nextPageBtn} ${NavbarStyles.pageBtn}`}>
					<p
						className={`textP2 textWhite textMedium ${NavbarStyles.pageBtnLabel}`}>
						<span className="textP2 textWhite textMedium">Next: </span>
						{nextPageText}
					</p>
					<svg
						className="strokeMain"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M12 2L22 12M22 12L12 22M22 12H2"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</a>
			</Link>
		</div>
	);
};

export default PaginationBtns;
