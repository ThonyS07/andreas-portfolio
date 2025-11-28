import React from "react";
import type { TypographyTypes } from "../types/FormatTypes";

export const ButtonXXL: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p className={`font-bold text-left tracking-normal text-btnXXL`}>
			{children}
		</p>
	);
};
export const ButtonXL: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p className={`font-bold text-left tracking-normal text-btnXL`}>
			{children}
		</p>
	);
};
export const ButtonL: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p className={`font-bold flex text-left tracking-normal text-btnL`}>
			{children}
		</p>
	);
};
export const ButtonM: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p className={`font-bold text-left tracking-normal text-btnM`}>
			{children}
		</p>
	);
};
export const ButtonS: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p className={`font-bold text-left tracking-normal text-btnS`}>
			{children}
		</p>
	);
};
