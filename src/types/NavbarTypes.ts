import type { ReactNode } from "react";
export type NavbarTypes = {
	activeSection: string;
	onSectionClick: (sectionId: string) => void;
	children: ReactNode;
};
