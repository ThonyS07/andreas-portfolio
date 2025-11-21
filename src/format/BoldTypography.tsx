import React from "react";
import type { TypographyTypes } from '../types/FormatTypes';

export const HeaderB1: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p
			className={`font-bold text-4xl text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const HeaderB2: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p
			className={`font-bold text-3xl text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const HeaderB3: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p
			className={`font-bold text-2xl text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const HeaderB4: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p
			className={`font-bold text-1xl text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const HeaderB5: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p
			className={`font-bold text-1xl text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const HeaderB6: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p
			className={`font-bold text-l text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const TextB1: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p
			className={`font-bold text-m text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const TextB2: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p
			className={`font-bold text-s text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const TextB3: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p
			className={`font-bold text-ss text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const TextB4: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p
			className={`font-bold text-2xs text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const TextB5: React.FC<TypographyTypes> = ({ children }) => {
	return (
		<p
			className={`font-bold text-3xs text-left tracking-normal`}>
			{children}
		</p>
	);
};
