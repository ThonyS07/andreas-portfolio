import React, { useState } from "react";

import type { SwitchTypes } from "../../types/SwitchTypes";

const SwitchS: React.FC<SwitchTypes> = ({ children, onClick }) => {
	const [isSelected, setIsSelected] = useState(false);

	const click = () => {
		setIsSelected(isSelected === true ? false : true);
	};

	return (
		<label
			htmlFor='check'
			className={`flex w-46 h-9 rounded-full items-center transition-all duration-500 cursor-pointer relative ${isSelected ? "bg-green" : "bg-disable"}`}>
			<input
				id='check'
				type='checkbox'
				className='sr-only'
				onClick={onClick}
				onChange={click}
			/>
			<span
				className={`h-9 w-10 ml-0.5 bg-blanco rounded-full transition-all duration-500 shadow-2xl justify-center items-center flex peer-checked:ml-7 ${isSelected ? "ml-7" : ""}`}>

				{children}
			</span>
		</label>
	);
};

export default SwitchS;
