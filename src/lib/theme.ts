// src/lib/theme.ts
type Theme = "light" | "dark" | "system";

let currentTheme: Theme = "system";
let listeners: Set<() => void> = new Set();

// Dispara evento global
function notify() {
	for (const fn of listeners) fn();
}

export function getTheme(): Theme {
	return currentTheme;
}

export function setTheme(theme: Theme) {
	currentTheme = theme;
	localStorage.setItem("theme", theme);

	// Aplica al DOM
	const root = document.documentElement;
	const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

	const finalTheme =
		theme === "system" ? (prefersDark ? "dark" : "light") : theme;

	root.classList.toggle("dark", finalTheme === "dark");

	notify();
}

export function toggleTheme() {
	const theme = getTheme() === "dark" ? "light" : "dark";
	setTheme(theme);
}

export function subscribe(fn: () => void) {
	listeners.add(fn);
	return () => listeners.delete(fn);
}

// Hook-like API (similar a useTheme)
export function useTheme(callback: () => void) {
	subscribe(callback);
	return {
		theme: getTheme(),
		setTheme,
		toggleTheme,
	};
}
