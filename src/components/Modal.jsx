import { useNavigate } from 'react-router-dom';
import Cancel from '../assets/svgs/btns/cancel.svg';

const Modal = ({ children, onDeleteStory }) => {
	const navigate = useNavigate();

	const onCancel = () => {
		onDeleteStory();
		navigate(-1);
	};

	return (
		<div className='modal'>
			<img src={Cancel} alt='exit' className='cancel' onClick={onCancel} />
			<div className='modal-container'>{children}</div>
		</div>
	);
};

export default Modal;
