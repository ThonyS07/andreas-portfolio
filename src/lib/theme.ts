// src/lib/theme.ts
type Theme = "light" | "dark" | "system";	

let currentTheme: Theme = "system";
let listeners: Set<() => void> = new Set();
let initialized = false;

// 🔥 Solo se ejecuta en el browser
function initTheme() {
	if (initialized) return;
	initialized = true;

	// Intenta cargar desde localStorage
	const saved = localStorage.getItem("theme") as Theme | null;
	if (saved) currentTheme = saved;

	applyTheme(currentTheme);

	// Si cambia el modo del sistema, actualizamos
	window
		.matchMedia("(prefers-color-scheme: dark)")
		.addEventListener("change", () => {
			if (currentTheme === "system") applyTheme("system");
		});
}

function applyTheme(theme: Theme) {
	const root = document.documentElement;

	const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

	const finalTheme =
		theme === "system" ? (prefersDark ? "dark" : "light") : theme;

	root.classList.toggle("dark", finalTheme === "dark");

	notify();
}

function notify() {
	for (const fn of listeners) fn();
}

export function getTheme(): Theme {
	if (!initialized && typeof window !== "undefined") initTheme();
	return currentTheme;
}

export function setTheme(theme: Theme) {
	if (typeof window === "undefined") return; // SSR guard

	currentTheme = theme;
	localStorage.setItem("theme", theme);

	applyTheme(theme);
}

export function toggleTheme() {
	const theme = getTheme() === "dark" ? "light" : "dark";
	setTheme(theme);
}

export function subscribe(fn: () => void) {
	listeners.add(fn);

	// Cleanup debe retornat void, no boolean
	return () => {
		listeners.delete(fn);
	};
}

// 🟦 API tipo "useTheme" como next-themes, pero sin React
export function useTheme(callback?: () => void) {
	if (typeof window !== "undefined") initTheme();

	if (callback) subscribe(callback);

	return {
		theme: getTheme(),
		setTheme,
		toggleTheme,
	};
}
