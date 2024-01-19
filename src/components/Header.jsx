import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { uploadService } from '../services/upload.service';
import Logo from '../assets/svgs/logo-instagram.svg';
import Create from '../assets/svgs/btns/create.svg';

const Header = () => {
	const inputRef = useRef(null);
	const navigate = useNavigate();

	const uploadImg = async (event) => {
		const { secure_url } = await uploadService.uploadImg(event);
		navigate('/create', { state: secure_url });
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
