import React, { useState, useEffect } from "react";
import type { ProgressTypes } from "../../types/ProgressTypes";
import { getTheme, subscribe } from "../../lib/theme";

const ProgressWLabel: React.FC<ProgressTypes> = ({ value, size, text }) => {
	const grosor = 0.075 * size;
	const radius = (size - grosor) / 2;
	const dashArray = radius * Math.PI * 2;
	const dashOffset = dashArray - (dashArray * value) / 100;
	const [theme, setTheme] = useState<"light" | "dark" | "system">("light");
	const [textClass, setTextClass] = useState("");

	useEffect(() => {
		// Get initial theme
		setTheme(getTheme());

		// Subscribe to theme changes
		const unsubscribe = subscribe(() => {
			setTheme(getTheme());
		});

		return unsubscribe;
	}, []);

	useEffect(() => {
		const cls = theme === "dark" ? "text-blanco" : "text-negro3";
		setTextClass(cls);
	}, [theme]);
	const classText =
		size === 64
			? " leading-5 font-semibold text-left tracking-normal text-[14px]  "
			: size === 152
			? " leading-5 font-semibold text-left tracking-normal text-[14px]  "
			: size === 200
			? " leading-6 font-bold text-left tracking-normal text-[16px]   "
			: " leading-6 font-semibold text-left tracking-normal text-[16px]  ";
	const classValue =
		size === 64
			? " leading-[20px] font-bold text-left tracking-normal text-[14px]  "
			: size === 152
			? " leading-[32px] font-bold text-left tracking-normal text-[24px]  "
			: size === 200
			? " leading-[40px] font-bold text-left tracking-normal text-[32px]  "
			: " leading-[44px] font-bold text-left tracking-normal text-[36px]  ";

	return (
		<div className=' flex justify-center items-center w-max '>
			<svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
				<circle
					cx={size / 2}
					cy={size / 2}
					r={radius}
					strokeWidth={grosor}
					className='fill-none leading- stroke-negro10 text-mora8  dark:stroke-negro4 '
				/>
				<circle
					cx={size / 2}
					cy={size / 2}
					r={radius}
					strokeWidth={grosor}
					strokeLinecap='round'
					strokeLinejoin='round'
					className={`fill-none stroke-mora2 `}
					style={{
						strokeDasharray: dashArray,
						strokeDashoffset: dashOffset,
					}}
					transform={`rotate(-90 ${size / 2} ${size / 2})`}
				/>
				<text
					x={size / 2}
					y={(size * 2.7) / 7}
					dy='0.35em'
					textAnchor='middle'
					dominantBaseline='middle'
					fill='currentColor'
					className={`${classText}  ${textClass} `}>
					{text}
				</text>
				<text
					x={size / 2}
					y={(size * 3.7) / 7}
					dy='0.35em'
					textAnchor='middle'
					dominantBaseline='middle'
					fill='currentColor'
					className={`${classValue} ${textClass}`}>
					{value}%
				</text>
			</svg>
		</div>
	);
};

export default ProgressWLabel;
