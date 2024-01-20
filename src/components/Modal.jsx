import { useNavigate } from 'react-router-dom';
import Cancel from '../assets/svgs/btns/cancel.svg';

const Modal = ({ children }) => {
	const navigate = useNavigate();

	return (
		<div className='modal'>
			<img src={Cancel} alt='exit' className='cancel' onClick={() => navigate(-1)} />
			<div className='modal-container'>{children}</div>
		</div>
	);
};

export default Modal;
