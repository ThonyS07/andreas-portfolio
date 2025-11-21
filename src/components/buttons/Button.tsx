import React from "react";
import type { ButtonsTypes } from "../../types/ButtonsTypes";
import {
	ButtonL,
	ButtonM,
	ButtonS,
	ButtonXL,
	ButtonXS,
} from "../../format/ButtonsTypography";

const Button = ({ children, onClick, size }: ButtonsTypes) => {
	let classNames = "";
	if (size === "S" || size === "s") {
		classNames = "h-7 py-[6px] px-[19px] ";
	} else if (size === "M" || size === "m") {
		classNames = "h-9 py-[9px] px-[18px] ";
	} else if (size === "L" || size === "l") {
		classNames = "h-42 py-[11px] px-[27px] ";
	} else if (size === "XL" || size === "xl") {
		classNames = "h-12 py-[13px] px-[27px] ";
	} else {
		classNames = "h-14 py-4 px-[25px] ";
	}

	return (
		<div className='flex justify-center  items-center'>
			<button
				onClick={onClick}
				className={`${classNames}   dark:bg-negro1 dark:border-blanco dark:border dark:hover:border-[#9747ff] dark:hover:text-[#a57bf5] dark:disabled:border-[#9747ff] dark:disabled:text-[#6a708c] dark:active:border-[#ccb4fa] dark:active:text-[#ccb4fa] bg-purple1  flex 
				justify-center items-center text-center rounded-lg hover:bg-purple3 active:bg-purple2 disabled:bg-purple9 flex-row flex-nowrap whitespace-nowrap text-blanco`}>
				{size === "S" || size === "s" ? (
					<ButtonXS>{children}</ButtonXS>
				) : size === "M" || size === "m" ? (
					<ButtonS>{children}</ButtonS>
				) : size === "L" || size === "l" ? (
					<ButtonM>{children}</ButtonM>
				) : size === "XL" || size === "xl" ? (
					<ButtonL>{children}</ButtonL>
				) : (
					<ButtonXL>{children}</ButtonXL>
				)}
			</button>
		</div>
	);
};

export default Button;
