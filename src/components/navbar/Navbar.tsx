import ThemeSwitcher from "./themeSwitcher/ThemeSwitcher";

import { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent } from "@heroui/navbar";
import Logo from "./Logo";
import Tabs from "./tabs/Tabs";
import Button from "../buttons/Button";

import HamburguerButton from "./MenuIcon";

const NavBar = () => {
	const [activeSection, setActiveSection] = useState("");

	const handleDownloadCVPublic = () => {
		const filePath = "/CVAndrea.pdf"; // Ruta correcta

		// Crear un enlace temporal
		const link = document.createElement("a");
		link.href = filePath;
		link.download = "CVAndrea.pdf"; // Forzar la descarga con este nombre
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	const handleSectionClick = (sectionId: string) => {
		setActiveSection(sectionId);
	};

	return (
		<Navbar
			className='dark:bg-negro1 bg-negro10  md:px-[26px] lg:px-[91px] xl:px-[186px]  sm:h-14 md:h-16 lg:h-20 lg:py-[19px] sticky top-0 z-50'
			isBordered
			isBlurred
			maxWidth='full'
			position='sticky'>
			<NavbarBrand className='flex-none'>
				<a href={import.meta.env.BASE_URL}>
					<Logo />
				</a>
			</NavbarBrand>
			<NavbarContent className='hidden lg:flex gap-4 w-full' justify='center'>
				<Tabs activeSection={activeSection} onSectionClick={handleSectionClick}>
					inicio
				</Tabs>
				<Tabs activeSection={activeSection} onSectionClick={handleSectionClick}>
					sobre mi
				</Tabs>
				<Tabs activeSection={activeSection} onSectionClick={handleSectionClick}>
					mis proyectos
				</Tabs>
				<Tabs activeSection={activeSection} onSectionClick={handleSectionClick}>
					contactame
				</Tabs>
			</NavbarContent>
			<NavbarContent className='flex gap-6 items-center' justify='end'>
				<ThemeSwitcher />
				<div className='lg:hidden w-px h-6 bg-github dark:bg-blanco '></div>
				<div className='lg:hidden'>
					<HamburguerButton />
				</div>
				<div className='hidden lg:flex'>
					<Button onClick={handleDownloadCVPublic} size='l'>
						Descargar CV
					</Button>
				</div>
			</NavbarContent>
		</Navbar>
	);
};

export default NavBar;
