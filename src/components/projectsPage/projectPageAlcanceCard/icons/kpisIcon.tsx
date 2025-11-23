import { getTheme } from "../../../../lib/theme";
const KpisIcon = () => {
	const theme = getTheme();
	const color = theme === "dark" ? "#ffffff" : "#1a1d12";
	return (
		<div>
			<svg
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M16.4 22V4.22222C16.4 3.63285 16.1682 3.06762 15.7556 2.65087C15.3431 2.23413 14.7835 2 14.2 2H9.8C9.21652 2 8.65695 2.23413 8.24437 2.65087C7.83179 3.06762 7.6 3.63285 7.6 4.22222V22M3.2 6.44444H20.8C22.015 6.44444 23 7.43937 23 8.66667V19.7778C23 21.0051 22.015 22 20.8 22H3.2C1.98497 22 1 21.0051 1 19.7778V8.66667C1 7.43937 1.98497 6.44444 3.2 6.44444Z'
					stroke={color}
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		</div>
	);
};

export default KpisIcon;
