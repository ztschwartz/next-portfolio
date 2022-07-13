import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import * as style from "./Section.module.css";

const Section = ({ children, id, title }) => {
	return (
		<section className={style.section} id={id}>
			<SectionHeader title={title} name={id} />
			{children}
		</section>
	);
};

export default Section;
