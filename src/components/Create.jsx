import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import { Modal } from './index';
import Cancel from '../assets/svgs/btns/cancel-dark.svg';

const Create = () => {
	const { state: imageUrl } = useLocation();
	const navigate = useNavigate();
	const inputRef = useRef(null);
	const { story } = useOutletContext();

	const [image, setImage] = useState(null);

	useEffect(() => {
		if (imageUrl) setImage(imageUrl);
	}, []);

	const uploadImg = (event) => {
		const selectedImageUrl = URL.createObjectURL(event.target.files[0]);
		setImage(selectedImageUrl);
	};

	return (
		<Modal>
			<div className='create'>
				<div className='create-header'>
					<img src={Cancel} alt='cancel' onClick={() => navigate(-1)} />
					<div className='create-header-title'>New Photo Post</div>
					<button type='button'>Share</button>
				</div>
				<div className='create-image-container'>
					{image && <img src={image} alt='post image' />}
					{!image && <button onClick={() => inputRef.current.click()}>Select from computer</button>}
					<input type='file' accept='img/*' onChange={uploadImg} ref={inputRef} />
				</div>
				<div className='create-details'>
					<div className='create-details-user'>
						<img src={story.by.imgUrl} alt='user image' />
						<div>{story.by.userName}</div>
					</div>
					<textarea placeholder='Add your description...'></textarea>
				</div>
			</div>
		</Modal>
	);
};

export default Create;
