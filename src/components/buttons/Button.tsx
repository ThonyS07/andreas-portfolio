import type { ButtonsTypes } from "../../types/ButtonsTypes";
import {
	ButtonL,
	ButtonM,
	ButtonS,
	ButtonXL,
	ButtonXXL,
} from "../../format/ButtonsTypography";

const Button = ({ children, onClick, size }: ButtonsTypes) => {
	let classNames = "";
	if (size === "S" || size === "s") {
		classNames = "h-7 py-[6px] px-[19px] ";
	}
	if (size === "M" || size === "m") {
		classNames = "h-9 py-[9px] px-[18px] ";
	}
	if (size === "L" || size === "l") {
		classNames = "h-42 py-[11px] px-[27px] ";
	}
	if (size === "XL" || size === "xl") {
		classNames = "h-12 py-[13px] px-[27px] ";
	}
	if (size === "XXL" || size === "xxl") {
		classNames = "h-14 py-4 px-[25px] ";
	}

	return (
		<div className='flex justify-center  items-center'>
			<button
				onClick={onClick}
				className={`${classNames}   dark:bg-negro1 dark:border-blanco dark:border dark:hover:border-mora4 dark:hover:text-mora4 dark:hover:bg-negro1 dark:disabled:border-negro6 dark:disabled:text-negro6 dark:active:border-mora6 dark:active:text-mora6 bg-purple1  flex 
				justify-center items-center text-center rounded-lg hover:bg-purple3 active:bg-purple2 disabled:bg-purple9 flex-row flex-nowrap whitespace-nowrap text-blanco`}>
				{size === "S" || size === "s" ? (
					<ButtonS>{children}</ButtonS>
				) : size === "M" || size === "m" ? (
					<ButtonM>{children}</ButtonM>
				) : size === "L" || size === "l" ? (
					<ButtonL>{children}</ButtonL>
				) : size === "XL" || size === "xl" ? (
					<ButtonXL>{children}</ButtonXL>
				) : (
					<ButtonXXL>{children}</ButtonXXL>
				)}
			</button>
		</div>
	);
};

export default Button;
