import React from "react";
import type { TypographyTypes } from '../types/FormatTypes';


export const HeaderR1: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<h1
			className={`font-normal text-4xl text-left tracking-normal`}>
			{children}
		</h1>
	);
};
export const HeaderR2: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p
			className={`font-normal text-3xl text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const HeaderR3: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p
			className={`font-normal text-2xl text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const HeaderR4: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p
			className={`font-normal text-1xl text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const HeaderR5: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p
			className={`font-normal text-xl text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const HeaderR6: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p
			className={`font-normal text-l text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const TextR1: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p
			className={`font-normal text-m text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const TextR2: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p
			className={`font-normal text-s text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const TextR3: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p
			className={`font-normal text-ss text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const TextR4: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p
			className={`font-normal text-2xs text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const TextR5: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p
			className={`font-normal text-3xs text-left tracking-normal`}>
			{children}
		</p>
	);
};
