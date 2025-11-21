
import logo from "../../assets/img/logoandrea.png";





const Logo = () => {
	return (
		<div className='flex h-42'>
			<img src={logo.src} alt='logo' width={42} height={40} />
		</div>
	);
};

export default Logo;
