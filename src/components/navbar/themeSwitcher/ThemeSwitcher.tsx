import { useEffect, useState } from "react";
import { setTheme, toggleTheme, getTheme, subscribe } from "../../../lib/theme";
import MoonIcon from "./MoonIcon";
import SunIcon from "./SunIcon";
import SwitchS from "../../switches/SwitchS";

export default function ThemeSwitcher() {
	const [theme, setThemeState] = useState<"light" | "dark" | "system">("light");
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		// Establecer tema inicial
		setThemeState(getTheme());

		// Suscribirse a cambios del tema
		const unsubscribe = subscribe(() => {
			setThemeState(getTheme());
		});

		setMounted(true);
		return unsubscribe;
	}, []);

	const handleThemeChange = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
	};

	if (!mounted) return null;

	return (
		<SwitchS onClick={handleThemeChange} isSelected={theme === "dark"}>
			{theme === "dark" ? (
				<MoonIcon className='h-4 w-4' />
			) : (
				<SunIcon className='h-4 w-4' />
			)}
		</SwitchS>
	);
}
