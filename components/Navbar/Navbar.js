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
					<LogoIcon />
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
