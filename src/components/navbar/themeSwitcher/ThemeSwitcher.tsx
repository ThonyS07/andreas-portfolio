import { useEffect, useState } from "react";
import { setTheme, useTheme, toggleTheme, getTheme } from "../../../lib/theme";
import MoonIcon from "./MoonIcon";
import SunIcon from "./SunIcon";
import SwitchS from "../../switches/SwitchS";

export default function ThemeSwitcher() {
	const [mounted, setMounted] = useState(false);

	const { theme, setTheme: applyTheme } = useTheme(() => {
		console.log("Theme changed:", getTheme());
	});

	useEffect(() => {
		setMounted(true);
	}, []);

	const handleThemeChange = () => {
		applyTheme(theme === "light" ? "dark" : "light");
	};

	if (!mounted) return null;

	return (
		<SwitchS onClick={handleThemeChange}>
			{theme === "dark" ? <MoonIcon /> : <SunIcon />}
		</SwitchS>
	);
}
