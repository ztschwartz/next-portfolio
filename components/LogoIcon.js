import React from "react";
import Link from "next/link";
import NavStyles from "../styles/components/Navbar.module.css";

const LogoIcon = () => {
	return (
		<Link scroll={false} href="/">
			<a className={`navAni ${NavStyles.homeNavLogoSection}`}>
				{/* <svg className={`mainFill ${NavStyles.navLogo}`} viewBox="0 0 122 78" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M6 0C2.68628 0 0 2.68628 0 6V72C0 75.3137 2.68628 78 6 78H116C119.314 78 122 75.3137 122 72V6C122 2.68628 119.314 0 116 0H6ZM20.4346 38.5196C20.2451 38.7291 19.9757 38.8487 19.6931 38.8487H19V19.5C19 18.6716 19.6716 18 20.5 18H59V26.9069C59 27.4117 58.8091 27.8979 58.4656 28.2678L31.0912 57.7479C31.0021 57.8439 31.0701 58 31.2011 58H39.9219C40.4871 58 41.0258 57.7609 41.405 57.3418L57.5654 39.4804C57.7549 39.2709 58.0243 39.1513 58.3069 39.1513H59V60H20.5C19.6716 60 19 59.3284 19 58.5V51.0931C19 50.5883 19.1909 50.1021 19.5344 49.7322L46.9088 20.2521C46.9979 20.1561 46.9299 20 46.7989 20H38.0781C37.5129 20 36.9742 20.2391 36.595 20.6582L20.4346 38.5196ZM101.565 38.5196C101.755 38.7291 102.024 38.8487 102.307 38.8487H103V19.5C103 18.6716 102.328 18 101.5 18H63V26.9069C63 27.4117 63.1909 27.8979 63.5344 28.2678L90.9088 57.7479C90.9979 57.8439 90.9299 58 90.7989 58H82.0781C81.5129 58 80.9742 57.7609 80.595 57.3418L64.4346 39.4804C64.2451 39.2709 63.9757 39.1513 63.6931 39.1513H63V60H101.5C102.328 60 103 59.3284 103 58.5V51.0931C103 50.5883 102.809 50.1021 102.466 49.7322L75.0912 20.2521C75.0021 20.1561 75.0701 20 75.2011 20H83.9219C84.4871 20 85.0258 20.2391 85.405 20.6582L101.565 38.5196Z"/>
                </svg> */}
				<svg
					className={`fillMain ${NavStyles.navLogo}`}
					viewBox="0 0 120 76"
					xmlns="http://www.w3.org/2000/svg">
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M0 6C0 2.68628 2.68628 0 6 0H114C117.314 0 120 2.68628 120 6V70C120 73.3137 117.314 76 114 76H6C2.68628 76 0 73.3137 0 70V6ZM62 18V26.5017C62 27.0321 62.2107 27.5408 62.5858 27.9159L91.0338 56.3639C91.1283 56.4584 91.0614 56.62 90.9277 56.62H82.8653C82.6 56.62 82.3457 56.5146 82.1581 56.3271L63.5711 37.74C63.3835 37.5525 63.1292 37.4471 62.864 37.4471H62V58H100.5C101.328 58 102 57.3284 102 56.5V49.4973C102 48.9669 101.789 48.4583 101.414 48.0831L72.9671 19.6361C72.8726 19.5416 72.9396 19.38 73.0732 19.38H81.1357C81.4009 19.38 81.6553 19.4854 81.8428 19.6729L100.429 38.259C100.617 38.4467 100.871 38.552 101.136 38.552H102V19.5C102 18.6716 101.328 18 100.5 18H62ZM58 26.5017V18H19.5C18.6716 18 18 18.6716 18 19.5V38.552H18.8639C19.1292 38.552 19.3835 38.4467 19.571 38.259L38.1572 19.6729C38.3447 19.4854 38.5991 19.38 38.8643 19.38H46.9268C47.0604 19.38 47.1274 19.5416 47.0329 19.6361L18.5858 48.0831C18.2107 48.4583 18 48.9669 18 49.4973V56.5C18 57.3284 18.6716 58 19.5 58H58V37.4471H57.136C56.8708 37.4471 56.6165 37.5525 56.4289 37.74L37.8419 56.3271C37.6543 56.5146 37.4 56.62 37.1347 56.62H29.0723C28.9386 56.62 28.8717 56.4584 28.9662 56.3639L57.4142 27.9159C57.7893 27.5408 58 27.0321 58 26.5017Z"
					/>
				</svg>
			</a>
		</Link>
	);
};

export default LogoIcon;
