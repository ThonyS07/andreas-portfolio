import type { NavbarTypes } from "../../../types/NavbarTypes";
import { NavbarItem } from "@heroui/navbar";

import React from "react";

const Tabs = (props: NavbarTypes) => {
	const { activeSection, onSectionClick, children } = props;
	const visibleContent = React.Children.toArray(children)
		.map((c) => (typeof c === "string" ? c : ""))
		.join("")
		.replace(/^./, (str) => str.toUpperCase());
	return (
		<NavbarItem>
			<a
				onClick={() => onSectionClick(`${children}`)}
				className={`pl-0 dark:text-blanco text-negro1 h-5 cursor-pointer transition-colors ${
					activeSection === children
						? "font-bold text-mora5 underline decoration-2 underline-offset-4"
						: "font-normal"
				}`}
				color='foreground'
				href={`#${children}`}>
				{visibleContent}
			</a>
		</NavbarItem>
	);
};
export default Tabs;
