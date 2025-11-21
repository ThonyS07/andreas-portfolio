import React from "react";
import type { TypographyTypes } from '../types/FormatTypes';

export const HeaderL1: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<h1 className={`font-light text-4xl text-left tracking-normal`}>
			{children}
		</h1>
	);
};
export const HeaderL2: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p
			className={`font-light text-3xl text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const HeaderL3: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p
			className={`font-light text-2xl text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const HeaderL4: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p
			className={`font-light text-1xl text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const HeaderL5: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p
			className={`font-light text-xl text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const HeaderL6: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p
			className={`font-light text-l text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const TextL1: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p
			className={`font-light text-m text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const TextL2: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p
			className={`font-light text-s text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const TextL3: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p
			className={`font-light text-ss text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const TextL4: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p
			className={`font-light text-2xs text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const TextL5: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p
			className={`font-light text-3xs text-left tracking-normal`}>
			{children}
		</p>
	);
};
