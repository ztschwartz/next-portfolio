import React from "react";
import * as style from "./Grid.module.css";

export const GridContainer = ({ children, offset, className, wrapperType }) => {
	return (
		<div
			className={`${style.gridContainer} ${style[wrapperType]} ${className} ${
				offset && style.offsetContent
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
	innerGrid,
}) => {
	const getColStart = (colStartProp) => {
		if (colStartProp !== undefined) {
			const colStartClass = `colStart${colStartProp}`;
			return colStartClass;
		}
		return "colStartAuto";
	};

	// const getColSpanTo = (colSpanProp, colStartProp) => {
	// 	const colEnd = colStartProp + colSpanProp;
	// 	const colSpanToClass = `colSpanTo${colEnd}`;
	// 	return colSpanToClass;
	// };

	const getColSpan = (colSpanProp) => {
		if (colSpanProp !== undefined) {
			const colSpanClass = `colSpan${colSpanProp}`;
			return colSpanClass;
		}
		return "colSpanAuto";
	};

	return (
		<div
			className={`${style[wrapperType]} ${className} ${
				innerGrid && style.innerGridContainer
			} ${style[getColSpan(colSpan)]} ${style[getColStart(colStart)]}`}>
			{children}
		</div>
	);
};
