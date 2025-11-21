import { useState } from "react";
import Tabs from "./tabs/Tabs";

const HamburgerButton = () => {
	const [activeSection, setActiveSection] = useState("");

	const handleSectionClick = (sectionId: string) => {
		setActiveSection(sectionId);
	};
	const handleDownloadCVPublic = () => {
		const link = document.createElement("a");
		link.href = "/CVAndrea.pdf"; // Ruta del archivo en la carpeta public
		link.download = "Mi_CV.pdf"; // Nombre del archivo al descargar
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};
	
	return (
		<div className='h-6'>
			<label className='' htmlFor='hamburguer-menu'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width={24}
					height={24}
					className={`bg-none fill-none `}>
					<path
						className={` dark:stroke-blanco dark:disabled:stroke-[#9747ff] stroke-negro1 disabled:bg-purple9 `}
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M1 12h22M1 5h22M1 19h22'
					/>
				</svg>
			</label>
			<input type='checkbox' id='hamburguer-menu' className='sr-only peer' />
			<ul className='peer-checked:h-auto w-auto bg-mora2 absolute right-0 sm:top-[52px] md:top-[55px] h-0 flex overflow-hidden flex-col justify-center items-center gap-[3px] z-10     '>
				<Tabs activeSection={activeSection} onSectionClick={handleSectionClick}>
					inicio
				</Tabs>
				{/* <Tabs activeSection={activeSection} onSectionClick={handleSectionClick}>
					sobre mi
				</Tabs> */}
				<Tabs activeSection={activeSection} onSectionClick={handleSectionClick}>
					mis proyectos
				</Tabs>
				<Tabs activeSection={activeSection} onSectionClick={handleSectionClick}>
					contactame
				</Tabs>
				<Tabs activeSection={activeSection} onSectionClick={handleDownloadCVPublic}>
					descargar CV
				</Tabs>
			</ul>
		</div>
	);
};

export default HamburgerButton;