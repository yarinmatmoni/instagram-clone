import Logo from '../assets/svgs/logo-instagram.svg';
import Create from '../assets/svgs/btns/create.svg';

const header = () => {
	return (
		<div className='header'>
			<img src={Logo} alt='logo' className='logo' />
			<img src={Create} alt='crate' />
		</div>
	);
};

export default header;
