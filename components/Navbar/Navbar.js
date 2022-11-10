import Link from "next/link";
import React from "react";
import LogoIcon from "../LogoIcon.js";
import style from "./Navbar.module.css";
import PaginationBtns from "./PaginationBtns.js";
import { GridContainer, GridChild } from "../Grid/Grid.js";

const Navbar = ({ type, currentPage, cmsData }) => {
	const pageType = type;

	return (
		<nav className={style.navbar}>
			<GridContainer>
				<GridChild colSpan={12}>
					<div className={style.navFlex}>
						{pageType === "home" ? (
							<Link scroll={false} href="/">
								<a className={`navAni ${style.homeNavLogoSection}`}>
									<svg
										className={`fillMain ${style.navLogo}`}
										viewBox="0 0 168 80"
										xmlns="http://www.w3.org/2000/svg">
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M0 65.2519C0 63.1668 0.814072 61.1641 2.2688 59.6703L55.1626 5.35815C55.6563 4.8512 55.2971 4 54.5895 4H41.2353C40.1369 4 39.0869 4.45166 38.3315 5.24902L4.10641 41.3755C3.72871 41.7742 3.20369 42 2.65451 42H0.800003C0.35817 42 0 41.6418 0 41.2V6C0 2.68628 2.68629 0 6 0H74C77.3137 0 80 2.68628 80 6V14.7481C80 16.8332 79.1859 18.8359 77.7312 20.3297L24.8375 74.6418C24.3438 75.1488 24.7029 76 25.4106 76H38.7648C39.8632 76 40.9132 75.5483 41.6686 74.751L75.8937 38.6245C76.2714 38.2258 76.7964 38 77.3456 38H79.2C79.6418 38 80 38.3582 80 38.8V74C80 77.3137 77.3137 80 74 80H6C2.68629 80 0 77.3137 0 74V65.2519ZM168 65.2519C168 63.1668 167.186 61.1641 165.731 59.6703L112.837 5.35815C112.344 4.8512 112.703 4 113.41 4H126.765C127.863 4 128.913 4.45166 129.669 5.24902L163.894 41.3755C164.271 41.7742 164.796 42 165.345 42H167.2C167.642 42 168 41.6418 168 41.2V6C168 2.68628 165.314 0 162 0H94C90.6863 0 88 2.68628 88 6V14.7481C88 16.8332 88.8141 18.8359 90.2688 20.3297L143.163 74.6418C143.656 75.1488 143.297 76 142.589 76H129.235C128.137 76 127.087 75.5483 126.331 74.751L92.1063 38.6245C91.7286 38.2258 91.2036 38 90.6544 38H88.8C88.3582 38 88 38.3582 88 38.8V74C88 77.3137 90.6863 80 94 80H162C165.314 80 168 77.3137 168 74V65.2519Z"
										/>
									</svg>
								</a>
							</Link>
						) : (
							<Link href="/">
								<a
									className={`link textP2 textMain navAni  ${style.backHomeLink}`}>
									<svg
										className={`${style.backHomeSvg} strokeMain`}
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M12 2L22 12M22 12L12 22M22 12H2"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									{/* <svg
										className={` ${style.backHomeSvg} fillAccent`}
										viewBox="0 0 16 16"
										xmlns="http://www.w3.org/2000/svg">
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M15.9996 0H0.00206878V1.60776C0.00206878 1.93908 0.270657 2.20767 0.601977 2.20767H12.0864C12.1399 2.20767 12.1666 2.27229 12.1288 2.31008L0.234278 14.2046C0.0842719 14.3546 0 14.5581 0 14.7702V16H1.22973C1.44187 16 1.64533 15.9157 1.79533 15.7657L13.6897 3.87127C13.7275 3.83348 13.7922 3.86024 13.7922 3.91369V15.3977C13.7922 15.729 14.0607 15.9976 14.3921 15.9976H15.9998L15.9996 0Z"
										/>
									</svg> */}
									Back home
								</a>
							</Link>
						)}

						{pageType === "home" ? (
							<div className={style.navLinks}>
								<a
									href="#work"
									className={`link textP2 textMain navAni ${style.navLink}`}>
									Work
								</a>
								<a
									href="#about"
									className={`link textP2 navAni textMain ${style.navLink}`}>
									About
								</a>
							</div>
						) : (
							<PaginationBtns currentPage={currentPage} cmsData={cmsData} />
						)}
					</div>
				</GridChild>
			</GridContainer>
		</nav>
	);
};

export default Navbar;
