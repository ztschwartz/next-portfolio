import React from "react";
import * as style from "./Container.module.css";

const Container = ({ children }) => {
	return <div className={style.container}>{children}</div>;
};

export default Container;