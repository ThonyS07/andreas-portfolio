import React from "react";
import type { TypographyTypes } from "../types/FormatTypes";

export const ButtonXL: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p className={`font-bold text-left tracking-normal text-xl  `}>
			{children}
		</p>
	);
};
export const ButtonL: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p className={`font-bold text-left tracking-normal text-lg `}>
			{children}
		</p>
	);
};
export const ButtonM: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p
			className={`font-bold flex text-left tracking-normal text-base leading-5`}>
			{children}
		</p>
	);
};
export const ButtonS: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p
			className={`font-bold text-left tracking-normal text-sm leading-[18px]`}>
			{children}
		</p>
	);
};
export const ButtonXS: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p className={`font-bold text-left tracking-normal text-xs `}>
			{children}
		</p>
	);
};
