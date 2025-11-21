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
			className='dark:bg-negro1 bg-negro10  md:px-[26px] lg:px-[91px] xl:px-[186px]  sm:h-14 md:h-16 lg:h-20 lg:py-[19px]'
			isBordered
			isBlurred
			maxWidth='full'>
			<div className='flex justify-start'>
				<NavbarBrand>
					<a href='/'>
						<Logo />
					</a>
				</NavbarBrand>
			</div>
			<div className='w-8/12'>
				<NavbarContent className='hidden lg:flex gap-4' justify='start'>
					<Tabs
						activeSection={activeSection}
						onSectionClick={handleSectionClick}>
						inicio
					</Tabs>
					<Tabs
						activeSection={activeSection}
						onSectionClick={handleSectionClick}>
						sobre mi
					</Tabs>
					<Tabs
						activeSection={activeSection}
						onSectionClick={handleSectionClick}>
						mis proyectos
					</Tabs>
					<Tabs
						activeSection={activeSection}
						onSectionClick={handleSectionClick}>
						contactame
					</Tabs>
				</NavbarContent>
			</div>
			<div>
				<NavbarContent
					className='max-[1024px]:flex max-[1024px]:gap-6 max-[1024px]:w-[110px] max-[1024px]:h-6 max-[1024px]:flex-row max-[1024px]:justify-start max-[1024px]:items-start'
					justify='end'>
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
			</div>
		</Navbar>
	);
};

export default NavBar;
