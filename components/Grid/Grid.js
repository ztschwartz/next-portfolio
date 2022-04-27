import React from "react";
import * as style from "./Grid.module.css";

export const GridContainer = ({ children, offset, className, wrapperType }) => {
	return (
		<div
			className={`${style.gridContainer} ${style[wrapperType]} ${className} ${
				offset ? style.offsetContent : null
			}`}>
			{children}
		</div>
	);
};

export const GridChild = ({
	children,
	colSpan,
	colStart,
	className,
	wrapperType,
}) => {
	const getColStart = (colStartProp) => {
		const colStartClass = `colStart${colStartProp}`;
		return colStartClass;
	};

	const getColSpanTo = (colSpanProp, colStartProp) => {
		const colEnd = colStartProp + colSpanProp;
		const colSpanToClass = `colSpanTo${colEnd}`;
		return colSpanToClass;
	};

	const getColSpan = (colSpanProp) => {
		const colSpanClass = `colSpan${colSpanProp}`;
		return colSpanClass;
	};

	return (
		<div
			className={`${style[wrapperType]} ${className} ${
				colStart && colSpan
					? style[getColSpanTo(colSpan, colStart)]
					: style[getColSpan(colSpan)]
			} ${style[getColStart(colStart)]}`}>
			{children}
		</div>
	);
};
