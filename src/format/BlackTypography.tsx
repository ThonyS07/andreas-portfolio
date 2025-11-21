import React from "react";
import type { TypographyTypes } from '../types/FormatTypes';

export const HeaderBl1: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p className={`font-black text-4xl text-left tracking-normal `}>
			{children}
		</p>
	);
};
export const HeaderBl2: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p className={`font-black text-3xl text-left tracking-normal `}>
			{children}
		</p>
	);
};
export const HeaderBl3: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p className={`font-black text-2xl text-left tracking-normal `}>
			{children}
		</p>
	);
};
export const HeaderBl4: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p className={`font-black text-1xl text-left tracking-normal `}>
			{children}
		</p>
	);
};
export const HeaderBl5: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p className={`font-black text-xl text-left tracking-normal `}>
			{children}
		</p>
	);
};
export const HeaderBl6: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p className={`font-black text-l text-left tracking-normal `}>{children}</p>
	);
};
export const TextBl1: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p className={`font-black text-m text-left tracking-normal `}>{children}</p>
	);
};
export const TextBl2: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p className={`font-black text-s text-left tracking-normal `}>{children}</p>
	);
};
export const TextBl3: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p className={`font-black text-ss text-left tracking-normal `}>
			{children}
		</p>
	);
};
export const TextBl4: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p className={`font-black text-2xs text-left tracking-normal `}>
			{children}
		</p>
	);
};
export const TextBl5: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p className={`font-black text-3xs text-left tracking-normal `}>
			{children}
		</p>
	);
};
