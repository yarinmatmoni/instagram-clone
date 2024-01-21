import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/svgs/logo-instagram.svg';
import Create from '../assets/svgs/btns/create.svg';

const Header = () => {
	const inputRef = useRef(null);
	const navigate = useNavigate();

	const uploadImg = (event) => {
		navigate('/create', { state: event.target.files[0] });
	};

	return (
		<div className='header'>
			<img src={Logo} alt='logo' className='logo' />
			<img src={Create} alt='crate' onClick={() => inputRef.current.click()} />
			<input type='file' onChange={uploadImg} accept='img/*' id='imgUpload' ref={inputRef} />
		</div>
	);
};

export default Header;
