import React from "react";

import type { SwitchTypes } from "../../types/SwitchTypes";

const SwitchS: React.FC<SwitchTypes & { isSelected?: boolean }> = ({
	children,
	onClick,
	isSelected,
}) => {
	return (
		<label
			htmlFor='check'
			className={`inline-flex w-16 h-8 rounded-full items-center transition-all duration-500 cursor-pointer relative ${
				isSelected ? "bg-green" : "bg-disable"
			}`}>
			<input
				id='check'
				type='checkbox'
				className='sr-only'
				onClick={onClick}
				checked={isSelected}
				readOnly
			/>
			<span
				className={`h-6 w-6 ml-1 bg-blanco rounded-full transition-all duration-500 shadow-2xl justify-center items-center flex ${
					isSelected ? "translate-x-8" : ""
				}`}>
				{children}
			</span>
		</label>
	);
};

export default SwitchS;
