import Link from "next/link";
import React from "react";
import LogoIcon from "../LogoIcon.js";
import style from "./Navbar.module.css";
import PaginationBtns from "./PaginationBtns.js";

const Navbar = ({ type, currentPage, cmsData }) => {
	const pageType = type;

	return (
		<nav className={style.navbar}>
			<div className="container">
				<div className={style.navFlex}>
					{pageType === "home" ? (
						<LogoIcon className="navAni" />
					) : (
						<Link href="/">
							<a
								className={`link textP2 textMain navAni  ${style.backHomeLink}`}>
								<svg
									className={` ${style.backHomeSvg} fillAccent`}
									viewBox="0 0 16 16"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M15.9996 0H0.00206878V1.60776C0.00206878 1.93908 0.270657 2.20767 0.601977 2.20767H12.0864C12.1399 2.20767 12.1666 2.27229 12.1288 2.31008L0.234278 14.2046C0.0842719 14.3546 0 14.5581 0 14.7702V16H1.22973C1.44187 16 1.64533 15.9157 1.79533 15.7657L13.6897 3.87127C13.7275 3.83348 13.7922 3.86024 13.7922 3.91369V15.3977C13.7922 15.729 14.0607 15.9976 14.3921 15.9976H15.9998L15.9996 0Z"
									/>
								</svg>
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
							<a
								href="#contact"
								className={`link textP2 navAni textMain ${style.navLink}`}>
								Contact
							</a>
						</div>
					) : (
						<PaginationBtns currentPage={currentPage} cmsData={cmsData} />
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
