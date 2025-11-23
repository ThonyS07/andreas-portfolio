import { getTheme } from "../../../../lib/theme";

const StakeIcon = () => {
     const theme = getTheme();
			const color = theme === "dark" ? "#ffffff" : "#1a1d12";
	return (
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M3 20.25C3 19.5207 3.29632 18.8212 3.82376 18.3055C4.35121 17.7897 5.06658 17.5 5.8125 17.5H21M3 20.25C3 20.9793 3.29632 21.6788 3.82376 22.1945C4.35121 22.7103 5.06658 23 5.8125 23H21V1H5.8125C5.06658 1 4.35121 1.28973 3.82376 1.80546C3.29632 2.32118 3 3.02065 3 3.75V20.25Z'
				stroke={color}
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};

export default StakeIcon;
