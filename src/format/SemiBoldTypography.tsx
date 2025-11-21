import React from "react";


import type { TypographyTypes } from '../types/FormatTypes';


export const HeaderSB1: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<h1
			className={`font-semibold  text-4xl text-left tracking-normal`}>
			{children}
		</h1>
	);
};
export const HeaderSB2: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p
			className={`font-semibold  text-3xl text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const HeaderSB3: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p
			className={`font-semibold  text-2xl text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const HeaderSB4: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p
			className={`font-semibold  text-1xl text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const HeaderSB5: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p
			className={`font-semibold  text-xl text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const HeaderSB6: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p
			className={`font-semibold  text-l text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const TextSB1: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p
			className={`font-semibold  text-m text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const TextSB2: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p
			className={`font-semibold  text-s text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const TextSB3: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p
			className={`font-semibold  text-ss text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const TextSB4: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p
			className={`font-semibold  text-2xs text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const TextSB5: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p
			className={`font-semibold  text-3xs text-left tracking-normal`}>
			{children}
		</p>
	);
};
